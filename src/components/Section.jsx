const Section = ({ title, titleAlign, link, children, className }) => {
    return ( 
        <div className="">
            {titleAlign == 'center' ? 
            (<div className="text-center">{title}</div>) : 
            (<div className= {`${className} text-left`}>{title}</div>)}
            {link}
            {children}
            
        </div>
     );
}
 
export default Section;