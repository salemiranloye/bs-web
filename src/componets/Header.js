import logo from "./Logo.png";
import {Link} from "react-router-dom";

const Header = () => {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="Bullsh!t Logo" />
          <span className="site-name">Bias Summary</span>
        </div>
        <nav>
          <ul>
            <li>
            <Link to="/">
              <a>Home</a>
            </Link>
            </li>
            <li>
            <Link to="/about">
              <a>About Us</a>
            </Link>
            </li>
          </ul>
        </nav>
        <style jsx>{`
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #333;
            color: #fff;
          }
  
          .logo {
            display: flex;
            align-items: center;
          }
  
          .logo img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
          }
  
          .site-name {
            font-size: 24px;
            font-weight: bold;
          }
  
          nav ul {
            list-style: none;
            display: flex;
          }
  
          nav li {
            margin-right: 20px;
          }
  
          nav a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
          }
  
          nav a:hover {
            text-decoration: underline;
          }
        `}</style>
      </header>
    );
  };
  
  export default Header;