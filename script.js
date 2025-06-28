
async function fetchPrices() {
  const prices = [
    { name: "دلار", url: "https://www.tgju.org/profile/price_dollar_rl" },
    { name: "طلا ۱۸ عیار", url: "https://www.tgju.org/profile/geram18" },
    { name: "سکه امامی", url: "https://www.tgju.org/profile/sekee" },
  ];

  const container = document.getElementById("prices");
  container.innerHTML = "";

  for (const item of prices) {
    try {
      const response = await fetch(item.url);
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      const span = doc.querySelector("span[data-col='info.last_trade.PDrCotVal']");
      const value = span ? span.textContent.trim() : "نامشخص";

      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<div><strong>${item.name}</strong></div><div class="value">${value}</div>`;
      container.appendChild(div);
    } catch (error) {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<div><strong>${item.name}</strong></div><div class="value">خطا در دریافت</div>`;
      container.appendChild(div);
    }
  }
}

Telegram.WebApp.ready();
Telegram.WebApp.expand();
fetchPrices();
