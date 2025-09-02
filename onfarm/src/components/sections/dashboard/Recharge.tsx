import Card from "@/components/ui/DashboardCards/Card"
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const balances =[
    {
        icon:PublishedWithChangesIcon,
        label:"Recharge Amount",
        amount:1300.00
    }
]
export default function Recharge(){
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