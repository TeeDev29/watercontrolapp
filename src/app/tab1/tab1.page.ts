import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import{AngularFireDatabase,AngularFireList}from 'angularfire2/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items:AngularFireList<any[]>;

  public Ham1    : any;
  public Ham2    : any;
  public Ham3    : any;
  public Ham4    : any;
  public Ham5    : any;
  public Ham6    : any;
  public Ham7    : any;
  public Ham8    : any;
  public Ham9    : any;

  public battery1 : any;
  public battery2 : any;
  public battery3 : any;

  public setHam1   : any;
  public setHam2   : any;
  public setHam3   : any;

  public Timer1Starthr : any ;                                   
  public Timer1Startmin : any ;
  public Timer2Starthr : any ;
  public Timer2Startmin : any ;
  public Timer3Starthr : any ;
  public Timer3Startmin : any ;


 public point1 : any;
 public point2 : any;
 public point3 : any;
 public point4 : any;
 public point5 : any;
 public point6 : any;

 public water : any;
 public statuswater:string;

 public position : any;
 public statusposition:string;



  constructor(public alertController: AlertController,private fdb: AngularFireDatabase) {

    this.fdb
    .object("/Ham/Ham1")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham1 = value;
    });
    
    this.fdb
    .object("/Ham/Ham2")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham2 = value;
    });
    this.fdb
    .object("/Ham/Ham3")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham3 = value;
    });
    this.fdb
    .object("/Ham/Ham4")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham4 = value;
    });
    this.fdb
    .object("/Ham/Ham5")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham5 = value;
    });
    this.fdb
    .object("/Ham/Ham6")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham6 = value;
    });
    this.fdb
    .object("/Ham/Ham7")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham7 = value;
    });
    this.fdb
    .object("/Ham/Ham8")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham8 = value;
    });
    this.fdb
    .object("/Ham/Ham9")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham9 = value;
    });

    this.fdb
    .object("/Ham/Ham9")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham9 = value;
    });

    this.fdb
    .object("/Ham/Ham9")
    .valueChanges()
    .subscribe((value: any) => {
      this.Ham9 = value;
    });

    this.fdb
    .object("/setHam1")
    .valueChanges()
    .subscribe((value: any) => {
      this.setHam1 = value;
    });

    this.fdb
    .object("/setHam2")
    .valueChanges()
    .subscribe((value: any) => {
      this.setHam2 = value;
    });

    this.fdb
    .object("/setHam3")
    .valueChanges()
    .subscribe((value: any) => {
      this.setHam3 = value;
    });
  


    this.fdb
    .object("/Timer1/Start/hr")
    .valueChanges()
    .subscribe((value: any) => {
      this.Timer1Starthr = value;
    });
    this.fdb
    .object("/Timer1/Start/min")
    .valueChanges()
    .subscribe((value: any) => {
      this.Timer1Startmin = value;
    });

    this.fdb
    .object("/Timer2/Start/hr")
    .valueChanges()
    .subscribe((value: any) => {
      this.Timer2Starthr = value;
    });
    this.fdb
    .object("/Timer2/Start/min")
    .valueChanges()
    .subscribe((value: any) => {
      this.Timer2Startmin = value;
    });
  
    this.fdb
    .object("/Timer3/Start/hr")
    .valueChanges()
    .subscribe((value: any) => {
      this.Timer3Starthr = value;
    });
    this.fdb
    .object("/Timer3/Start/min")
    .valueChanges()
    .subscribe((value: any) => {
      this.Timer3Startmin = value;
    });


    this.fdb
    .object("/battery1")
    .valueChanges()
    .subscribe((value: any) => {
      this.battery1 = value;
    });

    this.fdb
    .object("/battery2")
    .valueChanges()
    .subscribe((value: any) => {
      this.battery2 = value;
    });

    this.fdb
    .object("/battery3")
    .valueChanges()
    .subscribe((value: any) => {
      this.battery3 = value;
    });

    this.fdb
    .object("/point1")
    .valueChanges()
    .subscribe((value : any)=>{
      this.point1 =value;
    });

    this.fdb
    .object("/point2")
    .valueChanges()
    .subscribe((value : any)=>{
      this.point2 =value;
    });

    this.fdb
    .object("/point3")
    .valueChanges()
    .subscribe((value : any)=>{
      this.point3 =value;
    });
    

    this.fdb
    .object("/point4")
    .valueChanges()
    .subscribe((value : any)=>{
      this.point4 =value;
    });

    this.fdb
    .object("/point5")
    .valueChanges()
    .subscribe((value : any)=>{
      this.point5 =value;
    });

    this.fdb
    .object("/point6")
    .valueChanges()
    .subscribe((value : any)=>{
      this.point6 =value;
    });

    this.fdb
    .object("/water")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.water = value; 
      if(this.water==1){
        this.statuswater =" please add water";
      }else{
        this.statuswater =" ----";
      }
    });

    this.fdb
    .object("/position")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.position = value;
      if(this.position==0){
        this.statusposition ="start point";
      }else if(this.position==1){
        this.statusposition ="point 1";
      }else if(this.position==2){
        this.statusposition ="point 2";
      }else if(this.position==3){
        this.statusposition ="point 3";
      }else if(this.position==4){
        this.statusposition ="point 4";
      }else if(this.position==5){
        this.statusposition ="point 5";
      }else if(this.position==6){
        this.statusposition ="point 6";
      }else if(this.position==7){
        this.statusposition ="going back!";
      }else if(this.position==8){
        this.statusposition ="going back!";
      }else if(this.position==9){
        this.statusposition ="turn right into the 2nd plot";
      }else if(this.position==10){
        this.statusposition ="Turn left onto the 3rd plot";
      }else if(this.position==11){
        this.statusposition ="Turn left onto the 1st plot";
      }

    });

  }
 

  public setpoint1(){
    if(this.point1 == true){
    this.fdb.object("/point1").set(1);
    }else{ 
      this.fdb.object("/point1").set(0);
    }
  }


  public setpoint2(){
    if(this.point2 == true){
    this.fdb.object("/point2").set(1);
    }else{ 
      this.fdb.object("/point2").set(0);
    }
  }

  public setpoint3(){
    if(this.point3 == true){
    this.fdb.object("/point3").set(1);
    }else{ 
      this.fdb.object("/point3").set(0);
    }
  }

  public setpoint4(){
    if(this.point4 == true){
    this.fdb.object("/point4").set(1);
    }else{ 
      this.fdb.object("/point4").set(0);
    }
  }

  public setpoint5(){
    if(this.point5 == true){
    this.fdb.object("/point5").set(1);
    }else{ 
      this.fdb.object("/point5").set(0);
    }
  }

  public setpoint6(){
    if(this.point6 == true){
    this.fdb.object("/point6").set(1);
    }else{ 
      this.fdb.object("/point6").set(0);
    }
  }
}
