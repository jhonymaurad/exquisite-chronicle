import React from 'react';

export default (props) => (
  <form
    className="register-form"
    // onSubmit={props.handleSubmit}
    >
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      // onChange={props.handleChange}
      // value={props.username}
    />
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      // onChange={props.handleChange}
      // value={props.password}
    />


    <input type="submit" value="Register" />
    <button
      // onClick={props.swapUserForm}
      >Login Instead</button>
  </form>
)