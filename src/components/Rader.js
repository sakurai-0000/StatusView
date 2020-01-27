import React, {Component} from 'react';
import { Radar } from 'react-chartjs-2';

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
    legendPosition:'right',
    location:'City'
  }

  updateChartData(){
      this.setState({
        chartData:{
          datasets:[
            {
              label:'current status',
              data:this.props.redStatus
            },
            {
              label:'required status',
              data:this.props.blueStatus
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
              text:'Largest Cities In ' + this.props.location,
              fontsize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
          //maintainAspectRatio: サイズ変更の際に、元のキャンパスのアスペクト比を維持する
        />
        <button onClick={this.updateChartData}>
          update
        </button>
    </div>
    )
  }
}

export default Rader; //他のファイルでimportしてもいいという宣言？
