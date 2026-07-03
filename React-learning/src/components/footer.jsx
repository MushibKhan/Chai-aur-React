import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      {/*
        ╔══════════════════════════════════════════════════════════════╗
        ║  🎨 FOOTER COLOR SECTION 1: MAIN FOOTER BACKGROUND           ║
        ║  Change "bg-dark" to: bg-primary | bg-secondary | bg-black   ║
        ║  Or use custom: style={{ backgroundColor: '#bdbdee' }}     ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      <div className="bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row gy-4">
            
            {/* Column 1: Brand & About */}
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                {/*
                  ╔══════════════════════════════════════════════════════════════╗
                  ║  🖼️  PNG IMAGE 1: COMPANY LOGO                               ║
                  ║  Replace src="/images/logo-white.png" with your actual path  ║
                  ║  Recommended size: 180x60px, transparent background          ║
                  ╚══════════════════════════════════════════════════════════════╝
                */}
                <img 
                  src="/images/e-learning-.jpg"
                  alt="Company Logo" 
                  className="img-fluid mb-3"
                  style={{ maxHeight: '50px' }}
                />
              </div>
              <p className="text-secondary">
                We deliver exceptional digital solutions that transform businesses 
                and create lasting value for our clients worldwide.
              </p>
              <div className="d-flex gap-3 mt-3">
                {/*
                  ╔══════════════════════════════════════════════════════════════╗
                  ║  🖼️  PNG IMAGE 2-5: SOCIAL MEDIA ICONS                        ║
                  ║  Replace these with your custom PNG social icons               ║
                  ║  Recommended size: 32x32px                                   ║
                  ╚══════════════════════════════════════════════════════════════╝
                */}
                <a href="#" className="text-white hover-opacity">
                  <img src="/images/facebook.png" alt="Facebook" width="24" height="24" /> 
                </a>
                <a href="#" className="text-white hover-opacity">
                  <img src="/images/twitter.png" alt="Twitter" width="24" height="24" />
                </a>
                <a href="#" className="text-white hover-opacity">
                  <img src="/images/instagram.png" alt="Instagram" width="24" height="24" />
                </a>
                <a href="#" className="text-white hover-opacity">
                  <img src="/images/linkedin.png" alt="LinkedIn" width="24" height="24" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-lg-2 col-md-6">
              {/*
                ╔══════════════════════════════════════════════════════════════╗
                ║  🎨 FOOTER COLOR SECTION 2: HEADING COLOR                      ║
                ║  Change "text-primary" to: text-info | text-warning | etc.     ║
                ╚══════════════════════════════════════════════════════════════╝
              */}
              <h5 className="text-primary fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none hover-white">Home</Link></li>
                <li className="mb-2"><Link to="/about" className="text-secondary text-decoration-none hover-white">About Us</Link></li>
                <li className="mb-2"><Link to="/services" className="text-secondary text-decoration-none hover-white">Services</Link></li>
                <li className="mb-2"><Link to="/portfolio" className="text-secondary text-decoration-none hover-white">Portfolio</Link></li>
                <li className="mb-2"><Link to="/blog" className="text-secondary text-decoration-none hover-white">Blog</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-primary fw-bold mb-3">Contact Us</h5>
              <ul className="list-unstyled text-secondary">
                <li className="mb-3 d-flex align-items-start">
                  {/*
                    ╔══════════════════════════════════════════════════════════════╗
                    ║  🖼️  PNG IMAGE 6: LOCATION/ADDRESS ICON                        ║
                    ║  Replace with your custom location pin PNG                     ║
                    ╚══════════════════════════════════════════════════════════════╝
                  */}
                  <img 
                    src="/images/map.png" 
                    alt="Location" 
                    width="20" 
                    height="20" 
                    className="me-2 mt-1 flex-shrink-0"
                  />
                  <span>123 Business Avenue, Suite 456<br />New York, NY 10001, USA</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  {/*
                    ╔══════════════════════════════════════════════════════════════╗
                    ║  🖼️  PNG IMAGE 7: PHONE ICON                                   ║
                    ╚══════════════════════════════════════════════════════════════╝
                  */}
                  <img 
                    src="/images/icon-phone.png" 
                    alt="Phone" 
                    width="20" 
                    height="20" 
                    className="me-2 flex-shrink-0"
                  />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  {/*
                    ╔══════════════════════════════════════════════════════════════╗
                    ║  🖼️  PNG IMAGE 8: EMAIL ICON                                   ║
                    ╚══════════════════════════════════════════════════════════════╝
                  */}
                  <img 
                    src="/images/icon-email.png" 
                    alt="Email" 
                    width="20" 
                    height="20" 
                    className="me-2 flex-shrink-0"
                  />
                  <span>contact@myapp.com</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  {/*
                    ╔══════════════════════════════════════════════════════════════╗
                    ║  🖼️  PNG IMAGE 9: CLOCK/WORKING HOURS ICON                    ║
                    ╚══════════════════════════════════════════════════════════════╝
                  */}
                  <img 
                    src="/images/icon-clock.png" 
                    alt="Hours" 
                    width="20" 
                    height="20" 
                    className="me-2 flex-shrink-0"
                  />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter / Map */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-primary fw-bold mb-3">Newsletter</h5>
              <p className="text-secondary mb-3">
                Subscribe to get the latest updates and news.
              </p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email address"
                />
                {/*
                  ╔══════════════════════════════════════════════════════════════╗
                  ║  🎨 FOOTER COLOR SECTION 3: SUBSCRIBE BUTTON COLOR           ║
                  ║  Change "btn-primary" to customize the subscribe button        ║
                  ╚══════════════════════════════════════════════════════════════╝
                */}
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
              
              {/*
                ╔══════════════════════════════════════════════════════════════╗
                ║  🖼️  PNG IMAGE 10: PAYMENT METHODS / TRUST BADGES              ║
                ║  Replace with your payment provider PNG logos                  ║
                ║  Recommended: visa.png, mastercard.png, paypal.png, etc.       ║
                ╚══════════════════════════════════════════════════════════════╝
              */}
              <div className="mt-3">
                <p className="text-secondary small mb-2">We Accept:</p>
                <div className="d-flex gap-2">
                  <img src="/images/visa.png" alt="Visa" height="30" />
                  <img src="/images/logo.png" alt="Mastercard" height="30" />
                  <img src="/images/paypal.png" alt="PayPal" height="30" />
                  <img src="/images/amex.png" alt="Amex" height="30" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*
        ╔══════════════════════════════════════════════════════════════╗
        ║  🎨 FOOTER COLOR SECTION 4: BOTTOM BAR BACKGROUND              ║
        ║  Change "bg-black" to customize the copyright bar color        ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      <div className="bg-black py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-secondary mb-0 small">
                © {new Date().getFullYear()} MyApp. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Link to="/privacy" className="text-secondary text-decoration-none small me-3 hover-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary text-decoration-none small hover-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;