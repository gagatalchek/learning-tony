import { type } from "@testing-library/user-event/dist/type";
import s from "./login.module.scss";
import { useState } from "react";
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";

const Login = () => {
  const [toggle, setToggle] = useState(true);

  const hadleSwitch = () => {
    setToggle((prev) => {
      return !prev;
    });
  };

  return (
    <div className={s.page_container}>
      <div className={s.container}>
        <div></div>
        <img src="Saly-11.png" />
      </div>
      <div className={s.login_container}>
        <h1>Login</h1>
        <div className={s.input_container}>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokelinejoin="round"
              />
              <path
                d="M16.28 13.6099C15.15 14.7399 13.53 15.0899 12.1 14.6399L9.50995 17.2199C9.32995 17.4099 8.95995 17.5299 8.68995 17.4899L7.48995 17.3299C7.08995 17.2799 6.72995 16.8999 6.66995 16.5099L6.50995 15.3099C6.46995 15.0499 6.59995 14.6799 6.77995 14.4899L9.35995 11.9099C8.91995 10.4799 9.25995 8.85989 10.39 7.72989C12.01 6.10989 14.65 6.10989 16.28 7.72989C17.9 9.33989 17.9 11.9799 16.28 13.6099Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.4501 16.2799L9.6001 15.4199"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3944 10.7H13.4034"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              onClick={hadleSwitch}
              type={toggle ? "text" : "password"}
              placeholder="Password"
            />
            <svg
              onClick={hadleSwitch}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
