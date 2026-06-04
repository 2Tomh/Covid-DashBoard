import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  @Input() adminProfile: any = null;
  @Output() onSave = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<void>();

  errorMessage = '';

  profileForm = {
    fullName: '',
    email: ''
  };

  passwordForm = {
    currentPassword: '',
    newPassword: ''
  };

  ngOnInit(): void {
    if (this.adminProfile) {
      this.profileForm.fullName = this.adminProfile.fullName;
      this.profileForm.email = this.adminProfile.email;
    }
  }

  save(): void {
    const payload: any = {
      fullName: this.profileForm.fullName,
      email: this.profileForm.email
    };
    if (this.passwordForm.currentPassword && this.passwordForm.newPassword) {
      payload.currentPassword = this.passwordForm.currentPassword;
      payload.newPassword = this.passwordForm.newPassword;
    }

    this.onSave.emit(payload);
  }
}
