const JSONBefore = document.getElementById("JSONBefore");
const JSONAfter = document.getElementById("JSONAfter");
const formatBtn = document.getElementById("formatBtn");
const minifyBtn = document.getElementById("minifyBtn");
const toaster = document.getElementById("toaster");

JSONBefore.addEventListener("input", () => {
 
  if (JSONBefore.value.trim() !== "") {
    formatBtn.disabled = false;
    minifyBtn.disabled = false;
  } else {
    formatBtn.disabled = true;
    minifyBtn.disabled = true;
    JSONBefore.style.borderColor = "#888"; 
    JSONAfter.value = ""; 
  }
});

function ValidateJSON() {
  try {
    if (JSONBefore.value.trim() === "") {
      JSONAfter.value = "Please Enter JSON Value";
      JSONBefore.style.borderColor = "red";
      // alert("Please Enter JSON Value");
      return false;
    }

    JSON.parse(JSONBefore.value);
    JSONAfter.value = "Validation Successful";
    JSONBefore.style.borderColor = "#007a5a"; 
    return true;
  } catch (e) {
    JSONAfter.value = "Invalid JSON: " + e.message;
    JSONBefore.style.borderColor = "red"; 
    // alert("Invalid JSON: " + e.message);
    return false;
  }
}

function FormatBeautifyJSON() {
  if (ValidateJSON()) {
    let parseJSON = JSON.parse(JSONBefore.value);
    let JSONFormatValue = JSON.stringify(parseJSON, undefined, 4);
    JSONAfter.value = JSONFormatValue;
  }
}

function MinifyCompactJSON() {
  if (ValidateJSON()) {
    let parseJSON = JSON.parse(JSONBefore.value);
    let JSONFormatValue = JSON.stringify(parseJSON);
    JSONAfter.value = JSONFormatValue;
  }
}

function copyToClipboard() {
  JSONAfter.select();
  document.execCommand("copy");

  
  showToaster();
}

function showToaster() {
  toaster.classList.add("visible");

  setTimeout(() => {
    toaster.classList.remove("visible");
  }, 2000);
}
