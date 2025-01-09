import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
    
    return ( 
        <div className="w-full flex flex-wrap gap-5 list-none justify-content-between">
        {products.map((product) => (            
            <li key={product.key}>
                <ProductCard image={product}  />
            </li>
        ))}
        </div>
     );
}
 
export default ProductListing;