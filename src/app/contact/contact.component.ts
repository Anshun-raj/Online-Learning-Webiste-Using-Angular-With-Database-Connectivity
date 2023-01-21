import { Component} from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 submitted=false;
 userModel=new User('Anshu','suraj@123','7374894907','awesome');

 constructor(private _data:DataService){}

 onSubmit()
 {
  this.submitted=true;
    this._data.send(this.userModel).
    subscribe(
      data=>console.log('Success!',data),
    )
 }

}

