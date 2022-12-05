import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-organization-dialog',
	templateUrl: 'organization-dialog.component.html',
  })
  export class OrganizationDialogComponent {
	organizationForm: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<OrganizationDialogComponent>,
		private fb: FormBuilder
	) {
		this.organizationForm = fb.group({
			'title' : [null, Validators.required],
			'logoSrc': ['https://via.placeholder.com/50'],
			'tracking' : fb.group({
				'inUse' : [null, [Validators.required, Validators.min(1)]],
				'assigned' : [null, [Validators.required, 
									Validators.min(1)]],
			}),
			'protection' : fb.group({
				'inUse' : [null, [Validators.required, Validators.min(1)]],
				'assigned' : [null, [Validators.required, Validators.min(1)]],
			}),
		});
	}
  
	onNoClick(): void {
		this.dialogRef.close();
	}

	onFormSubmit(form: NgForm)  
	{
		this.dialogRef.close({ data: form })
	} 
  }