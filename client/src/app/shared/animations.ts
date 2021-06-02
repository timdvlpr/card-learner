import { style, animate, trigger, transition } from '@angular/animations';

export const modalAnimation = trigger(
    'modalAnimation',
    [
      transition(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.25s ease-out', style({ opacity: 1 }))
        ]
      ),
      transition(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.25s ease-in', style({ opacity: 0 }))
        ]
      )
    ]
  );
