import './Logo.scss';
import logoPath from "../../../images/logo.svg";

const Logo = () => (
    <img className="logo" src={logoPath} alt="логотип" />
);

export default Logo;
