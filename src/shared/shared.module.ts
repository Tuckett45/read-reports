import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "./services/user.service";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [ 
    ],
  })
  
  export class SharedModule {
    // Used to avoid creating separate instances of the same services in Eager and Lazy loaded components
    // https://angular-2-training-book.rangle.io/handout/modules/shared-di-tree.html
    static forRoot(): ModuleWithProviders<SharedModule> {
      return {
        ngModule: SharedModule,
        providers: [ UserService,
            { provide: APP_BASE_HREF, useValue: "/" }
        ],
      };
    }
  }
  