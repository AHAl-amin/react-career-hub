import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-6">
            <button className="px-5 py-2 font-extrabold border rounded border-blue-500">{remote_or_onsite}</button>
            <button  className="px-5 py-2 font-extrabold border rounded border-blue-500"> {job_type}</button>
          </div>
        <div className="flex items-center gap-6">
        <h2 className="flex gap-3 items-center"><CiLocationOn />{location}</h2>
        <h2 className="flex gap-3 items-center"> <CiDollar /> salery:{salary}</h2>
        </div>
          <div className="card-actions justify-start">
            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
          </div>
        </div>
      </div>
        
        );
    };


export default Job;