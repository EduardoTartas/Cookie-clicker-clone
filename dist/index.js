"use strict";
document.addEventListener('DOMContentLoaded', () => {
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
                this.price *= Math.round(1.15);
                this.quantity++;
                this.cookiesPerSecond += this.cookiesValue;
            }
        }
    }
    const cookie = new Entity(0, 0);
    cookie.quantity = 100000;
    const grandma = new Entity(50, 2);
    console.log(grandma);
    //contador e cookie principal
    const counter = document.querySelector('#counter');
    const cookieImage = document.querySelector('#cookieImage');
    //grandma preço quantidade=>
    const grandmaCounter = document.querySelector('#grandma-quantity');
    const grdBuy1 = document.querySelector('#buy-1-grandma');
    const grdBuy5 = document.querySelector('#buy-5-grandma');
    const grdPrice = document.querySelector('#grandma-price');
    function update() {
        counter.innerHTML = `${Math.round(cookie.quantity)}`;
        grandmaCounter.innerHTML = `${grandma.quantity}`;
        grdPrice.innerHTML = `${Math.round(grandma.price)}`;
        console.log(`${cookie.quantity}`);
    }
    //função de gerar cookie clicando
    function click() {
        cookie.buy1();
        update();
    }
    cookieImage.addEventListener('click', click);
    //função buy1 grandma
    /*grdBuy1.addEventListener('click', ()=>{
        if(cookie.quantity>=grandma.price)
        grandma.buy1();
        update();
    });*/
    grdBuy1.addEventListener('click', () => {
        grandma.buy1();
        update();
    });
});
