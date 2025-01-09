const Informations = ({ title, informations }) => {
    const infos = [
        {
            "text": "Sobre Drip Store",
            "link": "/about"
        },
        {
            "text": "Blog",
            "link": "/blog"
        }
    ]
    return ( 
        <div>
            {title}
            {informations}
        </div>
     );
}
 
export default Informations;