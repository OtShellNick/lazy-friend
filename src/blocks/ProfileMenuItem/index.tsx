import { ReactNode } from 'react';

type TProfileMenuItemProps = {
  title: string;
  icon?: ReactNode;
  onClick: () => void;
  className?: string;
};
export const ProfileMenuItem = ({ title, icon, onClick, className }: TProfileMenuItemProps) => {
  return (
    <div className={`flex items-center justify-between w-full ${className}`} onClick={onClick}>
      <span>{title}</span>
      {icon}
    </div>
  );
};
