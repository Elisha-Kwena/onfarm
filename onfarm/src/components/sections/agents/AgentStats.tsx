import TotalOrder from "./TotalEarnings"
import TotalSubordinates from "./Subordinates"
import Earnings from "./Earnings"
import DailyInvites from "./DayInvites"
export default function AgentStats(){
    return(
        <>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
            <TotalSubordinates/>
            <DailyInvites/>
            <Earnings/>
            <TotalOrder/>
        </div>
        </>
    )
}