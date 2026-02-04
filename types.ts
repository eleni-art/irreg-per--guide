export type PageType = 'PAGE_1' | 'PAGE_2';

export interface MagazineContent {
  title: string;
  subheading: string;
  intro: string;
  disclaimer: string;
}

// AspectRatio enum for video generation configuration
export enum AspectRatio {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE',
}

// VideoGenerationState to track the status and progress of the Veo video generation process
export type VideoGenerationState =
  | { status: 'idle' }
  | { status: 'checking_key'; progressMessage: string }
  | { status: 'generating'; progressMessage: string }
  | { status: 'polling'; progressMessage: string }
  | { status: 'completed'; videoUri: string }
  | { status: 'error'; error: string };

