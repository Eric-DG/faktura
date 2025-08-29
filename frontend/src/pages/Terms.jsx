// src/pages/Terms.jsx
import { useEffect, useRef, useState } from "react";

// helper to make safe, stable anchor ids from headings (for TOC)
function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// --- Static terms content (frontend only) ---
const TERMS = {
  sv: {
    title: "Villkor",
    body: `
      <p><strong>GENOM ATT</strong> klicka på Fakturera Nu så väljer ni att registrera enligt den information som ni har lagt in och texten på registrerings sidan och villkoren här, och accepterar samtidigt villkoren här.</p>
      <p>Ni kan använda programmet GRATIS i 14 dagar.</p>
      <p>123 Fakturera är så lätt och självförklarande att chansen för att du kommer behöva support är minimal, men om du skulle behöva support, så är vi här för dig, med vårt kontor bemannat större delen av dygnet. Efter provperioden så fortsätter abonnemanget och kostar 99 kronor exkl. moms per månad, som faktureras årligen. Om du inte vill behålla programmet, så är det bara att avbryta provperioden genom att ge oss besked inom 14 dagar från registrering.</p>
      <p>Ni har självklart rätt att avsluta användningen av programmet utan kostnad, genom att ge oss besked per email inom 14 dagar från registrering, att ni inte vill fortsätta med programmet, och betalar då självklart inte heller något.</p>
      <p>Om vi inte inom 14 dagar från registrering mottar sådant besked från er, så kan ordern av naturliga orsaker inte ändras. Med registrering menas det datum och klockslag då ni valde att trycka på knappen Fakturera Nu.</p>
      <p>Fakturering sker för ett år i taget.</p>
      <p>Priset för 123 Fakturera (specialpris kr 99:- / ord. pris kr 159:- per månad) är för årsavgift Start för ett års användning av programmet.</p>
      <p>(Vid användning av specialpriset kr 99:- så räknas ett års perioden från registrering.)</p>
      <p>Alla priser är exkl. moms.</p>
      <p>Offert, Lagerstyrning, Medlemsfakturering, Fleranvändarversion och Engelsk utskrift är (eller kan vara) tilläggsmoduler som kan beställas senare.</p>
      <p>Förmedling, samt fakturering kan komma att ske från K-Soft Sverige AB, Box 2826, 187 28 Täby. Vi kan i framtiden välja att samarbeta med annat företag för t.ex. förmedling och fakturering. Kundförhållandet är dock självklart med oss. Betalningen görs till det företag som fakturan kommer från.</p>
      <p>Årsavgiften är löpande men om ni inte vill fortsätta att använda programmet, så är det bara att ge besked trettio dagar innan ingången av nästföljande ett års period.</p>
      <p>Introduktionspriset (kr 99:- per månad) är för årsavgift Start för det första året. Efter det första året faktureras ord. pris vilket för närvarande är, för årsavgift Start, ett hundra och femtinio kronor per månad, för årsavgift Fjärrstyrning, tre hundra kronor per månad och för årsavgift Pro, tre hundra och trettiotre kronor per månad. Efter ett år faktureras årsavgift Fjärrstyrning som standard men ni kan välja Start eller Pro genom att ge besked när som helst innan förfallodagen.</p>
      <p>Om ni väljer att behålla programmet genom att inte ge oss besked per email innan 14 dagar från registrering, om att ni inte vill fortsätta med programmet, så accepterar ni att ni kommer att betala fakturan för er beställning. Att inte betala fakturan eller sen betalning ger inte rätt till att annullera beställningen. Vi hjälper gärna att fiksa logo för er till självkostpris.</p>
      <p>Licens för användning av 123 Fakturera säljs självklart enligt gällande lagar.</p>
      <p>För att lättare kunna hjälpa er och ge er support samt för att följa lagarna, måste vi av naturliga orsaker spara er information.</p>
      <p>I samband med lagring av information så kräver lagen att vi ger er följande information:</p>
      <p>Om ni beställer som privatperson så har ni den ångerrätt som lagen fastställer. Er information sparas så att vi kan hjälpa er m.m. Vi kommer använda den för att kunna hjälpa er om ni behöver hjälp, följa lagarna ang. bokföring m.m. När det kommer uppgraderingar och liknande, kan vi komma att skicka er erbjudande och liknande om våra produkter och tjänster per email eller liknande. Ni kan också komma att bli kontaktad per email, post och telefon. Om ni inte vill bli kontaktad, bara skicka oss en email ang. det.</p>
      <p>Ni kan när som helst begära att inte få tillsänt information om uppgraderingar per email, brev eller liknande och vi kommer då självklart inte att göra det. Sådan begäran skickar ni till oss per email, brev eller liknande.</p>
      <p>Av naturliga orsaker måste vi spara, databehandla och flytta era data. Er information sparas tills vidare. Ni ger oss medgivande till att lagra, databehandla och flytta era data, samt att skicka er erbjudanden och liknande per email, brev och liknande, samt att informera andra om att ni är kund. Pga. sättet det fungerar på med programvara behöver medgivandet också ges till andra parter. Medgivandet ges därför till oss, samt till de företag och/eller person/personer som äger programvaran, källkod, hemsidan och liknande. Det ges också till nuvarande och framtida företag ägda och/eller kontrollerade av en eller flera av de som i dag äger och/eller kontrollerar oss. Det ges också till nuvarande och framtida personer (om några) som äger eller kommer till att äga programvaran, källkod, hemsidan och liknande. Detta både för nuvarande och framtida produkter och tjänster. Det ges också till ett annat företag, (som K-Soft Sverige AB), som vi kan använda för att skicka/sälja produkter, uppgraderingar och liknande, antingen genom att under förmedla programvaran eller på annat sätt.</p>
      <p>Ni har självklart rätt att begära tillgång till, rättelse eller radering av informationen vi har om er. Ni har också rätt att begära begränsning av behandlingen av era uppgifter, eller att invända mot behandling samt rätten till dataportabilitet. Ni har självklart rätt att klaga till tillsynsmyndighet. Mer juridisk info om oss hittar ni här. Det är lagarna i Irland som är gällande lagar. Det är självklart helt frivilligt att lägga er order. Vi använder självklart inte någon automatiserad profilering och inte heller något automatiserat beslutsfattande.</p>
      <p>Om ni vill kontakta oss, vänligen använd då informationen på denna hemsidan.</p>
      <p>Klicka på Fakturera Nu för att registrera i enlighet med den information som ni har lagt in och villkoren här. (Datum och tidpunkt för inläggningen läggs in automatiskt i våra register.)</p>
      <p>Vår erfarenhet är att våra kunder är mycket nöjda med sättet vi arbetar på och vi hoppas och tror att det också kommer att bli er upplevelse.</p>
      <p>Ha en trevlig dag!</p>
    `,
  },
  en: {
    title: "Terms & Conditions",
    body: `
      <p>English version coming soon.</p>
    `,
  },
};

