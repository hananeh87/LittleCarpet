document.addEventListener('DOMContentLoaded', function () {
  /*top-menu*/

  //start-add-class-top-menu
  // document.querySelectorAll(".harmony-menu li").forEach(el => el.classList.add("harmony-menu-li"));
  // document.querySelectorAll(".harmony-menu li a").forEach(el => el.classList.add("harmony-menu-a"));
  // document.querySelectorAll(".harmony-menu li.harmony-menu-li>ul").forEach(el => el.classList.add("harmony-menu-li-ul"));

  document
    .querySelectorAll('.harmony-menu li a img')
    .forEach((el) => el.classList.add('harmony-menu-a-img'));
  document
    .querySelectorAll('.harmony-menu li a span')
    .forEach((el) => el.classList.add('harmony-menu-a-span'));
  //end-add-class-top-menu

  //start-add-class-mobile-menu
  document
    .querySelectorAll('.harmony-mobile-menu li')
    .forEach((el) => el.classList.add('mobile-menu-li'));
  document
    .querySelectorAll('.harmony-mobile-menu li.mobile-menu-li a')
    .forEach((el) => el.classList.add('mobile-menu-a'));
  document
    .querySelectorAll('.harmony-mobile-menu li.mobile-menu-li>ul')
    .forEach((el) => el.classList.add('mobile-menu-li-ul'));
  //end-add-class-mobile-menu

  //start-add-class-horizontal-menu
  document
    .querySelectorAll('.harmony-menu-horizontal li')
    .forEach((el) => el.classList.add('menu-horizontal-li'));
  document
    .querySelectorAll('.harmony-menu-horizontal li.menu-horizontal-li a')
    .forEach((el) => el.classList.add('menu-horizontal-a'));
  document
    .querySelectorAll('.harmony-menu-horizontal li.menu-horizontal-li a span')
    .forEach((el) => el.classList.add('harmony-menu-a-span'));
  document
    .querySelectorAll('.harmony-menu-horizontal li.menu-horizontal-li a img')
    .forEach((el) => el.classList.add('harmony-menu-a-img'));
  document
    .querySelectorAll('.harmony-menu-horizontal>li.menu-horizontal-li>ul')
    .forEach((el) => el.classList.add('menu-horizontal-li-ul'));
  document
    .querySelectorAll('.harmony-menu-horizontal li.menu-horizontal-li>ul ul')
    .forEach((el) => el.classList.add('menu-horizontal-li-ul-ul'));

  document
    .querySelectorAll('.menu-horizontal-li li.menu-horizontal-li')
    .forEach((el) => {
      if (el.querySelector('ul')) {
        let a = el.querySelector('a');
        if (a) a.classList.add('h-header-a');
      } else {
        let a = el.querySelector('a');
        if (a) a.classList.add('h-hover-a');
      }
    });

    document
      .querySelectorAll('.harmony-menu li')
      .forEach((el) => el.classList.add('harmony-menu-li'));
    document
      .querySelectorAll('.harmony-menu li a')
      .forEach((el) => el.classList.add('harmony-menu-a'));
    document
      .querySelectorAll('.harmony-menu li.harmony-menu-li>ul')
      .forEach((el) => el.classList.add('harmony-menu-li-ul'));
  //end-add-class-horizontal-menu



  //hide teb menu

  const rightLinks = document.querySelectorAll('.menu_tab a');
  const lis = document.querySelectorAll('.harmony-menu-horizontal.tab_model > li');

  // اول همه li ها رو مخفی می‌کنیم
  lis.forEach((li) => (li.style.display = 'none'));

  // نمایش li اول به صورت پیش‌فرض
  if (lis[0]) lis[0].style.display = 'block';

  // اضافه کردن کلاس active به لینک اول به صورت پیش‌فرض
  if (rightLinks[0]) rightLinks[0].classList.add('active');

  // وقتی روی هر لینک سمت راست میریم
  rightLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      // همه li ها مخفی بشن
      lis.forEach((li) => (li.style.display = 'none'));
      // فقط li متناظر نمایش داده بشه
      if (lis[index]) lis[index].style.display = 'block';

      // حذف کلاس active از همه لینک‌ها
      rightLinks.forEach((l) => l.classList.remove('active'));
      // اضافه کردن کلاس active به لینک فعلی
      link.classList.add('active');
    });
  });


  //start-add-class-mobile-menu-accordion
  document
    .querySelectorAll('.harmony-mobile-menu-accordion li')
    .forEach((el) => el.classList.add('mobile-menu-li'));
  document
    .querySelectorAll('.harmony-mobile-menu-accordion li.mobile-menu-li a')
    .forEach((el) => el.classList.add('mobile-menu-a'));
  document
    .querySelectorAll('.harmony-mobile-menu-accordion li.mobile-menu-li>ul')
    .forEach((el) => el.classList.add('mobile-menu-li-ul'));
  //end-add-class-mobile-menu-accordion

  //start-add-menu-bar
  document
    .querySelectorAll('.harmony-menu>li.harmony-menu-li')
    .forEach((el) => {
      if (el.querySelector('ul')) {
        let a = el.querySelector('a');
        if (a)
          a.insertAdjacentHTML('beforeend', '<span class="angle-down"></span>');
      }
    });

  // start-add-menu-horizontal
  document.querySelectorAll('.menu-horizontal-a.h-header-a').forEach((a) => {
    a.insertAdjacentHTML(
      'beforeend',
      '<span class="angle-left"></span>'
    );
  });

  document.querySelectorAll('.harmony-menu li ul li').forEach((el) => {
    if (el.querySelector('ul')) {
      let a = el.querySelector('a');
      if (a)
        a.insertAdjacentHTML('beforeend', '<span class="angle-left"></span>');
    }
  });
  //end-add-menu-bar

  //start-add-mobile-menu
  document.querySelectorAll('.harmony-mobile-menu li').forEach((el) => {
    if (el.querySelector('ul')) {
      let a = el.querySelector('a');
      if (a)
        a.insertAdjacentHTML('beforeend', '<span class="angle-left"></span>');
    }
  });

  document
    .querySelectorAll('.harmony-mobile-menu-accordion li')
    .forEach((el) => {
      if (el.querySelector('ul')) {
        let a = el.querySelector('a');
        if (a) {
          a.classList.add('add_class');
          a.insertAdjacentHTML('beforeend', '<span class="angle-down"></span>');
        }
      }
    });

  if (document.documentElement.classList.contains('h-ltr')) {
    document.querySelectorAll('.harmony-mobile-menu li>ul').forEach((ul) => {
      ul.insertAdjacentHTML(
        'afterbegin',
        '<li class="menu-mobile-back"><div class="mobile-menu-a harmony-menu-back"><span class="angle-left"></span><span class="harmony-menu-back">Back</span></div></li>'
      );
    });
  } else {
    document.querySelectorAll('.harmony-mobile-menu li>ul').forEach((ul) => {
      ul.insertAdjacentHTML(
        'afterbegin',
        '<li class="menu-mobile-back"><div class="mobile-menu-a harmony-menu-back"><span class="angle-left"></span><span class="harmony-menu-back">برگشت</span></div></li>'
      );
    });
  }
  //end-add-mobile-menu

  /* helper: slideUp / slideDown / slideToggle (شبیه jQuery) */
  function slideUp(el, duration = 400) {
    return new Promise((resolve) => {
      if (!el || window.getComputedStyle(el).display === 'none') {
        resolve();
        return;
      }
      if (el._isSliding) return el._slidingPromise || Promise.resolve();
      el._isSliding = true;

      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
      el.style.transition = `height ${duration}ms ease`;

      requestAnimationFrame(() => {
        el.style.height = '0px';
      });

      el._slidingPromise = new Promise((res) => {
        function done(e) {
          if (e && e.propertyName && e.propertyName !== 'height') return;
          el.style.display = 'none';
          el.style.removeProperty('height');
          el.style.removeProperty('overflow');
          el.style.removeProperty('transition');
          el.removeEventListener('transitionend', done);
          el._isSliding = false;
          el._slidingPromise = null;
          res();
        }
        el.addEventListener('transitionend', done);
        // fallback if transitionend doesn't fire
        setTimeout(() => {
          if (el._isSliding) done();
        }, duration + 50);
      }).then(() => {
        resolve();
      });
    });
  }

  function slideDown(el, duration = 400) {
    return new Promise((resolve) => {
      if (!el || window.getComputedStyle(el).display !== 'none') {
        resolve();
        return;
      }
      if (el._isSliding) return el._slidingPromise || Promise.resolve();
      el._isSliding = true;

      // show element to measure height
      el.style.removeProperty('display');
      let display = window.getComputedStyle(el).display;
      if (display === 'none') display = 'block';
      el.style.display = display;

      const height = el.scrollHeight;
      el.style.height = '0px';
      el.style.overflow = 'hidden';
      el.style.transition = `height ${duration}ms ease`;

      requestAnimationFrame(() => {
        el.style.height = height + 'px';
      });

      el._slidingPromise = new Promise((res) => {
        function done(e) {
          if (e && e.propertyName && e.propertyName !== 'height') return;
          el.style.removeProperty('height');
          el.style.removeProperty('overflow');
          el.style.removeProperty('transition');
          el.removeEventListener('transitionend', done);
          el._isSliding = false;
          el._slidingPromise = null;
          res();
        }
        el.addEventListener('transitionend', done);
        setTimeout(() => {
          if (el._isSliding) done();
        }, duration + 50);
      }).then(() => {
        resolve();
      });
    });
  }

  function slideToggle(el, duration = 400) {
    return window.getComputedStyle(el).display === 'none'
      ? slideDown(el, duration)
      : slideUp(el, duration);
  }

  /*start-mobile-menu-function*/
  document.querySelectorAll('.harmony-mobile-menu a').forEach((a) => {
    a.addEventListener('click', function (e) {
      let nextElement = this.nextElementSibling;
      if (nextElement && nextElement.tagName.toLowerCase() === 'ul') {
        e.preventDefault();
        document
          .querySelectorAll('.navbar-menu-mobile')
          .forEach((el) => el.classList.add('Harmony-transform'));
        document
          .querySelectorAll('.menu-mobile')
          .forEach((el) => el.classList.add('Harmony-transform'));
        this.parentElement.parentElement.classList.add('Harmony-transform');
        nextElement.classList.add('show');
      }
    });
  });

  document.querySelectorAll('.harmony-menu-back').forEach((back) => {
    back.addEventListener('click', function () {
      let menu = this.closest('.mobile-menu-li-ul');
      if (menu) {
        menu.classList.remove('show');
        let transformParent = menu.parentElement.closest('.Harmony-transform');
        if (transformParent)
          transformParent.classList.remove('Harmony-transform');
      }
    });
  });

  // accardeon (اکاردئون با انیمیشن نرم — منطق اصلی تغییری نکرد)
  const slideDuration = 400; // شبیه jQuery پیش‌فرض
  document.querySelectorAll('.harmony-mobile-menu-accordion a').forEach((a) => {
    a.addEventListener('click', function (e) {
      var $this = this;
      var $submenu = $this.nextElementSibling;

      if ($submenu && $submenu.tagName.toLowerCase() === 'ul') {
        e.preventDefault();

        var isActive = $this.classList.contains('active');

        $this.classList.toggle('active', !isActive);
        if (isActive) {
          // اگر فعال بود، ببند (slideUp)
          slideUp($submenu, slideDuration);
        } else {
          // اگر بسته بود، باز کن (slideDown)
          slideDown($submenu, slideDuration);

          // و بقیه‌ی آیتم‌های هم‌سطح و فرزندانشون رو ببند و کلاس active رو پاک کن
          const currentLi = $this.closest('li');
          const siblings = Array.from(currentLi.parentElement.children).filter(
            (li) => li !== currentLi
          );
          siblings.forEach((sib) => {
            // remove active from all descendant anchors (مثل .find("a").removeClass("active"))
            sib
              .querySelectorAll('a')
              .forEach((a2) => a2.classList.remove('active'));
            // slideUp روی هر next("ul") مشابه jQuery: برای هر a داخل sibling، اگر next ul هست ببندش
            sib.querySelectorAll('a').forEach((a2) => {
              const nx = a2.nextElementSibling;
              if (nx && nx.tagName && nx.tagName.toLowerCase() === 'ul')
                slideUp(nx, slideDuration);
            });
          });
        }
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // ایجاد div اورلی و اضافه کردن به body
  var overlay = document.createElement('div');
  overlay.classList.add('dropdown-overlay'); // کلاس برای CSS خودت
  document.body.appendChild(overlay); // ← اضافه کردن اورلی به صفحه

  document.querySelectorAll('[data-dropdown]').forEach(function (dropdown) {
    var menu = dropdown.querySelector('.dropdown-box');

    dropdown.addEventListener('mouseenter', function () {
      if (menu) menu.classList.add('show');
      overlay.classList.add('active'); // کلاس فعال برای اورلی
    });

    dropdown.addEventListener('mouseleave', function () {
      if (menu) menu.classList.remove('show');
      overlay.classList.remove('active'); // مخفی کردن اورلی
    });

    // اگر کاربر روی اورلی کلیک کرد، منو بسته شود
    overlay.addEventListener('click', function () {
      if (menu) menu.classList.remove('show');
      overlay.classList.remove('active');
    });
  });
});
// document.addEventListener('DOMContentLoaded', function () {
//   // ایجاد overlay و اضافه به body
//   var overlay = document.createElement('div');
//   overlay.classList.add('dropdown-overlay');
//   document.body.appendChild(overlay);

//   document.querySelectorAll('[data-dropdown]').forEach(function (dropdown) {
//     dropdown.addEventListener('mouseenter', function () {
//       overlay.classList.add('active');
//     });

//     dropdown.addEventListener('mouseleave', function () {
//       overlay.classList.remove('active');
//     });

//     // کلیک روی اورلی → بستن همه dropdown
//     overlay.addEventListener('click', function () {
//       overlay.classList.remove('active');
//     });
//   });
// });
