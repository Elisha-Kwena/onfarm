import DownloadingIcon from '@mui/icons-material/Downloading';
import EarningsCard from '@/components/ui/cards/EarningsCard';
const tasks =[
    {
        icon:DownloadingIcon,
        label:"ongoing",
        count:0,
    }
]
export default function Ongoing(){
    return(
        <>
            {tasks.map((task, index)=>(
                <EarningsCard 
                key={index}
                icon={task.icon}
                label={task.label}
                count={task.count}
                />
            ))}
        </>
    )
}