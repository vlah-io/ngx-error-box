@vlah.io/ngx-error-box

Set of reusable Angular components (factory workers) to help display error messages.

### Usage (code example)

```
  constructor(private errorBoxWorker: ErrorBoxWorker) {
  }

  render(): void {
    this.errorBoxWorker.render(error: ErrorBoxInterface, options: DisplayOptionsInterface = {}): ComponentRef<ErrorBoxComponent>
  }
```

### CSS styles
```
  /* You can add global styles to this file, and also import other style files */
  @import "../../ngx-error-box/src/assets/css/ngx-error-box.css";
```

For more details read [here](https://github.com/vlah-io/ngx-error-box/blob/master/INSTALLATION.md).
