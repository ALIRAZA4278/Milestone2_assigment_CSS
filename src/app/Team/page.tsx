import React from 'react';
import Image from 'next/image';
import './TeamPage.css';

export default function Page() {
  return (
    <div className="page-container">

      <div className="hero">
        <div className="hero-overlay"></div>
      </div>

      <div className="content-container">
        <div className="section-heading">
          <h1 className="title ">OUR TEAM</h1>
        </div>

        <p className="paragraph ">
          I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you.
        </p>

        <div className="team-grid">
          {/* TEAM Card 1 */}
          <div className="team-card">
            <Image
              src="/Team1.jpg"
              alt="Annual Tech Challenge"
              width={150}
              height={150}
              className="team-image"
            />
            <div className="team-card-content">
              <h2 className="team-member-name">James Hogan</h2>
              <p className="team-member-description">
                James Hogan
                This item is connected to a text field in your content collection. Double click to add your own content.
              </p>
              <button className="contact-button">af912923@gmail.com</button>
            </div>
          </div>

          {/* TEAM Card 2 */}
          <div className="team-card">
            <Image
              src="/Team6.jpg"
              alt="Adopt a Student"
              width={150}
              height={150}
              className="team-image"
            />
            <div className="team-card-content">
              <h2 className="team-member-name">Nitin Chet</h2>
              <p className="team-member-description">
                James Hogan
                This item is connected to a text field in your content collection. Double click to add your own content.
              </p>
              <button className="contact-button">af912923@gmail.com</button>
            </div>
          </div>

          {/* TEAM Card 3 */}
          <div className="team-card">
            <Image
              src="/Team3.jpg"
              alt="Transportation for Youth"
              width={150}
              height={150}
              className="team-image"
            />
            <div className="team-card-content">
              <h2 className="team-member-name">Jeanette Dhay</h2>
              <p className="team-member-description">
                James Hogan
                This item is connected to a text field in your content collection. Double click to add your own content.
              </p>
              <button className="contact-button">af912923@gmail.com</button>
            </div>
          </div>

          {/* TEAM Card 4 */}
          <div className="team-card">
            <Image
              src="/Team4.jpg"
              alt="English for All"
              width={150}
              height={150}
              className="team-image"
            />
            <div className="team-card-content">
              <h2 className="team-member-name">Katie Franklin</h2>
              <p className="team-member-description">
                James Hogan
                This item is connected to a text field in your content collection. Double click to add your own content.
              </p>
              <button className="contact-button">af912923@gmail.com</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
