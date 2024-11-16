"use strict";
class Entity {
    constructor(price, cookiesValue, priceScale) {
        this.price = price;
        this.price5 = price;
        this.priceScale = priceScale;
        this.quantity = 0;
        this.cookiesValue = cookiesValue;
        this.cookiesPerSecond = 0;
    }
    cost5() {
        this.price5 = this.price;
        for (let i = 0; i < 5; i++) {
            this.price5 = Math.round(this.price5 * this.priceScale);
        }
        return this.price5;
    }
    buy1() {
        if (cookie.getQuantity() >= this.price) {
            cookie.setQuantity(cookie.getQuantity() - this.price);
            this.price = Math.round(this.price * this.priceScale);
            this.quantity++;
            cookie.setCookiesPerSecond(cookie.getCookiesPerSecond() + this.cookiesValue);
        }
    }
    buy5() {
        if (cookie.getQuantity() >= this.cost5()) {
            cookie.setQuantity(cookie.getQuantity() - this.price5);
            this.price = this.price5;
            this.quantity += 5;
            cookie.setCookiesPerSecond(cookie.getCookiesPerSecond() + (this.cookiesValue * 5));
            this.cost5();
        }
    }
    getPrice() { return this.price; }
    getQuantity() { return this.quantity; }
    getCookiesValue() { return this.cookiesValue; }
    getCookiesPerSecond() { return this.cookiesPerSecond; }
    setPrice(price) { this.price = price; }
    setQuantity(quantity) { this.quantity = quantity; }
    setCookiesValue(cookiesValue) { this.cookiesValue = cookiesValue; }
    setCookiesPerSecond(cookiesPerSecond) { this.cookiesPerSecond = cookiesPerSecond; }
}
const cookie = new Entity(0, 0, 0);
const grandma = new Entity(50, 1, 1.15);
const farm = new Entity(200, 2, 1.20);
const mine = new Entity(500, 4, 1.40);
document.addEventListener('DOMContentLoaded', () => {
    // Selectors for cookie elements
    const counter = document.querySelector('#counter');
    const cookieImage = document.querySelector('#cookieImage');
    // Selectors for grandma elements
    const grdQuantity = document.querySelector('#grandma-quantity');
    const grdPrice = document.querySelector('#grandma-price');
    const grdPrice5 = document.querySelector('#grandma-price5');
    const grdBuy1 = document.querySelector('#buy-1-grandma');
    const grdBuy5 = document.querySelector('#buy-5-grandma');
    // Selectors for farm elements
    const farmQuantity = document.querySelector('#farm-quantity');
    const farmPrice = document.querySelector('#farm-price');
    const farmPrice5 = document.querySelector('#farm-price5');
    const farmBuy1 = document.querySelector('#buy-1-farm');
    const farmBuy5 = document.querySelector('#buy-5-farm');
    // Selectors for mine elements
    const mineQuantity = document.querySelector('#mine-quantity');
    const minePrice = document.querySelector('#mine-price');
    const minePrice5 = document.querySelector('#mine-price5');
    const mineBuy1 = document.querySelector('#buy-1-mine');
    const mineBuy5 = document.querySelector('#buy-5-mine');
    // Function to update the UI with the latest values
    function update() {
        counter.innerHTML = `${cookie.getQuantity()}`;
        grdQuantity.innerHTML = `${grandma.getQuantity()}`;
        grdPrice.innerHTML = `${grandma.getPrice()}`;
        grdPrice5.innerHTML = `${grandma.cost5()}`;
        farmQuantity.innerHTML = `${farm.getQuantity()}`;
        farmPrice.innerHTML = `${farm.getPrice()}`;
        farmPrice5.innerHTML = `${farm.cost5()}`;
        mineQuantity.innerHTML = `${mine.getQuantity()}`;
        minePrice.innerHTML = `${mine.getPrice()}`;
        minePrice5.innerHTML = `${mine.cost5()}`;
    }
    // Event listener for cookie click
    cookieImage.addEventListener('click', () => {
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
        }
        else {
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
        }
        else {
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
        }
        else {
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
        }
        else {
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
        }
        else {
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
        }
        else {
            mineBuy5.classList.remove('button-active');
            mineBuy5.classList.remove('button-true-hover');
            mineBuy5.classList.add('button-false-hover');
        }
    });
    // Interval to add cookies per second to the total
    setInterval(() => {
        cookie.setQuantity(cookie.getQuantity() + cookie.getCookiesPerSecond());
        update();
    }, 500);
});
