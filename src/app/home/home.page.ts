import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

interface NewsResponse {
  
  articles:{
    0:{
      title: String;
    }
  }
  
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  headlines: any = []
  articles: any=[]
  constructor(public httpClient:HttpClient) {
    this.loadData()
    this.parseHeadlines()
  }

  

  loadData(){
      this.httpClient.get<NewsResponse>(`${API_URL}/top-headlines?country=ie&apiKey=${API_KEY}`).subscribe(results =>{
        
        this.headlines = results
        
        console.log(this.headlines)
        for(let i = 0; i < 10; i++) {
          console.log("Headlines: " + this.headlines.articles[i].title)
          this.articles.push({headline:this.headlines.articles[i].title, date:this.headlines.articles[i].publishedAt})
        }
        console.log(this.articles)
    })
  }

  parseHeadlines(){
    
  }
}


