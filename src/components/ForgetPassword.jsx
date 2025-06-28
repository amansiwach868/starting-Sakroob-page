import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import CustomButton from './common/CustomButton';
import CustomInput from './common/CustomInput';
import HeadingAndPara from './common/HeadingAndPara';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {

        const storedUser = JSON.parse(localStorage.getItem('sakroobUser'));

        if (storedUser && storedUser.email === data.email) {
            toast.success('Password reset link sent to your email!', { position: 'top-right' });
        } else {
            toast.error('Email not found in system!', { position: 'top-right' });
        }

        reset();
    };

    const onError = () => {

        toast.error('Please enter a valid email', { position: 'top-right' });
    };

    return (
        <div className='w-full min-h-screen bg-[url(./assets/img/png/login-bg-img.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center'>
            <div className='p-3 w-full'>
                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className='bg-white md:p-16 sm:p-10 p-7 rounded-[15px] border border-[#E3E3E3] shadow-[0px_10px_30px_0px_#0000000D] w-full max-w-[590px] mx-auto'
                >
                    <HeadingAndPara
                        heading={'Forget Password'}
                        para={'Reset your password below to get back into your account and keep things running smoothly.'}
                        paraClass={
                            'sm:text-md  text-[14px] font-normal max-w-[400px] mx-auto text-[#112D49] text-center mt-2 mb-6'
                        }
                        headingClass={
                            'sm:text-[32px] text-[24px] font-bold text-[#112D49] text-center leading-[120%]'
                        }
                    />

                    <CustomInput
                        placeholder={'Email address'}
                        type={'email'}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email address',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
                    )}

                    <CustomButton buttonText={'Reset Password'} buttonClass={'w-full text-white mt-6'} type='submit' />

                    <div className='w-full flex sm:flex-row flex-col justify-center gap-1 mt-5 items-center'>
                        <p className='text-nowrap sm:text-md  text-[14px]'>We're here for you. </p>
                        <NavLink
                            to={'/gethelp'}
                            className='sm:text-md  text-[14px] font-semibold underline text-[#112D49] underline-offset-2 text-nowrap'
                        >
                            Get Help
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

export default ForgetPassword;
