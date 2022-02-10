import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-iconcard',
  templateUrl: './iconcard.component.html',
  styleUrls: ['./iconcard.component.scss']
})
export class IconcardComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() type: string | undefined;
  @Input() detail: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
