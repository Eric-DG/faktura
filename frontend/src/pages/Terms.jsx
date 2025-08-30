import { useEffect, useRef, useState } from "react";

// Helper to make safe anchor IDs from headings (for TOC)
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
      <p><strong>BY CLICKING</strong> "Invoice Now", you agree to register based on the information you've entered...</p>
      <p>You may use the program for FREE for 14 days.</p>
      <p>123 Fakturera is so easy and self-explanatory that the need for support is minimal. However, if you do need help, our support is available most of the day. After the trial, your subscription continues at SEK 99/month (excl. VAT), billed annually. If you don’t want to keep the program, just cancel within 14 days.</p>
      <p>You can terminate use at no cost by notifying us by email within 14 days of registration.</p>
      <p>If we do not receive such notice within 14 days, the order cannot be changed. "Registration" means the time/date you clicked "Invoice Now".</p>
      <p>Invoicing is done annually. The price (SEK 99/month promo or SEK 159/month regular) is for one year of use.</p>
      <p>Prices are excl. VAT. Optional modules (e.g. Quotation, Inventory, Multi-user, English printouts) may be added later.</p>
      <p>Billing may be handled by K-Soft Sverige AB, Box 2826, 187 28 Täby. We may work with other companies in the future, but your customer relationship is with us.</p>
      <p>Renewal is automatic unless you cancel 30 days before the next yearly term begins.</p>
      <p>The introductory price is for the first year. After that, current regular prices apply (e.g. SEK 159 for Start, 300 for Remote, 333 for Pro). Remote becomes default after 1 year, unless you notify us otherwise.</p>
      <p>If you keep the program (i.e. do not cancel within 14 days), you agree to pay the invoice. Non-payment or late payment does not cancel the order.</p>
      <p>License is sold under applicable law. To support you and comply with the law, we need to store your data.</p>
      <p>If you register as a private individual, you are entitled to statutory withdrawal rights.</p>
      <p>Your data is stored to help you, for accounting compliance, etc. We may contact you via email, mail, or phone. You can opt out anytime by contacting us.</p>
      <p>You have the right to access, correct, or delete your data. You can also request processing restrictions, object to processing, and request data portability. You also have the right to file a complaint with authorities.</p>
      <p>Irish law applies. Orders are voluntary. We do not use automated decision-making or profiling.</p>
      <p>To contact us, use the information on this website.</p>
      <p>Click "Invoice Now" to register according to your entered information and the terms here.</p>
      <p>We hope you'll be as satisfied as our other customers. Have a great day!</p>
    `,
  },
};

export default function Terms() {
  const [lang, setLang] = useState("sv");
  const [open, setOpen] = useState(false);
  const [toc, setToc] = useState([]);
  const bodyRef = useRef(null);

  useEffect(() => {
    const root = bodyRef.current;
    if (!root) return;
    const headings = Array.from(root.querySelectorAll("h2, h3"));
    const items = headings.map((el) => {
      if (!el.id) el.id = slugify(el.textContent || "");
      return {
        id: el.id,
        text: el.textContent || "",
        level: el.tagName.toLowerCase(),
      };
    });
    setToc(items);
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
          "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(https://storage.123fakturera.se/public/wallpapers/sverige43.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* Top Bar */}
     <header
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 48px",    
    background: "transparent",
    fontSize: "1.5rem",             
    fontWeight: 600,
    color: "#fff",
    minHeight: "80px",          
  }}
>

  {/* Left - Logo */}
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img
      src="https://storage.123fakturera.se/public/icons/diamond.png"
      alt="123Fakturera"
      style={{ height: "2rem", width: "auto" }}
    />
  </div>

  {/* Center - Navigation Links */}
  <nav
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "32px",
      flexGrow: 1,
    }}
  >
    <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Hem</a>
    <a href="/order" style={{ color: "#fff", textDecoration: "none" }}>Beställ</a>
    <a href="/customers" style={{ color: "#fff", textDecoration: "none" }}>Våra Kunder</a>
    <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>Om oss</a>
    <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Kontakta oss</a>
  </nav>

  {/* Right - Language Dropdown with Flag */}
  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
    <span>{lang === "sv" ? "Svenska" : "English"}</span>
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      style={{
        border: "none",
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 500,
        cursor: "pointer",
      }}
    >
      <option value="sv">🇸🇪</option>
      <option value="en">🇬🇧</option>
    </select>
  </div>
</header>






      {/* Backdrop */}
      <div
        className={`backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: open ? "block" : "none",
          zIndex: 1000,
        }}
      />

      {/* Terms Content */}
     {/* Page Title and Button Section */}
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
  <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "20px", color: "#fff" }}>
    {TERMS[lang].title}
  </h1>
  <button
    onClick={() => window.history.back()}
    style={{
      background: "#22c55e",
      color: "#fff",
      fontWeight: 600,
      fontSize: "1rem",
      padding: "12px 24px",
      border: "none",
      borderRadius: "9999px",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      minWidth: "220px",
      textAlign: "center",
    }}
  >
    {lang === "sv" ? "Stäng och gå tillbaka" : "Close and go back"}
  </button>
</div>

      <main className="terms" style={{ maxWidth: "800px", margin: "auto", padding: "32px", backgroundColor: "rgba(255,255,255,0.95)", color: "#000", borderRadius: "8px", marginTop: "40px" }}>
        


        <div
          ref={bodyRef}
          className="terms-body"
          dangerouslySetInnerHTML={{ __html: TERMS[lang].body }}
          style={{ lineHeight: 1.6 }}
        />
      </main>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>

  <button
    onClick={() => window.history.back()}
    style={{
      background: "#22c55e",
      color: "#fff",
      fontWeight: 600,
      fontSize: "1rem",
      padding: "12px 24px",
      border: "none",
      borderRadius: "9999px",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      minWidth: "220px",
      textAlign: "center",
      marginBottom: "40px",
    }}
  >
    {lang === "sv" ? "Stäng och gå tillbaka" : "Close and go back"}
  </button>
</div>
    </div>
  );
}
