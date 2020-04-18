import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";
import "../css/facedetection.css";
import { Layout, Input, Button } from "component-ui-web-teravin";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        password: "",
      },
      redirect: false,
      submit: false,
      isLogin: false,
      disableButtonLogin: true,
      errorMassage: "",
    };
    this.onChangeForm = this.onChangeForm.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(e) {
    const { form } = this.state;

    e.preventDefault();

    if (form.username && form.password) {
      this.props.login(form);
    } else {
      alert("login failed!");
    }

    this.setState({
      submit: true,
      isLogin: true,
    });
  }

  onChangeForm(data) {
    // const target = e.target;
    // const value = target.value;
    // const name = target.name;
    var disabled = this.state.disableButtonLogin;
    let { form, errorMassage } = this.state;

    // const { name, value } = data;
    const { name, value } = data;
    if (value) {
      form[name] = value;
    } else errorMassage = "This field is required";
    this.setState({
      form: form,
      errorMassage: errorMassage,
      login: true,
      disableButtonLogin: disabled,
    });
  }

  render() {
    const { form, redirect, errorMassage, isLogin } = this.state;
    if (redirect === true) {
      return <Redirect to="/movies" />;
    }
    return (
      <Layout>
        <div className="  row-5 ">
          <div className="col-5">
            <h3>LOGIN</h3>
            <div className="card-body">
              <form onSubmit={this.handlerSubmit}>
                <div class="form-group">
                  <Input
                    value={form.username}
                    type="text"
                    handayani17
                    name="username"
                    error={errorMassage}
                    onChange={this.onChangeForm}
                    // className="form-control"
                    placeholder="username"
                  />
                  {this.state.submit && !form.username && (
                    <div className="help-block">username is required</div>
                  )}
                </div>

                <div class="form-group">
                  <Input
                    value={form.password}
                    type="password"
                    name="password"
                    error={errorMassage}
                    onChange={this.onChangeForm}
                    placeholder="password"
                  />
                  {this.state.submit && !form.password && (
                    <div className="help-block">password is required</div>
                  )}
                </div>

                <button
                  type="submit"
                  // type="info"
                  // role="submit"
                  // size="medium"
                  // loading={isLogin}
                  className="btn btn-primary"
                  disabled={!form.username && !form.password}
                >
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
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
