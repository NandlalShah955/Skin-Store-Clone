import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import styles from "./ShowUser.module.css";


const ShowUsers = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://blossombackend.onrender.com/users").then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    },[]);
  return (
    <div>
        <section>
            <MDBTable>

                <MDBTableHead>
                    <tr>
                    <th style={{color: "red", fontFamily: "cursive", fontSize: "18px"}} className={styles.username} scope='col'>Name</th>
                    <th style={{color: "red", fontFamily: "cursive", fontSize: "18px"}} scope='col'>Role</th>
                    <th style={{color: "red", fontFamily: "cursive", fontSize: "18px"}} scope='col'>Email</th>
                    </tr>
                </MDBTableHead>
                {
                    data.map((el,i)=> (
                        <MDBTableBody>
                            {
                                (
                                    i%2===0? 
                                    <tr className='table-primary'>
                                <th className={styles.username} scope='row'>{el.userName}</th>
                                <td>{el.role}</td>
                                <td>{el.email}</td>
                            </tr>: 
                            <tr>
                            <th className={styles.username} scope='row'>{el.userName}</th>
                            <td>{el.role}</td>
                            <td>{el.email}</td>
                        </tr>
                                )
                            }
                            
                        </MDBTableBody>
                    ))
                }

                </MDBTable>
    </section>
    </div>
  )
}

export default ShowUsers;