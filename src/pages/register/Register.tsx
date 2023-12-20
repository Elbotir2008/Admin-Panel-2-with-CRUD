import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
  return (
    <div className="register-container">
      <div className="register-block">
        <h1>CRUD OPERATIONS</h1>
        <h5>SIGN UP</h5>
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
        <Link to="/login">
          <button>SIGN UP</button>
        </Link>
        <p>
          Forgot your password? <span>Reset Password</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
