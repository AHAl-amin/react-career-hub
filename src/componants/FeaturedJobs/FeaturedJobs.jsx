import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs , setJobs] = useState([]);

    useEffect(() =>{
        fetch('/public/data/jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data.data));
},[]);
    return (
        <div>
            <div>
            <h2 className="text-5xl font-bold text-center mb-5">Featured Jobs:{jobs.length}</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div>
            {
                jobs.map(job => <Job key={jops.id} job={job}></Job>)
            }
        </div>
        </div>
    );
};

export default FeaturedJobs;