import React, {Component} from 'react';
import '../../assets/css/Home.css';

class Content extends Component {
  render() {
    return(
      <div className="content">
        {this.props.name}
      </div>
    );
  }
}

export default Content;