export const userService = {
  register,
  login,
};

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`http://localhost:3000/signup`, requestOptions);
}

export const faceService = {
  facedetection,
};

function facedetection() {
  const getUser = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringfy(),
  };
  return fetch("http://localhost:3000/users", getUser);
}

function login(form) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

  return fetch(`http://localhost:3000/login`, requestOptions);
}
