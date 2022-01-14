document.addEventListener("DOMContentLoaded", (event) => {
  //the event occurred
  console.log("abemad");

  const svgElements = document.querySelectorAll("[data-name]");
  loadNav();
  loadLandingPage();
  loadPost();
  loadAbout();
  loadPortfolio();
  loadFooter();

  /* let theSVG; */
  /*  fetch("portfolio_template_01.svg")
    .then((svgdata) => svgdata.text())
    .then((svgtext) => {
      theSVG = svgtext;
      console.log(theSVG);
    }); */
});

function fadeInSections() {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in");
  });
  const faders = document.querySelectorAll(".fade-in");
  /* faders.forEach((fader) => {
    fader.classList.add("fade-in");
  }); */
  /* if (!faders) { */
  const appearOptions = {
    /* threshold: 0.5, */
    rootMargin: "0px 0px -500px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        console.log(entry.target.id);
        const allSVGgroups = document.querySelectorAll("[data-name]");
        allSVGgroups.forEach((g) => {
          if (g.dataset.name === entry.target.id) {
            console.log(g.dataset.name);
            g.style.display = "block";
            addAnimation(g);
          }
        });
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
}

function addAnimation(group) {
  console.log(group);
  let headlineBoxRight = document.querySelector(`[data-name="${group.dataset.name}"] [data-name="headline-box-right"]`);
  let headlineBoxLeft = document.querySelector(`[data-name="${group.dataset.name}"] [data-name="headline-box-left"]`);
  let backgroundBox = document.querySelector(`[data-name="${group.dataset.name}"] [data-name="background-box-text"]`);
  let headlineText = document.querySelector(`[data-name="${group.dataset.name}"] [data-name="headline-text"]`);
  let introText = document.querySelector(`[data-name="${group.dataset.name}"] [data-name="post-text"]`);

  backgroundBox.style.display = "none";
  introText.style.display = "none";
  headlineText.style.display = "none";

  if (headlineBoxRight) {
    console.log(headlineBoxLeft);
    headlineBoxRight.classList.add("swipeRight");
    headlineBoxRight.addEventListener("animationend", () => {
      headlineText.style.display = "block";
      backgroundBox.style.display = "block";
      backgroundBox.classList.add("swipeDown");
      backgroundBox.addEventListener("animationend", () => {
        introText.style.display = "block";
      });
    });
  } else if (headlineBoxLeft) {
    console.log(headlineBoxLeft);
    headlineBoxLeft.classList.add("swipeLeft");
    headlineBoxLeft.addEventListener("animationend", () => {
      headlineText.style.display = "block";
      backgroundBox.style.display = "block";
      backgroundBox.classList.add("swipeDown");
      backgroundBox.addEventListener("animationend", () => {
        introText.style.display = "block";
      });
    });
  }
}

function loadNav() {
  fetch("nav.svg")
    .then((svgdata) => svgdata.text())
    .then((svgtext) => {
      document.querySelector("header").innerHTML = svgtext;
      /* console.log(theSVG); */

      /*  window.onscroll = handleNavOpac(window.onscroll.event);
      function handleNavOpac(event) {
        console.log("tsadasd");
        console.log(event);
      }
      document.querySelector("body").addEventListener("onScrollDown", () => {
        console.log("scrollingdown?");
        document.querySelector("header").style.opacity = "10%";
      }); */

      document.querySelector(`[data-name="logo"]`).addEventListener("click", () => {
        document.querySelector(`#landing_page`).scrollIntoView({ behavior: "smooth" });
      });
      document.querySelector(`[data-name="portfolio-link"]`).addEventListener("click", () => {
        document.querySelector(`[data-name="portfolio"]`).scrollIntoView({ behavior: "smooth" });
      });
      document.querySelector(`[data-name="internship-link"]`).addEventListener("click", () => {
        document.querySelector(`[data-name="post"]`).scrollIntoView({ behavior: "smooth" });
      });
      document.querySelector(`[data-name="about-link"]`).addEventListener("click", () => {
        document.querySelector(`[data-name="about"]`).scrollIntoView({ behavior: "smooth" });
      });
    });
}

function loadLandingPage() {
  fetch("landingpage.svg")
    .then((svgdata) => svgdata.text())
    .then((svgtext) => {
      document.querySelector("#landing_page").innerHTML = svgtext;
      /* console.log(theSVG); */
      fadeInSections();
      landingPageAnimation(svgtext);
    });
}

