import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuService } from "../menu-service.service";
import { MenuItem } from "../menu-item";

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  constructor(
    private menuService: MenuService
  ) { }

  @Input() parentMenuID: number;
  @Output() closeSidebarEvent = new EventEmitter<string>();
  @Output() MenuSelectedEvent = new EventEmitter<MenuItem>();
  imagePath: string = "././assets/gl_task_images/";

  subMenuState: string = 'out';
  menuItems: MenuItem[];

  getlogo = function (item: MenuItem): string {
    if (typeof item.thumb != 'undefined' && item.thumb != null) {
      return this.imagePath + item.thumb;
    }
    if (typeof item.icon != 'undefined' && item.icon != null) {
      return this.imagePath + item.icon;
    }

    return "";

  };

  onCloseButtonClick() {
    this.closeSidebarEvent.emit('out');
  }

  toggleSubMenu(item) {
    this.parentMenuID = item.id;
    this.MenuSelectedEvent.emit(item);
  }

  selectMenuItem(item: MenuItem) {
    this.MenuSelectedEvent.emit(item);
    this.subMenuState = 'in';
    event.stopPropagation();
  }

  ngOnInit() {
    this.subMenuState = 'out';
    this.parentMenuID = -1;
    this.menuService.getJSON().subscribe(data => {
      this.menuItems = data.menu;
    });
  }

}
