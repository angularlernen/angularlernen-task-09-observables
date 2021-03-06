import { Component, OnInit } from '@angular/core';
import { ProfileResponse } from '../../api/profile/profile.response';
import { ProfileResource } from '../../api/profile/profile.resource';

@Component({
  selector: 'app-profile-collection',
  templateUrl: './profile-collection.component.html',
  styleUrls: ['./profile-collection.component.css']
})
export class ProfileCollectionComponent implements OnInit {

  profiles: ProfileResponse[] = [];

  constructor(private _profileResource: ProfileResource) { }

  ngOnInit() {
    this.profiles = this._profileResource.findAll();
  }

}