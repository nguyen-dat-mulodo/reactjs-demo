import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email:'',
      password:''
    };
  }
  signIn(){
    alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
  }
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  render() {
    return (
        <div>
          <form className="form-signin">
            <h2 className="form-signin-heading">Please sign in</h2>
            <label htmlFor={"inputEmail"} className="sr-only">Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor={"inputPassword"} className="sr-only">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />

            <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
          </form>
          {/*<Router>*/}
            {/*<div>*/}
              {/*<Link to="/signup">{'Signup'}</Link>*/}
            {/*</div>*/}

            {/*<hr />*/}

            {/*/!*<Route exact path="/" component={Home} />*!/*/}
            {/*/!*<Route exact path="/signup" component={Signup} />*!/*/}
            {/*/!*<Route path="/topics" component={Topics} />*!/*/}
          {/*</Router>*/}
        </div>
    )
  }
}
//
// class Signup extends React.Component{
//   render() {
//     return (
//         <div>
//           <form className="form-signin">
//             <h2 className="form-signin-heading">Please sign up</h2>
//             <label htmlFor={"inputName"} className="sr-only">Name</label>
//             <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autoFocus />
//             <label htmlFor={"inputEmail"} className="sr-only">Email address</label>
//             <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
//             <label htmlFor={"inputPassword"} className="sr-only">Password</label>
//             <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
//
//             <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
//           </form>
//           <div>
//             {/*<Link to="/">{'Signin'}</Link>*/}
//           </div>
//         </div>
//
//     );
//   }
// }
export default Signin;