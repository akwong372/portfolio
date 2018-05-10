document.addEventListener("DOMContentLoaded", function(event) {
  let navBarButtons = {
    top: document.getElementById("top"),
    about: document.getElementById("about"),
    projects: document.getElementById("projects"),
    contact: document.getElementById("contact")
  };

  let navBar = {
    barsIcon: document.getElementById("barsIcon"),

    buttonList: [
      navBarButtons.top,
      navBarButtons.about,
      navBarButtons.projects,
      navBarButtons.contact
    ],
    showMenu: function() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav container-fluid") {
        x.className += " responsive container-fluid";
      } else {
        x.className = "topnav container-fluid";
      }
    },
    barAnimation: function(bars) {
      bars.classList.toggle("change");
    },

    topScroll: function() {
      navBarButtons.top.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    },

    aboutScroll: function() {
      navBarButtons.about.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    },

    projectsScroll: function() {
      navBarButtons.projects.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    },

    contactScroll: function() {
      navBarButtons.contact.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  };

  navBar.barsIcon.onclick = function() {
    navBar.barAnimation(this);
    navBar.showMenu();
  };
  
  navBarButtons.about.onclick = function(){
    alert("poop");
    this.className = "active";
    
  }
  
});