export default function Terms() {
  const [lang, setLang] = useState("sv");       // default to Swedish to match screenshot
  const [open, setOpen] = useState(false);      // drawer state
  const [toc, setToc] = useState([]);           // [{id,text,level}]
  const bodyRef = useRef(null);

  // build table of contents after HTML is set/updated
  useEffect(() => {
    const root = bodyRef.current;
    if (!root) return;
    const headings = Array.from(root.querySelectorAll("h2, h3"));
    const items = headings.map((el) => {
      if (!el.id) el.id = slugify(el.textContent || "");
      return { id: el.id, text: el.textContent || "", level: el.tagName.toLowerCase() };
    });
    setToc(items);
  }, [lang]);

  // prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div
      className="terms-shell"
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
            alt="123Fakturera"
          />
          <span>123Fakturera</span>
        </div>

        {/* Language switcher */}
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

      {/* Hamburger to open drawer */}
      <button
        className="hamburger-btn"
        aria-label="Open menu"
        aria-controls="terms-drawer"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Drawer + Backdrop */}
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

      {/* Content card */}
      <main className="terms">
        <h1>{TERMS[lang].title}</h1>

        {/* Green CTA like the live page */}
        <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 8px" }}>
          <button
            className="pill"
            onClick={() => window.history.back()}
            style={{
              background: "#22c55e",
              color: "#fff",
              fontWeight: 700,
              padding: "12px 18px",
              borderColor: "#16a34a",
            }}
          >
            {lang === "sv" ? "Stäng och gå tillbaka" : "Close and go back"}
          </button>
        </div>

        <div
          ref={bodyRef}
          className="terms-body"
          dangerouslySetInnerHTML={{ __html: TERMS[lang].body }}
        />
      </main>
    </div>
  );
}
