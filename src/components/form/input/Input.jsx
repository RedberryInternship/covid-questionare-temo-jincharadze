const Input = (props) => {
  return (
    <div className={props.className}>
      <div className='max-w-lg w-full'>
        <div>
          <label className='text-[22px] font-bold'>{props.label}</label>
        </div>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className='mt-3 w-full px-5 h-[50px] border-[0.8px] border-custom-neutral-800 text-lg focus:ring-0 focus:border-current font-normal text-custom-neutral-800'
        />
      </div>
    </div>
  );
};

export default Input;
