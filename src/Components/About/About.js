import React from "react";
import personalPic from "../../Utilities/Majharul Tanvir-2.jpg";

const About = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 p-5">
        <div className="w-full lg:w-96">
          <img
            className="lg:ml-3 border-4 border-gray-300"
            src={personalPic}
            alt=""
          />
          <h5 className="font-bold text-xl lg:text-2xl">Skills-</h5>
          <p className="font-semibold text-justify pt-2">
            HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, TypeScript,
            Redux, Node.js, Express.js, MongoDB, Firebase, Stripe, WordPress,
            Github, Heroku, Netlify, Render, Postman, Rect dev tools etc.
          </p>
        </div>
        <div className="text-start w-full lg:w-96 pr-4 ">
          <h5 className="font-bold text-xl lg:text-2xl">
            My name is Majharul Tanvir.
          </h5>
          <h6 className="font-bold">I am from Rangamati,Bangladesh.</h6>
          <p className="mt-2 text-justify">
            I am a 2nd-year economics student at Rangamati Govt College. I was
            very interested in computer science. But due to some problems, I
            didn't get a chance to read about it.
          </p>
          <p className="mt-2 text-justify">
            I worked with a non-IT company from November 2019 to February 2022.
            I am so curious about Web Development. That's why I start learning
            web design in september 2022. I was completed it and enjoyed it.
            When I complete that I feel I could make my career in ths Field.
            That's why I start learning web development in 2022.
          </p>
          <p className="mt-2 text-justify">
            I now have a solid understanding of{" "}
            <span className="font-semibold">MERN-Stack Development</span>. I've
            already completed a few{" "}
            <span className="font-semibold">Full-Stack project</span> with{" "}
            <span className="font-semibold">MERN-Stack</span> technology. I
            concentrate on learning the Full-stack. That is why I'm keeping up
            my education. I enjoy learning about new technologies and attempting
            to tackle any coding issues.
          </p>

          <p className="mt-2 text-justify">
            I'm looking for a job right now that uses this talent. I believe
            that if I work with a well-behaved, organized, and encouraging team,
            I can develop and learn more quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
