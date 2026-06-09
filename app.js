const data = {
  "台中西區": { low: 27, mid: 29.5, high: 33 },
  "台中西屯區": { low: 32, mid: 34.9, high: 38 },
  "台中南區": { low: 27, mid: 29.8, high: 32 },
  "台中中區": { low: 20, mid: 22, high: 25 }
};

// 🧠 主估價功能（專業版）
function calc() {
  const area = document.getElementById("area").value.trim();
  const ping = parseFloat(document.getElementById("ping").value);

  const resultBox = document.getElementById("result");

  if (!area || !ping) {
    resultBox.innerHTML = "⚠️ 請輸入完整資料";
    return;
  }

  const d = data[area];

  if (!d) {
    resultBox.innerHTML = "❌ 查無此區資料（可擴充資料庫）";
    return;
  }

  const low = d.low * ping;
  const mid = d.mid * ping;
  const high = d.high * ping;

  resultBox.innerHTML = `
    <div class="card">
      <h3>${area}</h3>
      <p>坪數：${ping} 坪</p>
      <hr>
      <p>🔵 保守估值：${low.toFixed(1)} 萬</p>
      <p>🟡 一般行情：${mid.toFixed(1)} 萬</p>
      <p>🔴 高價行情：${high.toFixed(1)} 萬</p>
    </div>
  `;
}

// 🧮 坪 → m²
function toPing() {
  const m2 = parseFloat(document.getElementById("m2").value);
  if (!m2) return alert("請輸入平方公尺");

  const ping = m2 / 3.305785;
  alert(`約 ${ping.toFixed(2)} 坪`);
}

// 🧮 m² → 坪
function toM2() {
  const ping = parseFloat(document.getElementById("ping2").value);
  if (!ping) return alert("請輸入坪數");

  const m2 = ping * 3.305785;
  alert(`約 ${m2.toFixed(2)} 平方公尺`);
}
