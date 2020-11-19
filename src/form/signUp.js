import React from "react";
// eslint-disable-next-line
/*

import { signIn } from "../certification/auth";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import Home from "./Home";
import LoginForm from "./LoginForm";
import AuthRoute from "../Route/AuthRoute";
import Profile from "../certification/Profile";
import NotFound from "./NotFound";

 */


function signUp() {
  return (
    <div>
      <div>
        <h3 id="signup_title"> Signup </h3>
      </div>
      <div className="Signup">
        <div>
          <div>
            <h5> 아이디 </h5>
            <input type="text" maxLength="20" name="signup_id" />
          </div>

          <div>
            <h5> 비밀번호 </h5>
            <input type="password" maxLength="15" name="signup_password" />
          </div>

          <div>
            <h5> 비밀번호 확인 </h5>
            <input type="password" maxLength="15" name="signup_pswCheck" />
          </div>
        </div>

        <div id="signup_section">
          <div>
            <h5> 이름 </h5>
            <input type="text" maxLength="10" name="signup_name" />
          </div>


        </div>
      </div>

      <div>
        <input type="button" value="가입하기" name="signup_submit" />
      </div>
    </div>
  );
}

export default signUp;
