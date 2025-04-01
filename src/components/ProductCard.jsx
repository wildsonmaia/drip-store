const ProductCard = ({ image, name, price, priceDiscount, discount, category }) => {
    return (
        <div className="relative flex-column justify-content-center aligh-items-center">

            <img src={image} style={{ width: "292px", height: "321px" }} />

            <p className="absolute p-1 border-round text-center" style={{ backgroundColor: "#E7FF86", fontSize: "14px", top: "1%", left: "5%", width: "25%" }}>{discount}% OFF</p>
            <p>{category}</p>
            <p>{name}</p>

            <div>
                {priceDiscount ? 
                <div className="flex gap-3">
                    <h3 style={{ color: "#CCCCCC", fontSize: "24px" }}><s>$ {price}</s></h3>
                    <h3 style={{ color: "#474747", fontSize: "24px" }}>$ {priceDiscount}</h3>
                </div> 
                : <h3 style={{ color: "#474747", fontSize: "24px" }}>$ {price}</h3>}
            
            </div>

        </div>
    );
}

export default ProductCard;