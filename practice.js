const h1 = document.querySelector("div h1");

function handleTitleClick() {
  const activeClassName = "active";

  if (h1.className === activeClassName) {
    h1.className = "";
  } else {
    h1.className = activeClassName;
  }
}

h1.addEventListener("click", handleTitleClick);
