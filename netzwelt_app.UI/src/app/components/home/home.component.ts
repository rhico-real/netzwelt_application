import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Territory, TerritoryData, TerritoryTreeNode } from 'src/models/territories';
import { NetzweltApiService } from 'src/services/netzwelt-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  territoryDataObject: TerritoryData = {
    id: "",
    name: "",
    parent: ""
  }

  sortedTerritory:TerritoryData[] = [];

  nodesList: TerritoryTreeNode[] = [];
  properNodesList: TerritoryTreeNode[] = [];

  constructor(private netzweltapi: NetzweltApiService, private router: Router, private cookieService: CookieService){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.cookieService.delete('authenticated');
      }
    });
  }

  ngOnInit() {
    this.cookieService.delete('authenticated');
    this.netzweltapi.getAllTerritories().subscribe((territories) => {
      this.sortedTerritory = territories.data;

      for(let data in this.sortedTerritory){
        if (this.sortedTerritory.hasOwnProperty(data)) {
          let id = this.sortedTerritory[data].id;
          let name = this.sortedTerritory[data].name;
          let parent = this.sortedTerritory[data].parent;

          const newNode = new TerritoryTreeNode(name, id, parent);
          this.nodesList.push(newNode);
        }
      }

      const nodesMap: { [id: string]: TerritoryTreeNode } = {};

      for(let nodeX in this.nodesList){
        if (this.nodesList.hasOwnProperty(nodeX)) {
          const id = this.nodesList[nodeX].id;
          const name = this.nodesList[nodeX].value;
          const parent = this.nodesList[nodeX].parent;
          nodesMap[id] = new TerritoryTreeNode(name, id, parent);
        }
      }

      for(let nodeX in this.nodesList){
          if (this.nodesList.hasOwnProperty(nodeX)) {
            const id = this.nodesList[nodeX].id;
            const parentId = this.nodesList[nodeX].parent;
            const node = nodesMap[id];
            const parentNode = nodesMap[parentId];

            if (parentId === null) {
              this.properNodesList.push(node);
              continue; // Skip if no parent ID
            }

            if (!node || !parentNode) {
              continue; // Skip if node or parent node not found
            }

            if (!parentNode.left) {
              parentNode.left = node;
            } else if (!parentNode.right) {
              parentNode.right = node;
            } else {
              // Handle if both left and right child nodes are already occupied
              // Add custom logic based on your requirements
            }

            // Find and return the root node (assuming there is only one root)

          }
        }

        for (const node of Object.values(nodesMap)) {
          if (!node.left && !node.right) {
            this.properNodesList.push(node);
          }
        }

        console.log(nodesMap);
    });
  }
}
