import React from 'react'
import CaliberSite from './components/CaliberSite.jsx'
import ShopPage from './components/ShopPage.jsx'

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/shop") {
    return <ShopPage />;
  }

  return <CaliberSite />
}
