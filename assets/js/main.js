(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox',
    loop: true,
    autoplayVideos: true,
    closeButton: true,
    height: '506px'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  let lastScrollY = window.scrollY;
  const headNav = document.getElementById('header');

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        headNav.style.top = '-100px'; 
      } else {
        // User is scrolling up
        headNav.style.top = '0'; 
      }

      lastScrollY = currentScrollY; 
    });

    window.onload = function() {
      const currentPage = window.location.pathname.split("/").pop();
    
      if (currentPage === "index.html" || currentPage === "") {
        const imageSection = document.getElementById('image-section');
        const videoSection = document.getElementById('video-section');
        const video = document.getElementById('video');
        
        setTimeout(() => {
          imageSection.classList.add('hidden');
          videoSection.style.visibility = 'visible';  
          videoSection.classList.add('visible');
          
          video.play();
        }, 1500);
      }
    };
    

/* ----------------------Shop items ----------------------- */

 const products = [
      {
        image: "assets/media/Shop/BEAT’ABOX American Birch Series.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT’ABOX American Birch Series",
        price: "$240.00 - $280.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT’ABOX Cajon Mini.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT’ABOX Cajon Mini",
        price: "$130.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT’ABOX Classic Series.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT’ABOX Classic Series",
        price: "$260.00 – $300.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT’ABOX Fusion Series.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT’ABOX Fusion Series",
        price: "$300.00 – $340.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT’ABOX Professional Oak Series.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT’ABOX Professional Oak Series",
        price: "$400.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT’ABOX Rustic Series.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT’ABOX Rustic Series",
        price: "$300.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT’ABOX Superstar Series.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT’ABOX Superstar Series",
        price: "$330.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT’ABOX Travel Cajon.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT’ABOX Travel Cajon",
        price: "$120.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT'ABOX Kids Series Blue.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT'ABOX Kids Series Blue",
        price: "$160.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT'ABOX Kids Series Colored.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT'ABOX Kids Series Colored",
        price: "$160.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/BEAT'ABOX Kids Series Orange.jpg",
        alt: "cajon-classes-beatabox",
        name: "BEAT'ABOX Kids Series Orange",
        price: "$160.00",
        link: "contact.html",
      },
      {
        image: "assets/media/Shop/New Taste for Old Waste.jpg",
        alt: "cajon-classes-beatabox",
        name: "New Taste for Old Waste",
        price: "$18.00",
        link: "contact.html",
      },
    ];

    window.addEventListener("load", function() {
      const currentPage = window.location.pathname.split("/").pop();
    
      if (currentPage === "shop.html" || currentPage === "") {
        const shopItemsContainer = document.getElementById("shop-items");
        products.forEach((product, index) => {
          shopItemsContainer.innerHTML += `
            <div class="col-xl-3 col-md-6 " data-aos="fade-down" data-aos-delay="${200 + index * 100}">
              <div class="service-item">
                <div class="img-holder">
                  <img src="${product.image}" class="glightbox img-fluid" alt="${product.alt}">
                </div>
                <div class="shop-details details-holder position-relative">
                  <a href="${product.link}" class="stretched-link">
                    <h3>${product.name}</h3>
                  </a>
                  <p class="product-price"><strong>Price: ${product.price}</strong></p>
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          `;
        });
      }
    })
    
    
  

})();