import React from "react";
import styles from "./Blog.module.css";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import ArohiBlog from "./ArohiBlog/ArohiBlog";

const Blog = () => {
    return (
        <div>
            <Navbar />
            <ArohiBlog />
            <Footer />
        </div>



    );
};
export default Blog;
