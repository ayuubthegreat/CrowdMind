import { Link } from "react-router-dom";

const LinksCustom = ({linksMap, backgroundColor = "white"}) => {
    return(
        <>
        <div className="buttonContainer">
            {Array.from(linksMap).map(([href, label]) => (
                <Link style={{backgroundImage: `linear-gradient(90deg, ${backgroundColor})`}} to={href}>{label}</Link>
            ))}
        </div>
        </>
    )
}
export default LinksCustom;