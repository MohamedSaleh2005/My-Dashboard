
import DarkBtn from './DarkBtn'
import DefaultCurrency from './DefultCurrency'
import JoinUs from './JoinUs'
import Language from './Language'
import Logout from './Logout'
import Notification from './Notification'


export default function SettingPage() {
  return (
    <div className='px-4 mt-15 w-full h-120 '>
        <div>
            <h3 className='MyFont font-bold'>Settings</h3>
            <p className='text-sm'>Please Create an account to Manage Your Settings</p>
        </div>
        <DarkBtn/>
        <Notification/>
        <DefaultCurrency/>
        <Language/>
        <JoinUs/>
        <Logout/>
    </div>
  )
}
