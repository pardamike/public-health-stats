import { ApiItem } from './../../models/apiItem';
import { DataMessengerService } from './../../services/utility/data-messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-graph',
  templateUrl: './state-graph.component.html',
  styleUrls: ['./state-graph.component.scss']
})
export class StateGraphComponent implements OnInit {

  data: ApiItem;
  graphData: Array<{ name: string, value: string }>;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Metric';
  showYAxisLabel = true;
  yAxisLabel = 'Measurement';
  colorScheme = {
    domain: ['#66bb6a', '#5c6bc0', '#ffca28', '#ffee58', '#ff7043']
  };



  constructor(private dataMessenger: DataMessengerService) { }

  ngOnInit(): void {
    this.dataMessenger.messengerData.subscribe((data) =>  {
      if (Object.keys(data).length === 0) {
        return;
      }
      this.data = new ApiItem(data);
      this.formatDataForGraph();
    });
  }

  private formatDataForGraph(): void {
    this.graphData = [];
    const tempData = Object.entries(this.data.measurements);
    tempData.forEach((item) => {
      this.graphData.push({
        name: item[0].replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
        value: item[1]
      });
      console.log(item);
    });
    console.log(this.graphData);
  }
}
