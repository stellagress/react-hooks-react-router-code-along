import React from "react";

const textAreaSize = {
    width : '300xp',
    height : '200px',
  }
  
  
  function Messages() {
    return (
      <div>
        <label> Message: </label>
        <textarea type="text" name="userMessage" style={textAreaSize}/>
      </div>
    )
  }

  export default Messages;
  