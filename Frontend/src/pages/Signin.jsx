import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () =>{

    const [username , setUsername] = useState("")
    const [password , setpassword] = useState("")
    const navigate = useNavigate()


   return  <div className="bg-slate-300 h-screen flex justify-center">
   <div className="flex flex-col justify-center">
       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Signin"} />
        <SubHeading label={"Enter the following to access your account"} />
        <InputBox onChange={(e)=>{
            setUsername(e.target.value)
        }} placeholder={"@gmail.com"} label={"Email"} />

        <InputBox  onChange={(e)=>{
            setpassword(e.target.value)
        }} placeholder={"****"}  label={"Password"} />
        
        <div className="pt-4">
            <Button label={"Sign In"} onpress={async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username : username,
                    password : password
                })
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard")
            }} />
        </div>
        <BottomWarning label={"Don't have an account"} ButtonText={"Sign-Up"} to={"/Signup"}  />
        </div>
    </div>
</div>
}
