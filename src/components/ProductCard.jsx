const ProductCard = ({ image }) => {
    return (
        <div className="relative flex-column justify-content-center aligh-items-center">

            <img src={image.src} style={{ width: "292px", height: "321px" }} />

            <p className="absolute p-1 border-round text-center" style={{ backgroundColor: "#E7FF86", fontSize: "14px", top: "1%", left: "5%", width: "25%" }}>{image.discount}% OFF</p>
            <p>{image.category}</p>
            <p>{image.name}</p>

            <div>
                {image.priceDiscount ? 
                <div className="flex gap-3">
                    <h3 style={{ color: "#CCCCCC", fontSize: "24px" }}><s>$ {image.price}</s></h3>
                    <h3 style={{ color: "#474747", fontSize: "24px" }}>$ {image.priceDiscount}</h3>
                </div> 
                : <h3 style={{ color: "#474747", fontSize: "24px" }}>$ {image.price}</h3>}
            
            </div>

        </div>
    );
}

export default ProductCard;