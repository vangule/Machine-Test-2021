import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dropdown extends React.Component{
  constructor(props){
    super();
    this.state = {
      tech: 'select'
    };
  }
  handleChange(e){
    this.setState({
      tech: e.target.value
    })
  }
  render(){
    return( 
      <>

       <div className="dropbox">
        <select onChange={this.handleChange.bind(this)} value={this.state.tech}>
          <option value="">Select a technology</option>
          <option value="">Angular</option>
          <option value="">React</option>
          <option value="">PHP</option>
          <option value="">Javascript</option>
        </select>
        </div>
      </>
    );
  }
}

// const Dropdown = () => {

//   const showMe = (value) => {
//     if(value==="a"){
//       document.getElementById('x').style.display="block";
//       document.getElementById('y').style.display="none";
//     }

//     if(value==="b"){
//       document.getElementById('x').style.display="block";
//       document.getElementById('y').style.display="none";
//     }
//   }
//   return(
//     <>
//             <div className="dropbox">
//              <select onChange={showMe(this.value)}>
//                <option value="">Select a technology</option>
//                <option value="">Angular</option>
//                <option value="">React</option>
//                <option value="">PHP</option>
//                <option value="">Javascript</option>
//              </select>
//              </div>

//              <div id="x" style={{backgroundColor:"yellow", display: "none"}}>
//                <h1>This is a div</h1>
//              </div>

//              <div id="y" style={{backgroundColor:"pink", display: "none"}}>
//                <h1>This is a BB div</h1>
//              </div>
//            </>
//   );
// }

export default Dropdown;