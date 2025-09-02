import Balance from "./Balance"
import Progress from "./Progress"
import Completed from "./Completed"
export default function Tasks(){
    return(
        <>
            <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-6">
                <Balance/>
                <Progress/>
                <Completed/>
            </div>
        </>
    )
}