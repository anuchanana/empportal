import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import Homeheader from '../../components/homeheader'
import Section from '../../components/section'
import { connect } from 'react-redux'
import './style.css';

class Homepage extends Component {
   
      render() {

         console.log("11")
         console.log(this.props)

         /*const { user: {user: { ttEmployee: { ttEmployee }, config: { config } } }} = this.props*/
         const { user:{ user: 
                 {
                    emp , 
                    config
                    
                  }
               } }= this.props
console.log("13")
         console.log(emp, config)

         return ( 
            <di>
               <Navbar />
               <Homeheader employee = {emp.name}/>
               <Section config = {config.section}/>
            </di>
         )
      }
   }


   const mapStateToProps = state => {
      console.log(12)
      console.log(state)
      return {
         user: state.userlogin

      }

   }
   export default connect(mapStateToProps, { })(Homepage)