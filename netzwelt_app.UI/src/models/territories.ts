export class Territory {
  data:TerritoryData[] = [];
}

export class TerritoryData{
  id = "";
  name = "";
  parent = "";
}

export class TerritoryTreeNode {
  value: any;
  id: any;
  parent: any;
  left?: TerritoryTreeNode | null;
  right?: TerritoryTreeNode | null;

  constructor(value: any, id: any, parent: any, left: TerritoryTreeNode | null = null, right: TerritoryTreeNode | null = null) {
    this.value = value;
    this.id = id;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}
