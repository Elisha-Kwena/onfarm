import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EarningsCard from '@/components/ui/cards/EarningsCard';
const earnings =[
    {
        icon:AttachMoneyIcon,
        label:"Total Earnings",
        amount:23360.00,
    }
]
export default function Total(){
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