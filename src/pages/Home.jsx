import Gallery from "../components/Gallery"
import Section from "../components/Section";
import ProductListing from "../components/ProductListing"
import collection from "../collection.json"
import gallery from "../gallery.json"
import products from "../products.json"

const Home = () => {
    
    return (
        <div className="w-full">
            <Gallery classname="w-full flex align-items-center justify-content-center" images={gallery} width="1400px" height="550px" radius="4px" />
            
            <Section className="mt-4" title="Coleções em destaque" titleAlign="center" link="" >
            <div className="py-4 w-full flex justify-content-center gap-4 list-none">
                {collection.map((product) => (
                    <li key={product.key} ><img style={{ borderRadius: "4px" }} src={product.src} /></li>
                ))}
            </div>
            </Section>

            <Section  className="mx-4" title="Produtos em alta" titleAlign="left" link="" >
                <ProductListing products={products} />
            </Section>
            
        </div>
    );
}

export default Home;