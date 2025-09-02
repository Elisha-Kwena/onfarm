import ContentCopyIcon from '@mui/icons-material/ContentCopy';


export default function Invites(){
    return(
        <>
        <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">

            <div className="w-full lg:w-[35%] p-6 flex flex-col bg-blue-600 rounded-3xl">
                <h1 className="text-white text-4xl font-extrabold">20113</h1>
                <p className="text-white">My invitation code</p>
                <p className="w-full mt-6">
                    <span className="text-black">Invitation Link: </span> 
                    <a href="https://suphone.com/index.php?g=Home&m=Index&a=login&invcode=20113&type=reg" className="mr-2 text-[12px] ">https://suphone.com/index.php?g=Home&m=Index&a=login&invcode=20113&type=reg</a>
                </p>

                <div className="w-full mt-6 flex">
                    <div className="w-1/2 flex flex-col bg-white p-6 items-center justify-center rounded-bl-3xl rounded-tl-3xl">
                        <div className="w-20 h-20 bg-red-500 rounded-md"></div>
                        <p className="text-black text-sm mt-3">Invitation QR Code</p>
                    </div>
                    <div className="w-1/2 flex flex-col bg-white p-6 items-center justify-center rounded-br-3xl rounded-tr-3xl border-l border-gray-400">
                        <div className="w-20 h-20 bg-green-500 rounded-md flex items-center justify-center text-5xl">
                            <ContentCopyIcon className='!text-5xl'/>
                        </div>
                        <p className="text-black text-sm mt-3">Copy Invitation Link</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-6 bg-white rounded-3xl shadow-lg">
                <h1 className="text-xl text-black font-bold">My Subordinates</h1>
                <p className="text-gray-500">List of my Subordinates</p>
            </div>
        </div>
        <div className="w-full p-6 rounded-3xl shadow-lg bg-white mt-4">
            <h1 className="text-xl text-black font-bold">Subordinates Earnings List</h1>
            <p className="text-gray-500">Earnings of all Subordinates</p>
        </div>
        </>
    )
}