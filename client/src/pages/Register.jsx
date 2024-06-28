/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email"></input>
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>This is an error</p>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
