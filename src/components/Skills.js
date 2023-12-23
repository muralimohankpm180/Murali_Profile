// YourSkillsComponent.js

import React from 'react';
import './Skillstyles.css'; // Import your styles

const Skills = () => {
    return (
        <div className="skills-container" id='skills'>



            <div className='first-element' >
                <h3>Skills</h3>
                
            </div>
            <div className='second-element'>
                <h3>Programming Skills</h3>
                <div className="skill-item">
                    <div className="skill-title">React</div>
                    <div className="skill-level">
                        <div className="skill-level-bar" style={{ width: '80%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-title">NodeJS</div>
                    <div className="skill-level">
                        <div className="skill-level-bar" style={{ width: '75%' }}></div>


                    </div>

                </div>
                <div className="skill-item">
                    <div className="skill-title">C-language</div>
                    <div className="skill-level">
                        <div className="skill-level-bar" style={{ width: '75%' }}></div>


                    </div>

                </div>

                <h3>Interpersonal Skills</h3>
                <div className='skill-content'>
                    Team collaboration and Team managment, <br/>Good communication, analytical skills

                </div>
            </div>

            {/* Add more skills as needed */}
        </div>
    );
};

export default Skills;
