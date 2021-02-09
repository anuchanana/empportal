import React from 'react'
import './style.css'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Homeheader extends React.Component {
    render() {
        console.log(this.props.employee)
        return (
            <div className="Headerdiv">
                <div className="profileinfo">
                    <div className="profilepicture">
                        <FontAwesomeIcon icon={faUser} className="profileImage" />
                    </div>
                    <div className="profiledata">
                     <h1 className = "darktext">   {this.props.employee &&(`${this.props.employee} `)} </h1>
                    <p className = "darktext"> {this.props.employee && this.props.employee.post}  </p>
                </div>
            </div>            
            </div >
        )
    }
}
export default Homeheader