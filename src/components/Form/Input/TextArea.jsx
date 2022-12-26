const TextArea = (props) => {
  return (
    <div className='max-w-[38.9rem]'>
      <textarea
        id={props.name}
        {...props.register}
        name={props.name}
        className='h-[11.8rem] w-full px-5 border-[0.8px] border-custom-neutral-800 text-lg focus:ring-0 focus:border-current font-normal text-custom-neutral-800 resize-none'
      />
    </div>
  );
};

export default TextArea;
