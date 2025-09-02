import Image from "next/image";

export default function AuthBack(){
    return(
        <>
        <div className="absolute w-full h-full top-0 left-0">
            <div className="w-full h-full relative">
                <Image
                src="/images/backgrounds/onfarm.jpg"
                alt="auth background Image"
                fill
                className="object-cover "
                />
            </div>
        </div>
        </>
    )
}