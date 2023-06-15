import React from "react";



function Signup() {
    return (
      <div>
        <h1>Please, provide info:</h1>
        <form> 
  
        <label > Username: </label>
        <input type="text" id="newUserName" name="username"/>
  
        <label > Email: </label>
        <input type="text" id="newUserEmail" name="useremail"/>
  
        <label > Phone Number: </label>
        <input type="text" id="newUserPhone" name="userphone"/>
  
        </form>
      </div>
  
    )
  }

  export default Signup;