import { environment } from './../../../environments/environment';
import { DataMessengerService } from './../../services/utility/data-messenger.service';
import { State } from './../../models/state';
import { Component, OnInit } from '@angular/core';
import { StateDataService } from './../../services/state/state-data.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-state-select',
  templateUrl: './state-select.component.html',
  styleUrls: ['./state-select.component.scss']
})
export class StateSelectComponent implements OnInit {

  states: State[] = [];
  selected: string;
  year: string = environment.year;

  constructor(private stateDataService: StateDataService, private dataMessenger: DataMessengerService) { }

  ngOnInit(): void {
    this.stateDataService.getAllStates().subscribe((res) => {
      this.states = res;
      this.selected = this.states[0].code;
      this.updateState({ value: this.selected });
    });
  }

  public updateState(event: MatSelectChange | { value: string }): void {
    this.stateDataService.getState(event.value).subscribe((res) => {
      this.dataMessenger.sendData(res);
    });
  }

}
