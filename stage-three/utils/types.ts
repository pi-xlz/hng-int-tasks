export type ImgArray = ImageType[];

export interface ImageType {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  tags: string[];
}

export type ButtonType = 'LOGGEDIN' | 'LOGGEDOUT';

export type BtnState = 'ATTENTION' | 'DORMANT';
