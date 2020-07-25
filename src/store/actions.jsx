import { ALL_ARTICLES, ALL_TAGS } from "./type";

export function allArticles(payload) {
  return {
    type: ALL_ARTICLES,
    payload:payload.articles,
  };
}

export function allTags(payload) {
  return {
    type: ALL_TAGS,
    payload:payload.tags
  };
}

export function fetchArticles(url) {
  return {
    type: "fetch",
    fallBack: allArticles,
    url,
  };
}
export function fetchTags(url) {
    return {
      type: "fetch",
      fallBack: allTags,
      url,
    };
  }
  