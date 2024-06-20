import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Auth = (Component) =>{
    return (props)=>{

        const navigate = useNavigate()
        useEffect (()=>{
                const token = localStorage.getItem("token")
                if(!token){
                    alert("Please Signup/Signin first")
                    navigate("/Signin")
                   }
        },[navigate])
        return <Component {...props} />
    }
}