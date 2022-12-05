import { AfterViewInit, Component } from '@angular/core';
import { OrganizationService } from '../../services/organization.service';
import { Organization } from './models/organization';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { OrganizationDialogComponent } from '../../components/organization-dialog/organization-dialog.component';
import { FormControl } from '@angular/forms';

@Component({
	selector   :  'app-organizations',
	templateUrl:  'organizations.component.html',
	styleUrls  : ['organizations.component.scss'],
})

export class OrganizationsComponent implements AfterViewInit {
	private destroy$ = new Subject<void>();
	organizations$: Observable<Organization[]>;
	filter: FormControl;
	filter$: Observable<string>;

	constructor(public dialog: MatDialog,
				private organizationsService: OrganizationService) {
		this.organizations$ = this.organizationsService.getAllOrganizations();
		this.filter = new FormControl('',);
		this.filter$ = this.filter.valueChanges;
	}

	ngAfterViewInit(): void {
		this.filter$
			.pipe(takeUntil(this.destroy$))
			.subscribe((res: string) => {
				this.organizations$ =  this.organizationsService.getAllOrganizations(res)
			})
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(OrganizationDialogComponent);
	
		dialogRef.afterClosed()
			.pipe(takeUntil(this.destroy$))
			.subscribe((result: { data: Organization }) => {
			if(result) {
				this.saveNewOrganization(result.data);
			}
		});
	}

	saveNewOrganization(organization: Organization): void {
		this.organizationsService.saveOrganization(organization)
			.pipe(takeUntil(this.destroy$))
			.subscribe(res => {
				console.log(res);
				this.organizations$ = this.organizationsService.getAllOrganizations();
			}
		)
	}

	deleteOrganization(idx: number) {
		this.organizationsService.deleteOrganization(idx)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.organizations$ = this.organizationsService.getAllOrganizations();
			}
		)
	}
	
	changeAssignedValue(fieldData: {idx: number, field: string, value: number}) {
		this.organizationsService.patchValue(fieldData)
			.pipe(takeUntil(this.destroy$))
			.subscribe();
	}
}