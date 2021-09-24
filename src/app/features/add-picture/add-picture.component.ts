import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxDropzoneChangeEvent} from 'ngx-dropzone';
import {RestApiService} from '../../shared/rest-api.service';
import {Image} from '../../shared/models/image';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.less']
})
export class AddPictureComponent implements OnInit {

  image: File | undefined;
  @Input() tags: string[] = [];
  formGroup: FormGroup | undefined;
  hasValue = false;
  constructor(
    private api: RestApiService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    });
  }

  onSelect(files: NgxDropzoneChangeEvent): void {
    this.image = files.addedFiles[0];
    this.hasValue = true;
  }

  isValid(): boolean {
    if (this.formGroup && this.hasValue) {
      return this.formGroup.invalid;
    }
    return true;
  }

  onPush(): void {

  }



  onRemove(): void {
    this.image = undefined;
    this.hasValue = false;
  }
}
