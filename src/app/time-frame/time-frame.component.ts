import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import {CdTimerComponent, TimeInterface} from 'angular-cd-timer';
import {NgForm} from '@angular/forms';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';



@Component({
  selector:'time-frame',
  templateUrl: './time-frame.component.html',
  
})

export class TimeFrameComponent  implements OnInit{
//console.log('timeframevalue',localStorage.getItem('StoredTimeFrames'));
  @ViewChild('basicTimer', { static: true }) basicTimer: CdTimerComponent;
   public show:boolean = false;
   
   timerInfo = '';
   activityForm: FormGroup;
   submitted = false;
    timeFrames = {};
    data1: any = [];
    finalData = [];
    activityData = [];
    description = [];
   // lineChartData = [];
   // lineChartLabels = [];
             constructor(private formBuilder: FormBuilder ) 
             {
                this.timerInfo = '';       
             }

  //code
    onComplete(data) {
    this.timerInfo = 'Finished !';
  }

  onTick(data: TimeInterface) {
    this.timerInfo = 'In Progress [' + data.tick_count.toString().padStart(4, '0') + ']';
    console.log('timer info', this.timerInfo)
  }

  onStart(data) {
    console.log('Timer started.',data);
  }
  
 getTimeData(){ 
    this.show = false;    
    this.timeFrames = this.basicTimer.get();
    this.basicTimer.reset();
    return this.timeFrames;
 }

 deleteTimeFrame(index){
     this.finalData.splice(index, 1);
    
 }

  doActionBasicTimer(action: String) {    
  this.show = true;
    switch (action) {
      case 'start':
        this.basicTimer.start();
        break;
      case 'resume':
        this.basicTimer.resume();
        break;
      case 'reset':
        this.basicTimer.reset();
        break;
      default:
        this.basicTimer.stop();
        break;
    }
  }

  //code
    ngOnInit() {
        
         this.activityForm = this.formBuilder.group({
            activity: ['', Validators.required]
            
        });
       
    }
     get f() { return this.activityForm.controls; }

    onSubmit() {
        this.submitted = true;
         
        if (this.activityForm.invalid) {
            return;
        }
        
        this.timeFrames =  this.getTimeData();
         this.timeFrames['activityDesctiption'] = this.activityForm.value.activity;
         this.finalData.push(this.timeFrames)
         this.lineChartData[0].data.push(this.timeFrames.seconds);
         this.lineChartLabels.push(this.activityForm.value.activity);
         console.log(  'this.finalData', this.finalData)
       
      
        this.activityForm.reset();
    }

    //labels-activit,data-minutes
    //this.lineChartData = objects.map(finalData => { return finalData.seconds; })
   // console.log('this.lineChartData',this.lineChartData);
 // this.lineChartData: ChartDataSets[] = [
   // { data: [85, 72, 78, 75, 77, 75], label: 'Time' },
 // ];
 

 
   lineChartData:Array<any> = [
    {data: [], label: 'Project Time Frames'}
  ];
   lineChartLabels:Array<any> = [];
  //lineChartLabels:  = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line'; 
  
}