import { Component } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
})
export class ListEventComponent {
  itemPerPage = 4;
  totalListEvent = [
    {
      date: "Hôm nay",
      time: "17:00",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:01",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:02",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: false,
    },
    {
      date: "Hôm nay",
      time: "17:03",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:04",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:05",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:06",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:07",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:08",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
    {
      date: "Hôm nay",
      time: "17:09",
      title: "Chào mừng tân sinh viên",
      description: "Nhân dịp đầu năm, nhà trường tổ chức bay lắc chào mừng tân sinh viên với hàng chục kg Oxy, đảm bảo cả trường phê pha",
      isJoin: true,
    },
  ];

  displayedListEvent = this.totalListEvent.slice(0, 4);

  onPageIndexChange(e: any) {
    if (e * 4 > this.totalListEvent.length) {
      this.displayedListEvent = this.totalListEvent.slice((e-1)*this.itemPerPage);
    } else {
      this.displayedListEvent = this.totalListEvent.slice((e-1)*this.itemPerPage, (e-1)*this.itemPerPage + 4);
    }
    console.log(this.displayedListEvent)
  }
}
