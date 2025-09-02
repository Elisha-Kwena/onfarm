import Card from "@/components/ui/DashboardCards/Card"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const balances =[
    {
        icon:AccountBalanceWalletIcon,
        label:"Available Balance",
        amount:0.00
    }
]
export default function Balance(){
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