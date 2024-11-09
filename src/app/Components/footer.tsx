import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h1>CONTACT US</h1>
          <p>I&apos;m a paragraph. Click here to add your own text and edit me.</p>
          <p>Registered Charity: 12345-67</p>
          <hr />
          <p>Af912923@gmail.com</p>
          <p>506 fine arcade, 5th floor, garden west karachi</p>
          <p>Phone: +92 321 2865058</p>
          <hr />
          <h6>Terms & Conditions</h6>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <hr />
          <div className="social-links">
            <Link href="https://x.com/AliFaro45370063" target="_blank" rel="noopener noreferrer">
              <Image src="/Twtiier.svg" alt="Twitter" width={30} height={30} />
            </Link>
            <Link href="https://www.facebook.com/ali.farooq.1447342/" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
            </Link>
            <Link href="https://www.instagram.com/its_zyrox_x/" target="_blank" rel="noopener noreferrer">
              <Image src="/Instagram.svg" alt="Instagram" width={30} height={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/ali-raza-4a5762282/" target="_blank" rel="noopener noreferrer">
              <Image src="/Linkedin.svg" alt="LinkedIn" width={30} height={30} />
            </Link>
          </div>
        </div>

        <div className="footer-right">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up to our newsletter to stay informed</p>
          <div className="input-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" id="Email" name="Email" required />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Yes, subscribe me to your newsletter.</label>
          </div>
          <p>Terms & Conditions</p>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <Image src="/HOMELOGO.svg" alt="Logo" width={72} height={16} />
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  )
}
