import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class Point extends Component {
  constructor(props){
      super(props);
      this.state = {
        pointData:this.props.pointData
      }
        this.updatePointData = this.updatePointData.bind(this);
  }

  updatePointData(){
      this.setState({
        pointData: this.props.pointData
      })
  }

  render(){
    return(
      <div>
        <Line data={this.state.pointData}/>
        <button onClick={this.updatePointData}>update</button>
      </div>

    )
  }
}

export default Point;
