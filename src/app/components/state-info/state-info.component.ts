import { ApiItem } from './../../models/apiItem';
import { DataMessengerService } from './../../services/utility/data-messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-info',
  templateUrl: './state-info.component.html',
  styleUrls: ['./state-info.component.scss']
})
export class StateInfoComponent implements OnInit {

  data: ApiItem;

  constructor(private dataMessenger: DataMessengerService) { }

  ngOnInit(): void {
    this.dataMessenger.messengerData.subscribe((data) =>  {
      this.data = new ApiItem(data);
    });
  }

}
