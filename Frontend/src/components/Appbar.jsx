import { useSearchParams } from "react-router-dom"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"

export const Appbar = () =>{
    const [searchParams] = useSearchParams()
    const name = searchParams.get("name")
    const navigate = useNavigate()
    return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4">
        PayTM App
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
            Hello
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                U
            </div>
        </div>
        <div className="pt-2"> <Button  onpress={()=>{
                        localStorage.removeItem("token")
                        navigate("/Signup")
                    }} label={"Logout"} />
                    </div>
    </div>
</div>
}

