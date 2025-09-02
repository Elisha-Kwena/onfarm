import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AgentStatsCard from '@/components/ui/cards/AgentStatsCard';
const earnings =[
    {
        icon:MonetizationOnIcon,
        label:"total earnings",
        amount:0,
    }
]
export default function Earnings(){
    return(
        <>
            {earnings.map((earn, index)=>(
                <AgentStatsCard 
                key={index}
                icon={earn.icon}
                label={earn.label}
                amount={earn.amount}
                />
            ))}
        </>
    )
}