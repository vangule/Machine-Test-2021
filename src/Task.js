import React,{useEffect, useState} from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const Task = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
   const response = await fetch("http://jsonplaceholder.typicode.com/todos");
  setUsers(await response.json());
 }

 const removeMe = (id) => {
  const myNewArray = users.filter((curElement) => {
    return id !== curElement.id;
  })
  setUsers(myNewArray);
 }

  useEffect(() => {
    fetchData();
    },[]);


  return(<div className="containers">
           <div className="header">
             <div className="dots"></div>
             <div className="dots"></div>
             <div className="dots"></div>  
             <div className="title"> Machine Test-Nimap</div> 
           </div>
           <Navbar/>
            <div className="task-data-container">

            {
              users.map((curElem) => {
                return(<div className="task-data">
                <div>{curElem.id}</div>
                <div>{curElem.title}</div>
                <div>{curElem.completed}</div>
                <button onClick={() => removeMe(curElem.id)}>Delete</button>
              </div>)
              })
            }

          </div>
        <button className="addbtn">Add</button>
        </div>
  );
}


export default Task;
































// import React from 'react';
// import './App.css';

// class Task extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       users: null
//     }
//   }

//   componentDidMount(){
//     fetch('https://reqres.in/api/users').then((resp)=>{
//       resp.json().then((result)=> {
//         console.warn(result);
//         this.setState({users:result.data})
//       })
//     })
//   }
//   render(){
//     return(
//       <div className="App">
//         <h1> 
//           Fetch API Data
//         </h1>

//         {
//           this.state.users ?
//           this.state.users.map((item, i)=>
//         <div><p>{i}&nbsp;{item.first_name}&nbsp;{item.last_name}</p></div>
//           ) 
//           :
//           null
//         }
//       </div>
//     );
//   }
// }

// export default Task;