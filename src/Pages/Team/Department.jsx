import React from 'react';
// import { useEffect } from 'react';
import "./team.css";
import { useParams, Navigate } from 'react-router-dom';
import Departments from "./Departments.js";
import DepartmentUtility from "./DepartmentUtility";


export default function Department() {
  const { department } = useParams();

  // For Scroll Behaviour Smmoth
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }, [])

  // For Scroll Behaviour Auto 
  // Intentionally not using useEffect here so that it is scrolled to top before component gets mounted
  window.scrollTo(0, 0);

  if (department === "all-departments") {
    return (
      <>
      <DepartmentUtility department="web-development" />
      <DepartmentUtility department="app-development" />
      <DepartmentUtility department="competitive-programming" />
      <DepartmentUtility department="machine-learning" />
      <DepartmentUtility department="design" />
      <DepartmentUtility department="content" />
      <DepartmentUtility department="operations" />
      </>
    )
  }

  else if (department in Departments) {
    return <DepartmentUtility department={department} />
  }

  else return ( <Navigate to="/team" replace={true} /> )
}
