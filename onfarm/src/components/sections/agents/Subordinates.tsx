import PeopleIcon from '@mui/icons-material/People';
import AgentStatsCard from '@/components/ui/cards/AgentStatsCard';
const subordinates =[
    {
        icon:PeopleIcon,
        label:"total subordinates",
        count:0,
    }
]
export default function TotalSubordinates(){
    return(
        <>
            {subordinates.map((invite, index)=>(
                <AgentStatsCard 
                key={index}
                icon={invite.icon}
                label={invite.label}
                count={invite.count}
                />
            ))}
        </>
    )
}