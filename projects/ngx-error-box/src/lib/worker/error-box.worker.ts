import {ComponentRef, Injectable} from '@angular/core';
import {FactoryWorker} from '@vlah.io/ngx-worker';
import {ErrorBoxComponent} from '../component/error-box.component';
import {DisplayOptionsInterface, ErrorBoxInterface} from '../interface/ngx-error-box.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorBoxWorker {
  constructor(private factoryWorker: FactoryWorker) {
  }

  render(
    error: ErrorBoxInterface,
    options: DisplayOptionsInterface = {}
  ): ComponentRef<ErrorBoxComponent> {
    const {dismiss, retry, container} = options;

    const compRef = this.factoryWorker.make(ErrorBoxComponent);
    const compRefInstance = compRef.instance as ErrorBoxComponent;

    compRefInstance.error = error;
    if (container) {
      compRefInstance.container = container;
    }

    if (retry) {
      compRefInstance.retryButtonText = retry.buttonText;
      if (compRefInstance.retry$) {
        compRefInstance.subSink.add(
          compRefInstance.retry$.subscribe(
            () => {
              retry.callback(compRef);
              this.destroy(compRef);
            }
          )
        );
      }
    }

    compRefInstance.subSink.add(
      compRefInstance.dismiss$.subscribe(
        () => {
          if (dismiss) {
            dismiss(compRef);
          }
          this.destroy(compRef);
        }
      )
    );

    this.factoryWorker.glue(compRef, {container});

    return compRef;
  }

  destroy(compRef: ComponentRef<ErrorBoxComponent>): void {
    this.factoryWorker.destroy(compRef);
  }
}
