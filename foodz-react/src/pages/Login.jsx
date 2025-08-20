import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import image1 from '/images/rest1.png'
import { useSign } from "../context/SignContext"
import { X } from 'lucide-react';
import { axiosinstance } from "../config/axios";
import toast from "react-hot-toast";

export default function Login() {

    const { hideLogin, showRegister, isAuth } = useSign()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await axiosinstance.post('login/', data)
            console.log(response)
            if(response?.data.status_code === 6000){
                const token = response.data.data.access
                isAuth(token)
                toast.success(response.data.message || "Login Success full")
                navigate('/')
            }else if(response?.data.status_code === 6001){
                toast.error(response.data.message)
            }else{
                toast.error(response?.data.message || "Login Field")
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.error || "An unexpected error occurred")
        }
    }

    return (
        <div className="bg-[#191414ca] w-full min-h-screen">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] lg:w-[60%]">
                <div className="flex flex-col md:flex-row justify-center rounded-xl shadow-xl">

                    <div className="w-full md:w-[45%] hidden md:block">
                        <img src={image1} alt="" className="w-full h-full rounded-s-lg" />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[55%] px-6 md:px-8 py-7 bg-white rounded-xl md:rounded-l-none md:rounded-e-xl relative">

                        <div onClick={hideLogin} className="absolute right-3 top-3 cursor-pointer">
                            <X size={20} className="text-gray-500" />
                        </div>

                        <h1 className="text-3xl font-bold text-[#ff8732] text-center mb-12 md:mb-16">Sing In</h1>

                        <div className="mb-7 mt-7">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Email"
                                className="w-full px-5 py-2 rounded-lg bg-gray-50 border"
                                {...register("email", {
                                    required: "Email name is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email format'
                                    }
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-400">{errors.email.message}</span>
                            )}
                        </div>

                        <div className="mb-7">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter Password"
                                className="w-full px-5 py-2 rounded-lg bg-gray-50 border"
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: {
                                        value: 4,
                                        message: "Password must be at least 8 characters"
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: "Password cannot exceed 16 characters"
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className="text-red-400">{errors.password.message}</span>
                            )}
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <input
                                type="submit"
                                className="px-8 py-2 rounded-md bg-[#ff8732] text-white cursor-pointer"
                            />
                            <p className="mt-6 mb-4">Do not have an account? <span onClick={showRegister} className="text-[#ff8732] cursor-pointer">register</span></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
