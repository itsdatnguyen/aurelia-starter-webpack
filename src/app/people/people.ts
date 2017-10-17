export interface PeopleParams {
  peopleId: string;
}

export class People {
  
  id: string;

  constructor() {

  }

  activate(params: PeopleParams, routeConfig, navigationInstruction) {
    this.id = params.peopleId;
  }
}