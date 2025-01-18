import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="h-screen bg-cover  w-screen bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex flex-col justify-between pt-8">
      <img
        className="w-20 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt=""
      />
      <div className="bg-secondary pb-7 py-5 px-4">
        <h1 className="text-3xl font-normal">Get started with Uber</h1>
        <Link to="/user-login">
          <button className="relative inline-block px-6 py-3 font-medium text-white bg-black rounded overflow-hidden group w-full mt-5 ">
            {/* Left to Right Primary Color */}
            <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-in-out"></span>

            {/* Left to Right Red Color */}
            <span className="absolute inset-0 bg-red transform translate-x-0 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>

            {/* Text */}
            <span className="relative z-10 flex items-center justify-center w-full text-center">
              <span className="block text-2xl">continue</span>
              <FaArrowRight
                size={20}
                className="absolute right-4 font-normal"
              />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
