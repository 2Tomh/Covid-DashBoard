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
    this.errorMessage = '';

    if (!this.profileForm.fullName || !this.profileForm.email) {
      this.errorMessage = 'יש למלא שם מלא ואימייל';
      return;
    }

    const payload: any = { ...this.profileForm };

    if (this.passwordForm.currentPassword && this.passwordForm.newPassword) {
      payload.passwordData = { ...this.passwordForm };
    }

    this.onSave.emit(payload);
    this.passwordForm = { currentPassword: '', newPassword: '' };
  }

}
