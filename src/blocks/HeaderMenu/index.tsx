'use client';

import Link from 'next/link';
import React, { useCallback, useMemo } from 'react';

import { NAVIGATION_MENU } from '@/data';
import { TNavigationItem } from '@/types';
import { ListItem } from '@blocks/MenuListItem';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@ui/navigation-menu';

export const HeaderMenu = () => {
  const renderMenuItem = useCallback(({ title, href, children }: TNavigationItem) => {
    if (!children) {
      return (
        <NavigationMenuItem key={title}>
          <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      );
    } else {
      return (
        <NavigationMenuItem key={title}>
          <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {children.map(child => (
                <ListItem key={child.title} title={child.title} href={child.href}>
                  {child.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
  }, []);

  const renderMenu = useMemo(() => {
    return NAVIGATION_MENU.map(item => renderMenuItem(item));
  }, [renderMenuItem]);

  return (
    <NavigationMenu>
      <NavigationMenuList>{renderMenu}</NavigationMenuList>
    </NavigationMenu>
  );
};
