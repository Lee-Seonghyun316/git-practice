// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { signIn } from "./certification/auth";
import AuthRoute from "./Route/AuthRoute";

import Home from "./form/Home";
import Profile from "./certification/Profile";
import NotFound from "./form/NotFound";
import LoginForm from "./form/LoginForm";
import LogoutButton from "./form/LogoutButton";
import signUp from "./form/signUp"
import './App.css';


function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;

    const login = ({ id, password }) => setUser(signIn({ id, password }));
    const logout = () => setUser(null);

    return (
        <Router>
            <header>
                {authenticated ? (
                    <LogoutButton logout={logout} />
                ) : (
                    <Link to="/login">
                        <button>Main</button>
                    </Link>
                )}

                <Link to="/profile">
                    <button>Profile</button>
                </Link>

                <Link to="/signUp">
                    <button>signUp</button>
                </Link>


            </header>
            <hr />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        path="/login"
                        render={props => (
                            <LoginForm authenticated={authenticated} login={login} {...props} />
                        )}
                    />
                    <Route
                        path="/signUp"
                        component={signUp}
                    />
                    <AuthRoute
                        authenticated={authenticated}
                        path="/profile"
                        render={props => <Profile user={user} {...props} />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
