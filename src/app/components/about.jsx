import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md: grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" px-4 uppercase text-xl tracking-widest text-[#22AAA1]">
            About
          </p>
          <h2 className="py-4  px-4">Who I Am</h2>
          <p className="py-2 px-4 text-gray-600">
            {`I remember playing Team Fortress 2 for hours as a kid. My dad told me one day I should
            learn to make my own games. Since then, building has been my passion and obsession.
            I love the challenge of learning new things and the satisfaction of solving problems. Working with people 
            and helping them achieve their goals in the classroom was one manifestation of that passion. Now, I build tools 
            that help people in more ways than I ever could have imagined!`}
          </p>
          <p className="py-2  px-4 text-gray-600">
            {`These days, I'm building open source products with React and Node.js, learning Ruby, and expanding my network in NYC.
            I'm currently looking for a full-time position as a developer. If you're interested in working together,
            please reach out using my contact form (link below). I'd love to hear from you! Thanks for visiting my site.`}
          </p>
          <p className="py-2  px-4 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
