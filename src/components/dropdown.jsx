import { Check } from "lucide-react";


const Dropdown = ({title, dropdownOptions = [], integerForCheckBox, ID}) => {
    return (
        <>
        <div className="dropdownParent">
            <button onClick={() => {
                document.getElementById(`${ID}--dropdown`).classList.toggle("hidden");
            }}>{title}</button>
            <div id={`${ID}--dropdown`} className="dropdown">
                {Array.from(dropdownOptions).map(([one, two], index) => {
                    return (
                      <>
                    <p onClick={() => {
                       document.getElementById(`${ID}--dropdown`).classList.toggle("hidden");
                       two(); 
                    }}>{index === integerForCheckBox && <Check></Check>}{one}</p>
                    </>  
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default Dropdown;