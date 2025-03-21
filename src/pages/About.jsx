import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text mt-8">
        hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Talha Hameed</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer with a passion for web development. I have experience in building web applications using modern technologies like React, Node.js, and Express.js. I am always eager to learn new technologies and improve my skills. I am a quick learner and a team player who is always ready to help others. I am looking for a challenging role in a company where I can grow and contribute to the success of the company.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill)=>(
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Software Engineer with a passion for web development. I have experience in building web applications using modern technologies like React, Node.js, and Express.js. I am always eager to learn new technologies and improve my skills. I am a quick learner and a team player who is always ready to help others. I am looking for a challenging role in a company where I can grow and contribute to the success of the company.
          </p>
      </div>

      <div className="mt-12 flex"></div>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
              key= {experience.company_name}
              date= {experience.date}
              icon={<div className="flex justify-center items-center w-full h-full">
                <img 
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
                />
              </div>}
              iconStyle={{
                background: experience.iconBg
              }}
              contentStyle={{ 
                borderBottom:'8px',
                borderStyle:'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
               }}
              
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base"
                  style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className ="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
      </div>

      <hr className="border-slate-200"/>

      <CTA/>
    </section>
  )
}

export default About

