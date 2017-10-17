import { RouteConfig, NavigationInstructionInit } from "aurelia-router";

export interface CardParams {
  title: string;
  text: string;
}

export class Card {

  title: string;
  text: string;

  constructor() {

  }

  activate(params: CardParams, routeConfig: RouteConfig, navigationInstruction: NavigationInstructionInit) {
    this.title = params.title;
    this.text = params.text;
  }
}