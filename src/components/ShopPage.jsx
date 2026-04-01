import React, { startTransition, useDeferredValue, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Facebook, Instagram } from "lucide-react";
import { buildShopFacets, loadCaliberProducts } from "../lib/caliberShop";
import companyLogo from "../assets/caliber_truck_logo.png";

const SHOP_PAGE_SIZE = 24;

function formatPrice(value) {
  if (value == null) return "View Product";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default function ShopPage() {
  const [shopProducts, setShopProducts] = useState([]);
  const [shopFacets, setShopFacets] = useState({ categories: [], brands: [], tags: [] });
  const [shopLoading, setShopLoading] = useState(true);
  const [shopError, setShopError] = useState("");
  const [shopSearch, setShopSearch] = useState("");
  const [shopCategory, setShopCategory] = useState("All Categories");
  const [shopBrand, setShopBrand] = useState("All Brands");
  const [shopSort, setShopSort] = useState("featured");
  const [shopOnlyInStock, setShopOnlyInStock] = useState(false);
  const [shopCurrentPage, setShopCurrentPage] = useState(1);
  const [prefillApplied, setPrefillApplied] = useState(false);
  const deferredShopSearch = useDeferredValue(shopSearch);

  useEffect(() => {
    let isMounted = true;

    async function initializeShop() {
      try {
        setShopLoading(true);
        setShopError("");

        const products = await loadCaliberProducts();
        const facets = buildShopFacets(products);

        if (!isMounted) return;

        startTransition(() => {
          setShopProducts(products);
          setShopFacets(facets);
        });
      } catch (error) {
        if (!isMounted) return;
        setShopError("We could not load the online shop right now. Please try again in a moment.");
      } finally {
        if (isMounted) {
          setShopLoading(false);
        }
      }
    }

    initializeShop();

    return () => {
      isMounted = false;
    };
  }, []);

  const normalizedShopSearch = deferredShopSearch.trim().toLowerCase();
  let filteredShopProducts = shopProducts.filter((product) => {
    const matchesSearch =
      !normalizedShopSearch ||
      product.title.toLowerCase().includes(normalizedShopSearch) ||
      product.brand.toLowerCase().includes(normalizedShopSearch) ||
      product.primaryCategory.toLowerCase().includes(normalizedShopSearch) ||
      product.sku.toLowerCase().includes(normalizedShopSearch);

    const matchesCategory = shopCategory === "All Categories" || product.primaryCategory === shopCategory;
    const matchesBrand = shopBrand === "All Brands" || product.brand === shopBrand;
    const matchesStock = !shopOnlyInStock || product.stockStatus === "instock";

    return matchesSearch && matchesCategory && matchesBrand && matchesStock;
  });

  if (shopSort === "price-low") {
    filteredShopProducts = [...filteredShopProducts].sort(
      (a, b) => (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER)
    );
  } else if (shopSort === "price-high") {
    filteredShopProducts = [...filteredShopProducts].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
  } else if (shopSort === "name") {
    filteredShopProducts = [...filteredShopProducts].sort((a, b) => a.title.localeCompare(b.title));
  }

  useEffect(() => {
    setShopCurrentPage(1);
  }, [deferredShopSearch, shopCategory, shopBrand, shopSort, shopOnlyInStock]);

  useEffect(() => {
    if (shopLoading || prefillApplied) return;

    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category")?.trim();
    const fallbackSearch = params.get("fallback")?.trim();
    const requestedSearch = params.get("q")?.trim();

    if (requestedSearch) {
      setShopSearch(requestedSearch);
    }

    if (requestedCategory) {
      const matchedCategory = shopFacets.categories.find(
        (category) => category.toLowerCase() === requestedCategory.toLowerCase()
      );

      if (matchedCategory) {
        setShopCategory(matchedCategory);
      } else if (fallbackSearch) {
        setShopSearch((prev) => prev || fallbackSearch);
      } else {
        setShopSearch((prev) => prev || requestedCategory);
      }
    }

    setPrefillApplied(true);
  }, [prefillApplied, shopFacets.categories, shopLoading]);

  const totalShopPages = Math.max(1, Math.ceil(filteredShopProducts.length / SHOP_PAGE_SIZE));
  const safeCurrentPage = Math.min(shopCurrentPage, totalShopPages);
  const pageStartIndex = (safeCurrentPage - 1) * SHOP_PAGE_SIZE;
  const visibleShopProducts = filteredShopProducts.slice(pageStartIndex, pageStartIndex + SHOP_PAGE_SIZE);
  const showingStart = filteredShopProducts.length === 0 ? 0 : pageStartIndex + 1;
  const showingEnd = pageStartIndex + visibleShopProducts.length;

  return (
    <div className="min-h-screen bg-[#f3f5f9] text-[#151922]">
      <div className="bg-[#8f0f18] text-white">
        <Container className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2 text-[11px] font-black uppercase tracking-[0.1em] sm:justify-between">
          <span>Caliber Performance LLC</span>
          <span className="hidden sm:inline text-white/70">|</span>
          <span>Online Storefront</span>
          <span className="hidden sm:inline text-white/70">|</span>
          <span>Punta Gorda, Florida</span>
        </Container>
      </div>

      <header className="border-b border-black/70 bg-[#111111] text-white">
        <Container className="flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-4">
            <span className="relative block h-[4.5rem] w-[6.5rem] overflow-hidden sm:h-[5rem] sm:w-[7.5rem]">
              <img
                src={companyLogo}
                alt="Caliber Performance"
                className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[45%] scale-[2.85] object-contain"
              />
            </span>
            <div className="hidden sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Caliber Online Store</p>
              <p className="mt-1 text-lg font-black uppercase">Browse All Products</p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hidden rounded-full bg-white p-2 text-[#202020] hover:bg-[#f2f2f2] sm:inline-flex"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden rounded-full bg-white p-2 text-[#202020] hover:bg-[#f2f2f2] sm:inline-flex"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back To Home
            </a>
          </div>
        </Container>
      </header>

      <section className="border-b border-[#d8dde6] bg-[radial-gradient(circle_at_top_left,_rgba(143,15,24,0.08),_transparent_30%),linear-gradient(180deg,_#ffffff,_#eef2f7)] py-14">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#687180]">Shop</p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-none text-[#111827] sm:text-5xl">
              Caliber Performance Store
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#546071]">
              Explore the full online catalog here, then jump directly to each WooCommerce product page when you are ready to purchase.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8dde6] bg-[radial-gradient(circle_at_top_left,_rgba(143,15,24,0.08),_transparent_28%),linear-gradient(180deg,_#ffffff,_#f5f7fb)] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
            <div className="relative">
              <div className="grid gap-8 xl:grid-cols-[320px_1fr]">
                <div className="rounded-[1.5rem] border border-[#d8dde6] bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#687180]">Store Filters</p>
                  <h2 className="mt-3 text-3xl font-black uppercase leading-none text-[#111827]">Find The Right Product</h2>
                  <p className="mt-4 text-sm leading-7 text-[#546071]">
                    Search by product title, brand, SKU, or browse by cleaner storefront categories from the CSV feed.
                  </p>

                  <div className="mt-6 grid gap-3">
                    <div>
                      <label htmlFor="shop-search" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">
                        Search
                      </label>
                      <input
                        id="shop-search"
                        value={shopSearch}
                        onChange={(e) => setShopSearch(e.target.value)}
                        placeholder="Search by product, brand, SKU..."
                        className="w-full rounded-xl border border-[#d8dde6] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#8f0f18]"
                      />
                    </div>

                    <div>
                      <label htmlFor="shop-category" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">
                        Category
                      </label>
                      <select
                        id="shop-category"
                        value={shopCategory}
                        onChange={(e) => setShopCategory(e.target.value)}
                        className="w-full rounded-xl border border-[#d8dde6] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#8f0f18]"
                      >
                        <option>All Categories</option>
                        {shopFacets.categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="shop-brand" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">
                        Brand
                      </label>
                      <select
                        id="shop-brand"
                        value={shopBrand}
                        onChange={(e) => setShopBrand(e.target.value)}
                        className="w-full rounded-xl border border-[#d8dde6] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#8f0f18]"
                      >
                        <option>All Brands</option>
                        {shopFacets.brands.map((brand) => (
                          <option key={brand} value={brand}>
                            {brand}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="shop-sort" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">
                        Sort By
                      </label>
                      <select
                        id="shop-sort"
                        value={shopSort}
                        onChange={(e) => setShopSort(e.target.value)}
                        className="w-full rounded-xl border border-[#d8dde6] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#8f0f18]"
                      >
                        <option value="featured">Featured</option>
                        <option value="name">Name</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                      </select>
                    </div>

                    <label className="mt-1 flex items-center gap-3 rounded-xl border border-[#d8dde6] bg-white px-4 py-3 text-sm font-semibold text-[#111827]">
                      <input
                        type="checkbox"
                        checked={shopOnlyInStock}
                        onChange={(e) => setShopOnlyInStock(e.target.checked)}
                        className="h-4 w-4 accent-[#8f0f18]"
                      />
                      Show in-stock items only
                    </label>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    <div className="rounded-2xl border border-[#d8dde6] bg-[#f5f7fb] p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">Catalog Size</p>
                      <p className="mt-2 text-2xl font-black uppercase text-[#111827]">{shopProducts.length.toLocaleString()}</p>
                    </div>
                    <div className="rounded-2xl border border-[#d8dde6] bg-[#f5f7fb] p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">Filtered Results</p>
                      <p className="mt-2 text-2xl font-black uppercase text-[#111827]">{filteredShopProducts.length.toLocaleString()}</p>
                    </div>
                    <div className="rounded-2xl border border-[#d8dde6] bg-[#f5f7fb] p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">Shop Brands</p>
                      <p className="mt-2 text-2xl font-black uppercase text-[#111827]">{shopFacets.brands.length.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#687180]">Storefront</p>
                      <h2 className="mt-2 text-3xl font-black uppercase text-[#111827]">Browse Products</h2>
                    </div>
                    <p className="text-sm font-semibold text-[#546071]">
                      Showing {showingStart.toLocaleString()}-{showingEnd.toLocaleString()} of {filteredShopProducts.length.toLocaleString()} products
                    </p>
                  </div>

                  {shopLoading ? (
                    <div className="grid min-h-[22rem] place-items-center rounded-[1.5rem] border border-[#d8dde6] bg-white/85 p-8 text-center shadow-sm">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#687180]">Loading</p>
                        <p className="mt-3 text-lg font-black uppercase text-[#111827]">Preparing the online catalog...</p>
                      </div>
                    </div>
                  ) : shopError ? (
                    <div className="grid min-h-[22rem] place-items-center rounded-[1.5rem] border border-[#e8b6bc] bg-[#fff5f6] p-8 text-center shadow-sm">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f0f18]">Shop Error</p>
                        <p className="mt-3 text-lg font-black uppercase text-[#111827]">{shopError}</p>
                      </div>
                    </div>
                  ) : filteredShopProducts.length === 0 ? (
                    <div className="grid min-h-[22rem] place-items-center rounded-[1.5rem] border border-[#d8dde6] bg-white/85 p-8 text-center shadow-sm">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#687180]">No Matches</p>
                        <p className="mt-3 text-lg font-black uppercase text-[#111827]">Try a different search or filter combination.</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {visibleShopProducts.map((product) => (
                          <a
                            key={product.id}
                            href={product.productPageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group overflow-hidden rounded-[1.35rem] border border-[#d8dde6] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                          >
                            <div className="relative aspect-square overflow-hidden bg-[#f2f4f7]">
                              {product.imageUrl ? (
                                <img
                                  src={product.imageUrl}
                                  alt={product.title}
                                  loading="lazy"
                                  className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
                                />
                              ) : (
                                <div className="grid h-full w-full place-items-center bg-[linear-gradient(135deg,_#161616,_#2a2a2a)] p-6 text-center">
                                  <span className="text-sm font-black uppercase tracking-[0.12em] text-white">
                                    {product.primaryCategory || product.brand || "Caliber Product"}
                                  </span>
                                </div>
                              )}
                              <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                                {product.primaryCategory ? (
                                  <span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#161616]">
                                    {product.primaryCategory}
                                  </span>
                                ) : null}
                                {product.stockStatus === "instock" ? (
                                  <span className="rounded-full bg-[#8f0f18] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                                    In Stock
                                  </span>
                                ) : null}
                              </div>
                            </div>

                            <div className="p-5">
                              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">
                                {product.brand || "Caliber Performance"}
                              </p>
                              <h3 className="mt-2 min-h-[3.5rem] text-lg font-black uppercase leading-tight text-[#111827]">
                                {product.title}
                              </h3>
                              <div className="mt-4 flex items-center justify-between gap-4">
                                <div>
                                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#687180]">Price</p>
                                  <p className="mt-1 text-2xl font-black uppercase text-[#8f0f18]">{formatPrice(product.price)}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition group-hover:bg-[#8f0f18]">
                                  View Product <ArrowRight className="h-4 w-4" />
                                </span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-4 border-t border-[#d8dde6] pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm font-semibold text-[#546071]">
                          Page {safeCurrentPage.toLocaleString()} of {totalShopPages.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setShopCurrentPage((prev) => Math.max(1, prev - 1))}
                            disabled={safeCurrentPage === 1}
                            className="inline-flex items-center gap-2 rounded-full border border-[#d8dde6] bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#111827] transition hover:border-[#8f0f18] hover:text-[#8f0f18] disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Prev
                          </button>
                          <div className="rounded-full bg-[#111111] px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-white">
                            {safeCurrentPage.toLocaleString()} / {totalShopPages.toLocaleString()}
                          </div>
                          <button
                            type="button"
                            onClick={() => setShopCurrentPage((prev) => Math.min(totalShopPages, prev + 1))}
                            disabled={safeCurrentPage === totalShopPages}
                            className="inline-flex items-center gap-2 rounded-full bg-[#8f0f18] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#720c14] disabled:cursor-not-allowed disabled:bg-[#c2c7d0]"
                          >
                            Next
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
