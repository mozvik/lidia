import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any
  errorMsg: any
  id!: string

  constructor(private blogService: BlogService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getPost();
  }
  getPost() {
    this.blogService.getDetails(this.id).subscribe({
      next: (data) => {
        this.details = data
      },
      error: (err) => {
        this.errorMsg = err.message
      }
    }
    )
  }
}
