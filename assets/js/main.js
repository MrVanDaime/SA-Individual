var navlinks = document.querySelector("#nav-links");
var ul_produtos = document.querySelector("#ul_produtos");

function navbarCollapse() {
  if (navlinks.className === "nav-content") {
    navlinks.className += " responsive";
  } else {
    navlinks.className = "nav-content";
  }
}

function showProdutos() {
  if (ul_produtos.style.display == "none") {
  	ul_produtos.style.display = "block";
  } else {
      ul_produtos.style.display = "none";
  }
}

function goTo(quem) {
	if (quem == 'historia') {
		document.querySelector("#historia").scrollIntoView();
		navlinks.className = "nav-content";
		ul_produtos.style.display = "none";
	} else if (quem == 'footer') {
		document.querySelector("#footer").scrollIntoView();
		navlinks.className = "nav-content";
		ul_produtos.style.display = "none";
	} else if (quem == 'produtos') {
    document.querySelector("#produtos").scrollIntoView();
    navlinks.className = "nav-content";
    ul_produtos.style.display = "none";
  } else if (quem == 'produtos') {
    document.querySelector("#produtos").scrollIntoView();
    navlinks.className = "nav-content";
    ul_produtos.style.display = "none";
  }
}