import {Component, ElementRef, Input, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {COMMA, ENTER, SEMICOLON, SPACE} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less']
})
export class TagsComponent implements OnInit {

  @ViewChild('inputElement')inputElement: ElementRef<HTMLInputElement> | undefined;
  @Input()divider: string | undefined = ';';
  @Input()titleTask: string | undefined;
  tags: string[] = [];
  @Output()pushTags: EventEmitter<string[]>;
  separatorKeysCodes: number[] = [];
  inputValue = '';
  query = false;
  isValid = false;

  constructor() {
    this.pushTags = new EventEmitter<string[]>();
  }

  ngOnInit(): void {
    if ( this.divider ) {
      this.setDivider(this.divider);
      if (this.tags[0]) {
        this.tags = this.tags[0].split(this.divider);
      }
    }
  }

  add(tag: string, event: KeyboardEvent): void {
    if (this.separatorKeysCodes.includes(event.keyCode)){
      event.preventDefault();
      this.addTag(tag);
    }
  }

  addTag(tag: string): void {
    this.query = !(this.tags.includes(tag));

    if ((this.query && tag !== undefined && tag !== '')) {
      if (tag.length > 0){
        this.tags.push(tag);
        this.pushTags.emit(this.tags);
      }
      this.inputValue = '';
    }
    else if ( !this.query && tag !== undefined && tag !== '' ){
      this.isValid = true;
      setTimeout(() => {
        this.isValid = false;
      }, 400);
    }
  }

  remove(tag: string): void {
    const index: number = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
      this.pushTags.emit(this.tags);
    }
  }


  onReset($event: boolean): void {
    if ( $event) {
      this.tags = [];
      this.pushTags.emit(this.tags);
      this.inputValue = '';
    }
  }

  public onClick(inputValue: string): void {
    if ( this.inputElement ) { this.inputElement.nativeElement.focus(); }
    this.addTag(inputValue);
  }

  private setDivider(divider: string): void {

    if (this.divider === ',') {
      this.separatorKeysCodes = [ENTER, COMMA];
    }
    if (this.divider === ';') {
      this.separatorKeysCodes = [ENTER, SEMICOLON];
    }
    if (this.divider === ' ') {
      this.separatorKeysCodes = [ENTER, SPACE];
    }
  }

}
