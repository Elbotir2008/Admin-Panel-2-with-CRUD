import { useEffect, useState } from "react";
import Aside from "../../components/aside/Aside";
import axios from "axios";
import "./students.scss";

const Students = () => {
  const [studentsList, setStudentsList] = useState([]);
  const fetchStudentsApi = async () => {
    try {
      let res = await axios.get(
        "https://658be2d2859b3491d3f4fb51.mockapi.io/api/v2/AdminPanelStudents"
      );
      let data = await res.data;
      console.log(data);
      setStudentsList(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStudentsApi();
  }, []);
  return (
    <div>
      <Aside />
      <div className="students">
        <form className="flex-class">
          <div className="form-text">
            <h1>Students List</h1>
          </div>
          <div className="form-btns">
            <input type="text" placeholder="Search students..." />
            <button>ADD NEW STUDENT</button>
          </div>
        </form>
        <table>
          <thead>
            <hr />
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroil Number</th>
              <th>Date of admission</th>
            </tr>
            <hr />
          </thead>
          <tbody>
            {studentsList.length > 0
              ? studentsList.map((st: any) => (
                  <tr>
                    <td className="imgTd">
                      <img src={st.img} alt="Eror" />
                    </td>
                    <td>{st.name}</td>
                    <td>{st.email}</td>
                    <td>{st.phone}</td>
                    <td>{st.enroolPhone}</td>
                    <td>{st.Date}</td>
                    <td>
                      <img src="./pen.svg" alt="Eror" />
                      <img src="./trash.svg" alt="Eror" />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
