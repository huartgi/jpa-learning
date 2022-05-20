import {Injectable} from '@angular/core';
import {defer, NEVER} from 'rxjs';
import {finalize, share} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {

    showSpinner = false;

    constructor() {
    }

    public readonly spinner$ = defer(() => {
        this.show();
        return NEVER.pipe(
            finalize(() => {
                this.hide();
            })
        );
    }).pipe(share());

    private show(): void {
        // Hack avoiding `ExpressionChangedAfterItHasBeenCheckedError` error
        Promise.resolve(null).then(() => {
            this.showSpinner = true;
        });
    }

    private hide(): void {
        this.showSpinner = false;
    }
}
