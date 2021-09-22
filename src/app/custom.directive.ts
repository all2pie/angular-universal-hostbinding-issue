import { trigger } from '@angular/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import { state, animate, style, transition } from '@angular/animations';

@Component({
  selector: '[animate]',
  template: '<ng-content></ng-content>',
  animations: [
    trigger('animate', [
      state('idle-fadeInUp', style({ opacity: 0 })),
      transition(
        '* => fadeInUp',
        [
          style({ opacity: 0, transform: 'translateY(20px)' }),

          animate('{{timing}} {{delay}} ease-in', style('*')),
        ],
        { params: { timing: '1s', delay: '' } }
      ),
    ]),
  ],
})
export class Animate implements OnInit {
  @HostBinding('@animate')
  private trigger?: Transition;

  constructor() {}

  ngOnInit() {
    this.trigger = {
      value: 'idle-fadeInUp',
    };

    setTimeout(() => {
      this.trigger = {
        value: 'fadeInUp',
      };
    }, 500);
  }
}

interface Transition {
  value: string;
}
