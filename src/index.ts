document.addEventListener('DOMContentLoaded', () => {

    const counter = <HTMLElement> document.getElementById('counter')!;
    const cookieImage = document.getElementById('cookieImage')!;
    let totalCookies: number = 0;

    function click() {
        totalCookies += 1;
        console.log(totalCookies);
        counter.innerHTML = `${totalCookies}`
    }

    cookieImage.addEventListener('click', click);
    
});


