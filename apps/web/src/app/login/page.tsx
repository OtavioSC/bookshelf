import { AlertTitle, TextField, Button } from "@mui/material";
import Image from "next/image";
import Background from "../../../public/library.jpg";
import "./page.css"

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <AlertTitle className="title">Login</AlertTitle>
        <form className="login-form">
          <TextField
            className="login-input"
            id="filled-basic" label="Email" variant="filled" type="email" />
          <TextField
            className="login-input"
            id="filled-basic" label="Password" variant="filled" type="password" />
          <Button variant="contained" color="success">Submit</Button>
        </form>
      </div>
      <div className="login-background">
      </div>
    </div>
  );
}
