import React, { useState } from "react"

const Gallery = ({ images, showThumbs, width, height, radius }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="w-auto relative flex flex-column justify-content-center align-items-center">
            
            <div className="relative flex flex-column justify-content-center align-items-center">
                {
                    currentIndex == 0 ? (<button style={{ position: "absolute", top: "50%", left: "3%", transform: "translateY(-50%)", background: "none", border: "none" }}>
                        <i className="pi pi-chevron-left" style={{ width: "14", height: "24", color: "#a7a7a7" }}></i>
                    </button>) : (<button onClick={prevImage} style={{ position: "absolute", top: "50%", left: "3%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer" }}>
                        <i className="pi pi-chevron-left" style={{ width: "14", height: "24", color: "#C92071" }}></i>
                    </button>)
                }
                <img src={images[currentIndex].src} alt={`slide-${currentIndex}`} style={{ width, height, borderRadius:(radius) }} />
                {
                    currentIndex == images.length - 1 ? (<button style={{ position: "absolute", top: "50%", right: "3%", transform: "translateY(-50%)", background: "none", border: "none" }}>
                        <i className="pi pi-chevron-right" style={{ width: "14", height: "24", color: "#a7a7a7" }}></i>
                    </button>) : (<button onClick={nextImage} style={{ position: "absolute", top: "50%", right: "3%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer" }}>
                        <i className="pi pi-chevron-right" style={{ width: "14", height: "24", color: "#C92071" }}></i>
                    </button>)
                }
            </div>
            {showThumbs && (
                <div style={{ width, display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`thumbnail-${index}`}
                            style={{ width: "117px", height: "95px", margin: "0 5px", cursor: "pointer", borderRadius:(radius), border: currentIndex === index ? "2px solid #C92071" : "none" }}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery