import { Component, Input } from '@angular/core';
import { TerritoryTreeNode } from 'src/models/territories';

@Component({
  selector: 'app-territory-node',
  templateUrl: './territory-node.component.html',
  styleUrls: ['./territory-node.component.css']
})
export class TerritoryNodeComponent {
  @Input() node: TerritoryTreeNode;

  constructor(){
    this.node = {
      value: 0,
      id: 0,
      parent: 0
    }
  }
}
