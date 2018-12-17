import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import {
  getSTUDENTs,
  addSTUDENT,
  deleteSTUDENT
} from "../actions/studentActions";
import { changeFilter } from "../actions/filterActions";
import PropTypes from "prop-types";

import STUDENTModal from "./studentModal";
import STUDENT from "./Student";

class STUDENTList extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      // if NOT loged in, redirect to login page:
      this.props.history.push("/login");
    }
    // otherwise, load STUDENTs:
    this.props.getSTUDENTs(this.props.auth.user.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated) {
      // once logged out, redirect user to the login page
      this.props.history.push("/login");
    }
  }

  onDeleteClick = id => {
    this.props.deleteSTUDENT(id);
  };

  handleFilterChange = e => {
    this.props.changeFilter(e.target.value);
  };

  render() {
    const { STUDENTs } = this.props.library;
    return (
      <Container style={{ marginBottom: "20px" }}>
        <STUDENTModal user_id={this.props.auth.user.id} />
        <ListGroup>
          <TransitionGroup className="STUDENT-list">
            {STUDENTs.map(
              ({
                _id,
                id,
                studentId,
                studentName,
                email,
                enrolmentYear,
                studentclass,
                city,
                country
              }) => (
                <CSSTransition key={_id || id} timeout={500} classNames="fade">
                  <ListGroupItem className="STUDENT">
                    <STUDENT
                      _id={_id}
                      id={id}
                      studentId={studentId}
                      studentName={studentName}
                      email={email}
                      enrolmentYear={enrolmentYear}
                      studentclass={studentclass}
                      city={city}
                      country={country}
                      user_id={this.props.auth.user.id}
                      onDeleteClick={() => this.onDeleteClick(_id || id)}
                    />
                  </ListGroupItem>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

STUDENTList.propTypes = {
  getSTUDENTs: PropTypes.func.isRequired,
  addSTUDENT: PropTypes.func.isRequired,
  deleteSTUDENT: PropTypes.func.isRequired,
  library: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  library: state.library,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getSTUDENTs, addSTUDENT, deleteSTUDENT }
)(STUDENTList);
