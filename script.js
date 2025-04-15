function changeText() {
    const heading = document.getElementById("main-heading");
    heading.textContent = "JavaScript is Awesome!";
  }
  
  function changeStyle() {
    const info = document.getElementById("info-text");
    info.style.color = "white";
    info.style.backgroundColor = "teal";
    info.style.padding = "10px";
    info.style.borderRadius = "8px";
  }
  
  function addElement() {
    const list = document.getElementById("dynamic-list");
    const newItem = document.createElement("li");
    newItem.textContent = "A new list item!";
    list.appendChild(newItem);
  }
  
  function removeElement() {
    const list = document.getElementById("dynamic-list");
    if (list.lastChild) {
      list.removeChild(list.lastChild);
    }
  }
  