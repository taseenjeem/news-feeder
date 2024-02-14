const LoadingMessage = ({ message }) => {
  return (
    <>
      <div className="min-h-[80vh] flex justify-center items-center text-lg font-semibold">
        <p>{message}</p>
      </div>
    </>
  );
};

export default LoadingMessage;
