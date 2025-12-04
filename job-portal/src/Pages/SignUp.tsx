import { IconAnchor } from "@tabler/icons-react"
import SignUpComponent from "../SignUpAndLogin/SignUpComponent"
import LoginComponent from "../SignUpAndLogin/LoginComponent"
import { useLocation } from "react-router-dom"


const SignUp = () => {
    const location=useLocation()
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']
     overflow-hidden">
        <div className={`w-screen h-screen flex *:shrink-0 ${location.pathname==='/sign-up'?'-translate-x-1/2':'translate-x-0'} transition-all duration-1000 ease-in-out`}>
            <LoginComponent/>
            <div className={`w-1/2 h-full bg-mine-shaft-900 flex items-center justify-center flex-col gap-3 ${location.pathname==="/sign-up" ? "rounded-r-[200px] " :"rounded-l-[200px] "} transition-all duration-1000 ease-in-out`}>
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconAnchor className="h-16 w-16" stroke={2.5}/>
                <div className="text-3xl font-semibold">JobHook</div>
            </div>
            <div className="text-2xl text-mine-shaft-200 font-semibold">Find the right job for you</div>
            </div>
        <SignUpComponent/>
        </div>
    </div>
  )
}

export default SignUp