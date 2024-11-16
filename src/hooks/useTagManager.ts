import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTags, createTag } from "../redux/features/tag/tagActions";
import { Tag } from "../types/tagTypes";

export const useTagManager = () => {
  const dispatch = useAppDispatch();
  const { tags, loading } = useAppSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const createNewTag = async (tagName: string): Promise<Tag | null> => {
    const newTag = await dispatch(createTag({ name: tagName }));
    return newTag.meta.requestStatus === "fulfilled" ? (newTag.payload as Tag) : null;
  };

  return {
    tags,
    loading,
    createNewTag,
  };
};
