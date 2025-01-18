import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const UserLogin = () => {
    const {register,handleSubmit,formState: { errors },} = useForm()
    const [password, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!password)        
    }

    const onSubmit = (data) => console.log(data)


  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
            alt=""
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              className="bg-[#eeeeee] input-focus mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              required
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
                className="mr-2"
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
            New here?{" "}
            <Link to="/user-register" className="text-black font-light">
              Create new Account
            </Link>
          </p>
        </div>
        <div>
          <Link
            to="/captain-login"
            className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
