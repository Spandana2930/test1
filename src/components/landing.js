import "./landing.css";
import {Link} from "react-router-dom";
export default function LandingPage(){
    return(
        <>
         <div  className="d-flex justify-content-center bgContainer">
        <div className="col-5 text-center d-flex flex-column container" >
        <h1>Login Page</h1>
        <form>
           <label for="name">Username</label>
            <input type="text" id="name" placeHolder="Enter username" className = "user" required />
       <div>
            <label for="pswd">Password</label>
            <input type="password" id="pswd" placeholder="Enter password" className = "pass"/>
        </div>
        <div className = "mr-3">
        <button type = "submit" className="btn btn-primary mt-3 " >Submit</button>
        </div>
        <Link to = "createAccount">
        <a href="" className = "account ml-3">create account?</a>
        </Link>
        <div className = "head">
        <a href="/forget" className = "account">Forget password?</a>
        </div>
    </form>
</div>
 </div> 
        </>
    )
}