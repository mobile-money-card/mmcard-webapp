import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-full w-full fixed flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-teal-800">MM CARD</h1>
      <div className="mt-2 flex flex-wrap justify-around">
        <Link to="/r-agent/login" className="text-gray-200 bg-purple-700 px-4 py-2 mx-2 my-2">R-AGENT LOG IN</Link>
        <Link to="/r-agent/register-student" className="text-gray-200 bg-purple-700 px-4 py-2 mx-2 my-2">R-AGENT REGISTER STUDENT</Link>
        <Link to="/send" className="text-gray-200 bg-purple-700 px-4 py-2 mx-2 my-2">SEND MONEY</Link>
        <Link to="/send/history" className="text-gray-200 bg-purple-700 px-4 py-2 mx-2 my-2">TRANSACTION HISTORY</Link>
        
      </div>
    </div>
  );
}

export default Home;
