import Header from "../Header/Header"
import Companies from "../LandingPage/Companies"
import DreamJob from "../LandingPage/DreamJob"
import JobCategory from "../LandingPage/JobCategory"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['poppins']">
      <Header />
      <DreamJob />
      <Companies/>
      <JobCategory/>
    </div>
  )
}

export default HomePage