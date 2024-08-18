import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Course, flexibleCourse } from "../../types/Courses";
import { getCourses, getCoachingCourse, getFlexibleCourse } from "../../api/courses";

const sampleCourses: Course[] = [
  {
    id: 1,
    name: "Course 1",
    imageUrl: "https://example.com/image1.jpg",
    courseType: "FLEXIBLE",
    skills: [{ name: "Skill 1" }],
    startDate: "2024-08-01",
    endDate: "2024-08-15",
  },
];

export const initializeLocalStorage = () => {
  if (!localStorage.getItem("courses")) {
    localStorage.setItem("courses", JSON.stringify(sampleCourses));
  }
};

initializeLocalStorage();

interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
  coachingCourse: Course | null;
  coachingLoading: boolean;
  coachingError: string | null;
  flexibleCourse: flexibleCourse | null;
  flexibleLoading: boolean;
  flexibleError: string | null;
}

const storedCourses = localStorage.getItem("courses");

const initialState: CoursesState = {
  courses: storedCourses ? JSON.parse(storedCourses) : [],
  loading: false,
  error: null,
  coachingCourse: null,
  coachingLoading: false,
  coachingError: null,
  flexibleCourse: null,
  flexibleLoading: false,
  flexibleError: null,
};

export const fetchCourses = createAsyncThunk<Course[], void>(
  "courses/fetchCourses",
  async () => {
    const response = await getCourses();
    return response as Course[];
  }
);

export const fetchCoachingCourse = createAsyncThunk<Course, string>(
  "courses/fetchCoachingCourse",
  async (coachingId: string) => {
    const response = await getCoachingCourse(coachingId);
    return response as Course;
  }
);

export const fetchFlexibleCourse = createAsyncThunk<flexibleCourse, string>(
  "courses/fetchFlexibleCourse",
  async (flexibleId: string) => {
    const response = await getFlexibleCourse(flexibleId);
    return response as flexibleCourse;
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.courses = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch courses";
      })
      .addCase(fetchCoachingCourse.pending, (state) => {
        state.coachingLoading = true;
        state.coachingError = null;
      })
      .addCase(fetchCoachingCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        state.coachingCourse = action.payload;
        state.coachingLoading = false;
      })
      .addCase(fetchCoachingCourse.rejected, (state, action) => {
        state.coachingLoading = false;
        state.coachingError = action.error.message || "Failed to fetch coaching course";
      })
      .addCase(fetchFlexibleCourse.pending, (state) => {
        state.flexibleLoading = true;
        state.flexibleError = null;
      })
      .addCase(fetchFlexibleCourse.fulfilled, (state, action: PayloadAction<flexibleCourse>) => {
        state.flexibleCourse = action.payload;
        state.flexibleLoading = false;
      })
      .addCase(fetchFlexibleCourse.rejected, (state, action) => {
        state.flexibleLoading = false;
        state.flexibleError = action.error.message || "Failed to fetch flexible course";
      });
  },
});

export default courseSlice.reducer;
