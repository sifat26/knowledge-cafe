import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        const loadData= async()=>{
            const res= await fetch('blogs.json');
            const data=await res.json();
            setBlogs(data);

        }
        loadData();


    },
    [])
    return (
        <div>
            
            
        </div>
    );
};

export default Blogs;