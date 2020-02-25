
import React, {Component} from 'react';
import {Button} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import Rader from './Rader';
//import Point from './Point';
import TextField from './TextField';

class TextInput extends Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef();
    this.state = {
     chartData:{},
     redStatus:[],
     blueStatus:[],
     pointData:{},
     pointStatus:[],
     textField:{}
    }
    this.setRedStatus = this.setRedStatus.bind(this);
    this.setBlueStatus = this.setBlueStatus.bind(this);
    this.setTextField = this.setTextField.bind(this);
  }

  componentWillMount(){
    this.getChartData();
    //this.getPointData();
  }

  setTextField(values){
    this.setState({
      textField:values
    })
  }

  getChartData(){
    //Ajax calls here
      this.setState({
        chartData:{
          labels:['Manegement', 'Communication', 'Technique', 'Intelligence', 'Development', 'Humor'],
          datasets:[
            {
              label:'Current status',
              data:this.state.redStatus,
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
              label:'Required status',
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

  // getPointData(){
  //   //Ajax calls here
  //     this.setState({
  //       pointData:{
  //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //         datasets: [
  //           {
  //             label: 'Monthly trends',
  //             fill: false,
  //             lineTension: 0.1,
  //             backgroundColor: 'rgba(75,192,192,0.4)',
  //             borderColor: 'rgba(75,192,192,1)',
  //             borderCapStyle: 'round',
  //             borderDash: [],
  //             borderDashOffset: 0.0,
  //             borderJoinStyle: 'square',
  //             pointBorderColor: 'rgba(75,192,192,1)',
  //             pointBackgroundColor: '#eee',
  //             pointBorderWidth: 10,
  //             pointHoverRadius: 5,
  //             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //             pointHoverBorderColor: 'rgba(220,220,220,1)',
  //             pointHoverBorderWidth: 1,
  //             pointRadius: 1,
  //             pointHitRadius: 10,
  //             data: []
  //         }
  //       ]
  //     }
  //   });
  // }

  setRedStatus(){
    const redStatus_copy = this.state.redStatus.slice();
    // redStatus_copy[0] = this.refs.red1.value;
    // redStatus_copy[1] = this.refs.red2.value;
    // redStatus_copy[2] = this.refs.red3.value;
    // redStatus_copy[3] = this.refs.red4.value;
    // redStatus_copy[4] = this.refs.red5.value;
    // redStatus_copy[5] = this.refs.red6.value;
    redStatus_copy[0] = this.state.textField["Management"];
    redStatus_copy[1] = this.state.textField["Communication"];
    redStatus_copy[2] = this.state.textField["Technique"];
    redStatus_copy[3] = this.state.textField["Intelligence"];
    redStatus_copy[4] = this.state.textField["Development"];
    redStatus_copy[5] = this.state.textField["Humor"];
    this.setState({
      redStatus: redStatus_copy
    });
    this.getChartData();

    // this.setState({
    //   pointData:{datasets:[{data:redStatus_copy}]}
    // });
  }

  setBlueStatus(){
    const blueStatus_copy = this.state.blueStatus.slice();
    // blueStatus_copy[0] = this.refs.blue1.value;
    // blueStatus_copy[1] = this.refs.blue2.value;
    // blueStatus_copy[2] = this.refs.blue3.value;
    // blueStatus_copy[3] = this.refs.blue4.value;
    // blueStatus_copy[4] = this.refs.blue5.value;
    // blueStatus_copy[5] = this.refs.blue6.value;
    blueStatus_copy[0] = this.state.textField["Management"];
    blueStatus_copy[1] = this.state.textField["Communication"];
    blueStatus_copy[2] = this.state.textField["Technique"];
    blueStatus_copy[3] = this.state.textField["Intelligence"];
    blueStatus_copy[4] = this.state.textField["Development"];
    blueStatus_copy[5] = this.state.textField["Humor"];
    this.setState({
      blueStatus: blueStatus_copy
    });
  }

  //同一コンポーネント内でDOM操作を行いたい時にはRef属性を使う
  //非推奨（場合によりけり）
  render(){

    return(
      <div>
        <div>
          <p>Current</p>
          {/*<input type='number' min="0" ref={'red1'}/>
          <input type='number' min="0" ref={'red2'}/>
          <input type='number' min="0" ref={'red3'}/>
          <input type='number' min="0" ref={'red4'}/>
          <input type='number' min="0" ref={'red5'}/>
          <input type='number' min="0" ref={'red6'}/>*/}
          <TextField setTextField={this.setTextField} textField={this.state.textField}/>
          <Button variant="contained" color="secondary" onClick={() => this.setRedStatus()}>Red Input</Button>
        </div>
        <div>
          <p>Required</p>
          {/*}<input type='number' min="0" ref={'blue1'}/>
          <input type='number' min="0" ref={'blue2'}/>
          <input type='number' min="0" ref={'blue3'}/>
          <input type='number' min="0" ref={'blue4'}/>
          <input type='number' min="0" ref={'blue5'}/>
          <input type='number' min="0" ref={'blue6'}/>*/}
          <TextField setTextField={this.setTextField} textField={this.state.textField}/>
          <Button  variant="contained" color="primary" onClick={() => this.setBlueStatus()}>Blue Input</Button>
        </div>
        <Rader chartData={this.state.chartData} redStatus={this.state.redStatus} blueStatus={this.state.blueStatus}
        legendPosition="bottom"/>
      {/*<Point pointData={this.state.pointData} />*/}
      </div>
    )
  }
}

export default TextInput
