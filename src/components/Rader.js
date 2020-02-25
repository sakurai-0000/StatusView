import React, {Component} from 'react';
import { Radar } from 'react-chartjs-2';
import {Button} from '@material-ui/core';

class Rader extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:this.props.chartData,
      redStatus:this.props.redStatus,
      blueStatus:this.props.blueStatus
    }
    this.updateChartData = this.updateChartData.bind(this);
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    // legendPosition:'right',
    // location:'City',
    labels:['Manegement', 'Communication', 'Technique', 'Intelligence', 'Development', 'Humor']
  }

  updateChartData(){
      this.setState({
        chartData:{
          datasets:[
            {
              label:'Current Status',
              data:this.props.redStatus,
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
              label:'Required Status',
              data:this.props.blueStatus,
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

  render(){
    return(
      <div className="chart">
        <Radar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Currenr and Required Status Rader',
              fontsize:100
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
          //maintainAspectRatio: サイズ変更の際に、元のキャンパスのアスペクト比を維持する
        />
      <Button
          variant="contained" color="inherit"
          onClick={this.updateChartData}>
          update
        </Button>
    </div>
    )
  }
}

export default Rader; //他のファイルでimportしてもいいという宣言？
