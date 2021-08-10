import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  public peopleInfo:any = {
    username: '',
    sex: 1,
    city: '北京',
    like: []
  }

  public selectList:any[] = ['上海', '北京']
  public checkList:any[] = ['12', '33', '44']

  constructor() { }

  ngOnInit(): void {
  }

  choose(item:string):void {
    const index = this.peopleInfo.like.indexOf(item)
    if(index !== -1) {
      this.peopleInfo.like.splice(index, 1)
    } else {
      this.peopleInfo.like.push(item)
    }
  }

}
