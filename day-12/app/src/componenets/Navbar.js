import { Link } from "react-router-dom";

 
export default function NavBar(){
    return(<nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> 
        </ul>
      </nav>) ; 
}