const prices = {
  "台中西區": 29.5,
  "台中西屯區": 34.9,
  "台中南區": 29.8,
  "台中中區": 22
};

function calc() {
  const area = document.getElementById("area").value;
  const ping = parseFloat(document.getElementById("ping").value);

  const price = prices[area];

  if (!price) {
    document.getElementById("result").innerText = "查無此區資料";
    return;
  }

  const total = price * ping;
  document.getElementById("result").innerText =
    `每坪 ${price} 萬｜總價約 ${total.toFixed(2)} 萬`;
}

function toPing() {
  const m2 = document.getElementById("m2").value;
  const ping = m2 / 3.305785;
  alert("約 " + ping.toFixed(2) + " 坪");
}

function toM2() {
  const ping = document.getElementById("ping2").value;
  const m2 = ping * 3.305785;
  alert("約 " + m2.toFixed(2) + " 平方公尺");
}
