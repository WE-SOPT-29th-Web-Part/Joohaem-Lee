export interface ArticleInfo {
  id: string;
  title: string;
  body: string;
  summary: string;
  thumbnail: string;
  tags: string[];
  date: string;
}

// Write Page

export type dataChangeType = (
  key: "title" | "body" | "summary" | "thumbnail",
  value: string
) => void;

export type arrayChangeType = (key: "tags", value: string) => void;

export type arrayRemoveType = (value: string) => void;

export type isPublishedChangeType = (publishedValue: boolean) => void;
