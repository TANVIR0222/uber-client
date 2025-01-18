import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

const CaptainRegister = () => {
  // use react hook form to handle form data
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // show passwod
  const [password, setShowPassword] = useState(false);

  // view password
  const togglePasswordVisibility = () => {
    setShowPassword(!password);
  };

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <img
              className="w-20 mb-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
              alt=""
            />
            {/* <button
              onClick={() => navigate(-1)}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Back
            </button> */}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg w-full  font-medium mb-2">
              What's our Captain's name
            </h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] input-focus w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                name="firstname"
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

            <h3 className="text-lg font-medium mb-2">
              What's our Captain's email
            </h3>
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
              className="bg-[#eeeeee] input-focus mb-7 input-focus rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
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

            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] input-focus w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Color"
                name="color"
                {...register("color", { required: true })}
              />
              <input
                required
                className="bg-[#eeeeee] input-focus w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Plate"
                name="plate"
                {...register("plate", { required: true })}
              />
            </div>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] input-focus w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="number"
                placeholder="Vehicle Capacity"
                name="capacity"
                {...register("capacity", { required: true })}
              />
              <select
                required
                className="bg-[#eeeeee] input-focus w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                name="vehicleType"
                {...register("vehicleType", { required: true })}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="cng">CNG</option>
              </select>
            </div>

            <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
              Create Captain Account
            </button>
          </form>
          <p className="text-center">
            Already have a account?{" "}
            <Link to="/captain-login" className="text-black font-normal">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] mt-6 leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainRegister;
