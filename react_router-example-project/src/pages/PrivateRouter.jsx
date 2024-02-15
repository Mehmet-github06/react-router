import {Outlet, Navigate} from 'react-router-dom'
// import Login from './Login'
// import { useContext } from 'react'
// import { LoginContext } from '../context/LoginContext'
import { useLoginContextCall } from '../context/LoginProvider'

const PrivateRouter = () => {
     //? Context API, redux, localStorage
  const {user}=useLoginContextCall()
    
    // const  navigate = useNavigate()
  return (
    <div>
      


{/* //? useNavigate (Hook) ile Navigate(Component) aslında aynı işi yapar. Yani yönlendirme işlemini gerçekleştirir.
//? Aralarindaki fark kullanım yerleridir. Hook olan bir event ya da useEefect hook'u nun içerisi gibi yerlerde kullanılır. (Fonkisyionların kullanıldığı yerler)

//? Diğeri ise bir component olduğu için JSX içeriside yönlendirme yapmak gerektiği durumlarda kullanılır.

//? Link ise kullanıcıdan bir girdi beklenildiği durumlarda kullanılaiblir. */}
        {
            user?.email && user?.password ? <Outlet/> : <Navigate to="/login"/>
        }
    </div>
  )
}

export default PrivateRouter
