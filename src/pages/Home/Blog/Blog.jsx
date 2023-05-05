import React from "react";
import BlogPdf from "../../../components/BlogPdf/BlogPdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Loader from "../../../components/Loader/Loader";

const Blog = () => {
    return (
        <div className="blog">
            <div className="container max-w-[1920px] mx-auto mb-[130px]">
                <div className="react-to-pdf-container flex justify-end max-w-[1280px] mx-auto mb-8">
                    <PDFDownloadLink
                        document={<BlogPdf />}
                        fileName="sylheti-khanighor-blog-v2"
                        className="mr-4"
                    >
                        {({ loading }) =>
                            loading ? (
                                <button
                                    type="button"
                                    className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-green-800"
                                >
                                    Loading...
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="focus:outline-none text-white bg-default-color hover:bg-default-color-dark focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-green-800"
                                >
                                    Generate PDF File
                                </button>
                            )
                        }
                    </PDFDownloadLink>
                </div>
                <div className="blog-banner h-[400px] bg-green-50 flex justify-center items-center">
                    <h2 className="text-[40px] md:text-[50px] text-[#1A1919] font-bold">
                        Blog
                    </h2>
                </div>
                <div className="blog-section mt-[130px] mx-12">
                    <div className="blog-header">
                        <h1 className="text-[36px] sm:text-[48px] font-bold text-[#1A1919] text-center">
                            Questions
                        </h1>
                    </div>
                    <div className="questions text-[#1A1919] text-justify mt-10">
                        <div className="container max-w-[1280px] flex flex-col gap-y-8 mx-auto">
                            <div className="question question-1">
                                <h3 className="text-[24px] font-semibold">
                                    1. Tell us the differences between
                                    uncontrolled and controlled components.
                                </h3>
                                <p className=" mt-1">
                                    <span className="font-semibold">Ans: </span>
                                    <span className="text-[#757575]">
                                        Uncontrolled components and controlled
                                        components are terms that are commonly
                                        used in the context of building user
                                        interfaces, particularly in web
                                        development. The main difference between
                                        theses two types of components is how
                                        they handle user input.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        Uncontrolled components and controlled
                                        components are terms that are commonly
                                        used in the context of building user
                                        interfaces, particularly in web
                                        development. The main difference between
                                        theses two types of components is how
                                        they handle user input.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        Uncontrolled components are those where
                                        the value of the input field is handled
                                        by the DOM (Document Object Model)
                                        rather than React. This means that the
                                        component does not manage its own state,
                                        and any changes to the input field will
                                        be reflected directly in the DOM.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        On the other hand, controlled components
                                        are those where the value of the input
                                        field is managed by the component's
                                        state in React. This means that any
                                        changes to the input field will be
                                        handled by the component, and the
                                        component will update its own state
                                        accordingly.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        The advantage of using controlled
                                        components is that they provide more
                                        control and reliability over the user
                                        interface. Since the component is
                                        managing its own state, it is easier to
                                        validate and manipulate user input, and
                                        to ensure that the component is always
                                        in a consistent state.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        Uncontrolled components, on the other
                                        hand, are generally easier to set up and
                                        require less code. They are often used
                                        for simple forms or for cases where the
                                        value of the input field does not need
                                        to be manipulated or validated.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        Overall controlled components offer more
                                        control and consistency, they also
                                        require more code and can be more
                                        complex to set up. Uncontrolled
                                        components, on the other hand, are
                                        easier to set up and require less code,
                                        but may be less flexible and harder to
                                        validate.
                                    </span>
                                </p>
                            </div>
                            <div className="question question-2">
                                <h3 className="text-[24px] font-semibold">
                                    2. How to validate React props using
                                    PropTypes?
                                </h3>
                                <p className="mt-1">
                                    <span className="font-semibold">Ans: </span>
                                    <span className="text-[#757575]">
                                        To validate React props using PropTypes,
                                        follow these steps:
                                    </span>
                                </p>
                                <ol className="text-[#757575] ml-4 my-1">
                                    <li className="list-decimal">
                                        Install the prop-types package: You can
                                        install the prop-types package using npm
                                        or yarn. Run the following command in
                                        your terminal:{" "}
                                        <code className="text-red-600">
                                            npm install prop-types
                                        </code>
                                    </li>
                                    <li className="list-decimal">
                                        Import PropTypes: In the component where
                                        you want to validate props, import
                                        PropTypes:{" "}
                                        <code className="text-red-600">
                                            import PropTypes from 'prop-types';
                                        </code>
                                    </li>
                                    <li className="list-decimal">
                                        Define propTypes: Create a propTypes
                                        object and define the props that you
                                        want to validate. You can use the
                                        PropTypes object to define the type,
                                        shape, and other characteristics of your
                                        props.
                                    </li>
                                    <li className="list-decimal">
                                        Validate props: To validate your props,
                                        simply pass the props to your component
                                        and PropTypes will check if they match
                                        the defined types and throw an error if
                                        they don't.
                                    </li>
                                </ol>
                                <p className="mt-1">
                                    <span className="text-[#757575]">
                                        By validating props using PropTypes, you
                                        can make that the props passed to your
                                        component are of the correct type and
                                        shape, which can help prevent errors and
                                        improve the reliability of your
                                        application.
                                    </span>
                                </p>
                            </div>
                            <div className="question question-3">
                                <h3 className="text-[24px] font-semibold">
                                    3. Tell us the difference between nodejs and
                                    express js.
                                </h3>
                                <p className="mt-1">
                                    <span className="font-semibold">Ans: </span>
                                    <span className="text-[#757575]">
                                        Node.js and Express.js are both popular
                                        JavaScript technologies used for
                                        server-side development, but they have
                                        different roles and purposes.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        Node.js is a JavaScript runtime built on
                                        Chrome's V8 JavaScript engine. It allows
                                        developers to run JavaScript on the
                                        server-side, enabling them to build
                                        scalable and high-performance web
                                        applications. With Node.js, developers
                                        can use JavaScript for both front-end
                                        and back-end development.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        Express.js, on the other hand, is a web
                                        framework built on top of Node.js. It
                                        provides a set of tools and features for
                                        building web applications, such as
                                        handling HTTP requests and responses,
                                        routing, middleware, and more.
                                        Express.js simplifies the process of
                                        building web applications by providing a
                                        set of abstractions and conventions that
                                        allow developers to focus on building
                                        the core features of their application.
                                    </span>
                                    <span className="text-[#757575]">
                                        {" "}
                                        To summarize, Node.js is a runtime
                                        environment for executing JavaScript on
                                        the server-side, while Express.js is a
                                        web framework built on top of Node.js
                                        that provides a set of tools and
                                        features for building web applications.
                                        Node.js is the foundation on which
                                        Express.js is built, and it is possible
                                        to use Node.js without using Express.js,
                                        but not the other way around.
                                    </span>
                                </p>
                            </div>
                            <div className="question question-4">
                                <h3 className="text-[24px] font-semibold">
                                    4. What is a custom hook, and why will you
                                    create a custom hook?
                                </h3>
                                <p className="mt-1">
                                    <span className="font-semibold">Ans: </span>
                                    <span className="text-[#757575]">
                                        A custom hook is a reusable piece of
                                        code in React that allows developers to
                                        share logic between components. Custom
                                        hooks are JavaScript functions that use
                                        built-in React hooks, such as useState
                                        and useEffect, to abstract away complex
                                        logic and provide a simple interface for
                                        other components to use.
                                    </span>
                                    <br />
                                    <span className="text-[#757575]">
                                        The reason for creating custom hooks is
                                        to improve code reusability and reduce
                                        the amount of duplicate code in their
                                        applications. Instead of copying and
                                        pasting the same code between
                                        components, a custom hook can be created
                                        and reused across multiple components,
                                        making the code more maintainable and
                                        easier to understand. Custom hooks can
                                        also help to improve the separation of
                                        concerns between components. By
                                        abstracting away complex logic into a
                                        custom hook, the component can focus on
                                        rendering the UI and managing user
                                        interactions, while the hook handles the
                                        more complex logic. Some common use
                                        cases for custom hooks include managing
                                        stateful logic, fetching data from APIs,
                                        handling animations, and managing forms.
                                        Custom hooks can also be used to create
                                        reusable abstractions for other
                                        developers on a team or to create
                                        packages that can be shared with the
                                        wider development community. Overall,
                                        custom hooks are a powerful feature of
                                        React that allow developers to share
                                        logic between components, improve code
                                        reusability, and create more
                                        maintainable and scalable applications.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
