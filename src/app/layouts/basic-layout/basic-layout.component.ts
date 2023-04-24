import { Component, OnInit } from '@angular/core';
import { RoleNumber } from 'src/app/core/consts/consts';
import { IListMenu } from 'src/app/core/models/list-menu.model';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css'],
})
export class BasicLayoutComponent implements OnInit {
  isCollapsed = false;
  listMenu: IListMenu[] = [
    {
      name: 'Email',
      roleActivated: [
        {
          roleNumber: [RoleNumber.student, RoleNumber.admissionsManager],
          routerLink: 'email/box-email/inbox',
        },
      ],
    },
    {
      name: 'Chat',
      roleActivated: [
        {
          roleNumber: RoleNumber.student,
          routerLink: 'chat-students',
        },
        {
          roleNumber: RoleNumber.admissions,
          routerLink: 'chat-admissions',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
