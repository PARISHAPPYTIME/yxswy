import { Component, OnInit } from '@angular/core';

interface ValueObject {
  [index:string]:string
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public title:string = '我是一个新闻组件'

  public userInfo:ValueObject = {
    username: '这是动态添加的数据',
    password: '3'
  }

  public content:string = "<h1>我是一个动态的 html </h1>"

  public name:string | undefined

  public arr:any[] = [1, 8, 9]

  public isShow:boolean = false

  public dob:number = 1.2547896885

  public caseNumber:number = 2

  public uppercase:string = 'my Name is cst'

  public today:any = new Date()

  constructor() {
    this.name = '2'
  }

  ngOnInit(): void {
  }

  console(e:any):void {
    this.title = '2222'
    console.log(e)
  }

  keyDownFun(e:any):void {
    console.log(e.target.value)
  }

}
