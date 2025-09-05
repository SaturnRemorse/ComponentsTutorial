import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus =  signal<'online' | 'offline' | 'unknown' >('online');
  private interval?: ReturnType<typeof setInterval>;

  constructor(){}

  ngOnInit(){
    this.interval= setInterval(()=> {
      const rnd = Math.random();
      if(rnd<0.5){
        this.currentStatus.set('online');
      }
      else if(rnd<0.7){
        this.currentStatus.set('unknown'); 
      }
      else{
        this.currentStatus.set('offline');
      }
    }, 2000);

  }

  ngAfterViewInit(){
    console.log("AFTER VIEW INIT");
  }

  ngOnDestroy(){
    clearTimeout(this.interval);

  }

}
