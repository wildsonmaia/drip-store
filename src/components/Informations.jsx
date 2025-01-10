const Informations = ({ title, informations }) => {
    return ( 
        <div className="p-0 m-0">
            <h2>{title}</h2>
            <ul className="list-none m-0 p-0">
                {informations.map((info, key) => (
                    <li className="flex-wrap" key={key}><a href={info.link}>{info.text}</a></li>
                ))}
            </ul>
        </div>
     );
}
 
export default Informations;