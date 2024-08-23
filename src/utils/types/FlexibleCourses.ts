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

export interface ModuleDetails {
  id: number;
  name: string;
  meditationName: string;
  linkToMeditation: string;
  themas: Thema[];
  webinar?: Webinar;
}

export interface Webinar {
  id: number;
  name: string;
  date: string;
  time: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  link: string;
}

export interface Module {
  id: number;
  module: ModuleDetails;
  completionPercentage: number;
}
