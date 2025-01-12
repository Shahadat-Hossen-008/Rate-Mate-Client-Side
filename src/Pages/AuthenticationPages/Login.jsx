import Lottie from "lottie-react";
import LoginLottie from "../../assets/Lottie/login.json";
import  { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import GoogleLogin from "../../Component/SocialLoginButton/GoogleButton";


function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || '/';
  console.log(location);
  
    const {signIn, setUser} = useContext(AuthContext);
    const [seePassword, setSeePassword] = useState(true);
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const onSubmit = (data) =>{
        const email = data.email;
        const password = data.password;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            navigate(from)
        })
        .catch(error=>{
            console.log(error.message);
            
        })
        
      }
  return (
    <div className="hero bg-base-100 min-h-screen py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-[400px]">
          <Lottie animationData={LoginLottie}></Lottie>
        </div>
        <div className="card bg-amber-50 w-full max-w-sm shadow-lg p-5">
          <h1 className="text-2xl font-bold text-center font-poppins">
            Login
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body font-lato"
          >
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                type={seePassword ? "password" : "text"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must contain 8 character",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message:
                      "Password must include uppercase, lowercase, number, and special character",
                  },
                })}
              />
              <button
                onClick={() => setSeePassword(!seePassword)}
                type="button"
                className="absolute right-4 top-12 pt-1"
              >
                {seePassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <div className="form-control mt-6">
              <Button
                variant="contained"
                type="submit"
                className="btn btn-primary"
              >
               Sign In
              </Button>
            </div>
            <p>
              New to this website, Please <Link to={"/register"} className="text-blue-400">Register
              </Link>
            </p>
          </form>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
}

export default Login;
