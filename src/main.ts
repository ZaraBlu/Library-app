import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appRouting } from './app/app.routes';


bootstrapApplication(AppComponent,
  {
    providers: [
      provideHttpClient(),
      appRouting
    ]
  }
)
  .catch((err) => console.error(err));
