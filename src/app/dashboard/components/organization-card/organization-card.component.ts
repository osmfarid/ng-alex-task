import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Organization } from '../../pages/organizations/models/organization';

@Component({
	selector: 'app-organization-card',
	templateUrl: 'organization-card.component.html',
	styleUrls: ['organization-card.component.scss'],
})

export class OrganizationCardComponent {
	@Input() organizationData: Organization | undefined;
	@Output() deleteOrganizationClick = new EventEmitter<number>();
	@Output() patchValue = new EventEmitter<{idx: number, field: string, value: number}>();

	onDeleteClick(organizationIdx: number): void {
		this.deleteOrganizationClick.next(organizationIdx)
	}

	onPatchValue(idx: number, field: string, value: number): void {
		this.patchValue.next({idx, field, value})
	}
}