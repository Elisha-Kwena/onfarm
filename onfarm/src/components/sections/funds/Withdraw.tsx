const accounts = [
    {
        id:1,
        label:"074351256452",
        value:"074351256452",
    },
    {
        id:2,
        label:"074523457458",
        value:"074523457458",
    }
]
export default function Withdraw(){
    return(
        <>
        <div className="shadow-lg rounded-md p-4 bg-white">
            <h1 className="text-black text-lg text-start">Withdraw Funds</h1>
            
            {/* account balance  */}
            <div className="w-full flex-col gap-1 flex mt-2">
                <h1 className="text-gray-400">Account Balance</h1>
                <p className="text-black">KSH 0.00</p>
            </div>




            <form action="" className="w-full flex flex-col gap-2 mt-4">
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="bank" className="text-gray-400">Select Account :</label>
                    <select id="bank" name="bank" className="w-full p-2 rounded-md border border-gray-200 pl-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" className="text-gray-400">Please Select account</option>

                        {accounts.map(account => (
                            <option
                            key={account.id}
                            value={account.value} className="bg-white text-gray-900 hover:bg-gray-100">
                                {account.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full flex flex-col gap-1 mt-2">
                    <label htmlFor="account" className="text-gray-400">Withdrawal Amount :</label>
                    <input 
                    type="text" 
                    id="name"
                    className="text-black w-full p-2 rounded-md border border-gray-200 pl-4"
                    placeholder="Amount"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-1 mt-4">
                    <button className="w-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-900 bg-green-500 font-extrabold p-3 rounded-md text-white">Withdraw</button>
                </div>
            </form>
        </div>
        </>
    )
}