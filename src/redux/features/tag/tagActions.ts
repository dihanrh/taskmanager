import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../../services/api/tagApi';
import { Tag } from '../../../types/tagTypes';


export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
  return await api.fetchTagsAPI();
});


export const createTag = createAsyncThunk('tags/createTag', async (tag: Partial<Tag>) => {
  return await api.createTagAPI(tag);
});


export const updateTag = createAsyncThunk('tags/updateTag', async (tag: Tag) => {
  return await api.updateTagAPI(tag);
});


export const deleteTag = createAsyncThunk('tags/deleteTag', async (tagId: string) => {
  await api.deleteTagAPI(tagId);
  return tagId;
});
