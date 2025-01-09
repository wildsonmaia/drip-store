import Section from "../components/Section"
import ProductListing from "../components/ProductListing"
import FilterGroup from "../components/FilterGroup"

const ProductListingPage = () => {
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

    const marcas = [
        { "key": 1, "name": "Adidas" },
        { "key": 2, "name": "Nike" },
        { "key": 3, "name": "Puma" }
    ]

    const categorias = [
        { "key": 1, "name": "Esporte e lazer" },
        { "key": 2, "name": "Casual" },
        { "key": 3, "name": "Corrida" }
    ]

    const generos = [
        { "key": 1, "name": "Masculino" },
        { "key": 2, "name": "Feminino" },
        { "key": 3, "name": "Unisex" }
    ]

    const estados = [
        { "key": 1, "name": "Novo" },
        { "key": 2, "name": "Usado" }
    ]
    return (
        <div className="w-full flex gap-5 px-2 py-3 justify-content-center" style={{ backgroundColor: "#f0efef" }}>
            <div>
                <div className="" style={{ backgroundColor: "#e75050", color: "#474747", fontSize: "16px", width: "308px", height: "60px" }}>
                    <label htmlFor="ordenar-por"><b>Ordenar por: </b></label>
                    <select style={{ width: "60%" }} name="" id="ordenar-por">
                        <option value="">mais relevantes</option>
                        <option value="">menor preço</option>
                        <option value="">maior preço</option>
                    </select>
                </div>
                <fieldset className="my-3 pb-2" style={{ width: "308px", backgroundColor: "#fffff" }}>
                    <h1 style={{ fontSize: "16px" }}>Filtrar por:</h1>
                    <hr style={{ backgroundColor: "#CCCCCC" }} />
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