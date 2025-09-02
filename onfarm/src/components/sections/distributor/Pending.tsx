import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
export default function Pending(){
    return(
        <>
        <div className="flex items-center gap-2 justify-between p-4 rounded-md bg-green-600 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div>
                <RunningWithErrorsIcon className='!text-6xl'/>
            </div>
            <div className="flex flex-col gap-2 items-start">
                <h1 className="text-white uppercase text-lg font-bold">Pending Dividends</h1>
                <p className="text-white text-4xl">KSH 0.00</p>
            </div>
        </div>
        </>
    )
}