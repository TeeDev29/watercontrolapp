import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import{AngularFireDatabase,AngularFireList}from 'angularfire2/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  items:AngularFireList<any[]>;

  public Timer1Starthr : any ;                                   //ตั้งเวลา
  public Timer1Startmin : any ;
  public Timer2Starthr : any ;
  public Timer2Startmin : any ;
  public Timer3Starthr : any ;
  public Timer3Startmin : any ;


  public setHam1   : any;
  public setHam2   : any;
  public setHam3   : any;
 

  constructor(public alertController: AlertController,private fdb: AngularFireDatabase) {

    this.fdb
    .object("/Timer1/Start/hr")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer1Starthr = value;
    });

    this.fdb
    .object("/Timer1/Start/min")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer1Startmin = value;
    });

    this.fdb
    .object("/Timer2/Start/hr")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer2Starthr = value;
    });

    this.fdb
    .object("/Timer2/Start/min")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer2Startmin = value;
    });

    this.fdb
    .object("/Timer3/Start/hr")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer3Starthr = value;
    });

    this.fdb
    .object("/Timer3/Start/min")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer3Startmin = value;
    });


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
   

  public getTimeStart1 (timeStart){
    let dt = new Date(timeStart)
    this.fdb
    .object("/Timer1/Start/hr")
    .set(dt.getHours())
    .then(() => {
  
    });   
  this.fdb
    .object("/Timer1/Start/min")
    .set(dt.getMinutes())
    .then(() => {
  
    });      
  }
    
  public getTimeStart2 (timeStart){
    let dt = new Date(timeStart)
    this.fdb
    .object("/Timer2/Start/hr")
    .set(dt.getHours())
    .then(() => {
  
    });   
  this.fdb
    .object("/Timer2/Start/min")
    .set(dt.getMinutes())
    .then(() => {
  
    });      
  }

  public getTimeStart3 (timeStart){
    let dt = new Date(timeStart)
    this.fdb
    .object("/Timer3/Start/hr")
    .set(dt.getHours())
    .then(() => {
  
    });   
  this.fdb
    .object("/Timer3/Start/min")
    .set(dt.getMinutes())
    .then(() => {
  
    });      
  }
 
 setplot1(){
  this.fdb.object("/setHam1").set(this.setHam1);
 }

 setplot2(){
  this.fdb.object("/setHam2").set(this.setHam2);
 }
 setplot3(){
  this.fdb.object("/setHam3").set(this.setHam3);
 }
}
