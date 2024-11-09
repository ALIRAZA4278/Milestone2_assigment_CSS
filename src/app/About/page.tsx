import React from 'react';
import Image from 'next/image';
import './AboutPage.css'; 

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="hero-section">
                <div className="overlay"></div>
            </div>

            <div className="container">
                <div className="content">
                    <div className="header">
                        <h1 className="title">ABOUT CHOOSEQUALITY </h1>
                    </div>
            <div className='para'>

                    <p className="paragraph">
                        ChoosEquality is committed to providing education that is both free and accessible to everyone, regardless of background, race, or location. We believe that education is a fundamental right and are passionate about breaking down the barriers that prevent individuals from receiving the quality education they deserve.
                    </p>

                    <p className="paragraph">
                        Our team is dedicated to creating innovative educational solutions that reach people in every corner of the world. We offer a range of resources and support services to ensure that no one is left behind. Whether you’re a student, teacher, or community leader, we’re here to help you access the tools and knowledge you need to succeed.
                    </p>

                    <p className="paragraph">
                        We are driven by a vision of a more equitable and inclusive world, where education is available to all. Join us in making this vision a reality—together, we can create an environment where learning knows no bounds.
                    </p>
            </div>
                </div>

                <div className="buttons">
                    <button className="btn">2035 Financial Statement</button>
                    <button className="btn">Certification Registry</button>
                </div>

                <div className="goals-section">
                    <h2 className="goals-title">OUR GOALS</h2>

                    <ul className="goals-list">
                        <li className="goal">
                            <div className="goal-content">
                                <Image src="/AboutGoal1.svg" alt="Logo" width={200} height={200} />
                                <p className="goal-text">Spread empathy <br />through education</p>
                            </div>
                        </li>

                        <li className="goal">
                            <div className="goal-content">
                                <Image src="/AboutGoal2.svg" alt="Logo" width={200} height={200} />
                                <p className="goal-text">Increase donations equally across 24 countries</p>
                            </div>
                        </li>

                        <li className="goal">
                            <div className="goal-content">
                                <Image src="/AboutGoal3.svg" alt="Logo" width={200} height={200} />
                                <p className="goal-text">Help more children and teens graduate from high school</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="image-gallery">
                    <div className="gallery-item"><Image src="/About1.jpg" alt="Aboutimg" width={500} height={500} /></div>
                    <div className="gallery-item"><Image src="/About3.jpg" alt="Aboutimg" width={500} height={500} /></div>
                    <div className="gallery-item"><Image src="/About4.jpg" alt="Aboutimg" width={500} height={500} /></div>
                    <div className="gallery-item"><Image src="/About5.jpg" alt="Aboutimg" width={500} height={500} /></div>
                    <div className="gallery-item"><Image src="/About6.jpg" alt="Aboutimg" width={500} height={500} /></div>
                </div>
            </div>
        </div>
    );
}
