import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.scss']
})
export class FabricComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
  }

  routeToAddFabric() {
    this.router.navigate(['add-fabric']);
  }

}
