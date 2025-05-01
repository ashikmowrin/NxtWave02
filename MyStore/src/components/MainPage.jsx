import React from 'react'
import '../css/MainPage.css'
import { useState } from "react";
import SideBar from './SideBar';
import ProductsList from './ProductsList';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaReact } from 'react-icons/fa';

const MainPage = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Recommended");

    const options = [
        "Recommended",
        "Newest First",
        "Price Low to High",
        "Price High to Low"
      ];


      const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
        console.log("Selected sort:", option);
      };
    

    const toggleSidebar = () => {
        setShowSidebar((prev) => !prev);
      };
    

  return (
        
        <div className="body">
            <div className="header">
                <div className="navbar">
                    <nav className="nav-layer-one">
                        <div>
                            <img src="/vite.svg" className='logo' alt="" />
                        </div>
                        <div>
                            <h3>NXTWAVE</h3>
                        </div>
                        <div className='nav-icons'>
                            <FaSearch className='navbaricons'/>
                            <FaHeart className='navbaricons'/>
                            <FaShoppingCart className='navbaricons'/>
                            <FaUser className='navbaricons'/>
                            <button className="drop-down-button">ENG <img src="/down-arrow.svg"/> </button>
                        </div>
                    </nav>
                    <nav className="nav-layer-two">
                        <button>SHOP</button>
                        <button>SKILLS</button>
                        <button>STORIES</button>
                        <button>ABOUT</button>
                        <button>CONTACT US</button>
                    </nav>
                </div>
                <hr/>
                <div className="text">
                    <h1>DISCOVER OUR PRODUCTS</h1>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                        error dolor veniam veritatis quas cum eaque ducimus minus consectetur optio </h6>
                </div>
                <div className="tab">
                    <div className="filter">
                        <h6>
                            3614 Items
                        </h6>
                        <button onClick={toggleSidebar}>
                            {showSidebar ? "Hide Filter" : "Show Filter"}
                        </button>
                    </div>
                    <div className="sorting-container">
                        <button className="sorting-button" onClick={() => setOpen(!open)}>
                            {selected} <img src="/down-arrow.svg" alt="▼" />
                        </button>
                        {open && (
                            <div className="sorting-menu">
                            {options.map((option, idx) => (
                                <div key={idx} onClick={() => handleSelect(option)} className="sorting-item">
                                    {option}
                                </div>
                            ))}
                        </div>
                         )}
                    </div>
                </div>
            </div>
            <div className="main-page">
            <div className="content">
            {showSidebar && <SideBar />} 
              <ProductsList />
            </div>
                  </div>
        </div>
        

  )
}

export default MainPage