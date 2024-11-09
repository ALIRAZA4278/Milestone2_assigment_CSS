import React from 'react';
import Image from 'next/image';
import './NewsPage.css';

export default function NewsPage() {
  return (
    <div className="news-page-container">

      <div className="hero">
        <div className="hero-overlay"></div>
      </div>

      <div className="content-container">
        <div className="section-heading">
          <h1 className="title">NEWS & UPDATES</h1>
        </div>

        <p className="paragraph">
          Explore the latest stories, updates, and events from our community. Stay informed with what matters most.
        </p>

        <div className="news-grid">
          {/* News Card 1 */}
          <div className="news-card">
            <div className="news-card-content">
              <div className="news-card-image">
                <Image
                  src="/News1.jpg"
                  alt="Annual Tech Challenge"
                  layout="fill"
                  objectFit="cover"
                  className="news-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="news-card-body">
                <h6 className="news-date">Jun 1, 2023</h6>
                <h2 className="news-title">10 Reasons Why School Uniforms Matter</h2>
                <p className="news-description">
                  Discover how school uniforms can contribute to discipline, equality, and a focused learning environment.
                </p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="news-card">
            <div className="news-card-content">
              <div className="news-card-image">
                <Image
                  src="/News2.jpg"
                  alt="Adopt a Student"
                  layout="fill"
                  objectFit="cover"
                  className="news-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="news-card-body">
                <h6 className="news-date">Nov 1, 2023</h6>
                <h2 className="news-title">The Role of Sports in the Education System</h2>
                <p className="news-description">
                  How sports programs enhance learning, foster teamwork, and contribute to student well-being.
                </p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="news-card">
            <div className="news-card-content">
              <div className="news-card-image">
                <Image
                  src="/News3.jpg"
                  alt="Transportation for Youth"
                  layout="fill"
                  objectFit="cover"
                  className="news-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="news-card-body">
                <h6 className="news-date">Oct 1, 2023</h6>
                <h2 className="news-title">Protecting Our Children&apos;s Privacy</h2> {/* Escaped apostrophe */}
                <p className="news-description">
                  Learn how we can ensure children&apos;s safety online in a rapidly changing digital world. {/* Escaped apostrophe */}
                </p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>

          {/* News Card 4 */}
          <div className="news-card">
            <div className="news-card-content">
              <div className="news-card-image">
                <Image
                  src="/News4.jpg"
                  alt="English for All"
                  layout="fill"
                  objectFit="cover"
                  className="news-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="news-card-body">
                <h6 className="news-date">May 1, 2023</h6>
                <h2 className="news-title">Spring 2023 High School Curriculum</h2>
                <p className="news-description">
                  Take a look at the Spring 2023 curriculum update for high school students.
                </p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>

          {/* News Card 5 */}
          <div className="news-card">
            <div className="news-card-content">
              <div className="news-card-image">
                <Image
                  src="/News5.jpg"
                  alt="English for All"
                  layout="fill"
                  objectFit="cover"
                  className="news-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="news-card-body">
                <h6 className="news-date">Aug 1, 2023</h6>
                <h2 className="news-title">Recent Classrooms Renovations</h2>
                <p className="news-description">
                  Take a look at the Spring 2023 curriculum update for high school students.
                </p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>

          {/* News Card 6 */}
          <div className="news-card">
            <div className="news-card-content">
              <div className="news-card-image">
                <Image
                  src="/News6.jpg"
                  alt="English for All"
                  layout="fill"
                  objectFit="cover"
                  className="news-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="news-card-body">
                <h6 className="news-date">Jul 1, 2023</h6>
                <h2 className="news-title">New Auditorium Launched in Luanda</h2>
                <p className="news-description">
                  Take a look at the Spring 2023 curriculum update for high school students.
                </p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
