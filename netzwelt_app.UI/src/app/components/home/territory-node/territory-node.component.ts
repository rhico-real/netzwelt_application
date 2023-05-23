import { Component, Input } from '@angular/core';
import { TerritoryData } from 'src/models/territories';

@Component({
  selector: 'app-territory-node',
  templateUrl: './territory-node.component.html',
  styleUrls: ['./territory-node.component.css']
})
export class TerritoryNodeComponent {
  @Input() node: TerritoryData[];

  constructor(){
    this.node = []
  }
}
