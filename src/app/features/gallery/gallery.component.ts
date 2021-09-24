import { Component, OnInit } from '@angular/core';
import {Image} from '../../shared/models/image';
import {RestApiService} from '../../shared/rest-api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {


  images$: Observable<Image[]> | undefined;
  constructor(private api: RestApiService) { }
  ngOnInit(): void {

  }


}
