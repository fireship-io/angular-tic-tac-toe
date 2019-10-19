import {
  BUILT_IN_THEMES,
  DEFAULT_MEDIA_BREAKPOINTS,
  NB_BUILT_IN_JS_THEMES,
  NB_DOCUMENT,
  NB_JS_THEMES,
  NB_MEDIA_BREAKPOINTS,
  NB_THEME_OPTIONS,
  NB_WINDOW,
  NbJSThemesRegistry,
  NbLayoutDirectionService,
  NbLayoutRulerService,
  NbLayoutScrollService,
  NbMediaBreakpointsService,
  NbOverlayContainerAdapter,
  NbSpinnerService,
  NbThemeService
} from '@nebular/theme';

import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    NbThemeService,
    // Required by NbThemeService
    NbMediaBreakpointsService,
    { provide: NB_THEME_OPTIONS, useValue: { name: 'default' } },
    { provide: NB_MEDIA_BREAKPOINTS, useValue: DEFAULT_MEDIA_BREAKPOINTS },
    { provide: NB_JS_THEMES, useValue: [] },
    { provide: NB_BUILT_IN_JS_THEMES, useValue: BUILT_IN_THEMES },
    NbJSThemesRegistry,
    // NbSpinnerService
    NbSpinnerService,
    // Required by NbLayoutComponent
    { provide: NB_DOCUMENT, useValue: document },
    { provide: NB_WINDOW, useValue: window },
    NbLayoutDirectionService,
    NbLayoutScrollService,
    NbLayoutRulerService,
    NbOverlayContainerAdapter
  ]
})
export class NebularTestingModule {}
