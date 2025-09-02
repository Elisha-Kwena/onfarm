import Card from "@/components/ui/DashboardCards/Card"
import AddTaskIcon from '@mui/icons-material/AddTask';

const balances =[
    {
        icon:AddTaskIcon,
        label:"COMPLETED",
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