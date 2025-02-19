import React, { useState } from "react";
import styles from "./Blog.module.css";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import ArohiBlog from "./ArohiBlog/ArohiBlog";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

const blogs = [
    {
        id: "arohi",
        component: <ArohiBlog />, 
        title: "The Future of 3D Printing",
        author: "Arohi Mishra",
        date: "Feb 19, 2025",
        image: "https://i.ibb.co/KSR11dL/1738996285217239-0.jpg"
    },
    // {
    //     id: "blog2",
    //     component: <ArohiBlog />, 
    //     title: "Blog Two",
    //     author: "Author Name",
    //     date: "Feb 20, 2025",
    //     image: "path/to/blog2_image.jpg"
    // },
    // {
    //     id: "blog3",
    //     component: <ArohiBlog />, 
    //     title: "Blog Three",
    //     author: "Author Name",
    //     date: "Feb 21, 2025",
    //     image: "path/to/blog3_image.jpg"
    // }
];

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBlog, setSelectedBlog] = useState(null);

    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className={styles.topBar}>
                    {selectedBlog && (

                        <button className={styles.backButton} onClick={() => setSelectedBlog(null)}>
                            <FaArrowLeft /> 
                        </button>
                    )}
                    {!selectedBlog && (
                        <div className={styles.searchContainer}>
                            <input 
                                type="text" 
                                placeholder="Search blogs..." 
                                className={styles.searchBar}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className={styles.searchIcon} />
                        </div>
                    )}
                </div>
            <div className={styles.container}>
                
                {selectedBlog ? (
                    <div className={styles.blogContent}>
                        {selectedBlog.component}
                    </div>
                ) : (
                    <div className={styles.blogGrid}>
                        {filteredBlogs.map((blog) => (
                            <div key={blog.id} className={styles.card} onClick={() => setSelectedBlog(blog)}>
                                <div className={styles.cardContent}>
                                    <img src={blog.image} alt={blog.title} className={styles.image} />
                                    <h2>{blog.title}</h2>
                                    <p>By {blog.author} | {blog.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
