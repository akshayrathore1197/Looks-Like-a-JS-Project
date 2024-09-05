const qrSize = document.getElementById("qrSize");
const qrText = document.getElementById("qrText");
const colorDark = document.getElementById("colorDark");
const colorLight = document.getElementById("colorLight");
const qrCodeView = document.querySelector(".qrCodeView");
const downloadBtn = document.getElementById("downloadBtn");
const downloadQR = document.getElementById("downloadQR");

window.addEventListener("load", function () {
  for (let i = 1; i <= 10; i++) {
    let option = this.document.createElement("option");
    let hw = i * 100;
    option.text = hw + " x " + hw;
    option.value = hw;
    qrSize.appendChild(option);
  }
});

function generateQRCode() {
  qrCodeView.innerHTML = "";
  qrCodeView.style.display = "none";
  downloadBtn.style.display = "none";
  if (qrText.value != "") {
    new QRCode(qrCodeView, {
      text: qrText.value,
      height: qrSize.value,
      width: qrSize.value,
      colorDark: colorDark.value,
      colorLight: colorLight.value,
    });
    qrCodeView.style.display = "flex";
    downloadBtn.style.display = "block";
  }
}

function downloadQRCode() {
  let imgSrc = document.querySelector(".qrCodeView img");
  let a = document.createElement("a");
  a.href = imgSrc.getAttribute("src");
  a.download = "QRoutput.png";
  a.click();
}
