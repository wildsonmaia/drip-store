import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
    
    return ( 
        <div className="w-full flex flex-wrap gap-2 list-none justify-content-between">
        {products.map((product) => (            
            <li className="mb-6" key={product.key}>
                <ProductCard image={product.image} name={product.name} price={product.price} priceDiscount={product.priceDiscount} discount={product.discount} category={product.category} />
            </li>
        ))}
        </div>
     );
}
 
export default ProductListing;