import Card from "@/components/ui/DashboardCards/Card"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const balances =[
    {
        icon:AccountBalanceIcon,
        label:"Withdrawal Amount",
        amount:2336.00
    }
]
export default function Withdraw(){
    return(
        <>
            {balances.map((balance, index)=>(
                <Card key={index}
                icon={balance.icon}
                label={balance.label}
                amount={balance.amount}
                />
            ))}
        </>
    )
}