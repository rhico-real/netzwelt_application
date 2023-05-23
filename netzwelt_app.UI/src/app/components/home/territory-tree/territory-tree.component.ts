import { Component, Input } from '@angular/core';
import { TerritoryTreeNode } from 'src/models/territories';

@Component({
  selector: 'app-territory-tree',
  templateUrl: './territory-tree.component.html',
  styleUrls: ['./territory-tree.component.css']
})
export class TerritoryTreeComponent {
  @Input() root: TerritoryTreeNode;

  constructor(){
    this.root = {
      value: 0,
      id: 0,
      parent: 0
    }
  }
}
