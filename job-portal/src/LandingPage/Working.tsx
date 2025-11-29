import { Avatar } from "@mantine/core"
import { work } from "../Data/Data"

const Working = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
                How it <span className="text-bright-sun-400">Works</span>
            </div>
            <div className="text-lg mb-10 text-mine-shaft-300 text-center w-1/2 mx-auto">
                Effortlessly navigate through the process and land your dream job.
            </div>
            <div className="flex px-16 justify-between items-center">
                {/* left section */}
                <div className="relative">
                    <img className="w-120" src="/JobPortalResources/Working/Girl.png" alt="girl working" />
                    <div className="w-36 flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md top-[15%] right-0 absolute">
                        <Avatar className="h-16! w-16!" src="/JobPortalResources/avatar1.png" alt="it's me" />
                        <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete your profile</div>
                        <div className="text-xs text-mine-shaft-300">70% Completed</div>
                    </div>
                </div>
                {/* right section */}
                <div className="flex flex-col gap-10">
                   {
                    work.map((workDetail,index)=>(
                         <div key={index} className='flex items-center gap-4'>
                        <div className="p-2.5 bg-bright-sun-300 rounded-full">
                        <img className="h-12 w-12" src={`/JobPortalResources/Working/${workDetail.name}.png`} alt={workDetail.name} />
                        </div>
                        <div>
                            <div className="text-mine-shaft-200 text-xl font-semibold">{workDetail.name}</div>
                            <div className="text-mine-shaft-300">{workDetail.desc}</div>
                        </div>
                        
                    </div>
                    ))
                   }
                </div>
            </div>
        </div>
    )
}

export default Working