import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
                <img className="rounded-t-2xl" src="JobPortalResources/Profile/banner.jpg" alt="banner" />
                <img className="rounded-3xl h-36 w-36 absolute  bg-mine-shaft-950 border-mine-shaft-950 border-8 -bottom-1/4 left-5 p-2" src="JobPortalResources/Icons/Google.png" alt="avatar" />
            </div>
            <div className="px-3 mt-12">
                <div className="text-3xl font-semibold flex justify-between">Google
                    <Button color="brightSun.4" variant="light" >Message</Button>
                </div>
                <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} />Software Engineer &bull; Google</div>
                <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> San Francisco, CA
                </div>
            <Divider  my="xl" />
            </div>
    </div>
  )
}

export default Company