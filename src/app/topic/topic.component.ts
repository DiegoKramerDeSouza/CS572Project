import { Component, OnInit, Input } from '@angular/core';
import { MakeRequestService } from '../services/make-request.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() subject: string;
  @Input() topics: any;
  private Question: any;

  //public topics: any = [{"topic":"Angular","picture":"../assets/land.png"},{"topic":"Server Side","picture":"../../assets/land.png"}];

  constructor(private service: MakeRequestService) { }

  ngOnInit() {

  }

}
