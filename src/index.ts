class Entity {
    private price:number;
    private price5:number
    private priceScale:number;
    private quantity:number;
    private cookiesValue:number;
    private cookiesPerSecond:number;

    constructor(price:number, cookiesValue:number, priceScale:number){
        this.price = price;
        this.price5 = price;
        this.priceScale = priceScale;
        this.quantity = 0;
        this.cookiesValue = cookiesValue;
        this.cookiesPerSecond = 0;
    }

    



    cost5():number{     
        this.price5 = this.price;
        for (let i = 0; i < 5; i++) {
            this.price5 = Math.round(this.price5 * this.priceScale);
        }
        return this.price5;
    }

    buy1() : void{
        if(cookie.quantity>=this.price){
            cookie.quantity -=this.price
            this.price = Math.round(this.price * this.priceScale);
            this.quantity ++;
            cookie.cookiesPerSecond += this.cookiesValue;
        }
    }
    
    buy5() : void{
       
            cookie.quantity -= this.price5;
            this.price = this.price5;
            this.quantity += 5;
            cookie.cookiesPerSecond += (this.cookiesValue * 5);
            this.cost5();
    }

    public getPrice(): number {return this.price;}

    public getQuantity(): number {return this.quantity;}

    public getCookiesValue(): number {return this.cookiesValue;}

    public getCookiesPerSecond(): number {return this.cookiesPerSecond;}


    public setPrice(price: number): void {this.price = price;}

    public setQuantity(quantity: number): void {this.quantity = quantity;}

    public setCookiesValue(cookiesValue: number): void {this.cookiesValue = cookiesValue;}

    public setCookiesPerSecond(cookiesPerSecond: number): void {this.cookiesPerSecond = cookiesPerSecond;}

}

const cookie = new Entity(0,0,0)
    cookie.setQuantity(49);

const grandma = new Entity(50, 1, 1.15);

const farm = new Entity(200, 2, 1.20);

const mine = new Entity(500, 5, 1.40);

let totalCookiePerSecond :number = 0;

document.addEventListener('DOMContentLoaded', () => {

    //cookie's querySelector
    const counter     = document.querySelector('#counter')!;
    const cookieImage = document.querySelector('#cookieImage')!;
    //gradma's querySelector
    const grdQuantity = document.querySelector('#grandma-quantity')!;
    const grdPrice    = document.querySelector('#grandma-price')!;
    const grdPrice5    = document.querySelector('#grandma-price5')!;
    const grdBuy1     = document.querySelector('#buy-1-grandma')!;
    const grdBuy5     = document.querySelector('#buy-5-grandma')!;
    //farm's querySelector
    const farmQuantity = document.querySelector('#farm-quantity')!;
    const farmPrice    = document.querySelector('#farm-price')!;
    const farmPrice5    = document.querySelector('#farm-price5')!;
    const farmBuy1     = document.querySelector('#buy-1-farm')!;
    const farmBuy5     = document.querySelector('#buy-5-farm')!;
    //mine's querySelector
    const mineQuantity = document.querySelector('#mine-quantity')!;
    const minePrice    = document.querySelector('#mine-price')!;
    const minePrice5    = document.querySelector('#mine-price5')!;
    const mineBuy1     = document.querySelector('#buy-1-mine')!;
    const mineBuy5     = document.querySelector('#buy-5-mine')!;

    const hover = document.querySelector('.button:hover')!;


    //status' update
    function update(): void{
        counter.innerHTML    = `${cookie.getQuantity()}`  

        grdQuantity.innerHTML = `${grandma.getQuantity()}`;
        grdPrice.innerHTML   = `${grandma.getPrice()}`
        grdPrice5.innerHTML = `${grandma.cost5()}`  

        farmQuantity.innerHTML = `${farm.getQuantity()}`;
        farmPrice.innerHTML   = `${farm.getPrice()}`
        farmPrice5.innerHTML = `${farm.cost5()}`   

        mineQuantity.innerHTML = `${mine.getQuantity()}`;
        minePrice.innerHTML   = `${mine.getPrice()}`;
        minePrice5.innerHTML = `${mine.cost5()}`
        }
        
        //cookie's click
        cookieImage.addEventListener('click', () =>{
            cookie.buy1();
            update();
            
        });

        
        
        //grandma's buy 1 and buy 5
        grdBuy1.addEventListener('click', ()=>{
            grandma.buy1();
            update()
        });

         grdBuy1.addEventListener('mouseover', () => {
            if(cookie.getQuantity()>= grandma.getPrice()){
                grdBuy1.classList.add('button-active')
                grdBuy1.classList.remove('button-false-hover')
                grdBuy1.classList.add('button-true-hover')
            }
            else{
                grdBuy1.classList.remove('button-active')
                grdBuy1.classList.remove('button-true-hover')
                grdBuy1.classList.add('button-false-hover')  
            }
        })

        grdBuy5.addEventListener('click', ()=> {
            grandma.buy5();
            update();
        });

        grdBuy5.addEventListener('mouseover', () => {
            if(cookie.getQuantity()>= grandma.cost5()){
                grdBuy5.classList.add('button-active')
                grdBuy5.classList.remove('button-false')
                grdBuy5.classList.add('button-true')
            }
            else{
                grdBuy5.classList.remove('button-active')
                grdBuy5.classList.remove('button-true')
                grdBuy5.classList.add('button-false')  
            }
        });
        
        
           

       

        //farm's buy 1 and buy 5
        farmBuy1.addEventListener('click', ()=>{
            farm.buy1();
            update()
        });

        farmBuy5.addEventListener('click', ()=>{
            farm.buy5();
            update();
        });        
        
        //farm's buy 1 and buy 5
        mineBuy1.addEventListener('click', ()=>{
            mine.buy1();
            update()
        });

        mineBuy5.addEventListener('click', ()=>{
            mine.buy5();
            update();
        });        

    setInterval(() => {
        cookie.setQuantity(cookie.getQuantity() + cookie.getCookiesPerSecond());
        update();
    },1000);

});
