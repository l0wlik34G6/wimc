import {Injectable} from '@angular/core';
import {Domain} from '../models/domain.model';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor() {
  }

  getDomains(): Domain[] {
    const domains: Domain[] = [];
    for (let i = 0; i < 5; i++) {
      const domainName = faker.internet.userName();
      const owner = faker.internet.userName();
      domains.push(new Domain('', domainName, owner, '/var/wimc/webs/' + owner + '/' + domainName));
    }
    return domains;
  }

}
