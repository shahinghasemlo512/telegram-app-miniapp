const CURRENCIES = {
  USD: { tgju_url: "https://www.tgju.org/profile/price_dollar_rl", alanchand_url: "https://alanchand.com/currencies-price/usd" },
  EUR: { tgju_url: "https://www.tgju.org/profile/price_eur", alanchand_url: "https://alanchand.com/currencies-price/eur" },
  AED: { tgju_url: "https://www.tgju.org/profile/price_aed", alanchand_url: "https://alanchand.com/currencies-price/aed" },
  USDT: { alanchand_url: "https://alanchand.com/crypto-price/usdt" },
  GOLD_OUNCE: { tgju_url: "https://www.tgju.org/profile/ons", alanchand_url: "https://alanchand.com/gold-price" },
  GOLD_24K: { tgju_url: "https://www.tgju.org/profile/geram24", alanchand_url: "https://alanchand.com/gold-price" },
  GOLD_18K: { tgju_url: "https://www.tgju.org/profile/geram18", alanchand_url: "https://alanchand.com/gold-price" },
  MESQAL_17K: { tgju_url: "https://www.tgju.org/profile/mesghal", alanchand_url: "https://alanchand.com/gold-price" },
  EMAMI_COIN: { tgju_url: "https://www.tgju.org/profile/sekee", alanchand_url: "https://alanchand.com/gold-price" },
  HALF_COIN: { tgju_url: "https://www.tgju.org/profile/nim", alanchand_url: "https://alanchand.com/gold-price" },
  QUARTER_COIN: { tgju_url: "https://www.tgju.org/profile/rob", alanchand_url: "https://alanchand.com/gold-price" },
  GRAM_COIN: { tgju_url: "https://www.tgju.org/profile/gerami", alanchand_url: "https://alanchand.com/gold-price" },
};

