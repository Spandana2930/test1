import './reset.css';
import {Link} from "react-router-dom";
export default function ResetPage(){
    return (
        <>
    <div className = "bg-container">
   <div className=" container d-flex flex-column col-5 " >
    <div className="row">
    <form>
    <div className="col-12 mb-3" >

       <h1 className="heading" >Change password</h1>
       <input type = "password" placeholder="Enter password"/>
       </div>
       <div className="col-12">
       <input type = "password" placeholder="confirm password"/>
       <div className="col-12 mt-3">
           <Link to = "/reset">
       <button type = "submit" className = "btn btn-primary mb-3">Submit</button>
       </Link>
       <p>Password was successfully changed!!!</p>
       </div> 
       </div>
     </form> 
</div>
</div>
</div>
        </>
    )
}