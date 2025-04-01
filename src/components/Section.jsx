const Section = ({ title, titleAlign, link, children, className }) => {
    return ( 
        <div className={className}>
            {titleAlign == 'center' ? 
            (<div className="text-center" style={{ color: "#474747", fontSize: "24px" }}>{title}</div>) : 
            (<div className= {`${className} text-left`} style={{ color: "#474747", fontSize: "24px" }}>{title}</div>)}
            <div style={{ color: "#C92071", fontSize: "18px" }}>{link}</div>
            {children}
            
        </div>
     );
}
 
export default Section;