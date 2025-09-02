import FunctionsIcon from '@mui/icons-material/Functions';
import AgentStatsCard from '@/components/ui/cards/AgentStatsCard';
const earnings =[
    {
        icon:FunctionsIcon,
        label:"total orders of earnings",
        count:0,
    }
]
export default function TotalOrder(){
    return(
        <>
            {earnings.map((earn, index)=>(
                <AgentStatsCard 
                key={index}
                icon={earn.icon}
                label={earn.label}
                count={earn.count}
                />
            ))}
        </>
    )
}