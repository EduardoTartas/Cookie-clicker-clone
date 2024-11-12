"use strict";
let totalCookies = 100000;
let grandmaQuantity = 0;
let grandmaCookies = 0;
let grandmaPrice = 50;
document.addEventListener('DOMContentLoaded', () => {
    //conatdor e cookie principal
    const counter = document.getElementById('counter');
    const cookieImage = document.getElementById('cookieImage');
    //grandma preço quantidade
    const grandmaCounter = document.getElementById('grandma-quantity');
    const grdBuy1 = document.getElementById('buy-1-grandma');
    const grdBuy5 = document.getElementById('buy-5-grandma');
    const grdPrice = document.getElementById('grandma-price');
    function update() {
        counter.innerHTML = `${Math.round(totalCookies)}`;
        grandmaCounter.innerHTML = `${Math.round(grandmaQuantity)}`;
        grdPrice.innerHTML = `${Math.round(grandmaPrice)}`;
    }
    //função de gerar cookie clicando
    function click() {
        totalCookies += 1;
        update();
    }
    cookieImage.addEventListener('click', click);
    //função buy1 grd
    function gdrbuy1() {
        if (totalCookies >= grandmaPrice) {
            totalCookies -= grandmaPrice;
            grandmaPrice *= 1.15;
            grandmaQuantity++;
            update();
        }
    }
    grdBuy1.addEventListener('click', gdrbuy1);
    //
    /*function gdrbuy5(){
        if(totalCookies>=Math.round(grandmaPrice * 5)){
            totalCookies -= grandmaPrice;
            grandmaPrice *= 1.15;
            grandmaQuantity ++;
            update();
        }
    }

    function buy1(price:number, grandmaQuantity:number){
        totalCookies -= price;
        price *= 1.15
        grandmaQuantity ++
        }

    grdBuy5.addEventListener('click', gdrbuy5);*/
});
