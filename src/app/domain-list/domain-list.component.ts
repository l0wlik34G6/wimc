import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Domain} from '../models/domain.model';
import {UserService} from '../services/user.service';
// import * as faker from 'faker';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.css']
})
export class DomainListComponent implements OnInit {
  @Output() domainSelected: Domain = null;

  domains: Domain[] = [
      new Domain('valid', 'jobbar.at', 'jschierz', 'jschierz/jobbar/web/')
  ];

  constructor(private userService: UserService) {
    // this.domains.push(new Domain(faker.internet.domainName()));
    // this.domains.push(new Domain(faker.internet.domainName()));
    // this.domains.push(new Domain(faker.internet.domainName()));
    // this.domains.push(new Domain(faker.internet.domainName()));
  }

  ngOnInit() {
  }

  onDomainSelected(domain: Domain) {
    this.domainSelected = domain;
  }
}