function loadFooter() {
  fetch("footer.svg")
    .then((svgdata) => svgdata.text())
    .then((svgtext) => {
      document.querySelector("footer").innerHTML = svgtext;
    });
}

function landingPageAnimation() {
  const welcomeBoksHeadline = document.querySelector(`[data-name="welcome-box"]`);
  const welcomeBoksText = document.querySelectorAll(`[data-name="background-box-text"]`)[0];
  const welcomeBoksLogo = document.querySelector(`[data-name="landingpage-logo"]`);
  const welcomeText = document.querySelectorAll(`[data-name="post-text"]`)[0];
  const welcomeHeadline = document.querySelectorAll(`[data-name="headline-text"]`)[0];
  console.log(welcomeBoksHeadline);

  welcomeHeadline.style.display = "none";
  welcomeBoksText.style.display = "none";
  welcomeText.style.display = "none";

  /*  document.querySelector("#landing_page svg g").style.display = "block";
   */ /*  document.querySelector(".fade-in").addEventListener("animationend", () => {
    welcomeBoksHeadline.classList.add("swipeLeft");
  }); */
  /* welcomeBoksHeadline.classList.add("swipeLeft"); */

  welcomeBoksHeadline.addEventListener("animationend", () => {
    welcomeHeadline.style.display = "block";
    welcomeBoksText.style.animationName = "swipeToDown";
    welcomeBoksText.style.display = "block";
    welcomeBoksText.addEventListener("animationend", () => {
      welcomeText.style.display = "block";
    });
  });
}

function svgHandler() {
  const svgElements = document.querySelectorAll("[data-name]");
}

function loadPost() {
  fetch("post.svg")
    .then((svgdata) => svgdata.text())
    .then((svgtext) => {
      document.querySelector("#post").innerHTML = svgtext;
      document.querySelector(`[data-name="post"]`).style.display = "none";
      /*  document.querySelector(`[data-name="contact"]`).; */

      document.querySelectorAll(`[data-name="contact-link"]`).forEach((link) => {
        link.addEventListener("click", () => {
          document.querySelector(`[data-name="contact-section"]`).scrollIntoView({ behavior: "smooth" });
        });
      });

      fadeInSections();
      /* postAnimation(); */
    });
}

function postAnimation() {
  /* const headLine = document.querySelector("#post .headline-right");
  const postTextBox = document.querySelector("#post #content_background");
  headLine.style.display = "none";
  postTextBox.style.display = "none";
  document.querySelector(".fade-in:nth-of-type(1)").addEventListener("animationend", () => {
    headLine.classList.add("swipeRight");
    headLine.style.display = "block";
  });

  headLine.addEventListener("animationend", () => {
    postTextBox.classList.add("swipeDown");
    postTextBox.style.display = "block";
  }); */
}
function loadAbout() {
  fetch("about.svg")
    .then((svgdata) => svgdata.text())
    .then((svgtext) => {
      document.querySelector("#about").innerHTML = svgtext;
      fadeInSections();
      document.querySelector(`[data-name="in-icon"]`).addEventListener("click", () => {
        window.open("https://www.Linkedin.com/in/jonas-rossen");
      });
      document.querySelector(`[data-name="email-icon"]`).addEventListener("click", () => {
        window.open("mailto:jonas.rossen@live.dk");
      });
      document.querySelector(`[data-name="linkedin"]`).addEventListener("click", () => {
        window.open("https://www.Linkedin.com/in/jonas-rossen");
      });
      document.querySelector(`[data-name="email"]`).addEventListener("click", () => {
        window.open("mailto:jonas.rossen@live.dk");
      });

      document.querySelector(`[data-name="see-project-morrow"]`).addEventListener("click", () => {
        console.log("eow 1");
        window.open("https://johanrives.dk/morrow/");
      });

      document.querySelector(`[data-name="see-project-loud"]`).addEventListener("click", () => {
        window.open("https://johanrives.dk/loud/");
      });

      document.querySelector(`[data-name="see-project-apsconfig"]`).addEventListener("click", () => {
        window.open("https://apartment-plan-config.netlify.app/");
      });

      document.querySelector(`[data-name="see-project-mamaflora"]`).addEventListener("click", () => {
        window.open("https://mamaflora.netlify.app/index.html");
      });
    });
}

function loadPortfolio() {
  fetch("portfolio.svg")
    .then((svgdata) => svgdata.text())
    .then((svgtext) => {
      document.querySelector("#portfolio").innerHTML = svgtext;
      fadeInSections();
    });
}
