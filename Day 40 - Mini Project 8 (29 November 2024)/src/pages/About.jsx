import React from "react";
import PhotoAbout from "../assets/images/photo-about.jpg";

function About() {
  return (
    <div>
      <div className="border-b-2">
        <h1 className="text-black-cstm dark:text-white text-[70px] md:text-[150px] text-center font-bold pb-4">
          John Doe
        </h1>
      </div>
      <img
        src={PhotoAbout}
        alt="John Doe"
        className="w-full h-[300px] md:h-[500px] object-cover mb-4"
      />
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-base">
          As a passionate and experienced UI designer, I am dedicated to
          creating intuitive and engaging user experiences that meet the needs
          of my clients and their users. I have a strong understanding of design
          principles and a proficiency in design tools, and I am comfortable
          working with cross-functional teams to bring projects to fruition. I
          am confident in my ability to create designs that are both visually
          appealing and functional, and I am always looking for new challenges
          and opportunities to grow as a designer.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-6 text-base">
          <li>
            Extensive experience in UI design, with a strong portfolio of
            completed projects
          </li>
          <li>
            Proficiency in design tools such as Adobe Creative Suite and Sketch
          </li>
          <li>
            Excellent visual design skills, with a strong understanding of
            layout, color theory, and typography
          </li>
          <li>
            Ability to create wireframes and prototypes to communicate design
            concepts
          </li>
          <li>
            Strong communication and collaboration skills, with the ability to
            work effectively with cross-functional teams
          </li>
          <li>
            Experience conducting user research and gathering insights to inform
            design decisions
          </li>
          <li>Proficiency in HTML, CSS, and JavaScript</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc pl-6">
          <li>
            5 years of experience as a UI designer, working on a variety of
            projects for clients in the tech and retail industries
          </li>
          <li>
            Led the design of a successful e-commerce website, resulting in a
            25% increase in online sales
          </li>
          <li>
            Created wireframes and prototypes for a mobile banking app, leading
            to a 20% increase in app usage
          </li>
          <li>
            Conducted user research and usability testing to inform the redesign
            of a healthcare provider's website, resulting in a 15% increase in
            website traffic
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc pl-6">
          <li>Bachelor's degree in Graphic Design</li>
          <li>Certified User Experience Designer (CUED)</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
