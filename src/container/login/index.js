import React, { Component } from 'react'
import { connect } from 'react-redux'
import loginaction from '../../actions/loginAction'
import './style.css';


class Login extends Component {
   constructor() {
      super()
      this.state = {
         empID: "",
         password: ""
      }

   }

   setEmpId = (event) => {
      this.setState(
         { empID : event.target.value}
      )

   }
   setPwd = (event) => {
      this.setState(
         { password : event.target.value}
      )
   }
   login = (event) => {
      event.preventDefault();
      this.props.loginuser(this.state)
      this.props.history.push("/homepage")
   }


   render() {
      return (
         <div className='loginpage'>
            <div className='loginpageleft'>
               <h1 className='logintext'>aka <br /> Employee Portal <br /> Login</h1>
            </div>
            <div className='loginpageright'>
               <form onSubmit={this.login}>
                  <div className="form-group">
                     <label for="exampleInputEmail1">Employee ID</label>
                     <input className="form-control" onChange= {this.setEmpId} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Employee ID" />
                  </div> 
                  <div className="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input type="password" className="form-control"  onChange = {this.setPwd} id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn-custom">Login</button>
               </form>
            </div>
         </div>
      )
   }
}


const mapDispatchToProps = {
   loginuser: loginaction
}

export default connect(null, mapDispatchToProps)(Login)