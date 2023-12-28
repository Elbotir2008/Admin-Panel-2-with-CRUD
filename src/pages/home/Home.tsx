import Aside from "../../components/aside/Aside";
import "./home.scss";
const Home = () => {
  return (
    <div>
      <Aside />
      <div className="homeCards grid-class">
        <div className="card flex-class">
          <div className="left">
            <img src="./home1.svg" alt="Eror" />
            <h4>Students</h4>
          </div>
          <h2>243</h2>
        </div>
        <div className="card flex-class">
          <div className="left">
            <img src="./home2.svg" alt="Eror" />
            <h4>Course</h4>
          </div>
          <h2>13</h2>
        </div>
        <div className="card flex-class">
          <div className="left">
            <img src="./home3.svg" alt="Eror" />
            <h4>Payments</h4>
          </div>
          <h2>
            <span>INR</span> 556,000
          </h2>
        </div>
        <div className="card flex-class">
          <div className="left">
            <img src="./home4.svg" alt="Eror" />
            <h4>Users</h4>
          </div>
          <h2>3</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
