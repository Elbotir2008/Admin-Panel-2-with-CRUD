import { useNavigate } from "react-router";
import "./login.scss";
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate();
  let getSignUpValues = JSON.parse(localStorage.getItem("registerValues")!);
  const [signInValues, setSignInValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSignInValues({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    });
    if (
      getSignUpValues.email == signInValues.email &&
      getSignUpValues.password == signInValues.password
    ) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-block">
        <h1>CRUD OPERATIONS</h1>
        <h5>SIGN IN</h5>
        <p>Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">SIGN IN</button>
          <p>
            Forgot your password? <span>Reset Password</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
