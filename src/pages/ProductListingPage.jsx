import Section from "../components/Section"
import ProductListing from "../components/ProductListing"
import FilterGroup from "../components/FilterGroup"
import products from "../products.json"

const ProductListingPage = () => {
    const highProducts = products

    const marcas = [
        { "key": 1, "text": "Adidas", "value": "" },
        { "key": 2, "text": "Nike", "value": "" },
        { "key": 3, "text": "Puma", "value": "" }
    ]

    const categorias = [
        { "key": 1, "text": "Esporte e lazer", "value": "" },
        { "key": 2, "text": "Casual", "value": "" },
        { "key": 3, "text": "Corrida", "value": "" }
    ]

    const generos = [
        { "key": 1, "text": "Masculino", "value": "" },
        { "key": 2, "text": "Feminino", "value": "" },
        { "key": 3, "text": "Unisex", "value": "" }
    ]

    const estados = [
        { "key": 1, "text": "Novo", "value": "" },
        { "key": 2, "text": "Usado", "value": "" }
    ]
    return (
        <div className="w-full flex gap-5 px-2 py-3 justify-content-center" style={{ backgroundColor: "#f0efef", width: "308px" }}>
            <div>
                <div className="flex justify-content-center align-items-center gap-2" style={{ backgroundColor: "transparent", color: "#919090", fontSize: "16px", width: "auto", height: "60px", borderRadius: "4px", border: "solid 0.1px" }}>
                    <label style={{ color: "#474747" }} htmlFor="ordenar-por"><b>Ordenar por: </b></label>
                    <select style={{ backgroundColor: "transparent", width: "60%" }} name="" id="ordenar-por">
                        <option value="">mais relevantes</option>
                        <option value="">menor preço</option>
                        <option value="">maior preço</option>
                    </select>
                </div>
                <fieldset className="my-3 pb-2" style={{ width: "308px", backgroundColor: "#ffffff", borderRadius: "4px", border: "none" }}>
                    <h1 style={{ fontSize: "16px", color: "#474747" }}>Filtrar por:</h1>
                    <hr style={{ backgroundColor: "#CCCCCC", border: "1px solid" }} />
                    <>
                        <FilterGroup title="Marca" inputType='checkbox' options={ marcas } />
                        <FilterGroup title="Categoria" inputType='checkbox' options={ categorias } />
                        <FilterGroup title="Gênero" inputType='checkbox' options={ generos } />
                        <FilterGroup title="Estado" inputType='radio' options={ estados } />
                    </>
                </fieldset>
            </div>

            <Section className='pl-3 py-4' title={`Resultados para Tênis - 389 produtos`} titleAlign="left">
                <ProductListing products={ highProducts } />
            </Section>

        </div>
    );
}

export default ProductListingPage;