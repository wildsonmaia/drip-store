import Gallery from "../components/Gallery"
import BuyBox from "../components/BuyBox"
import Section from "../components/Section"
import ProductListing from "../components/ProductListing"

const ProductViewPage = () => {
    const productsImages = [
        { "key": 1, "category": "tenis" , "src": "/product-thumb-1.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 2, "category": "tenis" , "src": "/product-thumb-2.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 3, "category": "tenis" , "src": "/product-thumb-3.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 4, "category": "tenis" , "src": "/product-thumb-4.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" },
        { "key": 5, "category": "tenis" , "src": "/product-thumb-5.jpeg", "name": "Nome do produto", "price": "200", "discount": "30" , "priceDiscount": "149.9" }
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
        <>
        <div className="flex">
            <Gallery images={productsImages} showThumbs="" width='700px' height='570px' radius="4px" />
            <BuyBox name="Prod1" reference="lorem" stars="3" rating="5.5" price="99,90" priceDiscount="87,99" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed, quisquam exercitationem rem dolor cupiditate blanditiis quam commodi pariatur nihil accusamus animi atque quia esse corporis fuga libero! Pariatur, aut."/>
        </div>
        <Section title="Produtos recomendados" titleAlign="left">
            <ProductListing products={highProducts} />
        </Section>
        </>
     );
}
 
export default ProductViewPage;