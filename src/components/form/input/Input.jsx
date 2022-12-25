const Input = (props) => {
  return props.type === 'radio' ? (
    <div className='mb-5'>
      <div className='flex'>
        <input
          id={props.id}
          type='radio'
          name={props.name}
          className='hidden'
          checked={props.checked}
          {...props.register}
          value={props.value}
        />
        <label
          htmlFor={props.id}
          className='flex items-center cursor-pointer text-xl font-normal'
        >
          <span className='w-[23px] h-[23px] mr-5 rounded-full border border-custom-neutral-800 '></span>
          {props.label}
        </label>
      </div>
    </div>
  ) : (
    <div className={props.className}>
      <div className='w-full max-w-lg'>
        {props.label && (
          <div className='mb-3'>
            <label className='text-[22px] font-bold'>{props.label}</label>
          </div>
        )}
        <input
          {...props.register}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className='h-[3.125rem] w-full px-5 border-[0.8px] border-custom-neutral-800 text-lg focus:ring-0 focus:border-current font-normal text-custom-neutral-800'
        />
      </div>
    </div>
  );
};

export default Input;
