import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export function AuthForm() {

  function handleClick() {
    window.location.pathname = "/auth";
  }
  
  return <div style={{

    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center"
  }}>
    <TextField id="outlined-basic" label="Login" variant="outlined" />
    <TextField id="filled-basic" label="Password" variant="filled" type="password" />
    <Button> Login </Button>;

  </div>

}

