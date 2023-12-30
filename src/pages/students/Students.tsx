import { useEffect, useState } from "react";
import Aside from "../../components/aside/Aside";
import axios from "axios";
import "./students.scss";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";

const Students = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [validated, setValidated] = useState(false);
  const [dismis, setDismis] = useState(false);

  const [modalFormData, setModalFormData] = useState({
    name: "",
    email: "",
    enrollPhone: "",
    phone: "",
    date: "",
  });

  const handleModalInputChange = (e: any) => {
    const { name, value } = e.target;
    setModalFormData({ ...modalFormData, [name]: value });
  };

  const handleModalSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setDismis(false);
    } else {
      try {
        const res = await axios.post(
          "https://658be2d2859b3491d3f4fb51.mockapi.io/api/v2/Students",
          modalFormData
        );
        console.log("Form submitted successfully:", res.data);
        setDismis(true);
        toast.success("Your request has been processed");
        fetchStudentsApi();
      } catch (error) {
        console.log(error);
      }
    }
    setValidated(true);
  };

  const fetchStudentsApi = async () => {
    try {
      let res = await axios.get(
        "https://658be2d2859b3491d3f4fb51.mockapi.io/api/v2/Students"
      );
      let data = await res.data;
      setStudentsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudentsApi();
  }, []);

  const fetchSearchedStudentsApi = async (searchValue: string) => {
    try {
      let res = await axios.get(
        `https://658be2d2859b3491d3f4fb51.mockapi.io/api/v2/Students?search=${searchValue}`
      );
      let data = await res.data;
      setStudentsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      let res = await axios.delete(
        `https://658be2d2859b3491d3f4fb51.mockapi.io/api/v2/Students/` + id
      );
      let data = await res.data;
      console.log(data);
      toast.success("Your request has been processed");
      fetchStudentsApi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Aside />
      <div className="students">
        <form className="flex-class">
          <div className="form-text">
            <h1>Students List</h1>
          </div>
          <div className="form-btns">
            <input
              type="text"
              placeholder="Search students..."
              onChange={(e) => fetchSearchedStudentsApi(e.target.value)}
            />
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              ADD NEW STUDENT
            </button>
          </div>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Enroll Number</th>
              <th scope="col">Date of admission</th>
            </tr>
          </thead>
          <tbody>
            {studentsList.length > 0
              ? studentsList.map((st: any) => (
                  <tr key={st.id}>
                    <td className="imgTd">
                      <img src={st.avatar} alt="Error" />
                    </td>
                    <td>{st.name}</td>
                    <td>{st.email}</td>
                    <td>{st.phone}</td>
                    <td>{st.enroolPhone}</td>
                    <td>{st.date}</td>
                    <td className="actions flex-class">
                      <img src="./pen.svg" alt="Error" />
                      <img
                        src="./trash.svg"
                        onClick={() => handleDelete(st.id)}
                        alt="Error"
                      />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>

      <div
        className="modal modal-lg fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Student
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form
                noValidate
                validated={validated}
                onSubmit={(e) => handleModalSubmit(e)}
              >
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      name="name"
                      required
                      type="text"
                      onChange={(e) => handleModalInputChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        type="email"
                        onChange={(e) => handleModalInputChange(e)}
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      name="phone"
                      type="tel"
                      required
                      onChange={(e) => handleModalInputChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid phone number.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Enroll Phone</Form.Label>
                    <Form.Control
                      name="enrollPhone"
                      type="tel"
                      required
                      onChange={(e) => handleModalInputChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid enroll phone number.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      name="date"
                      type="date"
                      required
                      onChange={(e) => handleModalInputChange(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid date.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="I accept all"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button
                  size="lg"
                  type="submit"
                  data-bs-dismiss={dismis ? "modal" : ""}
                  style={{ float: "right" }}
                >
                  Submit form
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
