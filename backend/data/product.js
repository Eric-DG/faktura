export const products = Array.from({ length: 22 }, (_, i) => {
    const units = ["kilometers/hour", "pcs", "kg", "hr"];
    return {
      article_no: `1234567${890 + i}`,
      name:
        i === 0
          ? "This is a test product with fifty characters this!"
          : `Random product ${i}`,
      in_price: 900500 + i,
      price: 1500800 + i,
      unit: units[i % units.length],
      in_stock: 1500800 + i,
      description: "This is the description with fifty characters this",
    };
  });
  