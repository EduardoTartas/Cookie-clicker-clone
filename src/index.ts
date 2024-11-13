document.addEventListener('DOMContentLoaded', () => {


class Entity {
    private price:number;
    private quantity:number;
    private cookiesValue:number;
    private cookiesPerSecond:number;

    constructor(price:number, cookiesValue:number){
        this.price = price;
        this.quantity = 0;
        this.cookiesValue = cookiesValue;
        this.cookiesPerSecond = 0;
    }

    buy1() : void{
        if(cookie.quantity>=this.price){
            cookie.quantity -=this.price
            this.price *= Math.round(1.15);
            this.quantity ++;
            this.cookiesPerSecond += this.cookiesValue;
        }
    }


    buy5() : void{
        if(cookie.quantity>=this.price){
            cookie.quantity -=this.price
            this.price *= Math.round(1.15);
            this.quantity ++;
            this.cookiesPerSecond += this.cookiesValue;
        }
    }


    public getPrice(): number {return this.price;}

    public setPrice(price: number): void {this.price = price;}

    public getQuantity(): number {return this.quantity;}

    public setQuantity(quantity: number): void {this.quantity = quantity;}

    public getCookiesValue(): number {return this.cookiesValue;}

    public setCookiesValue(cookiesValue: number): void {this.cookiesValue = cookiesValue;}

    public getCookiesPerSecond(): number {return this.cookiesPerSecond;}

    public setCookiesPerSecond(cookiesPerSecond: number): void {this.cookiesPerSecond = cookiesPerSecond;}

}




const cookie = new Entity(0,0)
cookie.quantity=100000;

const grandma = new Entity(50, 2);
console.log(grandma);

    //contador e cookie principal
    const counter = document.querySelector('#counter')!;
    const cookieImage = document.querySelector('#cookieImage')!;

    //grandma preço quantidade=>
    const grandmaCounter = document.querySelector('#grandma-quantity')!;
    const grdBuy1 = document.querySelector('#buy-1-grandma')!;
    const grdBuy5 = document.querySelector('#buy-5-grandma')!;
    const grdPrice = document.querySelector('#grandma-price')!;

    function update(){
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
    
    grdBuy1.addEventListener('click', ()=>{
        
        grandma.buy1();
        update()});


    
});


