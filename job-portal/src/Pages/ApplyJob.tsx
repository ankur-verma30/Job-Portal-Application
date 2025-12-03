import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import ApplyJobComponent from "../ApplyJob/ApplyJobComponent"

const ApplyJob = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 
    font-['poppins'] p-4">
          <Divider size="xs" />
            <Link className="my-5 inline-block" to='/jobs'>
                <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="blue.4">Back</Button></Link>
                <ApplyJobComponent/>
    </div>
  )
}

export default ApplyJob