const SELECTORS = {
  USD: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.price-buy, span.price", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  EUR: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.price-buy, span.price", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  AED: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.price-buy, span.price", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  USDT: { alanchand: { price_selector: "div.price-buy, span.usdt-price", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  GOLD_OUNCE: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})*(?:\\.\\d{1,2})?)" }, alanchand: { price_selector: "div.gold-price-ons, a[href*='usd_xau'] div.cell:nth-child(1)", pattern: "(\\d{1,3}(?:[,.]\\d{3})*(?:\\.\\d{1,2})?)" } },
  GOLD_24K: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.gold-price-24k, a[href*='24ayar'] div.cell:nth-child(1)", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  GOLD_18K: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.gold-price-18k, a[href*='18ayar'] div.cell:nth-child(1)", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  MESQAL_17K: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.gold-price-mesghal, a[href*='abshodeh'] div.cell:nth-child(1)", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  EMAMI_COIN: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.gold-price-emami, a[href*='emami'] div.cell:nth-child(1)", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  HALF_COIN: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.gold-price-nim, a[href*='nim'] div.cell:nth-child(1)", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  QUARTER_COIN: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.gold-price-rob, a[href*='rob'] div.cell:nth-child(1)", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
  GRAM_COIN: { tgju: { price_selector: "span[data-col='info.last_trade.PDrCotVal']", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" }, alanchand: { price_selector: "div.gold-price-sekeb, a[href*='sekeb'] div.cell", pattern: "(\\d{1,3}(?:[,.]\\d{3})+)\\s*تومان" } },
};

const NAMES = {
  USD: "دلار", EUR: "یورو", AED: "درهم", USDT: "تتر",
  GOLD_24K: "طلا ۲۴ عیار", GOLD_18K: "طلا ۱۸ عیار",
  MESQAL_17K: "مظنه مثقال", EMAMI_COIN: "سکه امامی",
  HALF_COIN: "نیم سکه", QUARTER_COIN: "ربع سکه", GRAM_COIN: "سکه گرمی",
  GOLD_OUNCE: "انس طلا"
};

const FLAGS = {
  USD: "🇺🇸", EUR: "🇪🇺", AED: "🇦🇪", USDT: "💸",
  GOLD_24K: "🌟", GOLD_18K: "✨", MESQAL_17K: "⚖️",
  EMAMI_COIN: "🔶", HALF_COIN: "🔷", QUARTER_COIN: "🔹",
  GRAM_COIN: "🔺", GOLD_OUNCE: "🌎"
};

const MIN_VALID_PRICE = 1000;
const PROXY_URL = "http://localhost:3000/proxy?url="; // آدرس سرور پراکسی

let previousPrices = JSON.parse(localStorage.getItem("prices")) || {};

async function fetchPrice(currency) {
  const config = SELECTORS[currency];
  const urls = [CURRENCIES[currency].tgju_url, CURRENCIES[currency].alanchand_url].filter(Boolean);

  for (const url of urls) {
    const source = url.includes("tgju") ? "tgju" : "alanchand";
    const { price_selector, pattern } = config[source];
    try {
      const proxyUrl = `${PROXY_URL}${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      });
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      let priceText = null;

      for (const sel of price_selector.split(",")) {
        const element = doc.querySelector(sel.trim());
        if (element) {
          priceText = element.textContent.trim();
          break;
        }
      }

      if (!priceText) {
        const match = text.match(new RegExp(pattern));
        if (match) priceText = match[1];
      }

      if (priceText) {
        let price = parseFloat(priceText.replace(/[^\d.]/g, ""));
        if (source === "tgju" && currency !== "GOLD_OUNCE") price /= 10;
        if (currency !== "GOLD_OUNCE" && price < MIN_VALID_PRICE) continue;
        return price;
      }
    } catch (error) {
      console.error(`خطا در دریافت ${currency} از ${source}:`, error);
    }
  }
  return null;
}

function calculateIntrinsicValues(prices) {
  const intrinsic = {};
  const a = prices.GOLD_OUNCE;
  const b = prices.USD;
  if (a && b) {
    const c = a * b;
    intrinsic.GOLD_24K = c / 31.1;
    intrinsic.GOLD_18K = c / 41.47;
    intrinsic.MESQAL_17K = c / 9.57;
    intrinsic.EMAMI_COIN = c / 4.25;
    intrinsic.HALF_COIN = c / 8.5;
    intrinsic.QUARTER_COIN = c / 17;
    intrinsic.GRAM_COIN = c / 34;
    intrinsic.USD = prices.USD;
    intrinsic.USDT = prices.USDT;
  }
  return intrinsic;
}

function getStatusIndicator(currentPrice, previousPrice, currency) {
  if (!currentPrice || !previousPrice) return "➖";
  const threshold = currency === "GOLD_OUNCE" ? 0.1 : 1000.0;
  const difference = Math.abs(currentPrice - previousPrice);
  if (difference > threshold) {
    return currentPrice > previousPrice ? "🟢" : "🔴";
  }
  return "➖";
}

function getCoinSignal(prices, intrinsic) {
  const marketCoin = prices.EMAMI_COIN;
  const intrinsicCoin = intrinsic.EMAMI_COIN;
  const marketGold18k = prices.GOLD_18K;
  const intrinsicGold18k = intrinsic.GOLD_18K;

  if (!marketCoin || !intrinsicCoin || !marketGold18k || !intrinsicGold18k) {
    return "⚠️ سیگنال در دسترس نیست";
  }

  const ratio = marketCoin / marketGold18k;
  if (ratio <= 10.5) return "🟢 خرید سکه";
  if (ratio < 11.5) return "⚪️ متعادل";
  return "🟢 خرید طلای آب‌شده";
}

function getUsdUsdtSignal(prices) {
  const usdPrice = prices.USD;
  const usdtPrice = prices.USDT;

  if (!usdPrice || !usdtPrice) return "⚠️ سیگنال در دسترس نیست";
  if (usdtPrice < usdPrice) return "🟢 تتر";
  if (usdPrice >= usdtPrice + 1000) return "🟢 دلار";
  return "⚪️ متعادل";
}

async function fetchPrices() {
  const container = document.getElementById("prices");
  container.innerHTML = "<div class='loading'>در حال بارگذاری...</div>";

  const prices = {};
  for (const currency of Object.keys(CURRENCIES)) {
    prices[currency] = await fetchPrice(currency);
  }

  if (Object.values(prices).every(v => v === null)) {
    container.innerHTML = "<div class='loading'>خطا در دریافت قیمت‌ها. لطفاً بعداً تلاش کنید.</div>";
    return;
  }

  const intrinsic = calculateIntrinsicValues(prices);
  previousPrices = JSON.parse(localStorage.getItem("prices")) || {};

  container.innerHTML = "";
  for (const currency of ["USD", "EUR", "AED", "USDT", "GOLD_24K", "GOLD_18K", "MESQAL_17K", "EMAMI_COIN", "HALF_COIN", "QUARTER_COIN", "GRAM_COIN", "GOLD_OUNCE"]) {
    const price = prices[currency];
    const previousPrice = previousPrices[currency];
    const indicator = getStatusIndicator(price, previousPrice, currency);
    const arrow = indicator === "🟢" ? " ↗️" : indicator === "🔴" ? " ↘️" : "";
    const div = document.createElement("div");
    div.className = "card";

    let content = `<div class="name">${FLAGS[currency]} ${NAMES[currency]}</div>`;
    if (price) {
      const formatPrice = currency === "GOLD_OUNCE" ? price.toFixed(2) : Math.floor(price).toLocaleString("fa-IR");
      content += `<div class="value">${formatPrice} ${currency === "GOLD_OUNCE" ? "دلار" : "تومان"}${arrow}</div>`;
      content += `<div class="trend ${indicator === "🔴" ? "down" : ""}">${indicator}</div>`;
      if (intrinsic[currency]) {
        const bubbleValue = price - intrinsic[currency];
        const bubblePercent = intrinsic[currency] ? (bubbleValue / intrinsic[currency]) * 100 : 0;
        content += `<div class="bubble">ارزش واقعی: ${Math.floor(intrinsic[currency]).toLocaleString("fa-IR")} تومان<br>حباب: ${Math.floor(bubbleValue).toLocaleString("fa-IR")} تومان (${bubblePercent.toFixed(2)}%)</div>`;
      }
    } else {
      content += `<div class="value">خطا در دریافت</div><div class="trend">---</div>`;
    }
    div.innerHTML = content;
    container.appendChild(div);

    if (price) previousPrices[currency] = price;
  }

  localStorage.setItem("prices", JSON.stringify(previousPrices));
  updateSignals(prices, intrinsic);
  updateChart(prices);
}

function updateSignals(prices, intrinsic) {
  document.getElementById("coin-signal").textContent = `📈 سیگنال سکه: ${getCoinSignal(prices, intrinsic)}`;
  document.getElementById("usd-usdt-signal").textContent = `📉 سیگنال ارز: ${getUsdUsdtSignal(prices)}`;
}

function updateChart(prices) {
  const ctx = document.getElementById("priceChart").getContext("2d");
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const datasets = Object.keys(prices).filter(c => prices[c]).map((currency, index) => ({
    label: NAMES[currency],
    data: Array(24).fill(prices[currency]),
    borderColor: ["#007aff", "#34c759", "#ff9500", "#ff2d55", "#5856d6", "#ffcc00", "#00b7eb", "#ff3b30", "#8e8e93", "#ff66cc", "#00cc99", "#9900cc"][index],
    fill: false,
    tension: 0.4,
  }));

  if (window.priceChart) window.priceChart.destroy();
  window.priceChart = new Chart(ctx, {
    type: "line",
    data: { labels, datasets },
    options: {
      responsive: true,
      scales: {
        x: { display: true, title: { display: true, text: "ساعت" } },
        y: { display: true, title: { display: true, text: "قیمت (ریال)" } },
      },
    },
  });
}

// تغییر تم
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  document.getElementById("theme-toggle").textContent = document.body.classList.contains("light-theme") ? "🌙" : "☀";
});

// بارگذاری تم ذخیره‌شده
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  document.getElementById("theme-toggle").textContent = "🌙";
}

// کشیدن برای به‌روزرسانی
try {
  PullToRefresh.init({
    mainElement: ".container",
    onRefresh() {
      fetchPrices();
    },
  });
} catch (error) {
  console.error("خطا در مقداردهی اولیه PullToRefresh:", error);
}

// به‌روزرسانی خودکار هر ۵ دقیقه
setInterval(fetchPrices, 5 * 60 * 1000);

// آماده‌سازی Telegram Web App
if (typeof Telegram !== "undefined" && Telegram.WebApp) {
  Telegram.WebApp.ready();
  Telegram.WebApp.expand();
}

fetchPrices();
