(function () {
  "use strict";

  // Responsive Navbar
  const navbar = document.querySelector(".navbar"),
    navbarToggler = navbar.querySelector("[data-web-toggle=navbar-collapse]");

  navbarToggler.addEventListener("click", function () {
    const dataTarget = this.dataset.webTarget,
      targetElement = document.getElementById(dataTarget),
      isExpanded = this.ariaExpanded === "true";

    if (!targetElement) {
      return;
    }

    navbar.classList.toggle("menuShow");
    this.ariaExpanded = !isExpanded;
    this.innerHTML = navbar.classList.contains("menuShow")
      ? '<i class="lni lni-close"></i>'
      : '<i class="lni lni-menu"></i>';
  });

  // Sticky navbar
  function toggleStickyNavbar() {
    window.scrollY >= 1
      ? navbar.classList.add("isSticky")
      : navbar.classList.remove("isSticky");
  }

  window.addEventListener("load", toggleStickyNavbar);
  document.addEventListener("scroll", toggleStickyNavbar);

  // Show or hide scroll top button
  const scrollTopButton = document.querySelector(
    "[data-web-trigger=scroll-top]",
  );

  function toggleScrollTop() {
    if (scrollTopButton) {
      window.scrollY > 50
        ? scrollTopButton.classList.add("isShow")
        : scrollTopButton.classList.remove("isShow");
    }
  }

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", function (e) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  // Web theme
  const webTheme = document.querySelector("[data-web-trigger=theme-mode]"),
    html = document.querySelector("html");

  window.addEventListener("load", function () {
    var theme = localStorage.getItem("Starry_WebTheme");

    if (theme == "light") {
      webTheme.innerHTML = '<i class="lni lni-sun"></i>';
    } else if (theme == "dark") {
      webTheme.innerHTML = '<i class="lni lni-night"></i>';
    } else {
      theme = "light";
      localStorage.setItem("Starry_WebTheme", theme);
      webTheme.innerHTML = '<i class="lni lni-sun"></i>';
    }

    html.dataset.themeMode = theme;
  });

  webTheme.addEventListener("click", function () {
    var theme = localStorage.getItem("Starry_WebTheme");

    webTheme.innerHTML =
      theme == "dark"
        ? '<i class="lni lni-sun"></i>'
        : '<i class="lni lni-night"></i>';
    theme = theme == "dark" ? "light" : "dark";
    localStorage.setItem("Starry_WebTheme", theme);
    html.dataset.themeMode = theme;
  });

  // Scrollspy
  function scrollspy(event) {
    var links = document.querySelectorAll(".menu-scroll"),
      scrollpos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    for (let i = 0; i < links.length; i++) {
      var currentLink = links[i],
        dataTarget = currentLink.getAttribute("href"),
        targetElement = document.querySelector(dataTarget),
        topminus = scrollpos + 74;

      if (targetElement) {
        if (
          targetElement.offsetTop <= topminus &&
          targetElement.offsetTop + targetElement.offsetHeight > topminus
        ) {
          document.querySelector(".menu-scroll").classList.remove("isActive");
          currentLink.classList.add("isActive");
        } else {
          currentLink.classList.remove("isActive");
        }
      }
    }
  }

  window.addEventListener("load", scrollspy);
  document.addEventListener("scroll", scrollspy);

  // Menu scroll
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          const section = document.querySelector(window.location.hash),
            scrollMT = this.getComputedStyle(section).scrollMarginTop;

          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMT),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  const pageLink = document.querySelectorAll(".menu-scroll");

  pageLink.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("menuShow");
      navbarToggler.innerHTML = navbar.classList.contains("menuShow")
        ? '<i class="lni lni-close"></i>'
        : '<i class="lni lni-menu"></i>';
    });
  });

  // Portfolio filter
  const portfolioFilters = document.querySelectorAll(
    ".portfolio-filter button",
  );

  portfolioFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      let btn = portfolioFilters[0];

      while (btn) {
        if (btn.tagName === "BUTTON") {
          btn.classList.remove("isActive");
        }

        btn = btn.nextSibling;
      }

      this.classList.add("isActive");

      let selected = filter.getAttribute("data-filter"),
        itemsToHide = document.querySelectorAll(
          '.portfolio-grid .portfolio :not([data-filter="' + selected + '"])',
        ),
        itemsToShow = document.querySelectorAll(
          '.portfolio-grid .portfolio [data-filter="' + selected + '"]',
        );

      if (selected == "all") {
        itemsToHide = [];
        itemsToShow = document.querySelectorAll(
          ".portfolio-grid .portfolio [data-filter]",
        );
      }

      itemsToHide.forEach((el) => {
        el.parentElement.classList.add("isHide");
        el.parentElement.classList.remove("isShow");
      });

      itemsToShow.forEach((el) => {
        el.parentElement.classList.remove("isHide");
        el.parentElement.classList.add("isShow");
      });
    });
  });

  // Init swiper sliders
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach((slider) => {
      let config = JSON.parse(
        slider.querySelector(".swiper-config").innerHTML.trim(),
      );

      if (slider.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(slider, config);
      } else {
        new Swiper(slider, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  // Init AOS
  function initAOS() {
    AOS.init({
      mirror: true,
      duration: 600,
      offset: 30,
      easing: "ease-in-out",
    });
  }

  window.addEventListener("load", initAOS);

  // Init GLightbox
  const glightboxImage = GLightbox({
    selector: ".glightbox",
    type: "image",
  });

  const glightboxVideo = GLightbox({
    selector: ".glightbox-video",
    type: "video",
    autoplayVideos: true,
  });

  // Preloader
  const preloader = document.querySelector("[data-web-trigger=preload]");

  if (preloader) {
    window.addEventListener("load", function () {
      preloader.remove();
    });
  }
})();
