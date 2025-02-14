import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch resume data
export const fetchResumeData = createAsyncThunk(
  'resume/fetchResumeData',
  async () => {
    const response = await fetch('/resumeData.json');  
    const data = await response.json();
    return data;
  }
);

// Create the resume slice
const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResumeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchResumeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default resumeSlice.reducer;
