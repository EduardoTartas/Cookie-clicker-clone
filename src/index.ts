import { Entity, cookie, grandma, farm, mine } from './Entity.js';

let firstAcess:boolean = true;

// Function that saves the infos of the Entities
function saveInfos(): void {
    localStorage.setItem('counter', cookie.getQuantity().toString());
    localStorage.setItem('cookiePerSecond', cookie.getCookiesPerSecond().toString());

    localStorage.setItem('grdPrice', grandma.getPrice().toString());
    localStorage.setItem('grdQuantity', grandma.getQuantity().toString());

    localStorage.setItem('farmPrice', farm.getPrice().toString());
    localStorage.setItem('farmQuantity', farm.getQuantity().toString());

    localStorage.setItem('minePrice', mine.getPrice().toString());
    localStorage.setItem('mineQuantity', mine.getQuantity().toString());
}

// Function that loads the infos of Entities
function loadInfos(): void {
    cookie.setQuantity(parseInt(localStorage.counter));
    cookie.setCookiesPerSecond(parseInt(localStorage.cookiePerSecond));
    
    grandma.setPrice(parseInt(localStorage.grdPrice));
    grandma.setQuantity(parseInt(localStorage.grdQuantity));
    
    farm.setPrice(parseInt(localStorage.farmPrice));
    farm.setQuantity(parseInt(localStorage.farmQuantity));

    mine.setPrice(parseInt(localStorage.minePrice));
    mine.setQuantity(parseInt(localStorage.mineQuantity));
}

function askToLoadInfos() {
    if (!firstAcess && confirm("Do you want to load the old infos?")) {
        loadInfos();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    askToLoadInfos();

    // Selectors for cookie elements
    const counter     = document.querySelector('#counter')!;
    const cookieImage = document.querySelector('#cookieImage')!;

    // Selectors for grandma elements
    const grdQuantity = document.querySelector('#grandma-quantity')!;
    const grdPrice    = document.querySelector('#grandma-price')!;
    const grdPrice5   = document.querySelector('#grandma-price5')!;
    const grdBuy1     = document.querySelector('#buy-1-grandma')!;
    const grdBuy5     = document.querySelector('#buy-5-grandma')!;

    // Selectors for farm elements
    const farmQuantity = document.querySelector('#farm-quantity')!;
    const farmPrice    = document.querySelector('#farm-price')!;
    const farmPrice5   = document.querySelector('#farm-price5')!;
    const farmBuy1     = document.querySelector('#buy-1-farm')!;
    const farmBuy5     = document.querySelector('#buy-5-farm')!;

    // Selectors for mine elements
    const mineQuantity = document.querySelector('#mine-quantity')!;
    const minePrice    = document.querySelector('#mine-price')!;
    const minePrice5   = document.querySelector('#mine-price5')!;
    const mineBuy1     = document.querySelector('#buy-1-mine')!;
    const mineBuy5     = document.querySelector('#buy-5-mine')!;

    // Function to update the UI with the latest values
    function update(): void {
        counter.innerHTML      = `${cookie.getQuantity()}`;

        grdQuantity.innerHTML  = `${grandma.getQuantity()}`;
        grdPrice.innerHTML     = `${grandma.getPrice()}`;
        grdPrice5.innerHTML    = `${grandma.cost5()}`;

        farmQuantity.innerHTML = `${farm.getQuantity()}`;
        farmPrice.innerHTML    = `${farm.getPrice()}`;
        farmPrice5.innerHTML   = `${farm.cost5()}`;

        mineQuantity.innerHTML = `${mine.getQuantity()}`;
        minePrice.innerHTML    = `${mine.getPrice()}`;
        minePrice5.innerHTML   = `${mine.cost5()}`;
    }

    // Event listener for cookie click
    cookieImage.addEventListener('click', () => {
        firstAcess = false;
        cookie.buy1();
        update();
    });

    // Event listeners for grandma buy buttons
    grdBuy1.addEventListener('click', () => {
        grandma.buy1();
        update();
    });

    grdBuy5.addEventListener('click', () => {
        grandma.buy5();
        update();
    });

    // Hover effects for grandma buy buttons
    grdBuy1.addEventListener('mouseover', () => {
        if (cookie.getQuantity() >= grandma.getPrice()) {
            grdBuy1.classList.add('button-active');
            grdBuy1.classList.remove('button-false-hover');
            grdBuy1.classList.add('button-true-hover');
        } else {
            grdBuy1.classList.remove('button-active');
            grdBuy1.classList.remove('button-true-hover');
            grdBuy1.classList.add('button-false-hover');
        }
    });

    grdBuy5.addEventListener('mouseover', () => {
        if (cookie.getQuantity() >= grandma.cost5()) {
            grdBuy5.classList.add('button-active');
            grdBuy5.classList.remove('button-false-hover');
            grdBuy5.classList.add('button-true-hover');
        } else {
            grdBuy5.classList.remove('button-active');
            grdBuy5.classList.remove('button-true-hover');
            grdBuy5.classList.add('button-false-hover');
        }
    });

    // Event listeners for farm buy buttons
    farmBuy1.addEventListener('click', () => {
        farm.buy1();
        update();
    });

    farmBuy5.addEventListener('click', () => {
        farm.buy5();
        update();
    });

    // Hover effects for farm buy buttons
    farmBuy1.addEventListener('mouseover', () => {
        if (cookie.getQuantity() >= farm.getPrice()) {
            farmBuy1.classList.add('button-active');
            farmBuy1.classList.remove('button-false-hover');
            farmBuy1.classList.add('button-true-hover');
        } else {
            farmBuy1.classList.remove('button-active');
            farmBuy1.classList.remove('button-true-hover');
            farmBuy1.classList.add('button-false-hover');
        }
    });

    farmBuy5.addEventListener('mouseover', () => {
        if (cookie.getQuantity() >= farm.cost5()) {
            farmBuy5.classList.add('button-active');
            farmBuy5.classList.remove('button-false-hover');
            farmBuy5.classList.add('button-true-hover');
        } else {
            farmBuy5.classList.remove('button-active');
            farmBuy5.classList.remove('button-true-hover');
            farmBuy5.classList.add('button-false-hover');
        }
    });

    // Event listeners for mine buy buttons
    mineBuy1.addEventListener('click', () => {
        mine.buy1();
        update();
    });

    mineBuy5.addEventListener('click', () => {
        mine.buy5();
        update();
    });

    // Hover effects for mine buy buttons
    mineBuy1.addEventListener('mouseover', () => {
        if (cookie.getQuantity() >= farm.getPrice()) {
            mineBuy1.classList.add('button-active');
            mineBuy1.classList.remove('button-false-hover');
            mineBuy1.classList.add('button-true-hover');
        } else {
            mineBuy1.classList.remove('button-active');
            mineBuy1.classList.remove('button-true-hover');
            mineBuy1.classList.add('button-false-hover');
        }
    });

    mineBuy5.addEventListener('mouseover', () => {
        if (cookie.getQuantity() >= mine.cost5()) {
            mineBuy5.classList.add('button-active');
            mineBuy5.classList.remove('button-false-hover');
            mineBuy5.classList.add('button-true-hover');
        } else {
            mineBuy5.classList.remove('button-active');
            mineBuy5.classList.remove('button-true-hover');
            mineBuy5.classList.add('button-false-hover');
        }
    });

    // Interval to add cookies per second to the total
    setInterval(() => {
        cookie.setQuantity(cookie.getQuantity() + cookie.getCookiesPerSecond());
        saveInfos();
        update();
    }, 500);
});
