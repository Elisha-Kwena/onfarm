import { FoodBankSharp } from "@mui/icons-material"

const banks = [
    {
        id:1,
        label:"AirtelMoney",
        value:"AirtelMoney",
    },
    {
        id:2,
        label:"M-Pesa",
        value:"M-Pesa",
    }
]
export default function WithdrwaAccount(){
    return(
        <>
        <div className="shadow-lg rounded-md p-4 bg-white">
            <h1 className="text-black text-lg text-start">Withdraw Account</h1>
            <form action="" className="w-full flex flex-col gap-2 mt-4">
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-400">Name :</label>
                    <input 
                    type="text" 
                    id="name"
                    className="text-black w-full p-2 rounded-md border border-gray-200 pl-4"
                    placeholder="John Doe"
                    />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="bank" className="text-gray-400">Payment :</label>
                    <select id="bank" name="bank" className="w-full p-2 rounded-md border border-gray-200 pl-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" className="text-gray-400">Select a payment option</option>

                        {banks.map(bank => (
                            <option 
                            key={bank.id}
                            value={bank.value} className="bg-white text-gray-900 hover:bg-gray-100">
                                {bank.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full flex flex-col gap-1 mt-2">
                    <label htmlFor="account" className="text-gray-400">Account Number :</label>
                    <input 
                    type="text" 
                    id="name"
                    className="text-black w-full p-2 rounded-md border border-gray-200 pl-4"
                    placeholder="0745634256"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-1 mt-4">
                    <button className="w-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-900 bg-green-500 font-extrabold p-3 rounded-md text-white">Save Account</button>
                </div>
            </form>
        </div>
        </>
    )
}