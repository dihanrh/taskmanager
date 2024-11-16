import { createSlice } from '@reduxjs/toolkit';
import { TagState } from '../../../types/tagTypes';
import * as tagActions from './tagActions';

const initialState: TagState = {
  tags: [],
  loading: false,
  error: null,
};

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Tags
    builder
      .addCase(tagActions.fetchTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(tagActions.fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(tagActions.fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tags';
      });

    // Create Tag
    builder
      .addCase(tagActions.createTag.fulfilled, (state, action) => {
        state.tags.push(action.payload);
      });

    // Update Tag
    builder
      .addCase(tagActions.updateTag.fulfilled, (state, action) => {
        const index = state.tags.findIndex((tag: { id: string; }) => tag.id === action.payload.id);
        if (index !== -1) state.tags[index] = action.payload;
      });

    // Delete Tag
    builder
      .addCase(tagActions.deleteTag.fulfilled, (state, action) => {
        state.tags = state.tags.filter((tag: { id: string; }) => tag.id !== action.payload);
      });
  },
});

export default tagSlice.reducer;
