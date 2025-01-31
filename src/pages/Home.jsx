import Gallery from "../components/Gallery"
import Section from "../components/Section";
import ProductListing from "../components/ProductListing"

const Home = () => {
    const galleryList =  [
            { "key": 1, "src": "/home-slide-1.jpeg", "thumbnails": "/home-slide-1.jpeg" },
            { "key": 2, "src": "/home-slide-2.jpeg", "thumbnails": "/home-slide-2.jpeg" },
            { "key": 3, "src": "/home-slide-3.jpeg", "thumbnails": "/home-slide-3.jpeg" },
            { "key": 4, "src": "/home-slide-4.jpeg", "thumbnails": "/home-slide-4.jpeg" },
            { "key": 5, "src": "/home-slide-5.jpeg", "thumbnails": "/home-slide-5.jpeg" },
            { "key": 6, "src": "/home-slide-6.jpeg", "thumbnails": "/home-slide-6.jpeg" },
            { "key": 7, "src": "/home-slide-7.jpeg", "thumbnails": "/home-slide-7.jpeg" },
            { "key": 8, "src": "/home-slide-8.jpeg", "thumbnails": "/home-slide-8.jpeg" }
    ]

    const collectionProducts = [
        { "key": 1, "src": "/collection-1.png" },
        { "key": 2, "src": "/collection-2.png" },
        { "key": 3, "src": "/collection-3.png" }
    ]

    const highProducts = [
        { "key": 1, "category": "tenis" , "src": "/product-thumb-1.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 2, "category": "tenis" , "src": "/product-thumb-2.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 3, "category": "tenis" , "src": "/product-thumb-3.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 4, "category": "tenis" , "src": "/product-thumb-4.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 5, "category": "tenis" , "src": "/product-thumb-5.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 6, "category": "tenis" , "src": "/product-thumb-1.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 7, "category": "tenis" , "src": "/product-thumb-2.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 8, "category": "tenis" , "src": "/product-thumb-3.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 9, "category": "tenis" , "src": "/product-thumb-4.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 10, "category": "tenis" , "src": "/product-thumb-5.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 11, "category": "tenis" , "src": "/product-thumb-1.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 12, "category": "tenis" , "src": "/product-thumb-2.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 13, "category": "tenis" , "src": "/product-thumb-3.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 14, "category": "tenis" , "src": "/product-thumb-4.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 15, "category": "tenis" , "src": "/product-thumb-5.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" }
    ]
    return (
        <div className="w-screen">
            <Gallery classname="w-full flex align-items-center justify-content-center" images={galleryList} width="" height="681px" radius="4px" showThumbs={galleryList} />
            
            <Section title="Coleções em destaque" titleAlign="center" link="" children="">
            <div className="py-4 w-full flex justify-content-center gap-4 list-none">
                {collectionProducts.map((product) => (
                    <li key={product.key} ><img className="border-round" src={product.src} /></li>
                ))}
            </div>
            </Section>

            <Section title="Produtos em alta" titleAlign="left" link="" children="">
                <ProductListing products={highProducts} />
            </Section>
            
        </div>
    );
}

export default Home;