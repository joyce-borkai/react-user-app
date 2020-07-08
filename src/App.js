import React from 'react'
import './App.css';
import UserItem from './component/joyce'


   class App extends React.Component {

     constructor(props) {
       super(props)
       this.state ={
         name:"",

         email:"",

         users:[]
     }

     }

     
     handleInputChange = (e) => {
const name = e.target.name;
const value = e.target.value
this.setState({
[name]: value
  });
     }

       handlesubmit =(e) => {
         e.preventDefault();
         const user = this.state
         let newUser = {name:user.name, email:user.email}
         this.setstate({users:[...user.users, newUser]})

         this.clear();
       }
          clear =() => {
            this.setstate({
              name:"",
              email:""
            })
   } 
   render() {
     const change =this.handleInputChange;
     const users =this.state.users
     return (
       <div className="App">
         <div className="particulers">
           <form onsubmit={this.handleSubmit}>
             <input
             type="text"
             name="name"
             placeholder="Name"
             value={this.state.name}
             onChange={change}/>
             <br/>

             <input
             type="email"
             name="email"
             placeholder="email"
             value={this.state.email}
             onChange={change}/>
             <br/>
             <input className="submit" type="submit"/>
           </form>
         </div>
         <div className="list-of-users">
           <h3 className="text">list of users</h3>
           {
             users.map((user, i) => <UserItem key={i} {...user}/>)
           }
         </div>
       </div>
     )
   }
  }
 

export default App;
