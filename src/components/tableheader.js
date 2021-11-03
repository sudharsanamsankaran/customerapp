import React from "react";
import './table.css'
const TableHeader =()=>{
    return (
        <thead className="th">
            <tr>
            <th>Customer Name</th>
            <th>City Name</th>
            <th>Contact Number</th>
            <th>E-mail Id</th>
            <th>Remove</th>
            </tr>
        </thead>
    )
}

export default TableHeader;