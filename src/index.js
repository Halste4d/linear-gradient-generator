function el(el){
  return document.querySelector(el)
}

function setEvent(ele){
  el(ele).addEventListener("input", applyBackgroundGradient);
}

function applyBackgroundGradient() { 
    el('body').style.background = `linear-gradient(to right, ${el('.firstColor').value}, ${el('.secondColor').value})`
    el('p').textContent = el('body').style.background + ";"; 
    el('#colorCode').textContent = `Color Code: ${el('.firstColor').value}; ${el('.secondColor').value};`
    el("#inputText").value = el("#cssCode").innerText;
}

function copyToClipboard() {
  const copyText = el("#cssCode").innerText,
  copyText2 = el("#inputText");
  try {
    navigator.clipboard.writeText(copyText)
  } catch(e) {
    copyText2.select()
    document.execCommand('copy')
  }
} 

setEvent('.firstColor')
setEvent('.secondColor')
