import ProductOptions from "./ProductOptions";
import "primeicons/primeicons.css";

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description }) => {
   const renderStars = () => {
      let starElements = [];
      for (let i = 0; i < stars; i++) {
         starElements.push(<i key={i} style={{ fontSize:"14px", color: "#F6AA1C" }} className="pi pi-star-fill"></i>);
      }
      return starElements;
   }

   const optionsSize = [ "39", "40", "41", "42" ]
   
   const optionsColor = [ "#000", "#fffff", "#2698bb", "#bb267d" ]

   return (
      <div className="flex flex-column justify-content-between" style={{ height: "570px" }}>
         <div style={{ fontSize: "32px", color: "#1F1F1F" }}>{name}</div>
         {
            reference != "" && (
               <div style={{ fontSize: "12px", color: "#666666" }}>
                  {reference}
               </div>
            )
         }
         <div className="flex align-items-center gap-2">
            <div>{renderStars()}</div>
            <div className="flex justify-content-center align-items-center gap-2" style={{ backgroundColor:"#F6AA1C", color:"#ffffff", borderRadius:"4px", fontSize: "14px" }}><p className="my-1 ml-3">{rating}</p> <i className="my-1 mr-3 pi pi-star"></i></div>
            {/* {
               rating != "" && (
                  <>
                     {rating}
                  </>
               )
            } */}
         </div>
         <div className="flex">
            {
               priceDiscount != "" ? (
                  <div className="flex align-items-center gap-2">
                     <div style={{ fontSize: "32px", color: "#474747" }}>R$ {priceDiscount}</div> <div style={{ fontSize: "16px", color: "#CCCCCC" }}><s>{price}</s></div>
                  </div>
               ) : (
                  <div style={{ fontSize: "32px", color: "#474747" }}>
                     R$ {price}
                  </div>
               )
            }
         </div>
         <div className="flex-wrap"><h1>Descrição do produto</h1><p style={{ fontSize: "14px", color: "#474747" }}>{description}</p></div>
         <ProductOptions options={optionsSize} shape="square" radius="8px" type="text" />
         <ProductOptions options={optionsColor} shape="circle" radius="" type="color" />
         <button style={{ backgroundColor: "#F6AA1C", color: "#ffffff", fontSize: "16px", width: "35%", height: "10%", borderRadius: "6px", border: "none" }}>COMPRAR</button>
      </div>
   );
}

export default BuyBox;