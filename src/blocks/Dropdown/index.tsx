import { FC, ReactNode, useId, useMemo } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';

type TDropdownProps = {
  children: ReactNode;
  label?: ReactNode | string;
  menu: ReactNode[];
  className?: string;
};

export const Dropdown: FC<TDropdownProps> = ({ children, label, menu, className }) => {
  const id = useId();
  const renderMenu = useMemo(() => {
    return menu.map((item, index) => {
      return <DropdownMenuItem key={id + index}>{item}</DropdownMenuItem>;
    });
  }, [id, menu]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus:outline-none focus-visible:outline-none'>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={className} sideOffset={12}>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {renderMenu}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
