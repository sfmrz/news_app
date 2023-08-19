import { Component, NgZone } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ModalController } from '@ionic/angular';
import { ArticleModalComponent } from '../article-modal/article-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  filteredData: any;

  constructor(
    public getdata: GetdataService,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.getdata.doGetTabOne().subscribe(res => {
      this.data = res.data.articles;
    });
  }

  async openArticleModal(article: any) {
    const modal = await this.modalController.create({
      component: ArticleModalComponent,
      componentProps: {
        article: article
      }
    });

    return await modal.present();
  }
}
