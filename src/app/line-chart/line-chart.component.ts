import { Component,OnInit,Input,Output} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
 
  
})

export class LineChartComponent  implements OnInit{

@Input() finalData: [];
//console.log('timeframevalue',localStorage.getItem('StoredTimeFrames'));
 senddata() {
// console.log('inside',this.dataEvent.emit(this.finalData));
       //this.dataEvent.emit(this.finalData);
        
    }
   ngOnInit() {
  
         console.log('finalData is:',this.finalData);  // You will get the @Input value
     
  }
//console.log('timeframevalue',localStorage.getItem('StoredTimeFrames'));
  /*lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Time' },
  ];
  
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line'; */
  
}