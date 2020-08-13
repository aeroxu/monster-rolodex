import React from "react";
import './search-box.styles.css';
// import { Card } from "../card/card.component";

export const SearchBox = ({ placeholder, handleChange }) => {
return (
    <div>
        <input 
            className="search"
            type="search" 
            placeholder={placeholder}
            onChange={handleChange} 
        />  
    </div>
)}