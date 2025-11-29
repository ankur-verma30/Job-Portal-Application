import { Avatar, Rating } from "@mantine/core"
import { testimonials } from "../Data/Data"

const Testimonials = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
                What <span className="text-bright-sun-400">Users </span> says about us
            </div>
          <div className="flex justify-evenly">
             {
            testimonials.map((data,index)=>(
                 <div key={index} className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 rounded-xl p-3 mt-10">
                <div className="flex items-center gap-2">
                    <Avatar className="h-14!" src="/JobPortalResources/avatar.png" alt="it's me" />
                   <div>
                    <div className="text-lg text-mine-shaft-100 font-semibold">{data.name}</div>
                    <Rating value={data.rating} fractions={2} readOnly/>
                   </div>
                   
                </div>
                <div className="text-xs text-shadow-mine-shaft-300">{data.testimonial}</div>
            </div>
            ))
           }
          </div>
        </div>
    )
}

export default Testimonials