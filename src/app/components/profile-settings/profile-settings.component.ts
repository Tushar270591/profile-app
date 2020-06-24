import { Component, OnInit } from '@angular/core';
import { ProfileService, IProfile } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  public title = 'Profile'​;
  public user​: IProfile​; 
  public isSavingProfile : boolean;
  public isProfileSaved : boolean = true;
  public isEmailGenerated : boolean = true;
  public saveProfileError : string;
  public emailGenerationError : string;
  constructor​(​private profile​: ProfileService) { 
  } 
  ngOnInit​() {
    this.fetchProfileData()
  } 
  saveProfile​() {
    this.isSavingProfile = true;
    this.isProfileSaved = true;
    this.profile.​setName​(this.user.firstName, this.user.lastName).then((data) => {
      this.isSavingProfile = false;
      this.isProfileSaved = true;
      console.log(data);
      this.profile.setUserEmail().then((data) => {
        this.emailGenerationError = "";
        console.log(data);
      },(error) => {
        this.emailGenerationError = error.error;
        console.log(error);
      });
    },(error) => {
      this.isSavingProfile = false;
      this.isProfileSaved = false;
      this.saveProfileError = error.error;
      
      console.log(error);
    });
  } 
  fetchProfileData() {
    this.profile.getProfileUser().then((data) => {
      this.user = data;
      console.log(data);
    },(error) => {
      console.log(error);
      this.fetchProfileData();
    });
  } 

}
