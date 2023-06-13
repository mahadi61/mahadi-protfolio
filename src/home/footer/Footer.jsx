import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[url(/rainbow-vortex.png)]  text-white">
        <div className="text-center">
          <h1 className="text-white text-5xl capitalize">Contact With Me</h1>
          <h1 className="text-white ">mahadihasan8461@gmail.com</h1>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <Link to="https://www.linkedin.com/in/mahadihasan61/">
              <BsLinkedin />
            </Link>
            <Link>
              <BsWhatsapp />
            </Link>
            <Link to="https://www.facebook.com/mthmahadi/">
              <BsFacebook />
            </Link>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Md Mahadi Hasan</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
