


const Header = ({title, desc, headerSize, width}) => {
    return(
        <>
        <div className="header">
            <h3 style={{fontSize : (headerSize / (width < 600 ? 2 : 1)) , marginBottom : 0}}>{title}</h3>
            <p>{desc}</p>
        </div>
        </>
    )
}
export default Header;