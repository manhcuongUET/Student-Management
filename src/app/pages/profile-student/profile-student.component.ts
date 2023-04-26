import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent {
  sexOptions = [{ name: 'Nam' }, { name: 'Nữ' }];

  majorOptions = [{ name: 'Quản trị marketing' }, { name: 'Kiểm toán' }, { name: 'Kế toán' }];

  cityOptions = [
    'An Giang',
    'Bà Rịa - Vũng Tàu',
    'Bắc Giang',
    'Bắc Kạn',
    'Bạc Liêu',
    'Bắc Ninh',
    'Bến Tre',
    'Bình Định',
    'Bình Dương',
    'Bình Phước',
    'Bình Thuận',
    'Cà Mau',
    'Cao Bằng',
    'Đắk Lắk',
    'Đắk Nông',
    'Điện Biên',
    'Đồng Nai',
    'Đồng Tháp',
    'Gia Lai',
    'Hà Giang',
    'Hà Nam',
    'Hà Tĩnh',
    'Hải Dương',
    'Hậu Giang',
    'Hòa Bình',
    'Hưng Yên',
    'Khánh Hòa',
    'Kiên Giang',
    'Kon Tum',
    'Lai Châu',
    'Lâm Đồng',
    'Lạng Sơn',
    'Lào Cai',
    'Long An',
    'Nam Định',
    'Nghệ An',
    'Ninh Bình',
    'Ninh Thuận',
    'Phú Thọ',
    'Quảng Bình',
    'Quảng Nam',
    'Quảng Ngãi',
    'Quảng Ninh',
    'Quảng Trị',
    'Sóc Trăng',
    'Sơn La',
    'Tây Ninh',
    'Thái Bình',
    'Thái Nguyên',
    'Thanh Hóa',
    'Thừa Thiên Huế',
    'Tiền Giang',
    'Trà Vinh',
    'Tuyên Quang',
    'Vĩnh Long',
    'Vĩnh Phúc',
    'Yên Bái',
    'Phú Yên',
    'Cần Thơ',
    'Đà Nẵng',
    'Hải Phòng',
    'Hà Nội',
    'TP HCM',
  ];

  profileForm = this.fb.group({
    basicInfo: this.fb.group({
      name: 'Nguyễn Xuân Quyền',
      nationality: 'Việt Nam',
      sex: this.sexOptions[0],
      dateOfBirth: '02/12/1998',
      placeOfBirth: 'abc',
      id: '3423523',
      licienseDate: '16/03/2023',
      liciensePlace: 'Hà Nội',
      phoneNumber: '0379172166',
      email: 'mersnip102@gmail.com',
      major: this.majorOptions[0],
      linkFb: 'test.facebook.com',
    }),
    highSchoolInfo: this.fb.group({
      city: this.cityOptions[0],
      graduateYear: '2014',
      nameSchool: 'THPT Nguyễn Trãi',
    }),
    address: this.fb.group({
      city: this.cityOptions[0],
      district: '',
      ward: '',
      specificAddress: '',
    }),
    protector: this.fb.group({
      nameProSt: '',
      phoneProSt: '',
      emailProSt: '',
      nameProNd: '',
      phoneProNd: '',
      emailProNd: '',
    }),
    brief: this.fb.group({
      highSchoolDiploma: '',
      highSchoolTranscript: '',
      avatar: '',
      birthCert: '',
      graduationCert: '',
      englishCert: '',
      idCard: '',
      otherDocuments: '',
    }),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm.disable();
  }

  handleEdit() {
    this.profileForm.enable();
  }

  onFileChange(event: any) {}
}
