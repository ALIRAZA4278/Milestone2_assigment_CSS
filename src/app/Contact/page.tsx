import React from 'react';
import './ContactPage.css';


export default function ContactPage() {
    return (
        <div className="contact-page-container">
            <div className="hero">
                <div className="hero-overlay"></div>
            </div>

            <div className="content-container">
                <div className="content-header">
                    <h1 className="title">CONTACT US</h1>
                    <p className=" paragraph">
                        We&apos;d love to hear from you! Please choose how you&apos;d like to get involved.
                    </p>
                </div>

                {/* Volunteer Form */}
                <div className="form-section" id="volunteer-form">
                    <h2 className="form-heading">Volunteer with Us</h2>
                    <form className="form">
                        <input type="text" placeholder="Your Name" className="input" />
                        <input type="email" placeholder="Your Email" className="input" />
                        <input type="tel" placeholder="Your Phone Number" className="input" />
                        <textarea placeholder="Why do you want to volunteer with us?" className="textarea" />
                        <textarea placeholder="Availability (Days/Times)" className="textarea" />
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>

                {/* Partner Form */}
                <div className="form-section" id="partner-form">
                    <h2 className="form-heading">Partner with Us</h2>
                    <form className="form">
                        <input type="text" placeholder="Organization Name" className="input" />
                        <input type="text" placeholder="Contact Name" className="input" />
                        <input type="email" placeholder="Your Email" className="input" />
                        <textarea placeholder="Tell us about your partnership proposal" className="textarea" />
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>

                {/* Contribute Form */}
                <div className="form-section" id="contribute-form">
                    <h2 className="form-heading">Make a Donation</h2>
                    <form className="form">
                        <input type="text" placeholder="Your Name" className="input" />
                        <input type="email" placeholder="Your Email" className="input" />
                        <input type="number" placeholder="Donation Amount" className="input" />
                        <textarea placeholder="Additional Comments (Optional)" className="textarea" />
                        <button type="submit" className="submit-btn">Donate</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
