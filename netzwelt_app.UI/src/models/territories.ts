export class Territory {
  data:TerritoryData[] = [];
}

export class TerritoryData{
  id = "";
  name = "";
  parent = "";
  children: TerritoryData[] = []
}
