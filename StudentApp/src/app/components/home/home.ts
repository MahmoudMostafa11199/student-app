import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesService } from '../../services/courses';
import { Categories } from '../../services/categories';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  courseService = inject(CoursesService);
  categoriesService = inject(Categories);

  coursesCount = signal<number>(0);
  categoriesCount = signal<number>(0);

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((res) => {
      this.coursesCount.set(res.total);
    });

    this.categoriesService.getAllCategories().subscribe((res) => {
      this.categoriesCount.set(res.count);
    });
  }
}
