import { SetStateAction } from "react";
import { CurrentRoom, User } from "../types";

export const onFollowUpdater = (
  setRoom: (update: SetStateAction<CurrentRoom | null>) => void,
  setMe: (update: SetStateAction<User | null>) => void,
  me: User | null,
  profile: User
) => {
  setRoom((r) =>
    !r
      ? r
      : {
          ...r,
          users: r.users.map((x) => {
            if (x.id === profile.id) {
              return {
                ...x,
                numFollowers:
                  x.numFollowers + (profile.youAreFollowing ? -1 : 1),
                youAreFollowing: !profile.youAreFollowing,
              };
            } else if (x.id === me?.id) {
              return {
                ...x,
                numFollowing:
                  x.numFollowing + (profile.youAreFollowing ? -1 : 1),
              };
            }

            return x;
          }),
        }
  );
  setMe((mu) =>
    !mu
      ? mu
      : {
          ...mu,
          numFollowing: mu.numFollowing + (profile.youAreFollowing ? -1 : 1),
        }
  );
};
