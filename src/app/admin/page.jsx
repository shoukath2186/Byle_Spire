"use client";

import React,{useEffect, useState} from 'react'
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

function AdminPage() {
   const [login,setLogin]=useState(false);

   useEffect(()=>{
    const isAdmin = localStorage.getItem("isAdmin is login take data");
     if (isAdmin === "true") {
      setLogin(true);
      
    }
   },[])
  return (
    <>
    {login?(
        <AdminPanel setLogin={setLogin}/>
    ):(
        <AdminLogin setLogin={setLogin} />
    )}
    </>
  )
}

export default AdminPage