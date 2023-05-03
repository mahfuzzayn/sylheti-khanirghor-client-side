import React from "react";

const SkButton = ({ value }) => {
    return (
        <button
            type="button"
            className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4"
        >
            {value}
        </button>
    );
};

export default SkButton;
