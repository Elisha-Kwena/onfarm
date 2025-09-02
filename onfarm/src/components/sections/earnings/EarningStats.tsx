import Total from "./Total"
import Today from "./Today"
import Ongoing from "./Ongoing"
export default function EarningsStats(){
    return(
        <>
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-4">
            <Total/>
            <Today/>
            <Ongoing/>
        </div>
        </>
    )
}