import { TextField, Button } from "@mui/material";
import "./page.css";

export default function Login() {
  return (
    <main className="login-container">
      <section className="login-content">
        <h1 className="title">Login to your Account</h1>
        <form className="login-form">
          <TextField
            className="login-input"
            id="filled-basic"
            label="Email"
            variant="filled"
            type="email"
          />
          <TextField
            className="login-input"
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
          />
          <span className="login-forgot">
            <a href="/forgot">Forgot Password?</a>
          </span>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </form>
        <div className="login-details">
          <span className="login-register">
            New here? <a href="/register">Join us!</a>
          </span>
        </div>
      </section>
      <aside className="login-background"></aside>
    </main>
  );
}
