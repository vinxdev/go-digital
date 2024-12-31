import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-block',
  standalone: false,
  
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {
  userform: FormGroup;
  editing_mode: boolean = false; 
  blockId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userform = this.fb.group({
      blockFloor: ['', Validators.required],
      blockCode: ['', Validators.required],
      createdOn: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.blockId = params['id'];
        this.editing_mode = true; 
        this.api.getblockpost(this.blockId).subscribe(
          (res: any) => {
            this.userform.patchValue(res);
          },
          (err: any) => {
            console.error('Error fetching block data:', err);
          }
        );
      }
    });
  }

  onsubmit(): void {
    if (this.userform.valid) {
      if (this.editing_mode) {
        this.update();
      } else {
        this.create();
      }
    }
  }

  create(): void {
    this.api.createblockpost(this.userform.value).subscribe(
      () => {
        alert('Block created successfully');
        this.router.navigate(['/blockview']); 
      },
      (err: any) => {
        console.error('Error creating block:', err);
      }
    );
  }

  update(): void {
    const blockdata = {
      blockId : this.blockId, ...this.userform.value 
    }
    if (!this.blockId) {
      alert('Block ID is missing for update');
      return;
    }
    this.api.updateblockpost(blockdata).subscribe(
      () => {
        alert('Block updated successfully');
        this.router.navigate(['/blockview']); 
      },
      (err: any) => {
        console.error('Error updating block:', err);
      }
    );
  }

  resetForm(): void {
    this.userform.reset();
    this.editing_mode = false;
    this.blockId = null;
  }
}