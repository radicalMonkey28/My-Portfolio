import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';


const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent =  {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Talha</span>👋
            <br/>
            A software engineer student from India.
        </h1>
    ),
    2: (
        <InfoBox
            text="I am a software engineer student from India. I am passionate about web development and I love to create websites and web applications."
            link="/about"
            btnText="More about me"
        />
    ),
    3: (
        <InfoBox
            text="Led multiple projects to success by collaborating with cross-functional teams and stakeholders. I am a software engineer student from India. I am passionate about web development and I love to create websites and web applications."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Contact me for any queries or collaborations. I am a software engineer student from India. I am passionate about web development and I love to create websites and web applications."
            link="/contact"
            btnText="connect with me"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo