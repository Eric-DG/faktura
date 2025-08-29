import { useState } from "react";
import SideNav from "../components/SideNav.jsx";

export default function PriceList() {
  const [items, setItems] = useState([
    {
      id: 1,
      article_no: "1234567890",
      name: "Test Product A",
      in_price: 100,
      price: 150,
      unit: "pcs",
      in_stock: 25,
      description: "Test product A description",
    },
    {
      id: 2,
      article_no: "1234567891",
      name: "Test Product B",
      in_price: 200,
      price: 250,
      unit: "kg",
      in_stock: 50,
      description: "Test product B description",
    },
    {
      id: 3,
      article_no: "1234567892",
      name: "Test Product C",
      in_price: 300,
      price: 400,
      unit: "hr",
      in_stock: 12,
      description: "Test product C description",
    },
    {
      id: 4,
      article_no: "1234567893",
      name: "Test Product D",
      in_price: 120,
      price: 180,
      unit: "km/h",
      in_stock: 80,
      description: "Test product D description",
    },
    {
      id: 5,
      article_no: "1234567894",
      name: "Test Product E",
      in_price: 180,
      price: 210,
      unit: "ltr",
      in_stock: 100,
      description: "Test product E description",
    }
  ]);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const update = (id, patch) =>
    setItems((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const save = (row) => {
    // No backend call – just console log for now
    console.log("Saved row:", row);
  };

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
            onError={(e) => {
              e.currentTarget.src = "https://storage.123fakturere.no/public/flags/GB.png";
            }}
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
                <button className="action pill">
                  New Product <span className="dot green small" />
                </button>
                <button className="action pill">Print List</button>
                <button className="action pill">
                  Advanced mode <span className="dot blue small" />
                </button>
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
                    type="number"
                    value={row.in_price ?? ""}
                    onChange={(e) => update(row.id, { in_price: Number(e.target.value || 0) })}
                  />
                  <input
                    className="pill col-price"
                    type="number"
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
                    type="number"
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
