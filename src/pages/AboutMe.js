import React from "react";
import "../assets/css/style.css";
import { Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <div className="hero">
        <Typography variant="h3" align="center">
          <span className="highlight">Elevating Code</span> One Project at a
          Time
        </Typography>
      </div>
      <section>
        <div className="section-image">
          <img
            src={require("../assets/img/profile.png")}
            alt="Michael Ramcharitar"
          />
          <p>
            Hello! I'm <b className="highlight">Michael Ramcharitar</b>, a
            motivated and aspiring web developer eager to dive into this field
            of technology that has proven to be continously advancing. I aim to
            master a solid base of coding comprehenion. Advancing the web
            experience is the way of the future. I'm on route to reside in that
            frontier.
          </p>
        </div>
        <div>
          <Typography variant="h5">My Journey So Far</Typography>
          <p>
            Before PC's were commonly popular as it is to today I had one of my
            own growing up.(Before Windows) With that experience I had gained
            some simple knowlede of DOS Syntax commands. In high school there
            was oppotunity for learn coding in a advanve computer science
            course. Having this special interest mainly on the side, I now find
            myself with a chance to persue coding as an occupation. My first
            serious step was enrolling in a Coding Bootcamp offered by th
            University of Toronto. A facinating program that provided web design
            and coding fundmentals teaching. The program then lead into the
            current technologies.That experience was great to say the least.
            gaining real hands on learning and creating web design suitable for
            todays market.
          </p>
          <Typography variant="h5">Skills at a Glance</Typography>
          <p>
            Gained experience in HTML, CSS, and JavaScript, I am prepared with
            the foundational skills needed to build responsive and visually
            appealing website. My exposure to the latest technologies has
            provided countless ideas and visualization with respects to what a
            designer can create. Currently learning about the MERN stack and its
            robust reputation. Still always ready and excited to learn more and
            keep expanding that tool kit.
          </p>
          <Typography variant="h5">Problem Solver and Collaborator</Typography>
          <p>
            I approach coding challenges with a problem-solving mindset, and I
            find joy in tackling obstacles head-on. During group projects and
            collaborative coding sessions, I've come to appreciate the power of
            teamwork and the exchange of ideas. I believe that diverse
            perspectives contribute to more robust and innovative solutions.
          </p>
          <Typography variant="h5">Continuous Learner</Typography>
          <p>
            In the fast-paced world of web development, I understand the
            importance of staying up-to-date with the latest technologies.
            Regularly engaging in online courses, workshops, and reading
            industry blogs, I am committed to continuous learning to keep my
            skills sharp and relevant.
          </p>
          <Typography variant="h5">Projects That Define Me</Typography>
          <p>
            One project that I'm particularly proud of is My portfolio project.
            This project not only showcased my technical skills but also
            demonstrated my ability to create user-friendly interfaces and solve
            real-world problems through code.
          </p>
          <Typography variant="h5">What's Next?</Typography>
          <p>
            As I begin my trail as a web developer, my goal is to contribute to
            projects that make a positive impact on users' lives. I am excited
            about the prospect of learning from experienced professionals,
            collaborating on innovative projects, and contributing my skills to
            create exceptional web experiences.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
