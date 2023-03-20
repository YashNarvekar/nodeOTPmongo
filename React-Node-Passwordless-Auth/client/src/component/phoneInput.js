import React, { useState } from "react";
import styles from "./styles/style.module.css";
import axios from "axios";
function PhoneInput(props) {
  const { value, handleChange, hashHandleChange } = props;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChanges = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Continue = (e) => {
    axios
      .post("http://localhost:4000/sendOTP", {
        phone: `${value.phone}`,
      })
      .then(function (res) {
        console.log(res.data.otp);
        const hash = res.data.hash;
        hashHandleChange(hash);
      });

    e.preventDefault();
    props.nextStep();
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      alert("posted");
      axios.post("http://localhost:4000/register", user).then(
        (res) => console.log(res)
        // alert(res.data.message);
        // history.push("/login");
      );
    } else {
      alert("invlid input");
    }
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          background: " #fff",
          border: "1px solid #dddfe2",
          "border-radius": "8px",
          " padding": "1rem",
          "align-items": "center",
          "text-align": "center",
        }}
        className="register"
      >
        {/* {console.log("USer", user)} */}
        <h1>Register</h1>
        <input
          style={{
            "border-radius": "8px",
            border: "2px solid #dddfe2",
            outline: "none",
            color: "#1d2129",
            margin: "0.5rem 0",
            padding: "0.5rem 0.75rem",
            width: "92%",
            "font-size": "1rem",
          }}
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChanges}
        ></input>
        <input
          style={{
            "border-radius": "8px",
            border: "2px solid #dddfe2",
            outline: "none",
            color: "#1d2129",
            margin: "0.5rem 0",
            padding: "0.5rem 0.75rem",
            width: "92%",
            "font-size": "1rem",
          }}
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChanges}
        ></input>
        <input
          style={{
            "border-radius": "8px",
            border: "2px solid #dddfe2",
            outline: "none",
            color: "#1d2129",
            margin: "0.5rem 0",
            padding: "0.5rem 0.75rem",
            width: "92%",
            "font-size": "1rem",
          }}
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChanges}
        ></input>
        <input
          style={{
            "border-radius": "8px",
            border: "2px solid #dddfe2",
            outline: "none",
            color: "#1d2129",
            margin: "0.5rem 0",
            padding: "0.5rem 0.75rem",
            width: "92%",
            "font-size": "1rem",
          }}
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChanges}
        ></input>
        {/* <div className="button">Register</div>
      <div>or</div> */}
        <input
          type="tel"
          value={value.phone}
          onChange={handleChange("phone")}
          placeholder="Enter the Phone No."
          className={styles.input}
        />

        <button onClick={Continue} className={styles.submit}>
          Send OTP
        </button>
        <button
          style={{
            background: "#1877f2",
            border: "1px solid #1877f2",
            color: "#fff",
            "font-size": "1.25rem",
            padding: " 0.5rem",
            margin: "0.5rem 0",
            "border-radius": " 8px",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={register}
          className="button"
        >
          Register
        </button>
      </div>{" "}
      {/* <div className={styles}>
        {" "}
        <div className={styles.background}>
          {" "}
          <div className={styles.container}>
            <div className={styles.heading}>PixCase</div>
            <div className={styles.input_text}>Phone number:</div>{" "}
            <div className={styles.input_container}>
              {" "}
              <input
                type="tel"
                value={value.phone}
                onChange={handleChange("phone")}
                placeholder="Enter the Phone No."
                className={styles.input}
              />
            </div>
            <button onClick={Continue} className={styles.submit}>
              Send OTP
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default PhoneInput;
