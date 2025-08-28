import { useEffect, useRef, useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function Terms() {
  const [lang, setLang] = useState("en");
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [toc, setToc] = useState([]); // table of contents
  const bodyRef = useRef(null);

  // fetch terms for the selected language
  useEffect(() => {
    axios.get(`${API}/terms`, { params: { lang } }).then((r) => setData(r.data));
  }, [lang]);

  // build TOC from H2/H3 after HTML is rendered
  useEffect(() => {
    if (!data) return;
    // wait until the HTML is in the DOM
    requestAnimationFrame(() => {
      const root = bodyRef.current;
      if (!root) return;

      const headings = Array.from(root.querySelectorAll("h2, h3"));
      const items = headings.map((h) => {
        if (!h.id) h.id = slugify(h.textContent);
        return { id: h.id, text: h.textContent, level: h.tagName.toLowerCase() };
      });
      setToc(items);
    });
  }, [data]);

  // prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <div
      className="terms-shell"
      onKeyDown={onKeyDown}
      style={{
        backgroundImage:
          "url(https://storage.123fakturera.se/public/wallpapers/sverige43.jpg)",
      }}
    >
      {/* Top bar */}
      <header className="topbar">
        <div className="brand">
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="logo"
          />
          <span>123Fakturera</span>
        </div>
        <div className="flags">
          <img
            onClick={() => setLang("sv")}
            src="https://storage.123fakturere.no/public/flags/SE.png"
            alt="Svenska"
            title="Svenska"
            role="button"
            tabIndex={0}
          />
          <img
            onClick={() => setLang("en")}
            src="https://storage.123fakturere.no/public/flags/GB.png"
            alt="English"
            title="English"
            role="button"
            tabIndex={0}
          />
        </div>
      </header>

      {/* Hamburger button */}
      <button
        className="hamburger-btn"
        aria-label="Open menu"
        aria-controls="terms-drawer"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Drawer + backdrop */}
      <aside
        id="terms-drawer"
        className={`drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer-panel">
          <div className="drawer-header">
            <span>Menu</span>
            <button
              className="drawer-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="drawer-nav">
            {toc.length === 0 ? (
              <button onClick={() => setOpen(false)} className="drawer-link">
                Close
              </button>
            ) : (
              toc.map((h) => (
                <button
                  key={h.id}
                  className={`drawer-link ${h.level === "h3" ? "lvl-2" : ""}`}
                  onClick={() => goTo(h.id)}
                >
                  {h.text}
                </button>
              ))
            )}
          </nav>
        </div>
      </aside>
      <div
        className={`backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Content */}
      <main className="terms">
        <h1>{data?.title}</h1>
        <div
          ref={bodyRef}
          className="terms-body"
          dangerouslySetInnerHTML={{ __html: data?.body || "" }}
        />
      </main>
    </div>
  );
}
