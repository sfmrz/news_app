import { Component } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ModalController } from '@ionic/angular';
import { ArticleModalComponent } from '../article-modal/article-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;
  filteredData: any;

  constructor(
    public getdata: GetdataService,
    private modalController: ModalController
  ) {}

  ngOnInit(){
    this.getdata.doGetTabTwo().subscribe(res => {
      this.data = res.data.articles;
      this.filteredData = this.data; // Начальная инициализация с полными данными
    })
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

  filterArticles(event: any) {
    
    const searchTerm = event.target.value.toLowerCase();
    
    if (!searchTerm) {
      this.filteredData = this.data;
      return;
    }

    this.filteredData = this.data.filter((article: any) => // Указываем тип 'article'
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm)
    );
  }
}