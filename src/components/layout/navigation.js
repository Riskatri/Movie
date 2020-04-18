import React from "react";
import { Navbar } from "component-ui-web-teravin";

function Navigation() {
  function logout() {
    localStorage.clear();
  }
  const token = localStorage.getItem("jwtToken");

  if (!token) {
    return (
      <Navbar
        logo={`https://cdn2.iconfinder.com/data/icons/scenarium-vol-3-1/128/009_online_bank_payment_transaction_card_money_phone-512.png`}
      >
        <Navbar.Start>
          <Navbar.Item href="/">Movies</Navbar.Item>
          <br />
          <Navbar.Item href="/login">Login</Navbar.Item>
          <br />
          <Navbar.Item href="/register">
            <span> Register </span>
          </Navbar.Item>
        </Navbar.Start>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        logo={`https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png`}
      >
        <Navbar.Start>
          <Navbar.Item href="/movies">List Movies</Navbar.Item>
          <br />
          <Navbar.Item href="/face">Face Detection</Navbar.Item>
          <br />
          <Navbar.Item href="/media">Take a Photo</Navbar.Item>
          <br />
        </Navbar.Start>
        <Navbar.End name="" onLogout={logout} />
      </Navbar>
    );
  }
}

export default Navigation;
