
interface EarnCardProps{
    icon:React.ComponentType<{className?: string}>;
    amount?:number;
    label:string;
    count?:number
}
export default function AgentStatsCard({icon:IconComponent,label,amount,count}:EarnCardProps){
    let background=""
    let iconColor =""
    if ( label.toLowerCase() === "total subordinates"){
        background = "bg-orange-400";
        iconColor = "text-orange-600";
    }else if (label.toLowerCase() === "total earnings"){
        background = "bg-teal-500";
        iconColor = "text-teal-800";
    }else if (label.toLowerCase() === "subordinates invited today"){
        background = "bg-violet-500";
        iconColor = "text-violet-800";
    }else if (label.toLowerCase() === "total orders of earnings"){
        background = "bg-indigo-500";
        iconColor = "text-indigo-800";
    }else {
        background = "bg-white"
    }










    return(
        <>
        <div className={` p-6 rounded-lg shadow flex items-start justify-start gap-4 hover:shadow-2xl transition-all duration-300 ease-in-out ${background}`}>
            

            <div className="flex items-center justify-center">
                {/* <AttachMoneyIcon/> */}
                <IconComponent className={`!text-6xl ${iconColor}`}/>
            </div>
            <div className="flex items-strat justify-center gap-1 flex-col">
                <h2 className="text-sm font-semibold mb-2 uppercase">{label}</h2>
                {amount != null ? (
                    <p className="text-3xl font-bold text-white-600">KSH {amount.toFixed(2)}</p>
                ) : (
                    <p className="text-3xl font-bold text-white-600">{count}</p>
                )}
            </div>
        </div>
        </>
    )
}