
export type PageType = 'PAGE_1' | 'PAGE_2';

export interface MagazineContent {
  title: string;
  subheading: string;
  intro: string;
  disclaimer: string;
}

export enum AspectRatio {
  LANDSCAPE = '16:9',
  PORTRAIT = '9:16'
}

export interface VideoGenerationState {
  status: 'idle' | 'checking_key' | 'generating' | 'polling' | 'completed' | 'error';
  videoUri?: string;
  error?: string;
  progressMessage?: string;
}
