"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Phone, ArrowRight, EyeOff, EyeOn } from "@/components/ui/icons/Icons"

export default function Login() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (error) setError(null)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (formData.phoneNumber === "0712345678" && formData.password === "12345678") {
        // redirecting to dashboard
        router.push("/dashboard")
      } else {
        setError("Invalid phone number or password")
        setIsLoading(false)
      }
    }, 1000)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-green-600 z-50">
        <div className="banter-loader">
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
        </div>
        
        <div className="absolute bottom-10 w-full text-center">
          <p className="text-white text-xl font-semibold">OnFarm</p>
          <p className="text-white opacity-80">Loading your farming experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative bg-white">
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
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
            <p className="text-gray-600 mt-2">Enter your credentials to access your account</p>
          </div>
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full px-2 lg:px-0 bg-white flex flex-col gap-6">
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

            {/* Password*/}
            <div className="w-full flex items-center justify-between border-[1px] border-gray-300 rounded-md p-1 focus-within:border-green-600 transition-colors">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-[80%] p-2 text-gray-800 focus:ring-0 focus:outline-0"
                placeholder="Enter Password*"
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

            <button
              type="submit"
              className="bg-green-600 text-white font-extrabold p-3 w-full flex items-center justify-center gap-2 hover:bg-green-700 transition-colors rounded-md"
            >
              Login
              <ArrowRight />
            </button>
          </form>

          <p className="flex items-center justify-center gap-4 text-black">
            <span>Create Account?</span>
            <Link href="/register" className="text-blue-800 hover:text-red-600 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}