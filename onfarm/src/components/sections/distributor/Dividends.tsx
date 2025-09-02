import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export default function Dividend(){
    return(
        <>
        <div className="flex items-center gap-2 justify-between p-4 rounded-md bg-red-600 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div>
                <MonetizationOnIcon className='!text-6xl'/>
            </div>
            <div className="flex flex-col gap-2 items-start">
                <h1 className="text-white uppercase text-lg font-bold">Total Dividends</h1>
                <p className="text-white text-4xl">KSH 0.00</p>
            </div>
        </div>
        </>
    )
}