import DayEarnings from "./DayEarnings"
import Balance from "./Balance"
import Recharge from "./Recharge"
import Withdraw from "./WithdrawAmount"
export default function Stats(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Balance/>
            <DayEarnings/>
            <Recharge/>
            <Withdraw/>
        </div>
        </>
    )
}