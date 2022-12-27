const Message = (props) => {
  return (
    <p className='text-base font-normal text-custom-orange-600 pl-5 whitespace-nowrap'>
      {props.message}
    </p>
  );
};

export default Message;
