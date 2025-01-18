import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

const CaptainLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [password, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!password);
  };

  const navigate = useNavigate();


  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <img
              className="w-20 mb-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
              alt=""
            />
            {/* <FaArrowLeft size={30} onClick={() => navigate(-1)} /> */}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              required
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
              name="email"
              {...register("email", { required: true })}
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-7 input-focus rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type={password ? "text" : "password"}
              placeholder="password"
              name="password"
              required
              {...register("password", { required: true })}
            />
            <div className=" mb-4 flex items-center">
              <input
                id="show-password"
                className="mr-2 accent-black"
                type="checkbox"
                onChange={togglePasswordVisibility}
              />
              <label htmlFor="show-password" className="text-base">
                Show Password
              </label>
            </div>

            <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            Join a fleet?{" "}
            <Link to="/captain-register" className="text-black font-normal">
              Register as a Captain
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/user-login"
            className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
