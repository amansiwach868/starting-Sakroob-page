import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import HeadingAndPara from './common/HeadingAndPara';
import CustomInput from './common/CustomInput';
import { CloseEye, Eye } from '../utils/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from './common/CustomButton';
import { Slide,ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const showPassword = () => {
        setTogglePassword(!togglePassword);
    };

    const onSubmit = (data) => {
        setIsLoggingIn(true);

        const storedUser = JSON.parse(localStorage.getItem('sakroobUser'));

        if (
            storedUser &&
            storedUser.email === data.email &&
            storedUser.password === data.password
        ) {
            if (!toast.isActive("login-success")) {
                toast.success("Login successful!", {
                    position: "top-right",
                    toastId: "login-success",
                });
            }

            localStorage.setItem("isLoggedIn", "true");
            reset();

            setTimeout(() => {
                navigate('/home');
                window.location.reload();
            }, 1000);
        } else {
            if (!toast.isActive("login-error")) {
                toast.error("Invalid email or password", {
                    position: "top-right",
                    toastId: "login-error",
                });
            }
            setIsLoggingIn(false);
        }
    };

    const onError = () => {
        if (!toast.isActive("login-form-error")) {
            toast.error("Please fix the form errors", {
                position: "top-right",
                toastId: "login-form-error",
            });
        }
        setIsLoggingIn(false);
    };
    
    

    return (
        <div className='w-full min-h-screen bg-[url(./assets/img/png/login-bg-img.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center'>
            <div className='p-3 w-full'>
                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className='bg-white md:p-16 sm:p-10 p-7 rounded-[15px] border border-[#E3E3E3] shadow-[0px_10px_30px_0px_#0000000D] w-full max-w-[590px] mx-auto'
                >
                    <HeadingAndPara
                        heading={'Welcome back!'}
                        para={'Log in below to access your account and keep things running smoothly.'}
                        paraClass={
                            'sm:text-md  text-[14px] font-normal max-w-[326px] mx-auto text-[#112D49] text-center mt-2 mb-6'
                        }
                        headingClass={
                            'sm:text-[32px] text-[24px] font-bold text-[#112D49] text-center leading-[120%]'
                        }
                    />

                    <CustomInput
                        placeholder='Email address'
                        type='email'
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email address',
                            },
                        })}
                        error={errors.email}
                    />

                    <CustomInput
                        placeholder='Password'
                        type={togglePassword ? 'text' : 'password'}
                        className='mt-3'
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/,
                                message:
                                    'Min 6 chars, 1 uppercase, 1 special character required',
                            },
                        })}
                        error={errors.password}
                    >
                        <div onClick={showPassword}>
                            {togglePassword ? <CloseEye /> : <Eye />}
                        </div>
                    </CustomInput>

                    <div className='w-full flex justify-end items-center'>
                        <NavLink
                            to={'/forgetpassword'}
                            className='mt-3 sm:text-md  text-[14px] font-semibold underline text-[#112D49] underline-offset-2'
                        >
                            Forgot password?
                        </NavLink>
                    </div>

                    <CustomButton
                        buttonText={isLoggingIn ? 'Logging in...' : 'Log in'}
                        buttonClass={`w-full text-white mt-6 ${isLoggingIn ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type='submit'
                        disabled={isLoggingIn}
                    />

                    <div className='w-full flex sm:flex-row flex-col justify-center gap-1 mt-5 items-center'>
                        <p className='text-nowrap sm:text-md  text-[14px] text-[#41576D]'>Don’t have an account?</p>
                        <NavLink
                            to={'/signup'}
                            className='sm:text-md  text-[14px] font-semibold underline text-[#112D49] underline-offset-2 text-nowrap'
                        >
                            Create account
                        </NavLink>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={2500}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                pauseOnFocusLoss={false}
                pauseOnHover={true}
                draggable={false}
                limit={1}
                transition={Slide}
            />

        </div>
    );
};

export default LoginPage;
