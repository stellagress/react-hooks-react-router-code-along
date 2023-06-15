import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Messages from "./components/Messages";
import NavBar from "./components/NavBar";


//import { Switch } from "react-router-dom/cjs/react-router-dom.min";


// const linkStyles = {
//   display : "inline-block",
//   width : "50px",
//   padding : "12px",
//   margin : "0 6px 6px",
//   background : "blue",
//   textDecoration : "none",
//   color : "white",
// }

// function NavBar() {
//   return (
//     <div>
//       <NavLink
//         to="/"
//         /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//         exact
//         /* add styling to Navlink */
//         style={linkStyles}
//         /* add prop for activeStyle */
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Login
//       </NavLink>
//       <NavLink

//       to="/signup"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         Signup
//       </NavLink>


//       <NavLink
//       to="/message"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background : "darkblue",
//       }}
//       >
//         Message
//       </NavLink>

      



//     </div>
//   );
// }


// function Home() {
//   return <h1>Home!</h1>
// }




// function About() {
//   return <h1>This is my about component!</h1>
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password"/>
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )
// }


// function Signup() {
//   return (
//     <div>
//       <h1>Please, provide info:</h1>
//       <form> 

//       <label > Username: </label>
//       <input type="text" id="newUserName" name="username"/>

//       <label > Email: </label>
//       <input type="text" id="newUserEmail" name="useremail"/>

//       <label > Phone Number: </label>
//       <input type="text" id="newUserPhone" name="userphone"/>

//       </form>
//     </div>

//   )
// }


// const textAreaSize = {
//   width : '300xp',
//   height : '200px',
// }


// function Messages() {
//   return (
//     <div>
//       <label> Message: </label>
//       <textarea type="text" name="userMessage" style={textAreaSize}/>
//     </div>
//   )
// }




function App() {
  return (
    <div> 
      <Switch>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route exact path="/"> 
          <Home />
        </Route>



      </Switch>
    </div>
  )
}






ReactDOM.render(
<BrowserRouter>
<NavBar />
<Switch>
  <Route exact path="/about">
    <About />
  </Route>

  <Route exact path="/login">
    <Login />
  </Route>

  <Route exact path="/">
    <Home />
  </Route>

  <Route exact path="/signup">
    <Signup />
  </Route>

  <Route exact path="/message">
    <Messages />
  </Route>


  </Switch>
</BrowserRouter>,
document.getElementById("root"));




