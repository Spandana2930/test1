import './create.css';
import {Link} from "react-router-dom";
export default function createAccount(){
    return(
        <>
        <div className="bgContainer mt-2" style = {{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div class="row">
            <form >
              <div class="container">
                <h1 class="mb-3">Sign Up</h1>
                <input type="text" placeholder="Enter Name"  id="name" className="form-control mb-2" required/>
                <input type="text" placeholder="Enter Email"  id="email" className="form-control mb-2" required/>
                <input type="tel" placeholder="Enter phone Number"  id="phn" className="form-control mb-2" required/>
                <input type="number" placeholder="Enter Age"  id="age" className="form-control mb-2"/>
                <input type="radio" name="gender" id="genderMale" value="Male" checked />
                <label for="genderMale">Male</label>
                <input type="radio" name="gender" id="genderFemale" value="Female" class="ml-2"/>
                <label for="genderFemale">Female</label>
                <input type="password" placeholder="Enter password"  id="pswd" className="form-control mb-2"/>
                <input type="password" placeholder="Confirm Password"  id="pwsd" className="form-control mb-2"/>  
                <div className = "mb-3"> 
                <button className="btn btn-primary " type="submit">Submit</button>
              </div>
              </div>
            </form>
          </div>
        </div>
        </>

    )
}