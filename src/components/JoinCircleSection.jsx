import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Heading from "./common/Heading";
import Para from "./common/Para";
import Buttons from "./common/Buttons";

const JoinCircleSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        toast.success("✅ Successfully Joined the Sakroob Circle!");
        reset(); // Reset input after submit
    };

    const onError = () => {
        toast.error("❌ Please enter a valid email address.");
    };

    return (
        <div className="p-6">
            <div className="-mb-[170px] bg-[url(../src/assets/images/png/SakroobCircle-bg.png)] bg-cover bg-no-repeat bg-center h-[386px] max-w-[1140px] mx-auto rounded-[24px] pt-[68px] max-sm:py-[68px]  relative overflow-hidden transform translate-y-[-60%]">
                <div className="p-6 relative z-10">
                    <div className="w-full h-full bg-[#73A4E0] opacity-75 absolute top-0 left-0 z-0 rounded-[24px]"></div>

                    <Heading
                        headClass="!text-white z-10 relative"
                        headText="Join the Sakroob Circle"
                    />
                    <Para
                        paraClass="text-white text-center pt-4 z-10 relative"
                        paraText="Exclusive drops, early access, and maker tips in your inbox."
                    />

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

                        <Buttons
                            btnText="Join Now"
                            btnClass="!py-[16px] !px-[20px] min-[425px]:absolute right-[8.5px] top-[8.5px]"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinCircleSection;
