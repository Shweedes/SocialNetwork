import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = () => {
    return <form>
        <div>
            <Field component={"input"} placeholder={"Login"} name={"login"}/>
        </div>
        <div>
            <Field component={"input"} placeholder={"Password"} name={"password"}/>
        </div>
        <div>
            <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> Remember Me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm/>
    </div>
}

export default Login