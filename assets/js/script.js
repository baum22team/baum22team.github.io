var toggleON = false;

function toggleMenu() {
    var menu = document.getElementById("menuContainer");
    var menuButton = document.getElementById("menu-button")
    if (toggleON) {
      menuButton.classList = "fa fa-bars"
      toggleON = false;
      setTimeout(()=>{document.getElementById("menuContainer").style.display = "none"}, 505)
    } else {
      document.getElementById("menuContainer").style.display = ""
      menuButton.classList = "fa fa-xmark"
      toggleON = true;
    }

    menu.classList.toggle("displayNone")
    menu.classList.toggle("displayBlock")
  }



setTimeout(()=>{document.body.classList.remove("preload")}, 600)