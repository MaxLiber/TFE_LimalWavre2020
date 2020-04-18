import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { NewsModel } from '../model/news.model';
import { AuthService } from '../../../auth/services/auth.service';
import { NewsEvent, NewsEventType } from '../model/news-event.model';

@Component({
  selector: 'app-news-liste',
  templateUrl: './news-liste.component.html',
  styleUrls: ['./news-liste.component.scss']
})
export class NewsListeComponent implements OnInit {

  @Input()
  context: string;

  viewPdf=false;

  newsList: Array<NewsModel> = null;

  constructor(
    private authService: AuthService,
    private newsService: NewsService,
    private router: Router,
    //private route: ActivatedRoute,
  ) { }

  ngOnInit(): void 
  {
    //this.context=this.route.snapshot.paramMap.get('context');
    if(this.context===null || this.context===undefined)
    {
      if(this.authService.isUserClubAdmin())
      {
        this.context='Admin';
      }
    }

    const all: boolean = this.context!==null && this.context!==undefined && this.context==='Admin';

    this.newsService.getNewsList(all)
      .subscribe(
        res => {
          this.newsList = res;
          console.log('news list is:', res);
        }
      );
  }

  hasNews(): boolean
  {
    return this.newsList!==null && this.newsList!==undefined && this.newsList.length > 0;
  }
  
  onTestPdfViewer()
  {
    this.viewPdf=true;
  }

  onCreateNews()
  {
    this.router.navigate(['news', 'create']);
  }

  handleNewsEvent(event: NewsEvent)
  {
    console.log('receive news event', event);
    if(event.eventName === NewsEventType.DELETE )
    {
      this.removeNewsFromList(event.newsId);
    }
  }

  removeNewsFromList(newsId: number)
  {
    this.newsList = this.newsList.filter( n => n.id !== newsId );
  }
}
