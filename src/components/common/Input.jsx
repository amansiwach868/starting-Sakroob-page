const Input = ({ labelText, labelClass = "", htmlFor, register, error }) => {
    return (
        <div className={`bg-[#F4F8F7] rounded-[12px] py-[13px] px-[26px] flex flex-col ${labelClass} w-full`}>
            <label htmlFor={htmlFor} className='font-normal text-[12px] text-[#8292A0] leading-[150%]'>
                {labelText}
            </label>
            <input
                id={htmlFor}
                {...register}
                className='text-[#3F566B] placeholder:font-normal placeholder:text-base outline-none bg-transparent'
            />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

export default Input;
