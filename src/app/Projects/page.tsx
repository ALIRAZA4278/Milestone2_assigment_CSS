import React from 'react';
import Image from 'next/image';
import './ProjectPage.css'; 

export default function ProjectPage() {
    return (
        <div className="project-page-container">
            <div className="project-header">
                <div className="overlay"></div>
            </div>

            <div className="project-content">
                <div className="section">
                    <div className="text-center">
                        <h1 className="title">OUR PROJECTS</h1>
                    </div>

  
                    <p className="description paragraph">
                        I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you.
                    </p>

                    <div className="projects-grid">
                        <ul className="projects-list">
                            {/* Project Card 1 */}
                            <li className="project-card">
                                <Image
                                    src="/Project1.jpg"
                                    alt="Annual Tech Challenge"
                                    width={300}
                                    height={200}
                                    className="project-image"
                                />
                                <div className="project-details">
                                    <h2 className="project-title">Annual Tech Challenge</h2>
                                    <p className="project-description">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="read-more-button">READ MORE</button>
                                </div>
                            </li>

                            {/* Project Card 2 */}
                            <li className="project-card">
                                <Image
                                    src="/Project2.jpg"
                                    alt="Adopt a Student"
                                    width={300}
                                    height={200}
                                    className="project-image"
                                />
                                <div className="project-details">
                                    <h2 className="project-title">Adopt a Student</h2>
                                    <p className="project-description">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="read-more-button">READ MORE</button>
                                </div>
                            </li>

                            {/* Project Card 3 */}
                            <li className="project-card">
                                <Image
                                    src="/Project3.jpeg"
                                    alt="Transportation for Youth"
                                    width={300}
                                    height={200}
                                    className="project-image"
                                />
                                <div className="project-details">
                                    <h2 className="project-title">Transportation for Youth</h2>
                                    <p className="project-description">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="read-more-button">READ MORE</button>
                                </div>
                            </li>

                            {/* Project Card 4 */}
                            <li className="project-card">
                                <Image
                                    src="/Project4.jpg"
                                    alt="English for All"
                                    width={300}
                                    height={200}
                                    className="project-image"
                                />
                                <div className="project-details">
                                    <h2 className="project-title">English for All</h2>
                                    <p className="project-description">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="read-more-button">READ MORE</button>
                                </div>
                            </li>

                            {/* Project Card 5 */}
                            <li className="project-card">
                                <Image
                                    src="/Project5.jpg"
                                    alt="Literacy Development"
                                    width={300}
                                    height={200}
                                    className="project-image"
                                />
                                <div className="project-details">
                                    <h2 className="project-title">Literacy Development</h2>
                                    <p className="project-description">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="read-more-button">READ MORE</button>
                                </div>
                            </li>

                            {/* Project Card 6 */}
                            <li className="project-card">
                                <Image
                                    src="/Project6.jpg"
                                    alt="Tolerance and Fair Play"
                                    width={300}
                                    height={200}
                                    className="project-image"
                                />
                                <div className="project-details">
                                    <h2 className="project-title">Tolerance and Fair Play</h2>
                                    <p className="project-description">This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                                    <button className="read-more-button">READ MORE</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
