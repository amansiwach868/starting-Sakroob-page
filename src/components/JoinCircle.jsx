import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from "./common/CustomButton";
import HeadingAndPara from "./common/HeadingAndPara";

const JoinCircle = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = () => {
        if (!toast.isActive("join-success")) {
            toast.success("✅ Successfully Joined the Sakroob Circle!", {
                toastId: "join-success",
                position: "top-right",
            });
        }
        reset();
    };

    const onError = () => {
        if (!toast.isActive("join-error")) {
            toast.error("❌ Please enter a valid email address.", {
                toastId: "join-error",
                position: "top-right",
            });
        }
    };
    

    return (
        <div className="sm:m-6 m-4 relative md:min-h-[321px] sm:min-h-[300px] min-h-[250px]">
            <div className="absolute -bottom-[173px] bg-[url(./assets/img/png/join-us-bg-img.png)] bg-cover bg-no-repeat bg-center min-h-[386px] max-w-[1140px] left-1/2 -translate-x-1/2 rounded-[8px] flex justify-center items-center flex-col w-full">
                <div className="p-6 relative z-10">
                    <HeadingAndPara heading={'Join the Sakroob Circle'} para={'Exclusive drops, early access, and maker tips in your inbox.'} headingClass={'md:text-[48px] sm:text-[36px] text-[28px] font-bold text-white leading-[120%] text-center mb-4'} paraClass={'sm:text-md  text-[14px] font-normal text-white text-center'} />
                    <form
                        onSubmit={handleSubmit(onSubmit, onError)}
                        className="mx-auto sm:flex justify-center mt-[46px] relative z-10 max-w-[486px]"
                    >
                        <div className="w-full relative">
                            <input
                                type="email"
                                placeholder="Enter your email...."
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                })}
                                className="bg-white py-[13.35px] sm:py-[22px] px-[18px] rounded-[50px] max-w-[489px] w-full leading-[140%] text-[#8392A0] border border-transparent focus:outline-none focus:border-blue-500"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1 pl-4">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <CustomButton
                            buttonText="Join Now"
                            buttonClass="!py-[16px] !px-[20px] min-[425px] sm:absolute right-[8.5px] top-[8.5px] text-white max-sm:w-full max-sm:mt-4"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinCircle;
