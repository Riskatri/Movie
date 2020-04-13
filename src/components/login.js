import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
      },
      redirect: false,
      submit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(e) {
    const { user } = this.state;

    e.preventDefault();

    if (user.username && user.password) {
      this.props.login(user);
    }

    this.setState({
      submit: true,
    });
  }

  handleChange(e) {
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
  }

  render() {
    const { user, redirect } = this.state;
    if (redirect === true) {
      return <Redirect to="/movies" />;
    }
    return (
      <div className=" container row-5 ">
        <div className="container col-5 ">
          <h3>LOGIN</h3>
          <div className="card-body">
            <form onSubmit={this.handlerSubmit}>
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

              <button type="submit" className="btn btn-dark">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
// export default Login;

function mapState(state) {
  const { isLogin } = state.login;
  return { isLogin };
}

const actionCreators = {
  login: userActions.login,
};

export default connect(mapState, actionCreators)(Login);
