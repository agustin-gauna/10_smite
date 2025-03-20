const Advice = ({ text }) => {
  return (
    <div className="p-4 bg-secondary rounded-sm border-transparent outline-2 outline-[#2f3a57] outline-offset-2">
      <p className="text-center text-pretty text-gray-500 text-sm">{text}</p>
    </div>
  );
};

export default Advice;
