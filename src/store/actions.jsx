import { ALL_ARTICLES, ALL_TAGS } from "./type";

export function allArticles(payload) {
  return {
    type: ALL_ARTICLES,
    payload,
  };
}

export function allTags(payload) {
  return {
    type: ALL_TAGS,
    payload,
  };
}
