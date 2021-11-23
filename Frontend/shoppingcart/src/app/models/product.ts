export class Product {
    id:number
    name : string
    description : string
    price : number
    imageurl : string

    constructor(id,name , description = '' , price = 0 , imageurl = "https://cdn.shopify.com/s/files/1/0441/7683/4722/products/lays-oregano_3_1.jpg?v=1615560218"){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageurl = imageurl;
    }
}
