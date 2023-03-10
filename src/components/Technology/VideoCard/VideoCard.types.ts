import { VideoType } from '@/components/Technology/Video/Video.types';

export interface VideoCardType extends VideoType {
  title: string,
  description: string,
  isEven?: boolean,
  index?: number,
}
