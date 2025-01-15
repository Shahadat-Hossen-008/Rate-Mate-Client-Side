import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottie from "../../assets/Lottie/Register.json";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import GoogleButton from "../../Component/SocialLoginButton/GoogleButton";

function Register() {
  const{createUser, updateUserProfile, setUser} = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const passwordValue = watch("password", "");

  const lowerCaseValidate = /^(?=.*[a-z])/.test(passwordValue);
  const upperCaseValidate = /(?=.*[A-Z])/.test(passwordValue);
  const specialChValidate = /^(?=.*[\W_])/.test(passwordValue);
  const numberValidate = /^(?=.*\d)(?=.{8,})/.test(passwordValue);
  const onSubmit = (data) =>{
    const email = data.email;
    const password = data.password;
    const name = data.username;
    const photo = data.photoURL;
    console.log({email, password, name, photo});
    
    createUser(email, password)
    .then(userCredential=>{
      const user = userCredential.user;
      updateUserProfile(name, photo)
      .then(()=>{
        setUser(user);
        navigate('/');
      })
      .catch(err=>{
        console.log(err.message)
      })
      
    })
    .catch(error=>{
      console.log(error.message);
      
    })
  }
  return (
    <div className="hero bg-base-100 min-h-screen py-20">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
        <div className="text-center w-[400px]">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card  w-full max-w-sm shadow-lg p-5">
          <h1 className="text-2xl font-bold text-center font-montserrat">Register</h1>
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="card-body font-poppins">
              <div className="form-control">
              {/*user name  */}
                <label className="label">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="input input-bordered"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                  })}
                />
                {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )}
              </div>
              {/* phot URL */}
              <div className="form-control">
              <label className="label">
                <span className="label-text">Phot URL</span>
              </label>
              <input
                type="url"
                placeholder="Enter your photo url"
                className="input input-bordered"
                {...register("photoURL", {
                  required: "Photo url is required",
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: "Enter a valid url",
                  },
                })}
              />
              {errors.photoURL && (
                <span className="text-red-500 text-sm">
                  {errors.photoURL.message}
                </span>
              )}
            </div>
              {/* email */}
              <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={seePassword ?  "password":"text" }
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must contain 8 character",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message: "Password must include uppercase, lowercase, number, and special character",
                  },
                })}
              />
              <button
                onClick={() => setSeePassword(!seePassword)}
                type="button"
                className="absolute right-4 top-12 pt-1"
              >
                {seePassword ? <FaEyeSlash />: <FaEye /> }
              </button>
              {errors.password && <span className="text-red-600">{errors.password.message}</span>}
              {/* Password Validation */}
              <div className="p-2 mt-3 bg-orange-100 rounded-xl">
              <div className={` ${lowerCaseValidate ? "text-green-600 flex items-center gap-3":"text-black flex items-center gap-3"}`}>
              {lowerCaseValidate ? <FaRegCheckCircle /> : <FaRegCircle/>}
              At least one lowercase</div>
              <div className={` ${upperCaseValidate ? "text-green-600 flex items-center gap-3":"text-black flex items-center gap-3"}`}>
              {upperCaseValidate ? <FaRegCheckCircle /> : <FaRegCircle/>}
              At least one lowercase</div>
              <div className={`${specialChValidate ? "text-green-600 flex items-center gap-3": "text-black flex items-center gap-3"}`}>{specialChValidate ? <FaRegCheckCircle /> : <FaRegCircle/>}At least one special characters</div>
              <div className={`${numberValidate ?"text-green-600 flex items-center gap-3":"text-black flex items-center gap-3"}`}>
              {numberValidate ? <FaRegCheckCircle /> : <FaRegCircle/>}
              At least one number and Length 8 </div>
              </div>
       
            </div>
            <div className="form-control mt-6">
              <Button variant="contained" type="submit">Register</Button>
            </div>
            <p>Already have an account, Please <Link to="/login" className="text-blue-400">Sign In</Link></p>
          </form>
          <GoogleButton></GoogleButton>
        </div>
      </div>
    </div>
  );
}

export default Register;
