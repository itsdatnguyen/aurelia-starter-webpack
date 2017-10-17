import { autoinject } from 'aurelia-framework';
import { DialogController } from "aurelia-dialog";

export interface MessageBoxParams {
  title?: string;
  message?: string;
}

@autoinject
export class MessageBox {

  title = '';
  message = '';

  constructor(
    private dialogController: DialogController
  ) {

  }

  activate(params: MessageBoxParams, routeConfig, navigationInstruction) {
    this.title = params.title;
    this.message = params.message;
  }
}