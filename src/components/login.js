// import React from "react";
// import axios from "axios";
// // import createPersistedState from "@plq/use-persisted-state";
// import { Redirect } from "react-router-dom";
// // import { useForm } from "react-hook-form";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         username: "",
//         password: "",
//       },
//       redirect: false,
//       submit: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handlerSubmit = this.handlerSubmit.bind(this);
//   }

//   handlerSubmit(e) {
//     const { user } = this.state;

//     e.preventDefault();
//     axios
//       .post("http://127.0.0.1:4001/login", {
//         username: user.username,
//         password: user.password,
//       })
//       .then((res) => {
//         const token = res.data.accessToken;
//         sessionStorage.setItem("token", token);
//         alert("signin success");
//         window.location.replace("/movies");
//       });
//     this.setState({
//       submit: true,
//     });
//   }

//   handleChange(e) {
//     const target = e.target;
//     const value = target.value;
//     const name = target.name;

//     const { user } = this.state;

//     this.setState({
//       user: {
//         ...user,
//         [name]: value,
//       },
//     });
//   }

//   render() {
//     const { user, redirect } = this.state;
//     if (redirect === true) {
//       return <Redirect to="/movies" />;
//     }
//     return (
//       <div className=" container row-5 ">
//         <div className="container col-5 ">
//           <h3>LOGIN</h3>
//           <div className="card-body">
//             <form onSubmit={this.handlerSubmit}>
//               <div class="form-group">
//                 <input
//                   value={user.username}
//                   type="text"
//                   name="username"
//                   onChange={this.handleChange}
//                   class="form-control"
//                   placeholder="username"
//                 />
//                 {this.state.submit && !user.username && (
//                   <div className="help-block">username is required</div>
//                 )}
//               </div>

//               <div class="form-group">
//                 <input
//                   value={user.password}
//                   type="password"
//                   name="password"
//                   onChange={this.handleChange}
//                   class="form-control"
//                   placeholder="password"
//                 />
//                 {this.state.submit && !user.password && (
//                   <div className="help-block">password is required</div>
//                 )}
//               </div>

//               <button type="submit" className="btn btn-dark">
//                 LOGIN
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Login;

import React, { useState } from "react";
import axios from "axios";
import createPersistedState from "@plq/use-persisted-state";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const [usePersistedState] = createPersistedState(
    "token",
    window.sessionStorage
  );

  const [form, setValues] = useState({
    username: "",
    password: "",
  });
  const [token, getToken] = usePersistedState("token", "");

  const [status, setStatus] = useState({
    redirect: false,
  });

  const handlerSubmit = async (e) => {
    try {
      const result = await axios.post("http://127.0.0.1:4001/login", {
        username: form.username,
        password: form.password,
      });
      getToken(result.data);

      //   setStatus(result.status);
      console.log(result.data.accessToken);
      if (result.status === 200) {
        alert("login sucessfuly!");
        setStatus({ redirect: true });
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const defaultValues = {
    username: "",
    password: "",
  };
  const { register, errors, handleSubmit } = useForm({
    defaultValues,
  });

  if (status.redirect === true) {
    return <Redirect to="/movies" />;
  }
  return (
    <div className=" container row-5 ">
      <div className="container col-5 ">
        <h3>LOGIN</h3>
        <div className="card-body ">
          <form onSubmit={(e) => e.preventDefault()}>
            <div class="form-group">
              <input
                value={form.username}
                type="text"
                ref={register({
                  required: "Please, fill your username",
                  minLength: 6,
                  message: "username harus minimal 6",
                })}
                name="username"
                onChange={handleChange}
                class="form-control"
                placeholder="username"
              />
              {errors.username && errors.username.message}
            </div>
            <div class="form-group">
              <input
                value={form.password}
                type="password"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 5,
                    message: "Password must have at least 5 characters",
                  },
                })}
                name="password"
                onChange={handleChange}
                class="form-control"
                placeholder="password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleSubmit(handlerSubmit)}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
