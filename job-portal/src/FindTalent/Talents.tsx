import { talents } from "../Data/TalentData"
import Sort from "../FindJobs/Sort"
import TalentCard from "./TalentCard"

const Talents = () => {
    return (
        <div className="p-3">
    <div className="text-3xl font-semibold text-center w-full">Talents</div>
    <div className="flex justify-end">
        <Sort />
    </div>

    <div className="mt-3 flex flex-wrap gap-5 justify-center">
        {talents.map((talent, index) => (
            <TalentCard key={index} {...talent} />
        ))}
    </div>
</div>

    )
}

export default Talents