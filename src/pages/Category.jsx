import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import products from "../products.json"

const Category = () => {

  return (
    <div className="w-full" style={{backgroundColor: "#f9f8fe"}}>     
      <ul className="list-none flex justify-content-center gap-5">
        <li><a href="#casual">Casual</a></li>
        <li><a href="#esporte-e-lazer">Esporte e Lazer</a></li>
        <li><a href="#corrida">Corrida</a></li>      
      </ul> 
      <Section id="casual" className="mx-2 my-4" title="Casual">
        <ProductListing products={products} />
      </Section>
      <Section id="esporte-e-lazer" title="Esporte e lazer">
        <ProductListing products={products} />
      </Section>
      <Section id="corrida" title="Corrida">
        <ProductListing products={products} />
      </Section>
    </div>
  )
}

export default Category
