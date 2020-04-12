import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
      },

      redirect: false,
      submit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(e) {
    e.preventDefault();

    const { user } = this.state;
    if (user.name && user.username && user.email && user.password) {
      this.props.register(user);
    }

    this.setState({
      submit: true,
    });
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className=" container row-5  ">
        <div className="container col-5 ">
          <h3>REGISTER</h3>
          <div className="card-body">
            <form onSubmit={this.handlerSubmit}>
              <div class="form-group">
                <input
                  value={user.name}
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  class="form-control text-dark"
                  placeholder="name"
                />
                {this.state.submit && !user.name && (
                  <div className="help-block">name is required</div>
                )}
              </div>
              <div class="form-group">
                <input
                  value={user.username}
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="username"
                />
                {this.state.submit && !user.username && (
                  <div className="help-block">username is required</div>
                )}
              </div>
              <div class="form-group">
                <input
                  value={user.email}
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="email address"
                />
                {this.state.submit && !user.email && (
                  <div className="help-block">email is required</div>
                )}
              </div>
              <div class="form-group">
                <input
                  value={user.password}
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="password"
                />
                {this.state.submit && !user.password && (
                  <div className="help-block">password is required</div>
                )}
              </div>

              <button
                // onClick={this.handlerSubmit}
                type="submit"
                className="btn btn-dark"
              >
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

export default connect(mapState, actionCreators)(Register);
