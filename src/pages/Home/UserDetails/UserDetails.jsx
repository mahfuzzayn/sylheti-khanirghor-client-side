import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useValidateImageURL } from "use-validate-image-url";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const userPhotoUrlStatus = useValidateImageURL(user?.photoURL);
    const [isEditProfileFormActive, setIsEditProfileFormActive] =
        useState(false);
    const location = useLocation();
    const from = location.pathname;
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (user?.reloadUserInfo?.localId !== from.split("/")[2]) {
            return navigate("/login", { replace: true });
        }
    }, []);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.displayName.value;
        const photoUrl = form.photoUrl.value;

        // console.log(displayName, photoUrl);

        updateUserProfile(user, displayName, photoUrl)
            .then((result) => {
                setSuccess(
                    "You account information has been updated successfully!"
                );
                form.reset();
                setTimeout(() => {
                    setIsEditProfileFormActive(false);
                }, 1000);
            })
            .catch((error) => {
                const message = error.message;
                console.log(message);
            });
    };

    return (
        <div className="user-details mx-5">
            <div className="container max-w-[1920px] mx-auto">
                <div className="user-details-banner h-[400px] bg-green-50 flex justify-center items-center">
                    <h2 className="text-[40px] md:text-[50px] text-[#1A1919] font-bold">
                        User Details
                    </h2>
                </div>
                <div className="user-details-container mt-[130px]">
                    <div className="user-information flex flex-col md:flex-row justify-center items-center gap-16 gap-x-20">
                        <div className="flex flex-col items-center gap-4">
                            <div className="picture">
                                {userPhotoUrlStatus === "valid" ? (
                                    <img
                                        src={user?.photoURL}
                                        className="w-full sm:w-[150px] rounded-full"
                                    />
                                ) : (
                                    <FaUserCircle className="text-[150px] cursor-pointer"></FaUserCircle>
                                )}
                            </div>
                            <button
                                onClick={() =>
                                    setIsEditProfileFormActive(
                                        !isEditProfileFormActive
                                    )
                                }
                                type="button"
                                className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Edit Profile
                            </button>
                        </div>
                        <div className="content">
                            <div
                                className={`current-user-information flex flex-col gap-4 ${
                                    isEditProfileFormActive
                                        ? "hidden"
                                        : "static"
                                }`}
                            >
                                <h2 className="text-[26px] font-semibold">
                                    User Information
                                </h2>
                                <h2 className="text-[12px] md:text-[14px] font-semibold">
                                    Display Name
                                    <p className="text-[18px] sm:text-[22px] font-normal">
                                        {user?.displayName}
                                    </p>
                                </h2>
                                <h2 className="text-[12px] md:text-[14px] font-semibold">
                                    Email Address
                                    <p className="text-[18px] sm:text-[22px] font-normal">
                                        {user?.email}
                                    </p>
                                </h2>
                            </div>
                            <form
                                onSubmit={handleUpdateProfile}
                                className={`md:w-[400px] ${
                                    isEditProfileFormActive
                                        ? "static"
                                        : "hidden"
                                }`}
                            >
                                <h2 className="text-[26px] font-semibold mb-6">
                                    Update User Details
                                </h2>
                                <div className="mb-6">
                                    <label
                                        htmlFor="displayName"
                                        className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                                    >
                                        Display Name
                                    </label>
                                    <input
                                        type="text"
                                        id="displayName"
                                        name="displayName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Sylheti Khanirghor"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="photoUrl"
                                        className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                                    >
                                        Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        id="photoUrl"
                                        name="photoUrl"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="img.co/photo.png"
                                    />
                                </div>
                                {success && (
                                    <div className="flex justify-end items-start mb-6">
                                        <p className="text-sm font-medium text-default-color dark:text-gray-300">
                                            {success}
                                        </p>
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:float-right"
                                >
                                    Save changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
