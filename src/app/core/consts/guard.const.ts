import { RoleNumber } from "./consts";

export const CURRENT_USER = 'currentUser';
export const SECRET_KEY = 'Student_Management_CAT@2023$';
export const listMenu = [
  {
    roleNumber: RoleNumber.student,
    permission: [
      {
        screenName: 'Hồ sơ',
        routerLink: '',
        icon: 'profile',
      },
      {
        screenName: 'Sự kiện',
        routerLink: 'listEvent',
        icon: '',
      },
      {
        screenName: 'Liên hệ tư vấn tuyển sinh',
        routerLink: 'chat-students',
        icon: '',
      },
      // {
      //   screenName: '',  card status
      //   routerLink: ''
      // },
    ],
  },
  {
    roleNumber: RoleNumber.accountant,
    permission: [
      {
        screenName: 'Xác minh phí',
        routerLink: 'feeVerification',
        icon: '',
      },
      {
        screenName: 'Quản lý các loại phí',
        routerLink: 'managementFee',
        icon: '',
      },
      {
        screenName: 'Yêu cầu xác minh phí',
        routerLink: 'requestFeeVerify',
        icon: '',
      },
    ],
  },
  {
    roleNumber: RoleNumber.admissions,
    permission: [
      {
        screenName: 'Danh sách sinh viên',
        routerLink: 'listStudent',
        icon: '',
      },
      {
        screenName: 'Sự kiện',
        routerLink: 'manage-event-list',
        icon: '',
      },
      {
        //aplication
        screenName: 'Hồ sơ',
        routerLink: '',
        icon: 'profile',
      },
      {
        screenName: 'Email',
        routerLink: 'email/box-email/inbox',
        icon: 'mail',
      },
      {
        screenName: 'Tin nhắn',
        routerLink: 'chat-admissions',
        icon: '',
      },
      {
        type: 'menu',
        screenName: 'Tạo tài khoản',
        routerLink: '',
        icon: '',
      },
    ],
  },
  {
    roleNumber: RoleNumber.admissionsManager,
    permission: [
      {
        screenName: 'Dashboard',
        routerLink: 'dashboard',
        icon: '',
      },
      {
        screenName: 'Danh sách sinh viên',
        routerLink: 'listStudent',
        icon: 'unordered-list',
      },
      {
        screenName: 'Tạo Sự kiện',
        routerLink: 'create-event',
        icon: 'appstore',
      },
      {
        screenName: 'Hồ sơ',
        routerLink: '',
        icon: 'profile',
      },
      {
        screenName: 'Email',
        routerLink: 'email/box-email/inbox',
        icon: 'mail',
      },
      {
        screenName: 'Tin nhắn',
        routerLink: 'chat-admissions',
        icon: 'wechat',
      },
      {
        screenName: 'Tạo tài khoản',
        routerLink: '',
        icon: 'user-add',
      },
    ],
  },
];
