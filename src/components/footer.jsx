import LinksCustom from "./links";
import Logo from "./logo";


const Footer = () => {
    return (
        <nav className="footer">
            <div className="footer_div">
              <Logo logoSize={20} />
            <LinksCustom linksMap={new Map([
                ["/", "Home"],
                ["/privacyPolicy", "Privacy Policy"],
                ["/termsofservice", "Terms of Service"],
                ["/contact", "Contact"],
            ])}></LinksCustom>  
            </div>
            <div className="footer_div">
             <p>(c) 2025 Gabi School, Ayuub Yusuf, and Anisa Mohamed Ali.</p>   
            </div>
        </nav>
    );
}

export default Footer;