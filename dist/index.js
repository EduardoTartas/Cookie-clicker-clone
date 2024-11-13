"use strict";
class Entity {
    constructor(price, cookiesValue) {
        this.price = price;
        this.quantity = 0;
        this.cookiesValue = cookiesValue;
        this.cookiesPerSecond = 0;
    }
    buy1() {
        if (cookie.quantity >= this.price) {
            cookie.quantity -= this.price;
            this.price = Math.round(this.price * 1.15);
            this.quantity++;
            this.cookiesPerSecond += this.cookiesValue;
        }
    }
    buy5() {
        if (cookie.quantity >= (this.price * 5)) {
            cookie.quantity -= (this.price * 5);
            for (let i = 0; i < 5; i++) {
                this.price = Math.round(this.price * 1.15);
            }
            this.quantity += 5;
            this.cookiesPerSecond += (this.cookiesValue * 5);
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
const cookie = new Entity(0, 0);
const grandma = new Entity(50, 1);
const farm = new Entity(150, 3);
const mine = new Entity(300, 6);
document.addEventListener('DOMContentLoaded', () => {
    //cookie's querySelector
    const counter = document.querySelector('#counter');
    const cookieImage = document.querySelector('#cookieImage');
    //gradma's querySelector
    const grdQuantity = document.querySelector('#grandma-quantity');
    const grdPrice = document.querySelector('#grandma-price');
    const grdBuy1 = document.querySelector('#buy-1-grandma');
    const grdBuy5 = document.querySelector('#buy-5-grandma');
    //farm's querySelector
    const farmQuantity = document.querySelector('#farm-quantity');
    const farmPrice = document.querySelector('#farm-price');
    const farmBuy1 = document.querySelector('#buy-1-farm');
    const farmBuy5 = document.querySelector('#buy-5-farm');
    //mine's querySelector
    const mineQuantity = document.querySelector('#mine-quantity');
    const minePrice = document.querySelector('#mine-price');
    const mineBuy1 = document.querySelector('#buy-1-mine');
    const mineBuy5 = document.querySelector('#buy-5-mine');
    //status' update
    function update() {
        counter.innerHTML = `${cookie.getQuantity()}`;
        grdQuantity.innerHTML = `${grandma.getQuantity()}`;
        grdPrice.innerHTML = `${grandma.getPrice()}`;
        farmQuantity.innerHTML = `${farm.getQuantity()}`;
        farmPrice.innerHTML = `${farm.getPrice()}`;
        mineQuantity.innerHTML = `${mine.getQuantity()}`;
        minePrice.innerHTML = `${mine.getPrice()}`;
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
    function second() {
        let totalCookiePerSecond = 0;
        totalCookiePerSecond += grandma.getCookiesPerSecond();
        totalCookiePerSecond += farm.getCookiesPerSecond();
        totalCookiePerSecond += mine.getCookiesPerSecond();
        cookie.setQuantity(cookie.getQuantity() + totalCookiePerSecond);
        update();
    }
    setInterval(second, 500);
});
