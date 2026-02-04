export type PageType = 'PAGE_1' | 'PAGE_2';

export interface MagazineContent {
  title: string;
  subheading: string;
  intro: string;
  disclaimer: string;
}

// Added missing AspectRatio enum for video generation scaling
export enum AspectRatio {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE',
}

// Added missing VideoGenerationState interface to track progress and output
export interface VideoGenerationState {
  status: 'idle' | 'checking_key' | 'generating' | 'polling' | 'completed' | 'error';
  progressMessage?: string;
  videoUri?: string;
  error?: string;
}


