import { ArrowBigDown, Icon } from "lucide-react";




const Midsection = ({index, title, desc, headerSize}) => {
return (
    <>
    <div className="midSection">
        {index != null && <h3 className="icon1">{index}</h3>}
        <h3 style={{marginBottom : 0, fontSize : headerSize}}>{title}</h3>
        <p>{desc}</p>
    </div>
    </>
)
} 

export default Midsection;