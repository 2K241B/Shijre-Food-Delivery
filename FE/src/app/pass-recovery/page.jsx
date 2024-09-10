import { RecoveryEmail } from "@/components/recovery-email"
import { RecoveryNewPassword } from "@/components/recovery-new-password"
import { RecoveryOTP } from "@/components/recovery-otp"

const PasswordRecoveryPage = () => {
    return <div>
        <RecoveryEmail/>
        <RecoveryOTP/>
        <RecoveryNewPassword/>
    </div>
}

export default PasswordRecoveryPage