import {Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {ErrorBoxInterface} from '../interface/ngx-error-box.interface';
import {SubSinkWorker} from '@vlah.io/ngx-worker';

@Component({
  selector: 'vlahio-error-box',
  templateUrl: './error-box.component.html'
})
export class ErrorBoxComponent implements OnDestroy {
  @Input() retryButtonText?: string | null;
  @Input() error: ErrorBoxInterface | undefined;
  @Input() container?: HTMLElement;
  @Output() retry$?: EventEmitter<true> = new EventEmitter<true>();
  @Output() dismiss$: EventEmitter<true> = new EventEmitter<true>();
  subSink = new SubSinkWorker();

  constructor() {
  }

  @ViewChild('errorBoxContainer', {static: false})
  set errorBoxContainer(elRef: ElementRef<HTMLDivElement>) {
    if (this.container instanceof HTMLElement) {
      elRef.nativeElement.style.maxHeight = Math.round(
        this.container.clientHeight - this.container.clientHeight / 100 * 20
      ) + 'px';
    }
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.dismiss();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  retry(): void {
    this.retry$?.emit(true);
  }

  dismiss(): void {
    this.dismiss$.emit(true);
  }
}
