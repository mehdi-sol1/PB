import React from "react";

function Employee(props){
    const{data, setdata}= props;
    <>
        {
            console.log("props :::::::::"+data)
        }
    </>

}
export default Employee;