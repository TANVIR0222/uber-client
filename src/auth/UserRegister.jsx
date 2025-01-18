import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form"


const UserRegister = () => {
    const {register,handleSubmit,formState: { errors },} = useForm()
    const [password, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!password)        
    }



    const onSubmit = (data) => console.log(data)



  return (
    <div>
      <div>
        <div className="p-7 h-screen flex flex-col justify-between">
          <div>
            <img
              className="w-16 mb-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
              alt=""
            />

            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-lg w-1/2  font-medium mb-2">
                What's your name
              </h3>
              <div className="flex gap-4 mb-7">
                <input
                  required
                  className="bg-[#eeeeee] input-focus w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  {...register("firstname", { required: true })} 
                
                />
                <input
                  required
                  className="bg-[#eeeeee] input-focus w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  {...register("lastname", { required: true })}
                
                />
              </div>

              <h3 className="text-lg font-medium mb-2">What's your email</h3>
              <input
                required
                className="bg-[#eeeeee] input-focus mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email@example.com"
                name="email"
                {...register("email", { required: true })}
              />

              <h3 className="text-lg font-medium mb-2">Enter Password</h3>

              <input
              className="bg-[#eeeeee] mb-7 input-focus rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              type={password ? "text" : "password"}
              placeholder="password"
              name="password"
              {...register("password", { required: true })}
            />
            <div className=" mb-4 flex items-center">
              <input
                id="show-password"
                className="mr-2 accent-black "
                type="checkbox"
                onChange={togglePasswordVisibility}
              />
              <label htmlFor="show-password" className="text-base">
                Show Password
              </label>
            </div>

              <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
                Create account
              </button>
            </form>
            <p className="text-center">
              Already have a account?{" "}
              <Link to="/user-login" className="text-black font-light">
                Login here
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[10px] leading-tight">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline">Google Privacy Policy</span> and{" "}
              <span className="underline">Terms of Service apply</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
