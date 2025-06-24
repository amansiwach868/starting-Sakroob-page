import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomButton from './common/CustomButton'
import CustomInput from './common/CustomInput'
import HeadingAndPara from './common/HeadingAndPara'

const ForgerPassword = () => {
    return (
        <div className='w-full min-h-screen bg-[url(./assets/img/png/login-bg-img.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center'>
            <div className="p-3 w-full">
                <div className="bg-white md:p-16 sm:p-10 p-7 rounded-[15px] border border-[#E3E3E3] shadow-[0px_10px_30px_0px_#0000000D] w-full max-w-[590px] mx-auto">
                    <HeadingAndPara heading={'Forget Password'} para={'Reset your password below to get back into your account and keep things running smoothly.'} paraClass={'sm:text-[16px] text-[14px] font-normal max-w-[400px] mx-auto text-[#112D49] text-center mt-2 mb-6'} headingClass={'sm:text-[32px] text-[24px] font-bold text-[#112D49] text-center leading-[120%]'} />
                    <CustomInput placeholder={'Email address'} type={'email'} />
                    <CustomButton buttonText={'Rest Password'} buttonClass={'w-full text-white mt-6'} />
                    <div className="w-full flex sm:flex-row flex-col justify-center gap-1 mt-5 items-center">
                        <p className='text-nowrap sm:text-[16px] text-[14px]'>We're here for you. </p>
                        <NavLink to={'/gethelp'} className='sm:text-[16px] text-[14px] font-semibold underline text-[#112D49] underline-offset-2 text-nowrap'>Get Help</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgerPassword
