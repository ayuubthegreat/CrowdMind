

const Dropdown = ({title, dropdownOptions = [], functions}) => {
    const id = Math.floor(Math.random() * 1000000);
    console.log(id);
    return (
        <>
        <div className="dropdownParent">
            <button onClick={() => {
                document.getElementById(`${title}--dropdown`).classList.toggle("hidden");
            }}>{title}</button>
            <div id={`${title}--dropdown`} className="dropdown">
                {Array.from(dropdownOptions).map(([one, two], index) => {
                    return (
                      <>
                    <p onClick={() => {
                       document.getElementById(`${title}--dropdown`).classList.toggle("hidden");
                       two(); 
                    }}>{one}</p>
                    </>  
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default Dropdown;