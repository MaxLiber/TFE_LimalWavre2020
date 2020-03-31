import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsModel } from '../model/news.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsId: number=null;
  context: string=null;


  news: NewsModel;
  
  loc=location.protocol+'//'+location.host;
  noImageUrl=this.loc+'/assets/news/no-image.jpg';
  imageUrl=null;
  isImageLoading = true;
  documentUrl=null;
  isDocumentLoading=true;


  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void
  {
    this.newsId=+this.route.snapshot.paramMap.get('newsId');
    this.context= this.route.snapshot.paramMap.get('context');

    this.newsService.findById(this.newsId)
      .subscribe(
        news => {
          this.news=news;
          this.initData();
        }
      );
  }

  initData(): void 
  {
    console.log('show news details for ', this.news);

    if(this.news.image===null || this.news.image===undefined)
    {
      this.imageUrl=null;
      this.isImageLoading=false;
    }
    else
    {
      console.log('Loading image from server for news '+ this.news.id+', image:'+this.news.image);
      this.getImageFromService();
    }

    if(this.news.document===null || this.news.document===undefined)
    {
      this.documentUrl=null;
      this.isDocumentLoading=false;
    }
    else
    {
      console.log('Loading image from server for news '+ this.news.id+', image:'+this.news.image);
      this.getDocumentFromService();
    }
  }

  // image
  getImageFromService() {
    this.isImageLoading = true;
    this.newsService.downloadImageFile(this.news).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageUrl = reader.result;
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      }
  }

  // Document
  getDocumentFromService() {
    this.isDocumentLoading = true;
    this.newsService.downloadDocumentFile(this.news).subscribe(data => {
      this.createDocumentFromBlob(data);
      this.isDocumentLoading = false;
    }, error => {
      this.isDocumentLoading = false;
      console.log(error);
    });
  }

  createDocumentFromBlob(document: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.documentUrl = reader.result;
    }, false);

    if (document) {
      reader.readAsDataURL(document);
    }
  }
}
