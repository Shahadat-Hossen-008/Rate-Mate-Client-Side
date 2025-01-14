import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";




function GoogleButton() {
  
  
 
  return (
    <div>
      <div className="divider">OR</div>
      <Button
        variant="outlined"
        className="w-full flex items-center gap-2"
      >
        <FcGoogle className="text-2xl" /> Sign In With Google
      </Button>
    </div>
  );
}

export default GoogleButton;
