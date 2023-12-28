import { useNavigate } from "react-router";
import "./register.scss";
import { useEffect, useState } from "react";

const Register = () => {
  const [formInputs, setFormInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormInputs({
      fullName: e.target.elements[0].value,
      email: e.target.elements[1].value,
      password: e.target.elements[2].value,
    });
  };

  useEffect(() => {
    if (formInputs.fullName && formInputs.email && formInputs.password) {
      localStorage.setItem("registerValues", JSON.stringify(formInputs));
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [formInputs, navigate]);

  return (
    <div className="register-container">
      <div className="register-block">
        <h1>CRUD OPERATIONS</h1>
        <h5>SIGN UP</h5>
        <p>Enter your credentials to access your account</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="fullname">FullName</label>
          <div className="input1">
            <input
              type="text"
              id="fullname"
              placeholder="Enter your fullname"
            />
          </div>
          <label htmlFor="email">Email</label>
          <div className="input2">
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <label htmlFor="password">Password</label>
          <div className="input3">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">SIGN UP</button>
          <p>
            Forgot your password? <span>Reset Password</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
