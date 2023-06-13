const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[url(/rainbow-vortex.png)]">
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              I'm Mahadi Hasan, a passionate MERN stack developer with 6 months
              of experience. I specialize in building robust and interactive web
              applications using MongoDB, Express.js, React.js, and Node.js. I
              excel in developing scalable backend solutions, creating intuitive
              user interfaces, and staying up-to-date with the latest web
              development trends. Let's collaborate and bring your ideas to life
              using the power of the MERN stack.
            </p>
            <button className="btn hover:bg-[#290a5b] text-white font-bold bg-[#EE6D52] border-0">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
