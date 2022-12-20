const Message = (props) => {
  return (
    <p className='text-base font-normal text-custom-orange-600 mt-2 text-center'>
      {props.message}
    </p>
  );
};

export default Message;
