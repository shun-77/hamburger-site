document.querySelector('.js-header__menu-btn--open').addEventListener(
    'click',
    ()=>{
    document.querySelector('.js-header__menu-btn--open').classList.add('inactive');
    document.querySelector('.js-header__menu-btn--close').classList.add('active');
    document.querySelector('.js-menu').classList.add('active');
    document.querySelector('.js-cover').classList.add('active');
    document.querySelector('html').classList.add('scroll-prevent');
    }
);

document.querySelector('.js-header__menu-btn--close').addEventListener(
    'click',
    ()=>{
    document.querySelector('.js-header__menu-btn--open').classList.remove('inactive');
    document.querySelector('.js-header__menu-btn--close').classList.remove('active');
    document.querySelector('.js-menu').classList.remove('active');
    document.querySelector('.js-cover').classList.remove('active');
    document.querySelector('html').classList.remove('scroll-prevent');
    }
);