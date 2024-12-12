// import './index.css'
import Logo from './logo.svg';

function LogoBlock() {
    return (
      <div className="logo-slide">
        <img src={Logo} alt="Facebook Logo" className="logo"></img>
        
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
    );
  }
  
  export default LogoBlock;