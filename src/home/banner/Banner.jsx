import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="min-h-full">
        <div className="flex items-center justify-between">
          <img src="/mahadi_icon.jpg" className="max-w-xl h[400px]" />
          <div className="text-white w-full">
            <h1 className="text-2xl font-bold">Hi, This is</h1>
            <h1 className="text-8xl font-bold">Mahadi Hasan</h1>

            <p className="text-2xl py-6">MERN Stack Developer</p>
            <Link className="btn btn-primary border-0 bg-[#EE6D52] hover:bg-[#290a5b]">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
