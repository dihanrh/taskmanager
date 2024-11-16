import apiClient from '../config/apiClient';
import { Tag } from '../../types/tagTypes';

const TAGS_ENDPOINT = '/taglist';

export const fetchTagsAPI = async (): Promise<Tag[]> => {
  const response = await apiClient.get(TAGS_ENDPOINT);
  return response.data;
};

export const createTagAPI = async (tag:  Partial<Tag>): Promise<Tag> => {
  const response = await apiClient.post(TAGS_ENDPOINT, tag);
  return response.data;
};

export const updateTagAPI = async (tag: Tag): Promise<Tag> => {
  const response = await apiClient.put(`${TAGS_ENDPOINT}/${tag.id}`, tag);
  return response.data;
};

export const deleteTagAPI = async (tagId: string): Promise<void> => {
  await apiClient.delete(`${TAGS_ENDPOINT}/${tagId}`);
};
