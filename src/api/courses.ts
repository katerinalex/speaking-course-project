import { Course } from "../types/Courses";
import { client } from "../utils/fetchClient";

export function getCourses() {
  return client.get<Course[]>('/courses');
};

export function getCoachingCourse(coachingId: string) {
  return client.get(`/courses/coaching/${coachingId}`);
}

export function getFlexibleCourse(flexibleId: string) {
  return client.get(`/courses/flexible/${flexibleId}`);
}