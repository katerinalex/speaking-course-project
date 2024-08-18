interface Skill {
  name: string;
}

export interface Course {
  id: number;
  name: string;
  imageUrl: string;
  courseType: string;
  skills: Skill[];
  startDate: string;
  endDate: string;
}

export interface CoachingCourse {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  courseType: string;
  courseDirection: string;
  skills: Skill[];
  content: string;
}

interface Skill {
  name: string;
}

interface Lesson {
  id: number;
  name: string;
}

interface Thema {
  id: number;
  name: string;
  lessons: Lesson[];
  homeworkIds: number[];
}

interface Module {
  id: number;
  name: string;
  themas: Thema[];
}

export interface flexibleCourse {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  courseType: string;
  courseDirection: string;
  skills: Skill[];
  modules: Module[];
}