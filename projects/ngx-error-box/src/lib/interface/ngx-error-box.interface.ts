import {ComponentRef} from '@angular/core';
import {ErrorBoxComponent} from '../component/error-box.component';

export interface ErrorBoxInterface {
  message: string;
  errors: ErrorBoxValidationInterface[];
}

export interface ErrorBoxValidationInterface {
  formControlName: string;
  errors: string[];
}

export interface DisplayOptionsInterface {
  dismiss?: (compRef: ComponentRef<ErrorBoxComponent>) => void;
  retry?: null | {
    buttonText: string;
    callback: (compRef: ComponentRef<ErrorBoxComponent>) => void;
  };
  container?: HTMLElement;
}
