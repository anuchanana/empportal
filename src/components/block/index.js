import React from 'react'
import './style.css'
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Block extends React.Component {
    render() {
        return (
            <div className="cardblockcustom" >
                
                <div className="card-title">
                    <h5 className="card-text darktext alignblocktext"> {this.props.title} </h5>
                </div >
                <div className = "icondiv akacolor">
                 <FontAwesomeIcon icon={faLink} className = "blockicon" />
                </div>
               
               {/* <img className="card-img-top" src="" alt="Card image cap" />*/}
               </div>
           
        )
    }
}

export default Block