import { Profile } from "@/apis/generated/models";
import { Button } from "@/components/ui/button";
import { userFollow } from "@/lib/apis/profile/userFollow";
import { userUnfollow } from "@/lib/apis/profile/userUnfollow";

interface Props {
  isFollow: boolean;
  profileId: string;
}

function FollowButton({ isFollow, profileId }: Props) {
  return (
    <>
      {!isFollow ? (
        <Button onClick={() => userFollow(profileId)}>팔로우</Button>
      ) : (
        <Button
          className="bg-red-400"
          onClick={() => userUnfollow(profileId)}
        >
          언팔로우
        </Button>
      )}
    </>
  );
}

export default FollowButton;
