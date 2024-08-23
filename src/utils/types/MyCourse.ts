export interface MyCourseItem {
  id: number;
  course: {
    id: number;
    name: string;
    imageUrl: string;
    courseType: 'Flexible' | 'Flexible with webinars';
    skills: {
      name: string;
    }[];
    startDate: string | null;
    endDate: string | null;
  };
  completionPercentage: number;
}
