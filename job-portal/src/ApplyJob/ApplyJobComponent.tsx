import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core"
import { IconCheck, IconPaperclip } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const ApplyJobComponent = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const naviagate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if (x === 0) {
                naviagate("/find-jobs");
            }
        }, 1000);
    }
    return (
        <>
            <div className="w-2/3 mx-auto">
                <LoadingOverlay
                    className="fixed!"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2 }}
                    loaderProps={{ color: 'brightSun.4', type: 'bars' }} />
                <div className="flex justify-between ">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-14 " src={`/JobPortalResources/Icons/Google.png`} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold text-2xl">Software Engineer</div>
                            <div className="text-lg text-mine-shaft-300 ">Google &bull; 3 days ago &bull; 10 Applicants</div>
                        </div>
                    </div>
                </div>
                <Divider my="xl" />
                <div className="text-xl font-semibold mb-5 ">Submit Your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 *:w-1/2">
                        <TextInput label="Full Name" placeholder="Enter Name" withAsterisk
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={preview ? "text-mine-shaft-300 font-semibold" : ""} />
                        <TextInput label="Email" placeholder="Enter email" withAsterisk readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={preview ? "text-mine-shaft-300 font-semibold" : ""} />
                    </div>

                    <div className="flex gap-10 *:w-1/2">
                        <NumberInput label="Contact Number" placeholder="Enter Contact Number" withAsterisk hideControls min={0} max={9999999999} clampBehavior="strict" readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={preview ? "text-mine-shaft-300 font-semibold" : ""} />
                        <TextInput label="Personal Website" placeholder="Enter Url" withAsterisk readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={preview ? "text-mine-shaft-300 font-semibold" : ""} />
                    </div>

                    <FileInput leftSection={<IconPaperclip stroke={1.5} />} label="Attach your CV" placeholder="Upload CV" withAsterisk leftSectionPointerEvents="none" readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={preview ? "text-mine-shaft-300 font-semibold" : ""} />

                    <Textarea label="Cover Letter" placeholder="Tell us about yourself..." autosize minRows={4} withAsterisk readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={preview ? "text-mine-shaft-300 font-semibold" : ""} />
                    {
                        !preview && <Button onClick={handlePreview} color="brightSun.4" variant="light" className="mt-5">Preview</Button>

                    }
                    {
                        preview && <div className="flex gap-10 *:w-1/2">
                            <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline" className="mt-5">Edit</Button>

                            <Button fullWidth onClick={handleSubmit} color="brightSun.4" variant="light"  className="mt-5">Submit</Button>

                        </div>
                    }
                </div>
            </div>
            <Notification className={`border-bright-sun-400!  fixed! top-0 left-[35%]  transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"} z-1001 `} icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} withBorder color="teal" title="Applicaton Submitted!" mt="md" withCloseButton={false}>
                Redirecting to Find Jobs Page in {sec} sec...
            </Notification>
        </>
    )
}

export default ApplyJobComponent