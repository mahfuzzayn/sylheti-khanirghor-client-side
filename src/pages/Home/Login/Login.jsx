import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const from = location.state?.from?.pathname || "/";
    console.log(location);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setSuccess("");
        setError("");

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("User logged in successfully.");
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const message = error.message;
                console.log(message);
                setError(message);
            });
    };

    const handleGoogleSignIn = () => {
        setSuccess("");
        setError("");

        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setSuccess("User successfully signed in using Google.");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const message = error.message;
                console.log(message);
                setError(message);
                navigate(from, { replace: true });
            });
    };

    const handleGithubSignIn = () => {
        setSuccess("");
        setError("");

        githubSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setSuccess("User successfully signed in using Github.");
            })
            .catch((error) => {
                const message = error.message;
                console.log(message);
                setError(message);
            });
    };

    return (
        <div className="login mx-10">
            <div className="container max-w-[1920px] mx-auto">
                <h2 className="text-[40px] text-center font-semibold mb-5">
                    Please Login
                </h2>
                <form onSubmit={handleLogin} className="max-w-[768px] mx-auto">
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="name@sylhetikhanighor.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            Don't have an Account?{" "}
                            <Link
                                to="/register"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                    {success && (
                        <div className="flex items-start mb-6">
                            <p className="text-sm font-medium text-default-color dark:text-gray-300">
                                {success}
                            </p>
                        </div>
                    )}
                    {error && (
                        <div className="flex items-start mb-6">
                            <p className="text-sm font-medium text-red-600 dark:text-gray-300">
                                {error}
                            </p>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Login
                    </button>
                    <br />
                </form>
                <div className="flex max-w-[768px] mt-10 mx-auto gap-x-2">
                    <button
                        onClick={handleGoogleSignIn}
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Sign in With Google
                    </button>
                    <button
                        onClick={handleGithubSignIn}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Sign in With Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
