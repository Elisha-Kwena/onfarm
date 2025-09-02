interface DashCardProps{
    icon:React.ComponentType<{className?: string}>;
    amount:number;
    label:string
}
export default function Card({icon:IconComponent,amount,label}:DashCardProps){
    let background=""
    let iconColor =""
    if ( label.toLowerCase() === "available balance" || label.toLowerCase() === "account balance"){
        background = "bg-orange-400";
        iconColor = "text-orange-600";
    }else if (label.toLowerCase() === "today's earnings" || label.toLowerCase() === "completed"){
        background = "bg-teal-500";
        iconColor = "text-teal-800";
    }else if (label.toLowerCase() === "recharge amount" || label.toLowerCase() === "in progress"){
        background = "bg-violet-500";
        iconColor = "text-violet-800";
    }else if (label.toLowerCase() === "withdrawal amount"){
        background = "bg-indigo-500";
        iconColor = "text-indigo-800";
    }else {
        background = "bg-white"
    }










    return(
        <>
        <div className={` p-6 rounded-lg shadow flex items-start justify-start gap-4 hover:shadow-2xl transition-all duration-300 ease-in-out ${background}`}>
            

            <div className="flex items-center justify-center">
                <IconComponent className={`!text-6xl ${iconColor}`}/>
            </div>
            <div className="flex items-strat justify-center gap-1 flex-col">
                <h2 className="text-lg font-semibold mb-2 uppercase">{label}</h2>
                <p className="text-3xl font-bold text-white-600">{amount}</p>
            </div>
        </div>
        </>
    )
}