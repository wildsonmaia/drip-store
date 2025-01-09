import styled from "styled-components";

const FilterGroup = ({ title, inputType, options }) => {

    return ( 
        <div>
            <div className="" style={{ color: "#474747" }}><b>{title}</b></div>
            <div className="pb-3 list-none">
                {options.map(option =>
                    <li className="mt-1 flex align-items-center" key={option.key}>                        
                        <input style={{ width: "22px", height: "22px" }} type={inputType} name={title} id={option.name} />
                        <label className="ml-1" htmlFor={option.name}>{option.name}</label>
                    </li>
                )}
            </div>
            
        </div>
     );
}
 
export default FilterGroup;