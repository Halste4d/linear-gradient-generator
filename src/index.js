function el(el){
  return document.querySelector(el)
}

function applyBackgroundGradient() { 
    el('body').style.background = `linear-gradient(to right, ${el('.firstColor').value}, ${el('.secondColor').value})`
  
    el('p').textContent = el('body').style.background + ";"; 
    el('#colorCode').textContent = `Color Code: ${el('.firstColor').value}; ${el('.secondColor').value};`
    el("#inputText").value = el("#cssCode").innerText;
} 

el('.firstColor').addEventListener("input", applyBackgroundGradient);   
el('.secondColor').addEventListener("input", applyBackgroundGradient);


function copyToClipboard() {
  var copyText = el("#cssCode").innerText;
  var copyText2 = el("#inputText");
  try {
    navigator.clipboard.writeText(copyText)
  } catch(e) {
    copyText2.select()
    document.execCommand('copy')
  }
} 
