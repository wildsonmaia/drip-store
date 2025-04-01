const ProductOptions = ({ options, radius, shape, type }) => {
    const getStyle = (option) => {
        const baseStyle = {
            width: shape === "square" ? "46px" : "31px",
            height: shape === "square" ? "46px" : "31px",
            border: "1px solid #474747",
            borderRadius: shape === "square" ? radius : "50%",
            backgroundColor: shape === "square" ? "transparent" : option,
            fontSize: type === "text" ? "24px" : "",
            listStyle: "none"
        };
        
        return baseStyle;
    }
    

    return (
            
                <ul className="flex justify-content-start gap-4 p-0 m-0 py-2">
                    {options.map((option, index) => (
                        <li key={index} style={getStyle(option)} >
                            <a
                                className="w-full h-full flex justify-content-center align-items-center no-underline"
                                href="#"
                                style={{ backgroundColor: "transparent", border: "none", color: type === "text" ? "#474747" : "" }}
                            >
                                {shape === "square" ? option : ""}
                            </a>
                        </li>
                    ))}
                </ul>
    );
};

export default ProductOptions;