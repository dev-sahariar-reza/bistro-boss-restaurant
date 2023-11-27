import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="boss-footer">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#1F2937] p-6">
          <h3 className="boss-footer-heading">Contact Us</h3>
          <p className="boss-footer-text">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="boss-footer-text">+88 123456789</p>
          <p className="boss-footer-text">Mon - Fri: 08:00 - 22:00</p>
          <p className="boss-footer-text">Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] p-6">
          <h3 className="boss-footer-heading">Follow Us</h3>
          <p className="boss-footer-text">Join us on social media</p>
          <div className="flex justify-center">
            <span className="boss-footer-icon">
              <Link>
                <FaFacebookF />
              </Link>
            </span>

            <span className="boss-footer-icon">
              <Link>
                <FaInstagram />
              </Link>
            </span>

            <span className="boss-footer-icon">
              <Link>
                <FaXTwitter />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <p className="boss-copyright">
        Copyright © 2023 Bistro Boss Restaurant - All right reserved
      </p>
    </section>
  );
};

export default Footer;
