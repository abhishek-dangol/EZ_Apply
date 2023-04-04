import React , {useState} from 'react';
import Link from "next/link";
import MyComponent from "@/pages/api/MyComponent";
const Navbar = () => {
    return (
        <nav>
            <div>
                <input type="text" placeholder="Search..." />
                <MyComponent></MyComponent>
            </div>
        </nav>
    );
};

const IndexPage = () => {
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default IndexPage;
