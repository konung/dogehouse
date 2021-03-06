export type Room = {
  id: string;
  name: string;
  isPrivate: boolean;
  numPeopleInside: number;
  creatorId: string;
  peoplePreviewList: Array<{
    id: string;
    displayName: string;
    numFollowers: number;
  }>;
};
export type User = {
  username: string;
  online: boolean;
  lastOnline: Date;
  id: string;
  bio: string;
  displayName: string;
  avatarUrl: string;
  modForRoomId: string;
  canSpeakForRoomId: string;
  numFollowing: number;
  numFollowers: number;
  currentRoom?: Room;
  followsYou?: boolean;
  youAreFollowing?: boolean;
};

export type CurrentRoom = Room & {
  users: User[];
  muteMap: Record<string, boolean>;
  activeSpeakerMap: Record<string, boolean>;
  raiseHandMap: Record<string, number>;
  autoSpeaker: boolean;
};
