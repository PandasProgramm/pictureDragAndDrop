import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxDropzoneChangeEvent} from 'ngx-dropzone';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.less']
})
export class AddPictureComponent implements OnInit {

  private Id = 0;
  linkData: File | undefined;
  @Input() tags: string[]|undefined;

  formGroup: FormGroup;
  constructor() {
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

  ngOnInit(): void {
  }

  onSelect($event: NgxDropzoneChangeEvent): void {
    this.linkData = $event.addedFiles[0];
    console.log(this.linkData)
  }

  onRemove($event: File): void {
    this.linkData = undefined
  }
}
