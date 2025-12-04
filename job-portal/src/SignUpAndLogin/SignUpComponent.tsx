import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core"
import { IconLock, IconMail } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const SignUpComponent = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold ">Create Account</div>
            <TextInput label=" Full Name" placeholder="Enter your name" withAsterisk />

            <TextInput leftSectionPointerEvents="none" leftSection={<IconMail style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Enter your email" withAsterisk />

            <PasswordInput leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label="Password" placeholder="Enter your password" withAsterisk />

            <PasswordInput leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />} label=" Confirm Password" placeholder="Confirm your password" withAsterisk />

            <Checkbox autoContrast label={<>I accept{' '} <Anchor>terms & conditions</Anchor></>} />
            <Button autoContrast variant="filled">Sign Up</Button>
            <div className="mx-auto">Already have an account? <Link to="/login" className="text-bright-sun-400 hover:underline hover:text-lg">Login</Link></div>

        </div>
    )
}

export default SignUpComponent