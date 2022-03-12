import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  blogPosts: any
  errorMsg: any

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getGallery()
  }

  getGallery() {
    this.blogService.getGallery().subscribe({
      next: (data) => {
        this.blogPosts = data
      },
      error: (err) => {
        this.errorMsg = err.message
      }
    }
    )
  }

}
