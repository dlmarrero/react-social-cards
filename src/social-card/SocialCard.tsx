import * as React from 'react';

export interface CardHeader {
  org: string;
  orgTag: string;
  date: Date;
  orgDesc: string;
  authorTag: string;
}

export interface CardDescription {
  title: string;
  description: string;
  link: string;
}

export interface SocialCardProps {
  avatarImageURL: string;
  header: CardHeader;
  bodyImageURL: string;
  body: CardDescription;
}

export default class SocialCard extends React.Component<{}, SocialCardProps> {
  
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
