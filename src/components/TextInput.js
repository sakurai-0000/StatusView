import React, {Component} from 'react';
import Rader from './Rader';
import Point from './Point';

class TextInput extends Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef();
    this.state = {
     chartData:{},
     redStatus:[],
     blueStatus:[],
     pointData:{},
     pointStatus:[]
    }
    this.setRedStatus = this.setRedStatus.bind(this);
    this.setBlueStatus = this.setBlueStatus.bind(this);
    this.setPointData = this.setPointData.bind(this);
  }

  componentWillMount(){
    this.getChartData();
    this.getPointData();
  }

  getChartData(){
    //Ajax calls here
      this.setState({
        chartData:{
          labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
          datasets:[
            {
              label:'current status',
              data:[],
              backgroundColor:[
                'rgba(255,99,132,0.6)',
                'rgba(255,99,132,0.6)',
                'rgba(255,99,132,0.6)',
                'rgba(255,99,132,0.6)',
                'rgba(255,99,132,0.6)',
                'rgba(255,99,132,0.6)',
                'rgba(255,99,132,0.6)',
              ]
            },
            {
              label:'required status',
              data:[],
              backgroundColor:[
                'rgba(54,162,235,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(54,162,235,0.6)',
              ]
            }
          ]
        }
      });
  }

  getPointData(){
    //Ajax calls here
      this.setState({
        pointData:{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'square',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#eee',
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 10,
              data: []
          }
        ]
      }
    });
  }

  setRedStatus(){
    const redStatus_copy = this.state.redStatus.slice();
    redStatus_copy[0] = this.refs.red1.value;
    redStatus_copy[1] = this.refs.red2.value;
    redStatus_copy[2] = this.refs.red3.value;
    redStatus_copy[3] = this.refs.red4.value;
    redStatus_copy[4] = this.refs.red5.value;
    redStatus_copy[5] = this.refs.red6.value;
    this.setState({
      redStatus: redStatus_copy
    });
      console.log(this.state.redStatus);
  }

  setBlueStatus(){
    const blueStatus_copy = this.state.blueStatus.slice();
    blueStatus_copy[0] = this.refs.blue1.value;
    blueStatus_copy[1] = this.refs.blue2.value;
    blueStatus_copy[2] = this.refs.blue3.value;
    blueStatus_copy[3] = this.refs.blue4.value;
    blueStatus_copy[4] = this.refs.blue5.value;
    blueStatus_copy[5] = this.refs.blue6.value;
    this.setState({
      blueStatus: blueStatus_copy
    });
      console.log(this.state.blueStatus);
  }

  setPointData(){
    const pointData_copy = this.state.redStatus.slice();
    this.setState({
      pointData:{datasets:[{data:pointData_copy}]}
    });
  }

  //同一コンポーネント内でDOM操作を行いたい時にはRef属性を使う
  //非推奨（場合によりけり）
  render(){
    return(
      <div>
        <div>
          <p>Current</p>
          <input type='text' ref={'red1'}/>
          <input type='text' ref={'red2'}/>
          <input type='text' ref={'red3'}/>
          <input type='text' ref={'red4'}/>
          <input type='text' ref={'red5'}/>
          <input type='text' ref={'red6'}/>
          <button onClick={() => this.setRedStatus()}>Red Input</button>
        </div>
        <div>
          <p>Required</p>
          <input type='text' ref={'blue1'}/>
          <input type='text' ref={'blue2'}/>
          <input type='text' ref={'blue3'}/>
          <input type='text' ref={'blue4'}/>
          <input type='text' ref={'blue5'}/>
          <input type='text' ref={'blue6'}/>
          <button onClick={() => this.setBlueStatus()}>Blue Input</button>
        </div>
        <Rader chartData={this.state.chartData} redStatus={this.state.redStatus} blueStatus={this.state.blueStatus}
        location="masaMasa" legendPosition="bottom"/>
        <Point pointData={this.state.pointData} />
        <button onClick={this.setPointData}>update</button>
      </div>
    )
  }
}

export default TextInput
