import caliberProductsCsvUrl from "../assets/CaliberProducts.csv?url";

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        value += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(value);
      value = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
      continue;
    }

    value += char;
  }

  if (value.length > 0 || row.length > 0) {
    row.push(value);
    rows.push(row);
  }

  return rows;
}

function rowsToObjects(rows) {
  if (rows.length === 0) return [];
  const [headers, ...dataRows] = rows;

  return dataRows
    .filter((row) => row.some((cell) => String(cell || "").trim() !== ""))
    .map((row) => {
      const record = {};
      headers.forEach((header, index) => {
        record[header] = row[index] ?? "";
      });
      return record;
    });
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function toNumber(value) {
  const normalized = String(value || "").replace(/[^0-9.-]/g, "").trim();
  if (!normalized) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function extractImageUrl(imagesField) {
  const value = String(imagesField || "").trim();
  if (!value) return "";
  const match = value.match(/https?:\/\/\S+/);
  return match ? match[0] : "";
}

function splitPipeList(value) {
  return String(value || "")
    .split("|")
    .map((item) => cleanText(item))
    .filter(Boolean);
}

function normalizeCategoryPath(path) {
  return splitPipeList(path)
    .flatMap((item) => item.split(">"))
    .map((item) => cleanText(item));
}

function isVariantLikeCategory(segment) {
  return (
    /^\d+(\.\d+)?X\d+(\.\d+)?/i.test(segment) ||
    /^\d+(\.\d+)?$/.test(segment) ||
    /^\d+(\.\d+)?"$/.test(segment)
  );
}

function choosePrimaryCategory(categoryField) {
  const categoryPaths = splitPipeList(categoryField);
  if (categoryPaths.length === 0) return "";
  const deepestPath = [...categoryPaths].sort((a, b) => b.length - a.length)[0];
  const segments = normalizeCategoryPath(deepestPath);
  const filteredSegments = segments.filter((segment) => !isVariantLikeCategory(segment));
  return filteredSegments[filteredSegments.length - 1] || segments[segments.length - 1] || "";
}

function normalizeProduct(row) {
  const categories = splitPipeList(row["tax:product_cat"]);
  const tags = splitPipeList(row["tax:product_tag"]);
  const description = cleanText(
    String(row.post_excerpt || "").trim() || String(row.post_content || "").replace(/<[^>]+>/g, " ")
  );

  return {
    id: String(row.ID || ""),
    title: cleanText(row.post_title),
    slug: cleanText(row.post_name),
    description,
    brand: cleanText(row["tax:product_brand"]),
    productType: cleanText(row["tax:product_type"]),
    stockStatus: cleanText(row.stock_status),
    sku: cleanText(row.sku),
    price: toNumber(row.regular_price),
    salePrice: toNumber(row.sale_price),
    imageUrl: extractImageUrl(row.images),
    productPageUrl: cleanText(row.product_page_url),
    categories,
    primaryCategory: choosePrimaryCategory(row["tax:product_cat"]),
    categorySegments: normalizeCategoryPath(row["tax:product_cat"]),
    tags,
  };
}

export async function loadCaliberProducts() {
  const response = await fetch(caliberProductsCsvUrl);
  if (!response.ok) {
    throw new Error(`Failed to load product feed: ${response.status}`);
  }

  const csvText = await response.text();
  const rows = parseCsv(csvText);
  const records = rowsToObjects(rows);

  return records
    .map(normalizeProduct)
    .filter((product) => product.title && product.productPageUrl);
}

export function buildShopFacets(products) {
  const categories = [...new Set(products.map((product) => product.primaryCategory).filter(Boolean))].sort();
  const brands = [...new Set(products.map((product) => product.brand).filter(Boolean))].sort();
  const tags = [...new Set(products.flatMap((product) => product.tags).filter(Boolean))].sort();

  return { categories, brands, tags };
}
