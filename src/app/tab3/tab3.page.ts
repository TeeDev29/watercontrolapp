import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import{AngularFireDatabase,AngularFireList}from 'angularfire2/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  items:AngularFireList<any[]>;

  public carL    : any;
  public carj    : any;
  public dstL    : any;
  public dstj    : any;
  public dandL    : any;
  public dandj   : any;
  public garL   : any;
  public garj  : any;


  
  public setHam1   : any;
  public setHam2   : any;
  public setHam3   : any;
  
  constructor(public alertController: AlertController,private fdb: AngularFireDatabase) {

   /*this.fdb
    .object("/carcoord/carL")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.carL = value;
    });
    
    this.fdb
    .object("/carcoord/carj")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.carj = value;
    });


    this.fdb
    .object("/Devicesta/dstL")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.dstL = value;
    });
    
    this.fdb
    .object("/Devicesta/dstj")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.dstj = value;
    });

    this.fdb
    .object("/Deviceand/dandL")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.dandL = value;
    });
    
    this.fdb
    .object("/Deviceand/dandj")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.dandj = value;
    });
    
    this.fdb
    .object("/devicegar/garL")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.garL = value;
    });
    
    this.fdb
    .object("/devicegar/garj")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.garj = value;
    });*/



    this.fdb
    .object("/setHam1")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.setHam1 = value;
    });

    this.fdb
    .object("/setHam2")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.setHam2 = value;
    });


    this.fdb
    .object("/setHam3")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.setHam3 = value;
    });
  }
  /*Clickede(){
    this.fdb.object("/Devicesta/dstL").set(this.dstL);
    this.fdb.object("/Devicesta/dstj").set(this.dstj);
  }

  Clickedee(){
    this.fdb.object("/Deviceand/dandL").set(this.dandL);
    this.fdb.object("/Deviceand/dandj").set(this.dandj);
  }

  
  Clickedeee(){
    this.fdb.object("/devicegar/garL").set(this.garL);
    this.fdb.object("/devicegar/garj").set(this.garj);
  }*/


  Clicked(){
    this.fdb.object("/setHam1").set(this.setHam1);
  }

  Clickedd(){
    this.fdb.object("/setHam2").set(this.setHam2);
  }


  Clickeddd(){
    this.fdb.object("/setHam3").set(this.setHam3);
  }



  
}
