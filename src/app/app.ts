import { MessageBoxParams, MessageBox } from './../components/message-box/message-box';
import { PLATFORM } from 'aurelia-pal';
import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { DialogService } from "aurelia-dialog";

@autoinject
export class App {

  constructor(
    private router: Router,
    private dialogService: DialogService
  ) {
    
  }

  message = "Hello World!";

  configureRouter(config: RouterConfiguration, router: any): void {
    config.title = 'Home';
    config.options.pushState = true;
    config.map([
      { route: ['', 'home'], moduleId: PLATFORM.moduleName("app/home/home"), name: 'Home', title: 'Home', nav: true },
      { route: 'employees', moduleId: PLATFORM.moduleName('app/employees/employees'), name: 'Employees', title: 'Employees', nav: true },
      { route: 'people/:peopleId', moduleId: PLATFORM.moduleName('app/people/people'), name: 'People', title: 'People', href: 'people' }
    ]);
  }

  popupClicked() {
    let messageBoxParams: MessageBoxParams = {
      title: 'Radical',
      message: 'This is pretty cool!'
    }
    this.dialogService.open({
      model: messageBoxParams,
      viewModel: MessageBox
    })
  }
}
