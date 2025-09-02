"use client"
import Link from "next/link"
import { useState , useEffect} from "react"

import Image from "next/image"
import {  Phone, Mail, ArrowRight, EyeOff, EyeOn } from "@/components/ui/icons/Icons"
import Loader from "@/components/ui/loaders/Loader"

export default function Register() {
    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState({
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [loading])



    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            alert("Password do not match");
            return
        }
        console.log("formData submitted", formData)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className="w-full h-full relative bg-white">
                {/* overlay */}
                <div className="w-full relative h-full z-10 top-0 left-0 flex items-center justify-center">
                    <div className="w-1/2 h-full hidden lg:flex relative">
                        <Image
                            src="/images/backgrounds/onfarm.jpg"
                            alt="auth background Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="reg-form w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-6 lg:p-20">
                        <form onSubmit={handleSubmit} className="w-full bg-white flex flex-col gap-6 px-2 lg:px-0">
                            {/* Phone Number */}
                            <div className="w-full flex items-center justify-between border-[1px] border-gray-300 rounded-md p-1 focus-within:border-green-600 transition-colors">
                                <input
                                    required
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-[90%] p-2 text-gray-800 focus:ring-0 focus:outline-0"
                                    placeholder="Enter Your Phone Number*"
                                />
                                <Phone />
                            </div>

                            {/* Email*/}
                            <div className="w-full flex items-center justify-between border-[1px] border-gray-300 rounded-md p-1 focus-within:border-green-600 transition-colors">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-[90%] p-2 text-gray-800 focus:ring-0 focus:outline-0"
                                    placeholder="Email*"
                                />
                                <Mail/>
                            </div>

                            {/* Password*/}
                            <div className="w-full flex items-center justify-between border-[1px] border-gray-300 rounded-md p-1 focus-within:border-green-600 transition-colors">
                                <input
                                    required
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-[80%] p-2 text-gray-800 focus:ring-0 focus:outline-0"
                                    placeholder="Create Password*"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="p-1 text-gray-500 hover:text-green-600 transition-colors"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOn /> : <EyeOff />}
                                </button>
                            </div>

                            {/* Confirm Password*/}
                            <div className="w-full flex items-center justify-between border-[1px] border-gray-300 rounded-md p-1 focus-within:border-green-600 transition-colors">
                                <input
                                    required
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-[80%] p-2 text-gray-800 focus:ring-0 focus:outline-0"
                                    placeholder="Confirm Your Password*"
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="p-1 text-gray-500 hover:text-green-600 transition-colors"
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    {showConfirmPassword ? <EyeOn /> : <EyeOff />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="bg-green-600 text-white font-extrabold p-3 w-full flex items-center justify-center gap-2 hover:bg-green-700 transition-colors rounded-md"
                            >
                                Create account
                                <ArrowRight />
                            </button>
                        </form>

                        <p className="flex items-center justify-center gap-4 text-black">
                            <span>Already have an Account?</span>
                            <Link href="/login" className="text-blue-800 hover:text-red-600 hover:underline">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}