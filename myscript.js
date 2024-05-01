const elmColors = document.getElementsByName("color");
const colors = ["red", "blue"];

for (let i = 0; i < elmColors.length; i++) {
  elmColors[i].onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: setBackGroundColor,
        args: [colors[i]]
      });
    });
  }
}

function setBackGroundColor(color) {
  console.log("setBackGroundColor color=", color);
  document.body.style.backgroundColor = color;
  const input = document.querySelector('.gLFyf')
  input.value="Spark Automation";
  const btn = document.querySelector(".gNO89b")
  btn.click();
}