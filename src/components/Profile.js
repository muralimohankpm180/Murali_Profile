import React from 'react';
import './profile.css'
import img from '../assets/Murali-img.jpg'
export default function profile_page() {

 

    return (
        <div>
            <div className='overall-container'>
                <header id="header">
                    {/* <div className="logo">
                        <a href='#' id="logo">Logo</a>
                    </div> */}
                    <input type="checkbox" id="click" />
                    <label htmlFor="click" className="mainicon">
                        <div className="menu" id="menu">
                            <i className="bi bi-list"></i>
                        </div>
                    </label>
                    <nav>
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>


                    </nav>
                </header>


                <section className='main-section'>
                    <div className="main">
                        <div className="images">
                            <div className="blue-bg-outer">
                                <div className="white-bg">

                                    <div className="blue-bg">
                                        <img src={img} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Information">
                            <h1>Hi, I'm Murali Mohan</h1>
                            <div className="animated_text">
                                <h1 className="title">Web Developer</h1>
                            </div>
                            <p> </p>
                            <div className="social">

                                <a href='mailto:muralikpm180@gmail.com' target='_blank' rel='noreferrer' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg></a>

                                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/murali-mohan-ab3274141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                                </svg></a>
                            </div>
                            {/* <button className="cv-btn" >Download CV</button> */}
                        </div>
                    </div>
                </section>


            </div>

            <section className='expereince-section' id='about'>

                <div className='grid-container' >
                    <div className='first-element' >
                        <h3>Expereince</h3>
                        <h6>Overall 3 Years IT Experience in TCS</h6>
                    </div>
                    <div className='second-element'>

                        <div className="timeline">


                            <div className='container left'>


                                <div className='content'>

                                    <h2>
                                        2023-Present 
                                    </h2>
                                    <div>
                                        <h5> Working as React developer</h5>
                                        <ul>

                                            <li>Developed and Maintained responsive web application using React.js  </li>
                                            <li>Created reusable and modular React components to streamline development and enhance code maintainability. </li>
                                            <li>Integrated RESTful APIs to fetch and update data, improving the real-time functionality of the applications.</li>
                                            <li>Customized the Business workflow for Micro Focus ALM with respect to testing criteria.</li>
                                            <li> Collaboration with cross-functional teams to prioritize the deliverables.</li>
                                        </ul>
                                    </div>
                                </div>
                            
                            </div>
                            <div className='container left'>
                                <div className='content'>

                                    <h2>
                                        2022-2023
                                    </h2>
                                    <div>
                                        
                                        <ul>

                                            
                                            <li>Developed the HTML Email templates for the Business team.</li>
                                            <li>Closely worked with Design time in Implementation of HTML Email’s for Business clients.</li>
                                            <li> Worked with Business clients to collect the Requirements for the Enhancement of Waters E-Notebook application.</li>
                                            <li> Worked with vendor team for the Implementation of E-Notebook Requirements</li>
                                            <li> Acted as the primary point of contact for end-users, promptly addressing and resolving application-related incidents.</li>                                           
                                            <li>Utilize strong troubleshooting skills to identify root causes and implement effective solutions, ensuring minimal impact on business operations.</li>
                                            <li> Ensured adherence to Service Level Agreements (SLAs) for incident response and resolution times.</li>
                                            <li> Prioritize and escalate issues as needed to meet SLA commitments and maintain high level of service availability.</li>

                                        </ul>
                                     
                                    </div>
                                </div>
                                </div>
                        </div>


                    </div>

                </div>


            </section>

        </div>
    )
}