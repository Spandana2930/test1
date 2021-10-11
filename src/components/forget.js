import './forget.css';
import {Link} from "react-router-dom";

export default function ForgetPage(){
    return(
        <>
        <div className = "bg-container">
    <div className="container d-flex flex-column col-5 "  >
    <div className="">
        <h1 className="heading">Reset your password</h1>
        <form>
        <div>
            <label for="email">Enter Email or phone number</label>
            <input type="text" id="email" required />
        </div>
        
        <a href="">Generate Otp</a>
        <div>
            <Link to = "reset">
            <button type = "submit"  class="btn btn-primary mt-3">Submit</button>
          </Link>
        </div>
    </form>
    </div>
</div>
</div> 

        </>
    )
}