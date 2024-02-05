document.querySelector('.js-header__menu-btn--open').addEventListener(
    'click',
    ()=>{
    document.querySelector('.js-header__menu-btn--open').classList.add('inactive');
    document.querySelector('.js-header__menu-btn--close').classList.add('active');
    document.querySelector('.js-menu').classList.add('active');
    document.querySelector('.js-cover').classList.add('active');
    }
);

document.querySelector('.js-header__menu-btn--close').addEventListener(
    'click',
    ()=>{
    document.querySelector('.js-header__menu-btn--open').classList.remove('inactive');
    document.querySelector('.js-header__menu-btn--close').classList.remove('active');
    document.querySelector('.js-menu').classList.remove('active');
    document.querySelector('.js-cover').classList.remove('active');
    }
);

// 高さを揃える要素
const target = document.querySelectorAll('.height');
 
// 空の配列を指定。
const heightlist = [];
 
// 要素の高さを全て配列に格納
target.forEach(element => {
  const height = element.clientHeight;
  heightlist.push(height);
});
 
//一番高さがある要素のheightを取得。
const maxHeight = Math.max.apply(null, heightlist);
 

if (window.matchMedia('(max-width: 1023.9999999px)').matches) {
// 要素にstyle属性を付与。一番高さのある要素のheightを揃える要素全てに指定。
    target.forEach(element => {
        element.style.height = maxHeight + 'px';
    }); 
};

