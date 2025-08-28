import { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../components/SideNav.jsx";

const API = import.meta.env.VITE_API_BASE_URL;

export default function PriceList() {
  const [items, setItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    axios.get(`${API}/pricelist`).then((r) => setItems(r.data));
  }, []);

  const update = (id, patch) =>
    setItems((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const save = (row) => axios.put(`${API}/pricelist/${row.id}`, row);

  return (
    <>
      {/* === Top Bar === */}
      <header className="bluebar">
        {/* Hamburger (tablet/mobile) */}
        <button className="hamburger mobile-only" onClick={() => setDrawerOpen(true)}>
          ☰
        </button>

        {/* Profile (desktop only) */}
        <div className="blue-left desktop-only">
          <div className="avatar avatar-sm">
            <svg className="avatar-person" viewBox="0 0 24 24">
              <circle cx="12" cy="8.5" r="3.5" />
              <path d="M4 19.5a8 8 0 0 1 16 0" />
            </svg>
          </div>
          <div className="who">
            <div className="name name--white">John Andre</div>
            <div className="org org--white">Storfjord AS</div>
          </div>
        </div>

        <div className="lang">
          <span className="lang-text">Norsk Bokmål</span>
          <img
            alt="NO"
            src="https://storage.123fakturere.no/public/flags/NO.png"
            onError={(e) => { e.currentTarget.src = "https://storage.123fakturere.no/public/flags/GB.png"; }}
          />
        </div>
      </header>

      {/* === Drawer (tablet/mobile) === */}
      {drawerOpen && (
        <>
          <div className="backdrop show" onClick={() => setDrawerOpen(false)} />
          <div className="drawer open">
            <div className="drawer-panel">
              <div className="drawer-header">
                Menu
                <button className="drawer-close" onClick={() => setDrawerOpen(false)}>×</button>
              </div>
              <div className="drawer-nav">
                <SideNav active="pricelist" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* === Layout === */}
      <div className="layout">
        {/* Sidenav (desktop only) */}
        <div className="desktop-only">
          <SideNav active="pricelist" />
        </div>

        <div className="main">
          <div className="content">
            {/* === Toolbar === */}
            <div className="toolbar">
              <div className="searches">
                <div className="search pill">
                  <input placeholder="Search Article No ..." />
                  <span className="glass">🔍</span>
                </div>
                <div className="search pill">
                  <input placeholder="Search Product ..." />
                  <span className="glass">🔍</span>
                </div>
              </div>

              <div className="actions">
                <button className="action pill">New Product <span className="dot green small" /></button>
                <button className="action pill">Print List</button>
                <button className="action pill">Advanced mode <span className="dot blue small" /></button>
              </div>
            </div>

            {/* === Table === */}
            <div className="pl-table">
              <div className="pl-header">
                  <span className="col-article"></span>
  <span className="col-article">Article No.</span>
  <span className="col-product">Product/Service</span>
  <span className="col-price">Price</span>

  <span className="col-unit">Unit</span>
    <span className="col-stock">In Stock</span>
      <span className="col-description">Description</span>
  <span className="col-kebab"></span>
</div>


              {items.map((row) => (
                <div key={row.id} className="pl-row" onBlur={() => save(row)}>
                  <input
                    className="pill col-article"
                    value={row.article_no || ""}
                    onChange={(e) => update(row.id, { article_no: e.target.value })}
                  />
                  <input
                    className="pill col-product"
                    value={row.name || ""}
                    onChange={(e) => update(row.id, { name: e.target.value })}
                  />
                  <input
                    className="pill col-inprice"
                    value={row.in_price ?? ""}
                    onChange={(e) => update(row.id, { in_price: Number(e.target.value || 0) })}
                  />
                  <input
                    className="pill col-price"
                    value={row.price ?? ""}
                    onChange={(e) => update(row.id, { price: Number(e.target.value || 0) })}
                  />
                  <input
                    className="pill col-unit"
                    value={row.unit || ""}
                    onChange={(e) => update(row.id, { unit: e.target.value })}
                  />
                  <input
                    className="pill col-stock"
                    value={row.in_stock ?? ""}
                    onChange={(e) => update(row.id, { in_stock: Number(e.target.value || 0) })}
                  />
                  <input
                    className="pill col-desc"
                    value={row.description || ""}
                    onChange={(e) => update(row.id, { description: e.target.value })}
                  />
                  <button className="kebab col-kebab" aria-label="row menu">…</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
