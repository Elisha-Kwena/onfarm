import Card from "@/components/ui/DashboardCards/Card"
import DownloadingIcon from '@mui/icons-material/Downloading';

const balances =[
    {
        icon:DownloadingIcon,
        label:"IN PROGRESS",
        amount:0
    }
]
export default function Progress(){
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