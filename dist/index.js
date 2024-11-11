"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const cookieImage = document.getElementById('cookieImage');
    let totalCookies = 0;
    function click() {
        totalCookies += 1;
        console.log(totalCookies);
        counter.innerHTML = `${totalCookies}`;
    }
    cookieImage.addEventListener('click', click);
});
