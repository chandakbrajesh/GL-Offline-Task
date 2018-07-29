import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { MenuService } from "./menu-service.service";
import { SidenavigationComponent } from "./sidenavigation/sidenavigation.component";
import { MenuItem } from "./menu-item";
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  providers: [MenuService]
})


export class AppComponent {

  title = 'app';
  @ViewChild(SidenavigationComponent) SideSubNav;

  menuItems: MenuItem[];
  parentMenuID: number = -1;
  menuState: string = 'out';

  selectedItem: MenuItem;

  constructor(
    private menuService: MenuService
  ) { }


  ngOnInit() {
    this.menuService.getJSON().subscribe(data => {
      this.menuItems = data.menu;
    });
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.parentMenuID = -1;
    this.selectedItem = null;
  }

  OpenSideNavigation(item: MenuItem) {
    this.parentMenuID = item.id;
    this.menuState = 'in'
    this.selectedItem = item;
  }

  setSelectedItem(item: MenuItem) {
    this.selectedItem = item;
  }

  closeSideBar($event) {
    this.menuState = $event;
    this.selectedItem = null;
  }


  getlogo = function (item: MenuItem): string {
    if (typeof item == 'undefined') {
      return "";
    }
    if (typeof item.thumb != 'undefined' && item.thumb != null) {
      return "./assets/gl_task_images/" + item.thumb;
    }
    if (typeof item.icon != 'undefined' && item.icon != null) {
      return "./assets/gl_task_images/" + item.icon;
    }

    return "";
  };


}

