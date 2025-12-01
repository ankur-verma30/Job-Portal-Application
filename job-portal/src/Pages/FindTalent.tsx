import SearchBar from "../FindTalent/SearchBar"
import Talents from "../FindTalent/Talents"
const FindTalent = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
                <SearchBar/>
                <Talents/>
    </div>
  )
}

export default FindTalent