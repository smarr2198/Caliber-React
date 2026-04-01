import React from 'react'
import CaliberSite from './components/CaliberSite.jsx'
import ShopPage from './components/ShopPage.jsx'

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const page = new URLSearchParams(window.location.search).get("page");

  if (pathname === "/shop" || page === "shop") {
    return <ShopPage />;
  }

  return <CaliberSite />
}
