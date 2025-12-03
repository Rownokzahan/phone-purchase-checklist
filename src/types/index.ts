export type Id = string;

export interface FeatureItemType {
  id: Id;
  label: string;
}

export interface FeatureCategoryType {
  id: Id;
  title: string;
  items: FeatureItemType[];
}
