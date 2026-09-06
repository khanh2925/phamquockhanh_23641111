class Product {
    constructor(
        public name: string,
        public price: number,
    ){}
}
const products: Product[] = [
    new Product("Pham", 50),
    new Product("Quoc", 150),
    new Product("Khanh", 300),
    new Product("A+", 80)
];
const sanGiaCao = products.filter(
    product => product.price > 100  
)
sanGiaCao.forEach(p=>{
    console.log(`Name: ${p.name}, Price: ${p.price}`)
})