import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import image1 from '/images/rest1.png'
import { useSign } from "../context/SignContext"
import { X } from 'lucide-react';

export default function Login() {

    const { hideLogin, showRegister } = useSign()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className="bg-[#191414ca] w-full min-h-screen">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[65%] sm:w-[90%] lg:w-auto">
                <div className="flex flex-col md:flex-row justify-center rounded-xl shadow-xl">

                    <div className="w-full md:w-[50%] ">
                        <img src={image1} alt="" className="w-full h-[400px] rounded-s-lg" />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[50%] px-6 md:px-8 py-7 bg-white rounded-b-xl md:rounded-bl-none md:rounded-e-xl relative">

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
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                        message: "Must include letter, number & symbol"
                                    }
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
