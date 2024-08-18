import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { ROOT_REDUCERS } from './store/app.state'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(ROOT_REDUCERS),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
}
