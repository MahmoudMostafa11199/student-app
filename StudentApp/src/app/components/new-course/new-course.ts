import { Component } from '@angular/core';
import { CourseForm } from '../course-form/course-form';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-course',
  imports: [CourseForm, RouterLink],
  templateUrl: './new-course.html',
  styleUrl: './new-course.css',
})
export class NewCourse {}
