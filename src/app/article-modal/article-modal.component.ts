import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router'; // Импортируйте Router

@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.component.html',
  styleUrls: ['./article-modal.component.scss']
})
export class ArticleModalComponent {
  @Input() article: any;

  constructor(
    private modalController: ModalController,
    private router: Router 
  ) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  goToHomePage() {
    this.modalController.dismiss().then(() => {
      this.router.navigate(['/tabs']); 
    });
  }
}
