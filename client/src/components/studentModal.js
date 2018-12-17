import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addSTUDENT } from "../actions/studentActions";
import PropTypes from "prop-types";

class STUDENTModal extends Component {
  state = {
    modal: false,
    studentName: "",
    email: "",
    enrolmentYear: "",
    studentclass: "",
    city: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const newSTUDENT = {
      studentNamename: this.state.studentName,
      email: this.state.email,
      enrolmentYear: this.state.enrolmentYear,
      studentclass: this.state.studentclass,
      city: this.state.city,
      user_id: this.props.user_id
    };

    // Student via addSTUDENT action:
    this.props.addSTUDENT(newSTUDENT);

    // Close modal:
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="primary"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add new Student
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add Student to your library
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit} className="form">
              <FormGroup>
                <Label for="studentName">StudentName:</Label>
                <Input
                  color="black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Example: Mahesh Choda"
                  onChange={this.onChange}
                />
                <Label for="email">Email:</Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Example: choda.maheshbabu@gmail.com"
                  onChange={this.onChange}
                />
                <Label for="studentclass">StudentClass:</Label>
                <Input
                  type="text"
                  name="studentclass"
                  id="studentclass"
                  placeholder="Section A"
                  value={this.state.studentclass}
                  onChange={this.onChange}
                />
                <Label for="enrolmentYear">enrolmentYear:</Label>
                <Input
                  type="number"
                  name="enrolmentYear"
                  id="enrolmentYear"
                  placeholder="Example: 2018"
                  value={this.state.enrolmentYear}
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Student
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

STUDENTModal.propTypes = {
  categories: PropTypes.array.isRequired,
  user_id: PropTypes.string,
  addSTUDENT: PropTypes.func.isRequired
};

export default connect(
  null,
  { addSTUDENT }
)(STUDENTModal);
