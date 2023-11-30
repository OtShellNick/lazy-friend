import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar';

export const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage
        src={`https://api.dicebear.com/7.x/bottts-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&radius=50`}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
