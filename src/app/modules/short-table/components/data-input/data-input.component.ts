import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss'],
})
export class DataInputComponent {
  form!: FormGroup;
  isEditing: boolean = false;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customerName: ['', Validators.required],
      contactName: ['', Validators.required],
      testingCompany: ['', Validators.required],
      testerName: ['', Validators.required],
      testLocation: ['', Validators.required],
      dateTime: ['', Validators.required],
      cableID: ['', Validators.required],
      cableLength: ['', Validators.required],
      fibersFrom: ['', Validators.required],
      fibersTo: ['', Validators.required],
      comments: ['', Validators.required],
      passFail: ['', Validators.required],
      testEquipmentModel: ['', Validators.required],
      testEquipmentID: ['', Validators.required],
      testDataName: ['', Validators.required],
    });

    this.loadData();
  }

  onSubmit(): void {
    if (this.form!.invalid) {
      return;
    }

    console.log(this.form.value);

    this.storageService.saveUser(JSON.stringify(this.form.value));
    // this.form!.reset();
  }

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.isEditing = false;
    this.storageService.saveUser(JSON.stringify(this.form.value));
    this.loadData();
  }

  loadData() {
    this.user = this.storageService.getUser();
    this.form.patchValue(this.user);
  }
}
