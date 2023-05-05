import React from "react";
import {
    Page,
    Text,
    Document,
    StyleSheet,
    View,
    Image,
} from "@react-pdf/renderer";
import SylhetiKhanirghorLogo from "../../assets/images/sylheti-khanirghor-logo.png";

const styles = StyleSheet.create({
    logo_section: {
        margin: "0 auto",
        flexDirection: "row",
        padding: "8px 0",
    },
    logo_title: {
        fontSize: 14,
        position: "relative",
        top: 8,
        marginLeft: 5,
    },
    logo: {
        height: "30px",
        width: "30px",
    },
    blog_section: {
        height: 150,
        fontSize: 45,
        fontWeight: 700,
        textAlign: "center",
        backgroundColor: "#f0fdf4",
        paddingTop: 50,
    },
    question_section: {
        fontSize: 30,
        textAlign: "center",
        margin: "80px 0 20px 0",
    },
    qa_main_view: {
        margin: "20px 50px 50px 50px",
    },
    question_container: {
        marginBottom: 50,
    },
    question: {
        fontSize: 22,
        marginBottom: 10,
    },
    answer: {
        color: "#757575",
        fontSize: 16,
        textAlign: "justify",
    },
    footer_text: {
        color: "#6b7280",
        fontSize: 12,
        textAlign: "center",
    },
    page_number: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "#6b7280",
    },
});

