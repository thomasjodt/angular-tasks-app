import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core'
import { provideRouter, withHashLocation } from '@angular/router'

import { routes } from './app.routes'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { ROOT_REDUCERS } from './store'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideStore(ROOT_REDUCERS),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
}
