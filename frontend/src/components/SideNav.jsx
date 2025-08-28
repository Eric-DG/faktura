import React from "react";

/* inline icon set (matches the mock’s thin-stroke look) */
function Icon({ name }) {
  const common = {
    width: 18, height: 18, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 2,
    strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case "invoices":     return (<svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z"/><path d="M8 10h8M8 14h8"/></svg>);
    case "customers":    return (<svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>);
    case "business":     return (<svg {...common}><path d="M3 21h18M3 10h18M7 21V3h10v18"/></svg>);
    case "journal":      return (<svg {...common}><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20"/><path d="M20 2H6.5A2.5 2.5 0 0 0 4 4.5v15"/><path d="M8 6h9M8 10h9M8 14h6"/></svg>);
    case "pricelist":    return (<svg {...common}><path d="M20 13V7a2 2 0 0 0-2-2H7l-4 4v10a2 2 0 0 0 2 2h7"/><path d="M7 7v4H3"/><path d="M15 17l2 2 4-4"/></svg>);
    case "multi":        return (<svg {...common}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>);
    case "unpaid":       return (<svg {...common}><circle cx="12" cy="12" r="10"/><path d="M12 8v5M12 16h.01"/></svg>);
    case "offer":        return (<svg {...common}><path d="M20 12V7a2 2 0 0 0-2-2H8l-4 4v11a2 2 0 0 0 2 2h8"/><path d="M14 17l2 2 4-4"/></svg>);
    case "inventory":    return (<svg {...common}><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 17l9 4 9-4"/><path d="M3 12l9 4 9-4"/></svg>);
    case "member":       return (<svg {...common}><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h7M7 12h10"/><circle cx="17" cy="8" r="1"/></svg>);
    case "importexport": return (<svg {...common}><path d="M8 19V5M8 5l-3 3M8 5l3 3"/><path d="M16 5v14M16 19l3-3M16 19l-3-3"/></svg>);
    case "logout":       return (<svg {...common}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>);
    default:             return null;
  }
}

/**
 * SideNav — left menu under the blue header
 * @param {string} active key of the active item (e.g. 'pricelist')
 * @param {(key:string)=>void} onSelect optional click handler
 */
export default function SideNav({ active = "pricelist", onSelect }) {
  const items = [
    { key: "invoices",     label: "Invoices",         icon: "invoices" },
    { key: "customers",    label: "Customers",        icon: "customers" },
    { key: "business",     label: "My Business",      icon: "business" },
    { key: "journal",      label: "Invoice Journal",  icon: "journal" },
    { key: "pricelist",    label: "Price List",       icon: "pricelist" },
    { key: "multi",        label: "Multiple Invoicing", icon: "multi" },
    { key: "unpaid",       label: "Unpaid Invoices",  icon: "unpaid" },
    { key: "offer",        label: "Offer",            icon: "offer" },
    { key: "inventory",    label: "Inventory Control",icon: "inventory", disabled: true },
    { key: "member",       label: "Member Invoicing", icon: "member",    disabled: true },
    { key: "importexport", label: "Import/Export",    icon: "importexport" },
    { key: "logout",       label: "Log out",          icon: "logout" },
  ];

  return (
    <aside className="sidenav desktop-only">
      <div className="menu-heading">Menu</div>
      <nav className="navlist">
        {items.map(it => {
          const cls = ["navitem"];
          if (it.disabled) cls.push("disabled");
          if (it.key === active) cls.push("active");
          return (
            <a
              key={it.key}
              className={cls.join(" ")}
              onClick={() => onSelect && !it.disabled && onSelect(it.key)}
            >
              <span className="mi"><Icon name={it.icon} /></span>
              {it.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
