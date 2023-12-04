import { TNavigationItem, TSpecializationItem } from '@/types';

export const SPECIALIZATIONS: TSpecializationItem[] = [
  {
    value: 'PM',
    label: 'Менеджер проектов',
  },
  {
    value: 'SA',
    label: 'Системный аналитик',
  },
  {
    value: 'BA',
    label: 'Бизнес аналитик',
  },
  {
    value: 'SD',
    label: 'Аналитик данных',
  },
  {
    value: 'DM',
    label: 'Дизайнер',
  },
  {
    value: 'DevOps',
    label: 'Devops',
  },
  {
    value: 'Product',
    label: 'Менеджер продукта',
  },
  {
    value: 'Marketing',
    label: 'Маркетолог',
  },
  {
    value: 'SMM',
    label: 'SMM',
  },
  {
    value: 'Traffic',
    label: 'Привлечение трафика',
  },
  {
    value: 'MM',
    label: 'Менеджер маркетплейсов',
  },
  {
    value: 'QAM',
    label: 'Тестировщик ручной',
  },
  {
    value: 'QAA',
    label: 'Тестировщик авто',
  },
  {
    value: 'QAL',
    label: 'Тестирование нагрузочное',
  },
  {
    value: 'Backend',
    label: 'Бэкенд',
  },
  {
    value: 'Frontend',
    label: 'Фронтенд',
  },
  {
    value: 'Python',
    label: 'Python-разработчик',
  },
  {
    value: 'Java',
    label: 'Java-разработчик',
  },
  {
    value: 'Android',
    label: 'Android-разработчик',
  },
  {
    value: 'IOS',
    label: 'IOS-разработчик',
  },
  {
    value: 'C++',
    label: 'Разработчик С++',
  },
  {
    value: 'Go',
    label: 'Go-разработчик',
  },
  {
    value: 'DS',
    label: 'Data Science',
  },
  {
    value: 'ComputerVision',
    label: 'Computer Vision',
  },
  {
    value: 'HR',
    label: 'HR',
  },
  {
    value: 'WEB',
    label: 'WEB-разработчик',
  },
  {
    value: 'Cloud',
    label: 'Инженер облачных сервисов',
  },
  {
    value: 'DataEngineer',
    label: 'Инженер данных',
  },
  {
    value: 'other',
    label: 'Другое',
  },
];

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum SESSION_STATUS {
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
  LOADING = 'loading',
}

export enum RESPONSE_STATUS {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export const NAVIGATION_MENU: TNavigationItem[] = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Проекты',
    href: '/projects',
    children: [
      {
        title: 'Список проектов',
        href: '/projects',
        description: 'Найди проект себе по душе.',
      },
      {
        title: 'Создание проекта',
        href: '/projects/create',
        description: 'Создай свой проект и найди участников.',
      },
    ],
  },
  {
    title: 'Помощь',
    href: '/help',
    children: [
      {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },
      {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description: 'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
      },
      {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
      {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      },
    ],
  },
];
