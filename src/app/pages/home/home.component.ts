import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService ) { }

  resultadoSubscribe: any;
  resultadoProm: any;

  ngOnInit(): void {
    this.subscribePostObs();
    this.subscribePosProm();
  }

  subscribePostObs(){
    this.postService.listaPostsObs().subscribe( resp  =>{
      console.log(resp);      
      this.resultadoSubscribe = JSON.stringify(resp);
    })
  }
  subscribePosProm(){
    this.postService.listaPostsProm().then(result => result.json().then( rest=>{
      this.resultadoProm = JSON.stringify(rest);;
    } ))
  }

}
