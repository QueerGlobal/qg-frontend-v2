import React, { FC } from "react";
import Button from "../common/button/Button";

const Login: FC = () => {
	return <>
		<h1>Welcome Back</h1>

		<header>LOG IN</header>
		<form>
			<label htmlFor="email">Email
				<input type="email" name="email" id="email" title="email" placeholder="contact@somewhere.com" />
			</label>

			<label htmlFor="password">
				<input type="password" id="password" name="password" title="password" placeholder="***************"/>
			</label>

			<label htmlFor="remember-me">
				<input type="checkbox" id="remember-me" /> Remember Me
			</label>

			<Button label="primary" buttonText="LOG IN" />
		</form>

		<a href="/forgot-password" title="forgot-pw">FORGOT PASSWORD?</a>

		<p>Need an account?</p>
		<a href="/signup" title="sign-up">SIGN UP</a>
	</>;
};

export default Login;
