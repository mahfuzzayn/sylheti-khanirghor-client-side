import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Register = () => {
    const { registerUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        // console.log(name, email, password, photoURL);

        setSuccess("");
        setError("");

        // Password Validation
        if (password.length < 6) {
            setError("Password length cannot be less than 6 characters.");
            return;
        }

        registerUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                // console.log(createdUser);
                setSuccess("Registration completed successfully.");
                updateUserProfile(createdUser, name, photoURL)
                    .then((result) => {
                        setTimeout(() => {
                            navigate("/", { replace: true });
                        }, 1000);
                    })
                    .catch((error) => {
                        const message = error.message;
                        console.log(message);
                        setError(message);
                    });
                form.reset();
            })
            .catch((error) => {
                const message = error.message;
                console.log(message);
                setError(message);
            });
    };

    return (
        <div className="register mx-10">
            <div className="container max-w-[1920px] mx-auto">
                <h2 className="text-[40px] text-center font-semibold mb-5">
                    Please Register
                </h2>
                <form
                    onSubmit={handleRegister}
                    className="max-w-[768px] mx-auto"
                >
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Sylheti Khanirghor"
                            required
                        />
                    </div>
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
                    <div className="mb-6">
                        <label
                            htmlFor="photo"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Photo URL
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            id="photoURL"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            Already have an Account?{" "}
                            <Link
                                to="/login"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Login
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
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
