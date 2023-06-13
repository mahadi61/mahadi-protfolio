import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 my-12 py-10 px-12">
      <div className="card ">
        <figure>
          <img src="/project-1.png" alt="project 1" />
        </figure>

        <Link className="card-title text-white mt-2">Live Link</Link>
      </div>
      <div className="card ">
        <figure>
          <img src="/project-1.png" alt="project 1" />
        </figure>

        <Link className="card-title text-white mt-2">Live Link</Link>
      </div>
      <div className="card ">
        <figure>
          <img src="/project-1.png" alt="project 1" />
        </figure>

        <Link className="card-title text-white mt-2">Live Link</Link>
      </div>
      <div className="card ">
        <figure>
          <img src="/project-1.png" alt="project 1" />
        </figure>

        <Link className="card-title text-white mt-2">Live Link</Link>
      </div>
    </div>
  );
};

export default Project;
