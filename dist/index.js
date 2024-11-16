"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("./Entity");
const grandma = new Entity_1.Entity(50, 1, 1.15);
const farm = new Entity_1.Entity(200, 2, 1.20);
const mine = new Entity_1.Entity(500, 4, 1.40);

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
    //status' update
    function update() {
        counter.innerHTML = `${Entity_1.cookie.getQuantity()}`;
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
        Entity_1.cookie.buy1();
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
    //grandma's hover effect
    grdBuy1.addEventListener('mouseover', () => {
        if (Entity_1.cookie.getQuantity() >= grandma.getPrice()) {
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
        if (Entity_1.cookie.getQuantity() >= grandma.cost5()) {
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
    //farm's buy 1 and buy 5
    farmBuy1.addEventListener('click', () => {
        farm.buy1();
        update();
    });
    farmBuy5.addEventListener('click', () => {
        farm.buy5();
        update();
    });
    //farm's hover effect
    farmBuy1.addEventListener('mouseover', () => {
        if (Entity_1.cookie.getQuantity() >= farm.getPrice()) {
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
        if (Entity_1.cookie.getQuantity() >= farm.cost5()) {
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
    //mine's buy 1 and buy 5
    mineBuy1.addEventListener('click', () => {
        mine.buy1();
        update();
    });
    mineBuy5.addEventListener('click', () => {
        mine.buy5();
        update();
    });
    //farm's hover effect
    mineBuy1.addEventListener('mouseover', () => {
        if (Entity_1.cookie.getQuantity() >= farm.getPrice()) {
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
        if (Entity_1.cookie.getQuantity() >= mine.cost5()) {
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
    //add cookies per second to the total
    setInterval(() => {
        Entity_1.cookie.setQuantity(Entity_1.cookie.getQuantity() + Entity_1.cookie.getCookiesPerSecond());
        update();
    }, 500);
});
