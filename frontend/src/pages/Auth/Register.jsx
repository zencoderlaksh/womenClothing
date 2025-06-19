import React from "react";
import IMAGES from "../../assets/images/projectImage";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getNames } from "country-list";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../api/authApi";



const countryOptions = getNames().map((country) => ({
  value: country,
  label: country,
}));


const schema = z.object({
  firstname: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
  lastname: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  country: z.string().min(1, { message: 'Country is required' }),
  mobile: z.string().regex(/^[6-9]\d{9}$/, {
    message: 'Mobile number must be 10 digits',
  }),
});

const Register = () => {
  
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        toast.success("Registered successfully!");
        localStorage.setItem('Register Data', JSON.stringify(data));
        reset();
      }).catch((err) => {
        toast.error(err);
      });
  };



  return (
    <>
      <div className="sm:w-[100%] mx-auto flex flex-row items-center justify-around mt-[20rem] md:mt-0 px-5">
        <div className="left mt-[142px] flex justify-center">
          <img
            src={IMAGES.registerOne}
            className="hidden sm:block md:w-[600px] h-[600px]"
            alt=""
          />
        </div>

        <div className="right mt-[-80px] sm:mt-[-100px] ml-[-5px] md:mt-30 md:ml-8 flex justify-center">
          <div className="container flex flex-col items-center">
            <h3 className="text-[32px] font-bold mb-4 ml-[-10px] md:text-[32px] text-center">
              Create Account
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center">
              <input
                {...register("firstname")}
                type="text"
                placeholder="First Name"
                className="border border-gray-500 w-[350px] sm:w-[400px] px-[10px] py-[15px] mb-2 text-[#000]"
              />
              {errors.firstname && <p className="text-red-600">{errors.firstname.message}</p>}

              <input
                {...register("lastname")}
                type="text"
                placeholder="Last Name"
                className="border border-gray-500 w-[350px] sm:w-[400px] px-[10px] py-[15px] mb-2 text-[#000]"
              />
              {errors.lastname && <p className="text-red-600">{errors.lastname.message}</p>}

              <input
                {...register("mobile")}
                type="tel"
                placeholder="Mobile Number"
                className="border border-gray-500 w-[350px] sm:w-[400px] px-[10px] py-[15px] mb-2 text-[#000]"
              />
              {errors.mobile && <p className="text-red-600">{errors.mobile.message}</p>}

              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="border border-gray-500 w-[350px] sm:w-[400px] px-[10px] py-[15px] mb-2 text-[#000]"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}

              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="border border-gray-500 w-[350px] sm:w-[400px] px-[10px] py-[15px] mb-2 text-[#000]"
              />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}

              {/* Country Dropdown with Search */}
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={countryOptions}
                    placeholder="Select Country"
                    isSearchable
                    menuPortalTarget={document.body}
                    menuShouldScrollIntoView={false}
                    value={countryOptions.find(option => option.value === field.value) || null}
                    onChange={(selected) => field.onChange(selected?.value || "")}
                    className="w-[350px] sm:w-[400px]"
                    styles={{
                      control: (base) => ({
                        ...base,
                        paddingTop: 8,
                        paddingBottom: 8,
                        borderRadius: 0,
                        borderColor: "gray",
                        zIndex: 100,
                      }),
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? "#000" : "white",
                        color: state.isSelected ? "white" : "#000",

                      }),
                    }}
                  />
                )}
              />


              {errors.country && <p className="text-red-600">{errors.country.message}</p>}

              <button
                type="submit"
                className="bg-[#5A6D57] text-white w-[350px] sm:w-[400px] px-[10px] py-[15px] mt-4"
              >
                Register Now
              </button>
            </form>

            <div className="flex justify-center gap-10 mt-6">
              <p className="text-sm text-[#0C0C0C]">Already Have An Account?</p>
              <p className="text-sm text-[#748C70]">
                <a href="#">Log in</a>
              </p>
            </div>

            <p className="text-center mt-3">or</p>

            <div className="flex items-center justify-center gap-5 mt-5">
              <img src={IMAGES.registerTwo} alt="" />
              <img src={IMAGES.registerThree} alt="" />
              <img src={IMAGES.registerFour} alt="" />
            </div>

            <p className="text-xs mt-6 text-[#0C0C0C] text-center px-4">
              By Clicking ‘Register Now’ you Agree To{" "}
              <span className="text-[#748C70] underline">
                <a href="#">Terms & Conditions</a>
              </span>{" "}
              And{" "}
              <span className="text-[#748C70] underline">
                <a href="#">Privacy Policy</a>
              </span>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        theme="colored"
        transition={Slide}
      />
    </>
  );
};

export default Register;
