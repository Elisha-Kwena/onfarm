import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EarningsCard from '@/components/ui/cards/EarningsCard';
const earnings =[
    {
        icon:MonetizationOnIcon,
        label:"Today's Earnings",
        amount:0.00,
    }
]
export default function Today(){
    return(
        <>
            {earnings.map((earn, index)=>(
                <EarningsCard key={index}
                icon={earn.icon}
                label={earn.label}
                amount={earn.amount}
                />
            ))}
        </>
    )
}