import { Button } from "@mui/material";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

function GoogleButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";
  const { googleSignIn, setUser } = useContext(AuthContext);
  const handleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(from)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <Button
        onClick={handleSignIn}
        variant="outlined"
        className="w-full flex items-center gap-2"
      >
        <FcGoogle className="text-2xl" /> Sign In With Google
      </Button>
    </div>
  );
}

export default GoogleLogin;
