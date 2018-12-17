import React, { Component } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

import EditModal from "./EditModal";

class STUDENT extends Component {
  render() {
    const {
      studentId,
      studentName,
      email,
      enrolmentYear,
      studentclass,
      city,
      country,
      _id,
      id,
      onDeleteClick
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-4 STUDENT-details">
            <h4>{studentName}</h4>
            <p style={{ color: "#007bff" }}>{email}</p>
          </div>
          <div className="col-md-4 text-center progress-div" />
        </div>
        <div className="row buttons-row">
          <div className="col-md-4">
            <Button className="remove-btn" size="sm" onClick={onDeleteClick}>
              Delete
            </Button>
            <EditModal
              _id={_id}
              id={id}
              studentId={studentId}
              studentName={studentName}
              email={email}
              enrolmentYear={enrolmentYear}
              studentclass={studentclass}
              city={city}
              country={country}
            />
          </div>
        </div>
      </div>
    );
  }
}

STUDENT.propTypes = {
  studentName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  studentclass: PropTypes.string,
  enrolmentYear: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  user_id: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired
};

export default STUDENT;

//NOTE: Change to functional component?
