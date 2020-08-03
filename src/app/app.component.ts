import { OgTagService } from './services/og-tag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'og-tag-angular';


  constructor(
    private ogTagService: OgTagService) {
  }


  ngOnInit() {
    this.ogTagService.setTitle('VIKRAM');

    this.ogTagService.setSocialMediaTags(
      this.sharableOgUrl,
      this.sharableOgTitle,
      this.sharableOgDescription,
      this.sharableOgImage);
  }


  sharableOgUrl: string = 'https://andreilucianmoraru.com/register';
  sharableOgTitle: string = 'Share my Pencil Book';
  sharableOgDescription: string = 'Pencil is a reading and writing platform.';
  sharableOgImage: string = 'register.jpg';



}
