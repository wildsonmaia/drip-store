import leftArrow from "../assets/arrow-left.svg"
import rightArrow from "../assets/arrow-right.svg"
import React, { useState, useEffect } from "react";
import { Galleria } from 'primereact/galleria';

const Gallery = ({ images, showThumbs, width, height, radius }) => {

    const [image, setImage] = useState(null);
    
    useEffect(() => {
        images.map((data) => setImage(data));
    }, []); 

    const itemTemplate = (item) => {
        return <img src={item.src} style={{ width: '100%' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnails} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    return (
        <div className="relative flex justify-content-center align-items-center">
            <Galleria className="mx-3" value={images} width={width} height={height} showThumbnails showIndicators={true}  item={itemTemplate} thumbnailsPosition="bottom" thumbnail={thumbnailTemplate}  />
            <button className="absolute border-none border-round-sm h-3rem" style={{ top: "50%", left: "5%", backgroundColor: "#C92071", color: "#ffffff" }}>Ver Ofertas</button>
        </div>
     );
}
 
export default Gallery;