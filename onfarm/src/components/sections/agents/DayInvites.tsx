import PeopleIcon from '@mui/icons-material/People';
import AgentStatsCard from '@/components/ui/cards/AgentStatsCard';
const invites =[
    {
        icon:PeopleIcon,
        label:"subordinates invited today",
        count:0,
    }
]
export default function DailyInvites(){
    return(
        <>
            {invites.map((invite, index)=>(
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