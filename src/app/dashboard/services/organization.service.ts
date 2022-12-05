import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Organization } from '../pages/organizations/models/organization';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OrganizationService {
	constructor(private httpClient: HttpClient) { }
	
	getAllOrganizations(titleFilter?: string) : Observable<Organization[]> {
		if(titleFilter) {
			const params = new HttpParams().set('q', titleFilter);
			return this.httpClient.get<Organization[]>('/api/organizations', { params })
		}else {
			return this.httpClient.get<Organization[]>('/api/organizations')
		}
	}

	saveOrganization(organization: Organization) {
		const headers = { 'content-type': 'application/json'};
		const body=JSON.stringify(organization);
		return this.httpClient.post('/api/organizations', body, { headers })
	}
	
	deleteOrganization(idx: number) {
		return this.httpClient.delete(`/api/organizations/${idx}`)
	}

	patchValue(data: {idx: number, field: string, value: number}) {
		const headers = { 'content-type': 'application/json'};
		const body = 
		{ 
			id: data.idx,
			[data.field]: { assigned: data.value }
		}
		return this.httpClient.patch(`/api/organizations/${data.idx}`, body, { headers })
	}
}