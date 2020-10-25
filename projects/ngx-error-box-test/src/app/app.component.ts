import {Component, ComponentRef} from '@angular/core';
import {ErrorBoxComponent} from '../../../ngx-error-box/src/lib/component/error-box.component';
import {ErrorBoxInterface} from '../../../ngx-error-box/src/lib/interface/ngx-error-box.interface';
import {ErrorBoxWorker} from '../../../ngx-error-box/src/lib/worker/error-box.worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-error-box-test';
  error = {
    message: '[Symfony\\Component\\Validator\\Exception\\ValidatorException] Property "embeded_class.some_property"'
      + ' does not exist in class "App\\Entity\\MyEntity".',
    errors: []
  };
  validationError = {
    message: 'Some error occurred',
    errors: [
      {
        formControlName: 'USERNAME',
        errors: [
          'Min length should be 100.',
          'This should be a valid email address.'
        ]
      },
      {
        formControlName: 'PASSWORD',
        errors: [
          'Min length should be 100.',
          'This should be a valid email address.'
        ]
      }
    ]
  };

  constructor(private errorBoxWorker: ErrorBoxWorker) {
  }

  showError(error: ErrorBoxInterface, container?: HTMLDivElement): void {
    this.errorBoxWorker.render(
      error,
      {
        dismiss: (compRef: ComponentRef<ErrorBoxComponent>): void => {
          console.log('Close clicked ...');
          console.log(
            'Is instance of ErrorBoxComponent: ' +
            (compRef.instance instanceof ErrorBoxComponent)
          );
        },
        container
      }
    );
  }

  showErrorWithRetry(error: ErrorBoxInterface): void {
    this.errorBoxWorker.render(
      error,
      {
        dismiss: (compRef: ComponentRef<ErrorBoxComponent>): void => {
          console.log('Close clicked ...');
          console.log(
            'Is instance of ErrorBoxComponent: ' +
            (compRef.instance instanceof ErrorBoxComponent)
          );
        },
        retry: {
          buttonText: 'RETRY',
          callback: (compRef: ComponentRef<ErrorBoxComponent>): void => {
            console.log('Retry clicked ...');
            console.log(
              'Is instance of ErrorBoxComponent: ' +
              (compRef.instance instanceof ErrorBoxComponent)
            );
          }
        }
      }
    );
  }
}
