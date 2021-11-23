export class Product {
    id:number
    name : string
    description : string
    price : number
    imageUrl : string

    constructor(id , name , description = '' , price = 0 , imageUrl = "https://www.jiomart.com/images/product/original/490000331/lay-s-magic-masala-potato-chips-52-g-0-20210406.jpg"){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
