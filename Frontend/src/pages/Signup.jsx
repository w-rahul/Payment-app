import {Heading} from "../components/Heading"
import {Button} from "../components/Button"
import {SubHeading} from "../components/SubHeading"
import {BottomWarning} from "../components/BottomWarning"
import {InputBox} from "../components/InputBox"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const Signup = () =>{

    const [firstName, setfirstName ] = useState("")
    const [lastName, setlastName ] = useState("")
    const [username, setusername ] = useState("")
    const [password, setpassword ] = useState("")   
    const navigate = useNavigate();


    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your details to create an Account"} />
                <InputBox onChange={e =>{
                            setfirstName(e.target.value)
                }} placeholder={"Chad"} label={"First Name"}  />
                <InputBox onChange={e =>{
                            setlastName(e.target.value)
                }} placeholder={"Adonis"} label={"Last Name"}  />
                <InputBox onChange={e =>{
                            setusername(e.target.value)
                }} placeholder={"@gmail.com"} label={"Email"} />
                <InputBox onChange={e =>{
                            setpassword(e.target.value)
                }} placeholder={"*****"} label={"Password"} />
                <div className="pt-4">
                    <Button label={"Sign Up"} onpress={async ()=>{
                       const response = await axios.post("http://localhost:3000/api/v1/user/signup" ,{
                            firstName : firstName,
                            lastName : lastName,
                            username : username,
                            password : password
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                    }} />
                </div>
                <BottomWarning label={"Already have an account"} ButtonText={"Sign-in"} to={"/Signin"} />
            </div>
        </div>
    </div>
}






// export const Signup = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     return <div className="bg-slate-300 h-screen flex justify-center">
//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading label={"Sign up"} />
//         <SubHeading label={"Enter your infromation to create an account"} />
//         <InputBox onChange={e => {
//           setFirstName(e.target.value);
//         }} placeholder="John" label={"First Name"} />
//         <InputBox onChange={(e) => {
//           setLastName(e.target.value);
//         }} placeholder="Doe" label={"Last Name"} />
//         <InputBox onChange={e => {
//           setUsername(e.target.value);
//         }} placeholder="harkirat@gmail.com" label={"Email"} />
//         <InputBox onChange={(e) => {
//           setPassword(e.target.value)
//         }} placeholder="123456" label={"Password"} />
//         <div className="pt-4">
//           <Button onClick={async () => {
//             const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
//               username,
//               firstName,
//               lastName,
//               password
//             });
//             localStorage.setItem("token", response.data.token)
//             navigate("/dashboard")
//           }} label={"Sign up"} />
//         </div>
//         <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
//       </div>
//     </div>
//   </div>
// }