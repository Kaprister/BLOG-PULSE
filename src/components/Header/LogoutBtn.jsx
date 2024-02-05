import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"



function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }


  return (
    <button className=" inline-block px-4 py-1 duration-200 hover:bg-green-400 hover:text-black rounded-full bg-green-700"
        onClick={logoutHandler}
    >
    Logout
    </button>
  )
}

export default LogoutBtn