const BlogPdf = () => {
    return (
        <Document>
            <Page size="A4" style={styles.body}>
                <View style={styles.logo_section}>
                    <Image src={SylhetiKhanirghorLogo} style={styles.logo} />
                    <Text style={styles.logo_title}>Sylheti Khanirghor</Text>
                </View>
                <View style={styles.blog_section}>
                    <Text style={styles.header} fixed>
                        Blog
                    </Text>
                </View>
                <View style={styles.question_section}>
                    <Text>Questions</Text>
                </View>
                <View style={styles.qa_main_view}>
                    <View style={styles.question_container}>
                        <Text style={styles.question}>
                            1. Tell us the differences between uncontrolled and
                            controlled components.
                        </Text>
                        <View style={styles.answer}>
                            <Text style={{ color: "#1A1919" }}>
                                Ans:{" "}
                                <Text style={{ color: "#757575" }}>
                                    Uncontrolled components and controlled
                                    components are terms that are commonly used
                                    in the context of building user interfaces,
                                    particularly in web development. The main
                                    difference between theses two types of
                                    components is how they handle user input.
                                    Uncontrolled components and controlled
                                    components are terms that are commonly used
                                    in the context of building user interfaces,
                                    particularly in web development. The main
                                    difference between theses two types of
                                    components is how they handle user input.
                                    Uncontrolled components are those where the
                                    value of the input field is handled by the
                                    DOM (Document Object Model) rather than
                                    React. This means that the component does
                                    not manage its own state, and any changes to
                                    the input field will be reflected directly
                                    in the DOM. On the other hand, controlled
                                    components are those where the value of the
                                    input field is managed by the component's
                                    state in React. This means that any changes
                                    to the input field will be handled by the
                                    component, and the component will update its
                                    own state accordingly. The advantage of
                                    using controlled components is that they
                                    provide more control and reliability over
                                    the user interface. Since the component is
                                    managing its own state, it is easier to
                                    validate and manipulate user input, and to
                                    ensure that the component is always in a
                                    consistent state. Uncontrolled components,
                                    on the other hand, are generally easier to
                                    set up and require less code. They are often
                                    used for simple forms or for cases where the
                                    value of the input field does not need to be
                                    manipulated or validated. Overall controlled
                                    components offer more control and
                                    consistency, they also require more code and
                                    can be more complex to set up. Uncontrolled
                                    components, on the other hand, are easier to
                                    set up and require less code, but may be
                                    less flexible and harder to validate.
                                </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.question_container}>
                        <Text style={styles.question}>
                            2. How to validate React props using PropTypes?
                        </Text>
                        <View style={styles.answer}>
                            <Text style={{ color: "#1A1919" }}>
                                Ans:{" "}
                                <Text style={{ color: "#757575" }}>
                                    To validate React props using PropTypes,
                                    follow these steps:
                                </Text>
                            </Text>
                            <Text>
                                1. Install the prop-types package: You can
                                install the prop-types package using npm or
                                yarn. Run the following command in your
                                terminal:{" "}
                                <Text style={{ color: "#dc2626" }}>
                                    npm install prop-types
                                </Text>
                            </Text>
                            <Text>
                                2. Import PropTypes: In the component where you
                                want to validate props, import PropTypes:{" "}
                                <Text style={{ color: "#dc2626" }}>
                                    import PropTypes from 'prop-types';
                                </Text>
                            </Text>
                            <Text>
                                3. Define propTypes: Create a propTypes object
                                and define the props that you want to validate.
                                You can use the PropTypes object to define the
                                type, shape, and other characteristics of your
                                props.
                            </Text>
                            <Text>
                                4. Validate props: To validate your props,
                                simply pass the props to your component and
                                PropTypes will check if they match the defined
                                types and throw an error if they don't.
                            </Text>{" "}
                            By validating props using PropTypes, you can make
                            that the props passed to your component are of the
                            correct type and shape, which can help prevent
                            errors and improve the reliability of your
                            application.
                        </View>
                    </View>
                    <View style={styles.question_container}>
                        <Text style={styles.question}>
                            3. Tell us the difference between nodejs and express
                            js.
                        </Text>
                        <View style={styles.answer}>
                            <Text style={{ color: "#1A1919" }}>
                                Ans:{" "}
                                <Text style={{ color: "#757575" }}>
                                    Node.js and Express.js are both popular
                                    JavaScript technologies used for server-side
                                    development, but they have different roles
                                    and purposes. Node.js is a JavaScript
                                    runtime built on Chrome's V8 JavaScript
                                    engine. It allows developers to run
                                    JavaScript on the server-side, enabling them
                                    to build scalable and high-performance web
                                    applications. With Node.js, developers can
                                    use JavaScript for both front-end and
                                    back-end development. Express.js, on the
                                    other hand, is a web framework built on top
                                    of Node.js. It provides a set of tools and
                                    features for building web applications, such
                                    as handling HTTP requests and responses,
                                    routing, middleware, and more. Express.js
                                    simplifies the process of building web
                                    applications by providing a set of
                                    abstractions and conventions that allow
                                    developers to focus on building the core
                                    features of their application. To summarize,
                                    Node.js is a runtime environment for
                                    executing JavaScript on the server-side,
                                    while Express.js is a web framework built on
                                    top of Node.js that provides a set of tools
                                    and features for building web applications.
                                    Node.js is the foundation on which
                                    Express.js is built, and it is possible to
                                    use Node.js without using Express.js, but
                                    not the other way around.
                                </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.question_container}>
                        <Text style={styles.question}>
                            4. What is a custom hook, and why will you create a
                            custom hook?
                        </Text>
                        <View style={styles.answer}>
                            <Text style={{ color: "#1A1919" }}>
                                Ans:{" "}
                                <Text style={{ color: "#757575" }}>
                                    custom hook is a reusable piece of code in
                                    React that allows developers to share logic
                                    between components. Custom hooks are
                                    JavaScript functions that use built-in React
                                    hooks, such as useState and useEffect, to
                                    abstract away complex logic and provide a
                                    simple interface for other components to
                                    use.
                                </Text>
                            </Text>
                            <Text>
                                The reason for creating custom hooks is to
                                improve code reusability and reduce the amount
                                of duplicate code in their applications. Instead
                                of copying and pasting the same code between
                                components, a custom hook can be created and
                                reused across multiple components, making the
                                code more maintainable and easier to understand.
                                Custom hooks can also help to improve the
                                separation of concerns between components. By
                                abstracting away complex logic into a custom
                                hook, the component can focus on rendering the
                                UI and managing user interactions, while the
                                hook handles the more complex logic. Some common
                                use cases for custom hooks include managing
                                stateful logic, fetching data from APIs,
                                handling animations, and managing forms. Custom
                                hooks can also be used to create reusable
                                abstractions for other developers on a team or
                                to create packages that can be shared with the
                                wider development community. Overall, custom
                                hooks are a powerful feature of React that allow
                                developers to share logic between components,
                                improve code reusability, and create more
                                maintainable and scalable applications.
                            </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.footer_text}>
                    Copyright 2023 Sylheti Khanirghor. All Rights Reserved.
                </Text>
                <Text
                    style={styles.page_number}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default BlogPdf;
