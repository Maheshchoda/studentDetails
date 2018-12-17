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
import { updateSTUDENT } from "../actions/studentActions";
import PropTypes from "prop-types";

class EditModal extends Component {
  state = {
    modal: this.props.false,
    studentId: this.props.studentId,
    studentName: this.props.studentName,
    email: this.props.email,
    enrolmentYear: this.props.enrolmentYear,
    studentclass: this.props.studentclass,
    city: this.props.city,
    country: this.props.country,
    modal_form: "Edit"
  };

  toggle = () => {
    this.setState(() => {
      return {
        modal: !this.state.modal
      };
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const modifiedSTUDENT = {
      _id: this.props._id,
      id: this.props.id,
      studentId: this.props.studentId,
      studentName: this.props.studentName,
      email: this.props.email,
      enrolmentYear: this.props.enrolmentYear,
      studentclass: this.props.studentclass,
      city: this.props.city,
      country: this.props.country
    };

    // Edit STUDENT via updateSTUDENT action:
    this.props.updateSTUDENT(modifiedSTUDENT);

    // Close modal:
    this.toggle();
  };

  render() {
    let formgroup;
    if (this.state.modal_form === "Edit") {
      formgroup = (
        <FormGroup>
          <Label for="studentName">Student Name:</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Mahesh CHODA"
            value={this.state.studentName}
            onChange={this.onChange}
          />
          <Label for="email">Email:</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="choda.maheshbabu@gmail.com"
            value={this.state.email}
            onChange={this.onChange}
          />
          <Label for="studentclass">studentClass:</Label>
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
          <Label for="city">City:</Label>
          <Input
            type="string"
            name="city"
            id="city"
            placeholder="Example: Hyderabac"
            value={this.state.city}
            onChange={this.onChange}
          />

          <Button color="dark" style={{ marginTop: "2rem" }} block>
            Edit STUDENT
          </Button>
        </FormGroup>
      );
    }
    return (
      <div>
        {/*EDIT BUTTON*/}
        <Button
          className="edit-button"
          size="sm"
          onClick={() => {
            this.setState(() => {
              return { modal_form: "Edit" };
            });
            this.toggle();
          }}
        >
          Edit
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Edit your existing STUDENT from your library
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>{formgroup}</Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

EditModal.propTypes = {
  studentName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  studentclass: PropTypes.string,
  enrolmentYear: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  id: PropTypes.string,
  updateSTUDENT: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateSTUDENT }
)(EditModal);
