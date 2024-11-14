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
        if (cookie.quantity >= this.price) {
            cookie.quantity -= this.price;
            this.price = Math.round(this.price * this.priceScale);
            this.quantity++;
            cookie.cookiesPerSecond += this.cookiesValue;
        }
    }
    buy5() {
        if (cookie.quantity >= this.cost5()) {
            cookie.quantity -= this.price5;
            this.price = this.price5;
            this.quantity += 5;
            cookie.cookiesPerSecond += (this.cookiesValue * 5);
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
cookie.setQuantity(49);
const grandma = new Entity(50, 1, 1.15);
const farm = new Entity(200, 2, 1.20);
const mine = new Entity(500, 5, 1.40);
let totalCookiePerSecond = 0;
document.addEventListener('DOMContentLoaded', () => {
    //cookie's querySelector
    const counter = document.querySelector('#counter');
    const cookieImage = document.querySelector('#cookieImage');
    //gradma's querySelector
    const grdQuantity = document.querySelector('#grandma-quantity');
    const grdPrice = document.querySelector('#grandma-price');
    const grdPrice5 = document.querySelector('#grandma-price5');
    const grdBuy1 = document.querySelector('#buy-1-grandma');
    const grdBuy5 = document.querySelector('#buy-5-grandma');
    //farm's querySelector
    const farmQuantity = document.querySelector('#farm-quantity');
    const farmPrice = document.querySelector('#farm-price');
    const farmPrice5 = document.querySelector('#farm-price5');
    const farmBuy1 = document.querySelector('#buy-1-farm');
    const farmBuy5 = document.querySelector('#buy-5-farm');
    //mine's querySelector
    const mineQuantity = document.querySelector('#mine-quantity');
    const minePrice = document.querySelector('#mine-price');
    const minePrice5 = document.querySelector('#mine-price5');
    const mineBuy1 = document.querySelector('#buy-1-mine');
    const mineBuy5 = document.querySelector('#buy-5-mine');
    const hover = document.querySelector('.button:hover');
    //status' update
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
    //cookie's click
    cookieImage.addEventListener('click', () => {
        cookie.buy1();
        update();
    });
    //grandma's buy 1 and buy 5
    grdBuy1.addEventListener('click', () => {
        grandma.buy1();
        update();
    });
    grdBuy1.addEventListener('mouseover', () => {
        if (cookie.getQuantity() >= grandma.getPrice()) {
            grdBuy1.classList.remove('button-false');
            grdBuy1.classList.add('button-true');
        }
        else {
            grdBuy1.classList.remove('button-true');
            grdBuy1.classList.add('button-false');
        }
    });
    grdBuy5.addEventListener('click', () => {
        grandma.buy5();
        update();
    });
    //farm's buy 1 and buy 5
    farmBuy1.addEventListener('click', () => {
        farm.buy1();
        update();
    });
    farmBuy5.addEventListener('click', () => {
        farm.buy5();
        update();
    });
    //farm's buy 1 and buy 5
    mineBuy1.addEventListener('click', () => {
        mine.buy1();
        update();
    });
    mineBuy5.addEventListener('click', () => {
        mine.buy5();
        update();
    });
    setInterval(() => {
        cookie.setQuantity(cookie.getQuantity() + cookie.getCookiesPerSecond());
        update();
    }, 1000);
});
