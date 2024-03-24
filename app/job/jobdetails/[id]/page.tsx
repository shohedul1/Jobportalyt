import JobCard from "@/app/components/Helper/JobCard";
import ApplyButton from "@/app/components/Home/ApplyButton";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";


const JobDetails =async ({params}:{params:{id:string}}) => {
    const singleJob = JobData.find((job)=>job.id.toString()== params.id);

    const session = await getServerSession(authOptions);

    const firstFourJob = JobData.slice(0,4);

    // console.log(singleJob);
  return (
    <div className="mt-20 mb-12">
        <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
            <div className="flex-[0.7]">
                <JobCard job={singleJob!} />
            </div>
            {session && (
                <ApplyButton />
            )}
             {!session && (
                <Link href={"/signup"}>
                    <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">Sign Up To Apply</button>
                </Link>
            )}
        </div>
        <div className="mt-16 w-[80%] mx-auto">
            <h1 className="text-[20px] font-semibold">Job Description</h1>
            <p className="mt-4 text-black text-opacity-70">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perspiciatis consectetur aut ratione alias distinctio odit? Incidunt, officia. Quisquam architecto quod hic fugiat. Voluptates maxime nulla, cumque nemo ullam delectus dolore deserunt facilis, obcaecati, vitae recusandae expedita consectetur? Nam nulla tempore dolore repellat! In cumque dolores ipsum ad, odio voluptatem.
            </p>
            <h1 className="text-[20px] font-semibold">Key Responsibilities</h1>
            <p className="mt-4 text-black text-opacity-70">
                Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus debitis incidunt quis possimus quae magnam, corporis qui sequi molestiae. Rerum, beatae iste consequuntur nemo suscipit dolores laborum totam saepe ipsum facilis fuga aspernatur! Assumenda eligendi sed nesciunt, excepturi expedita dolorem vitae dolorum veniam nemo pariatur doloribus molestiae consectetur fuga. adipisicing elit. Necessitatibus perspiciatis consectetur aut ratione alias distinctio odit? Incidunt, officia. Quisquam architecto quod hic fugiat. Voluptates maxime nulla, cumque nemo ullam delectus dolore deserunt facilis, obcaecati, vitae recusandae expedita consectetur? Nam nulla tempore dolore repellat! In cumque dolores ipsum ad, odio voluptatem.
            </p>
            <h1 className="text-[20px] mt-8 font-semibold">Skills</h1>
            <ul className="mt-4">
                <li className="mt-4 text-black text-opacity-70">React JS</li>
                <li className="mt-4 text-black text-opacity-70">Next.JS</li>
                <li className="mt-4 text-black text-opacity-70">TailwindCSS</li>
                <li className="mt-4 text-black text-opacity-70">Typescript</li>
                <li className="mt-4 text-black text-opacity-70">Next Auth</li>
            </ul>
            <h1 className="text-[20px] mt-8 font-semibold">Related Job</h1>
            <div className="mt-4">
            {
                firstFourJob.map((job)=>{
                    return (
                        <Link href={`/job/jobdetails/${job.id}`} key={job.id} className="space-x-6">
                            <JobCard job={job}/>
                        </Link>
                    )
                })
            }
            </div>


        </div>
        
    </div>
  )
}

export default JobDetails