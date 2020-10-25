import {Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {ErrorBoxInterface} from '../interface/ngx-error-box.interface';
import {SubSink} from 'subsink';

@Component({
  selector: 'vlahio-error-box',
  templateUrl: './error-box.component.html'
})
export class ErrorBoxComponent implements OnDestroy {
  subSink = new SubSink();

  @Input() retryButtonText?: string | null;
  @Input() error: ErrorBoxInterface;
  @Input() container?: HTMLElement;
  @Output() retry?: EventEmitter<true> = new EventEmitter<true>();
  @Output() dismiss: EventEmitter<true> = new EventEmitter<true>();

  constructor() {
  }

  @ViewChild('errorBoxContainer', {static: false})
  set _errorBoxContainer(elRef: ElementRef<HTMLDivElement>) {
    if (this.container instanceof HTMLElement) {
      elRef.nativeElement.style.maxHeight = Math.round(
        this.container.clientHeight - this.container.clientHeight / 100 * 20
      ) + 'px';
    }
  }

  @HostListener('document:keydown.escape')
  _onEsc(): void {
    this.dismiss$();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  retry$(): void {
    this.retry.emit(true);
  }

  dismiss$(): void {
    this.dismiss.emit(true);
  }
}
