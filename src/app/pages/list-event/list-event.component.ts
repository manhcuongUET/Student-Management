import { Component } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
})
export class ListEventComponent {
  listEvent = [
    {
      date: "Hôm nay",
      time: "17:00",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:00",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:00",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: false,
    },
    {
      date: "Hôm nay",
      time: "17:00",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
  ];
}
