import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-block">
        <h1>CRUD OPERATIONS</h1>
        <h5>SIGN IN</h5>
        <p>Enter your credentials to access your account</p>
        <label htmlFor="email">Email</label>
        <div className="input1">
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <label htmlFor="password">Password</label>
        <div className="input2">
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <Link to="/home">
          <button>SIGN IN</button>
        </Link>
        <p>
          Forgot your password? <span>Reset Password</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
