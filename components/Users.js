/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import useSWR from "swr";
// import useState from "react";
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
// import Image from "next/image";

export default function Users({ setCount }) {
    const [count] = useState()
    const address = `https://randomuser.me/api/?results=${count}`;
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(address, fetcher);
    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;

  return (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <div>
    {/* // eslint-disable-next-line react/no-unknown-property */}
    <table  align="center" width="70%">
<tr>
{/* // eslint-disable-next-line react/no-unknown-property */}
<th bgcolor="" colspan = "4">
    <text>FulllName</text>
    <input
    label="username"
    />
        <text>Email</text>
    <input
    label="email"
    />

        <text>Date of Birth</text>
    <input
    label="date"
    />

        <text>Address</text>
    <input
    label="address"
    />

        <text>Phone Number</text>
    <input
    label="phone"
    />
</th>
</tr>
<tr>
<th colspan = "2"></th>
<th colspan = "2"></th>
</tr>
<tr>
<td rowspan="2"></td>
<td ><b></b></td>
<td ><b></b></td>
<td rowspan ="2"></td>
</tr>
<tr>
<td >
<div className="btn">
          <button onClick={() => setCount(count + 3)}>Cancel</button>
        </div>
</td>
<td >
<div className="btn">
          <button onClick={() => setCount(count + 3)}>Send</button>
        </div>
</td>
</tr>
</table>
    <div>

    
          <div className="btn">
          <button onClick={() => setCount(count + 3)}>Auto generate</button>
        </div>
      <div className="container">
      <div className={styles.card}>
          
        {data &&
          data.results.map((item) => (
            <div key={item.cell} className={`user-card  ${item.gender}`}>
                      
              <div>
              
              <p>Picture: {item.picture.medium}</p>
              <p>Username: {item.username}</p>
                {/* <Image
                  width={100}
                  height={100}
                  src={item.picture.large}
                  alt="user-avatar"
                  className="img"
                /> */}
                {/* "https://www.shareicon.net/data/2016/09/15/829474_user_512x512.png" */}
                <h3>{`${item.name.first}  ${item.name.last}`}</h3>
              </div>
              <div className="details">
              

                <p>Country: {item.location.country}</p>
                <p>State: {item.location.state}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Age: {item.dob.age}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
    </div> 
  );
}