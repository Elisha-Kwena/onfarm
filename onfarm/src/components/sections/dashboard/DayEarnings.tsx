import Card from "@/components/ui/DashboardCards/Card"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const balances =[
    {
        icon:MonetizationOnIcon,
        label:"Today's Earnings",
        amount:0.00
    }
]
export default function DayEarnings(){
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