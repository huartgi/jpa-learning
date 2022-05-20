/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia-library.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import {
    Component,
    Directive,
    EventEmitter,
    forwardRef,
    HostListener,
    Injectable,
    Input,
    NgModule,
    Output,
    Pipe,
    ɵɵdefineInjectable,
    ɵɵinject
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as ɵngcc4 from '@angular/forms';
import {FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import * as ɵngcc3 from '@ng-bootstrap/ng-bootstrap';
import {NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import * as ɵngcc2 from '@ngx-translate/core';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import * as ɵngcc1 from '@angular/common';

function BusinessRuleErrorComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 4);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const error_r1 = ctx.$implicit;
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(2, 1, error_r1), " ");
    }
}

function CenterModalComponent_div_8_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 9);
        ɵngcc0.ɵɵelementStart(1, "div", 10);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵpipe(3, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(3, 1, ctx_r0.informationMessage), " ");
    }
}

const _c0 = function (a0) {
    return {fieldName: a0};
};

function FieldErrorMessagesComponent_div_0_p_1_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵpipe(3, "translate");
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 1, "common.validation.required", ɵngcc0.ɵɵpureFunction1(6, _c0, ɵngcc0.ɵɵpipeBind1(3, 4, ctx_r1.fieldLabel))), " ");
    }
}

const _c1 = function (a0, a2) {
    return {fieldName: a0, min: "0", max: a2};
};

function FieldErrorMessagesComponent_div_0_p_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵpipe(3, "translate");
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 1, "common.validation.length", ɵngcc0.ɵɵpureFunction2(6, _c1, ɵngcc0.ɵɵpipeBind1(3, 4, ctx_r2.fieldLabel), ctx_r2.errors.maxlength.requiredLength)), " ");
    }
}

function FieldErrorMessagesComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 1);
        ɵngcc0.ɵɵtemplate(1, FieldErrorMessagesComponent_div_0_p_1_Template, 4, 8, "p", 2);
        ɵngcc0.ɵɵtemplate(2, FieldErrorMessagesComponent_div_0_p_2_Template, 4, 9, "p", 2);
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵpropertyInterpolate1("id", "", ctx_r0.fieldName, "-error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx_r0.errors.required);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx_r0.errors.maxlength);
    }
}

function SvgIconComponent__svg_svg_0_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 13);
        ɵngcc0.ɵɵelement(1, "path", 14);
        ɵngcc0.ɵɵelement(2, "path", 15);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_1_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 16);
        ɵngcc0.ɵɵelement(1, "path", 17);
        ɵngcc0.ɵɵelement(2, "path", 18);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 19);
        ɵngcc0.ɵɵelement(1, "path", 20);
        ɵngcc0.ɵɵelement(2, "path", 21);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_3_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 22);
        ɵngcc0.ɵɵelement(1, "path", 23);
        ɵngcc0.ɵɵelement(2, "path", 24);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_4_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 25);
        ɵngcc0.ɵɵelement(1, "path", 26);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_5_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 27);
        ɵngcc0.ɵɵelement(1, "path", 28);
        ɵngcc0.ɵɵelement(2, "path", 29);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_6_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 30);
        ɵngcc0.ɵɵelement(1, "path", 31);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_7_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 32);
        ɵngcc0.ɵɵelement(1, "path", 33);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_8_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 34);
        ɵngcc0.ɵɵelement(1, "path", 35);
        ɵngcc0.ɵɵelement(2, "path", 36);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_9_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 37);
        ɵngcc0.ɵɵelement(1, "path", 38);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_10_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 39);
        ɵngcc0.ɵɵelement(1, "path", 40);
        ɵngcc0.ɵɵelement(2, "path", 41);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_11_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 42);
        ɵngcc0.ɵɵelement(1, "path", 43);
        ɵngcc0.ɵɵelement(2, "path", 44);
        ɵngcc0.ɵɵelement(3, "path", 45);
        ɵngcc0.ɵɵelementEnd();
    }
}

function SvgIconComponent__svg_svg_12_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 46);
        ɵngcc0.ɵɵelement(1, "path", 47);
        ɵngcc0.ɵɵelementEnd();
    }
}

function TableFilterHeadersComponent_th_1_span_2_span_3_span_1_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "span");
    }
}

function TableFilterHeadersComponent_th_1_span_2_span_3_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span");
        ɵngcc0.ɵɵtemplate(1, TableFilterHeadersComponent_th_1_span_2_span_3_span_1_Template, 1, 0, "span", 18);
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const column_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
        const ctx_r11 = ɵngcc0.ɵɵnextContext();
        const _r3 = ɵngcc0.ɵɵreference(11);
        const _r1 = ɵngcc0.ɵɵreference(9);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", column_r5.direction === ctx_r11.ascSortDirection)("ngIfThen", _r3)("ngIfElse", _r1);
    }
}

function TableFilterHeadersComponent_th_1_span_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 16);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵtemplate(3, TableFilterHeadersComponent_th_1_span_2_span_3_Template, 2, 3, "span", 17);
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const column_r5 = ɵngcc0.ɵɵnextContext().$implicit;
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(2, 2, column_r5.title), " ");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", column_r5.direction != null);
    }
}

function TableFilterHeadersComponent_th_1_input_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "input", 19);
        ɵngcc0.ɵɵlistener("keyup.enter", function TableFilterHeadersComponent_th_1_input_3_Template_input_keyup_enter_0_listener() {
            ɵngcc0.ɵɵrestoreView(_r16);
            const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
            return ctx_r15.search();
        });
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const column_r5 = ɵngcc0.ɵɵnextContext().$implicit;
        ɵngcc0.ɵɵproperty("formControlName", column_r5.name)("id", column_r5.name);
    }
}

function TableFilterHeadersComponent_th_1_select_4_option_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "option", 22);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵpipe(2, "translate");
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r19 = ctx.$implicit;
        ɵngcc0.ɵɵproperty("value", elem_r19.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(2, 2, elem_r19.key));
    }
}

function TableFilterHeadersComponent_th_1_select_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "select", 20);
        ɵngcc0.ɵɵlistener("change", function TableFilterHeadersComponent_th_1_select_4_Template_select_change_0_listener() {
            ɵngcc0.ɵɵrestoreView(_r21);
            const ctx_r20 = ɵngcc0.ɵɵnextContext(2);
            return ctx_r20.search();
        });
        ɵngcc0.ɵɵelement(1, "option");
        ɵngcc0.ɵɵtemplate(2, TableFilterHeadersComponent_th_1_select_4_option_2_Template, 3, 4, "option", 21);
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const column_r5 = ɵngcc0.ɵɵnextContext().$implicit;
        ɵngcc0.ɵɵproperty("formControlName", column_r5.name)("id", column_r5.name);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", column_r5.values);
    }
}

function TableFilterHeadersComponent_th_1_div_5_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 23);
        ɵngcc0.ɵɵelement(1, "input", 24);
        ɵngcc0.ɵɵelementStart(2, "label", 25);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵpipe(4, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const column_r5 = ɵngcc0.ɵɵnextContext().$implicit;
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("formControlName", column_r5.name)("id", column_r5.name);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("htmlFor", column_r5.name);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(4, 4, column_r5.title));
    }
}

const _c2 = function (a0) {
    return {"active": a0};
};

function TableFilterHeadersComponent_th_1_div_6_label_1_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "label", 28);
        ɵngcc0.ɵɵelement(1, "input", 29);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r25 = ctx.$implicit;
        const column_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
        const ctx_r24 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵproperty("id", "elem-" + elem_r25.key)("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c2, ctx_r24.form.controls[column_r5.name].value === elem_r25.key));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("formControlName", column_r5.name)("value", elem_r25.key);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1("", elem_r25.value, " ");
    }
}

function TableFilterHeadersComponent_th_1_div_6_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 26);
        ɵngcc0.ɵɵtemplate(1, TableFilterHeadersComponent_th_1_div_6_label_1_Template, 3, 7, "label", 27);
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const column_r5 = ɵngcc0.ɵɵnextContext().$implicit;
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", column_r5.values);
    }
}

const _c3 = function (a0) {
    return {"clickable": a0};
};

function TableFilterHeadersComponent_th_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "th", 9);
        ɵngcc0.ɵɵelementStart(1, "div", 10);
        ɵngcc0.ɵɵlistener("click", function TableFilterHeadersComponent_th_1_Template_div_click_1_listener() {
            ɵngcc0.ɵɵrestoreView(_r29);
            const column_r5 = ctx.$implicit;
            const ctx_r28 = ɵngcc0.ɵɵnextContext();
            return ctx_r28.sort(column_r5);
        });
        ɵngcc0.ɵɵtemplate(2, TableFilterHeadersComponent_th_1_span_2_Template, 4, 4, "span", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, TableFilterHeadersComponent_th_1_input_3_Template, 1, 2, "input", 12);
        ɵngcc0.ɵɵtemplate(4, TableFilterHeadersComponent_th_1_select_4_Template, 3, 3, "select", 13);
        ɵngcc0.ɵɵtemplate(5, TableFilterHeadersComponent_th_1_div_5_Template, 5, 6, "div", 14);
        ɵngcc0.ɵɵtemplate(6, TableFilterHeadersComponent_th_1_div_6_Template, 2, 1, "div", 15);
        ɵngcc0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const column_r5 = ctx.$implicit;
        const ctx_r0 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵstyleProp("width", column_r5.width);
        ɵngcc0.ɵɵproperty("className", column_r5.bootstrapClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", "sortBY" + column_r5.name)("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c3, column_r5.sortable));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", column_r5.filterInputType != ctx_r0.checkbox);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", column_r5.filterInputType === ctx_r0.inputText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", column_r5.filterInputType === ctx_r0.dropdown);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", column_r5.filterInputType === ctx_r0.checkbox);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", column_r5.filterInputType === ctx_r0.radiobuttons);
    }
}

function TableFilterHeadersComponent_ng_template_8_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "sepia-svg-icon", 5);
    }
    if (rf & 2) {
        const ctx_r2 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵproperty("type", ctx_r2.SvgIcon.ARROW_DOWN);
    }
}

function TableFilterHeadersComponent_ng_template_10_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "sepia-svg-icon", 5);
    }
    if (rf & 2) {
        const ctx_r4 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵproperty("type", ctx_r4.SvgIcon.ARROW_UP);
    }
}

class SepiaLibraryService {
    constructor() {
    }
}

SepiaLibraryService.ɵfac = function SepiaLibraryService_Factory(t) {
    return new (t || SepiaLibraryService)();
};
SepiaLibraryService.ɵprov = ɵngcc0.ɵɵdefineInjectable({
    token: SepiaLibraryService,
    factory: SepiaLibraryService.ɵfac,
    providedIn: 'root'
});
/** @nocollapse */
SepiaLibraryService.ctorParameters = () => [];
/** @nocollapse */ SepiaLibraryService.ngInjectableDef = ɵɵdefineInjectable({
    factory: function SepiaLibraryService_Factory() {
        return new SepiaLibraryService();
    }, token: SepiaLibraryService, providedIn: "root"
});
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(SepiaLibraryService, [{
        type: Injectable,
        args: [{
            providedIn: 'root'
        }]
    }], function () {
        return [];
    }, null);
})();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia-library.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SepiaLibraryComponent {
    constructor() {
    }

    /**
     * @return {?}
     */
    ngOnInit() {
    }
}

SepiaLibraryComponent.ɵfac = function SepiaLibraryComponent_Factory(t) {
    return new (t || SepiaLibraryComponent)();
};
SepiaLibraryComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: SepiaLibraryComponent,
    selectors: [["lib-sepia-library"]],
    decls: 2,
    vars: 0,
    template: function SepiaLibraryComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵelementStart(0, "p");
            ɵngcc0.ɵɵtext(1, " sepia-library works! ");
            ɵngcc0.ɵɵelementEnd();
        }
    },
    encapsulation: 2
});
/** @nocollapse */
SepiaLibraryComponent.ctorParameters = () => [];
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(SepiaLibraryComponent, [{
        type: Component,
        args: [{
            selector: 'lib-sepia-library',
            template: `
    <p>
      sepia-library works!
    </p>
  `
        }]
    }], function () {
        return [];
    }, null);
})();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/business-rule/component/business-rule-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BusinessRuleComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.withErrors = false;
        this.init();
    }

    /**
     * @return {?}
     */
    init() {
        this.withErrors = false;
        this.errorKeys = [];
    }

    /**
     * @param {?} entity
     * @return {?}
     */
    create(entity) {
        this.init();
        return this.service.create(entity).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
            error => this.handleError(error.error))));
    }

    /**
     * @param {?} entity
     * @return {?}
     */
    update(entity) {
        this.init();
        return this.service.update(entity).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
            error => this.handleError(error.error))));
    }

    /**
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        this.init();
        return this.service.delete(id).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
            error => this.handleError(error.error))));
    }

    /**
     * @param {?} apiError
     * @return {?}
     */
    handleError(apiError) {
        this.withErrors = true;
        if (apiError && apiError.errorKeys) {
            apiError.errorKeys.forEach((/**
             * @param {?} error
             * @return {?}
             */
                error => this.errorKeys.push(error)));
        }
        return throwError(apiError);
    }
}

if (false) {
    /** @type {?} */
    BusinessRuleComponent.prototype.withErrors;
    /** @type {?} */
    BusinessRuleComponent.prototype.errorKeys;
    /**
     * @type {?}
     * @private
     */
    BusinessRuleComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/business-rule/component/business-rule-error/business-rule-error.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BusinessRuleErrorComponent {
    constructor() {
    }

    /**
     * @return {?}
     */
    ngOnInit() {
    }
}

BusinessRuleErrorComponent.ɵfac = function BusinessRuleErrorComponent_Factory(t) {
    return new (t || BusinessRuleErrorComponent)();
};
BusinessRuleErrorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: BusinessRuleErrorComponent,
    selectors: [["sepia-business-rule-error"]],
    inputs: {businessRuleComponent: "businessRuleComponent"},
    decls: 5,
    vars: 1,
    consts: [["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["class", "row-fluid business-rule-error", 4, "ngFor", "ngForOf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "row-fluid", "business-rule-error"]],
    template: function BusinessRuleErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵelementStart(0, "div", 0);
            ɵngcc0.ɵɵtemplate(1, BusinessRuleErrorComponent_div_1_Template, 3, 3, "div", 1);
            ɵngcc0.ɵɵelementStart(2, "button", 2);
            ɵngcc0.ɵɵlistener("click", function BusinessRuleErrorComponent_Template_button_click_2_listener() {
                return ctx.businessRuleComponent.init();
            });
            ɵngcc0.ɵɵelementStart(3, "span", 3);
            ɵngcc0.ɵɵtext(4, "\u00D7");
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
        }
        if (rf & 2) {
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngForOf", ctx.businessRuleComponent.errorKeys);
        }
    },
    directives: [ɵngcc1.NgForOf],
    pipes: [ɵngcc2.TranslatePipe],
    styles: [""]
});
/** @nocollapse */
BusinessRuleErrorComponent.ctorParameters = () => [];
BusinessRuleErrorComponent.propDecorators = {
    businessRuleComponent: [{type: Input}]
};
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(BusinessRuleErrorComponent, [{
        type: Component,
        args: [{
            selector: 'sepia-business-rule-error',
            template: "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n  <div class=\"row-fluid business-rule-error\" *ngFor=\"let error of businessRuleComponent.errorKeys\"> {{error | translate}} </div>\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"businessRuleComponent.init()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n",
            styles: [""]
        }]
    }], function () {
        return [];
    }, {
        businessRuleComponent: [{
            type: Input
        }]
    });
})();
if (false) {
    /** @type {?} */
    BusinessRuleErrorComponent.prototype.businessRuleComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/modal-exit.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ModalExitEnum = {
    OK: "OK",
    CANCEL: "CANCEL",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/center-modal/center-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CenterModalComponent {
    /**
     * @param {?} modal
     */
    constructor(modal) {
        this.modal = modal;
        this.okClickEvent = new EventEmitter();
        this.resultOk = ModalExitEnum.OK;
        this.resultCancel = ModalExitEnum.CANCEL;
    }

    /**
     * @return {?}
     */
    okWasClicked() {
        this.modal.close('Ok click');
        this.okClickEvent.emit();
    }
}

CenterModalComponent.ɵfac = function CenterModalComponent_Factory(t) {
    return new (t || CenterModalComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NgbActiveModal));
};
CenterModalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: CenterModalComponent,
    selectors: [["sepia-center-modal"]],
    inputs: {
        id: "id",
        title: "title",
        message: "message",
        okButton: "okButton",
        cancelButton: "cancelButton",
        informationMessage: "informationMessage"
    },
    outputs: {okClickEvent: "okClickEvent"},
    decls: 18,
    vars: 13,
    consts: [[1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["aria-describedby", "modal-title", "aria-label", "Close button", "type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row-fluid alert alert-warning", "role", "alert", 4, "ngIf"], [1, "modal-footer"], ["id", "center-modal-cancel-button", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "center-modal-ok-button", "ngbAutofocus", "", "type", "button", 1, "btn", "btn-danger", 3, "click"], ["role", "alert", 1, "row-fluid", "alert", "alert-warning"], [1, "row", "justify-content-center"]],
    template: function CenterModalComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵelementStart(0, "div", 0);
            ɵngcc0.ɵɵelementStart(1, "h4", 1);
            ɵngcc0.ɵɵtext(2);
            ɵngcc0.ɵɵpipe(3, "translate");
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementStart(4, "button", 2);
            ɵngcc0.ɵɵlistener("click", function CenterModalComponent_Template_button_click_4_listener() {
                return ctx.modal.dismiss(ctx.resultCancel);
            });
            ɵngcc0.ɵɵelementStart(5, "span", 3);
            ɵngcc0.ɵɵtext(6, "\u00D7");
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementStart(7, "div", 4);
            ɵngcc0.ɵɵtemplate(8, CenterModalComponent_div_8_Template, 4, 3, "div", 5);
            ɵngcc0.ɵɵtext(9);
            ɵngcc0.ɵɵpipe(10, "translate");
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementStart(11, "div", 6);
            ɵngcc0.ɵɵelementStart(12, "button", 7);
            ɵngcc0.ɵɵlistener("click", function CenterModalComponent_Template_button_click_12_listener() {
                return ctx.modal.dismiss(ctx.resultCancel);
            });
            ɵngcc0.ɵɵtext(13);
            ɵngcc0.ɵɵpipe(14, "translate");
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementStart(15, "button", 8);
            ɵngcc0.ɵɵlistener("click", function CenterModalComponent_Template_button_click_15_listener() {
                return ctx.modal.dismiss(ctx.resultOk);
            });
            ɵngcc0.ɵɵtext(16);
            ɵngcc0.ɵɵpipe(17, "translate");
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
        }
        if (rf & 2) {
            ɵngcc0.ɵɵadvance(2);
            ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(3, 5, ctx.title));
            ɵngcc0.ɵɵadvance(6);
            ɵngcc0.ɵɵproperty("ngIf", ctx.informationMessage);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(10, 7, ctx.message), "\n");
            ɵngcc0.ɵɵadvance(4);
            ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(14, 9, ctx.cancelButton));
            ɵngcc0.ɵɵadvance(3);
            ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(17, 11, ctx.okButton));
        }
    },
    directives: [ɵngcc1.NgIf],
    pipes: [ɵngcc2.TranslatePipe],
    styles: [""]
});
/** @nocollapse */
CenterModalComponent.ctorParameters = () => [
    {type: NgbActiveModal}
];
CenterModalComponent.propDecorators = {
    id: [{type: Input}],
    title: [{type: Input}],
    message: [{type: Input}],
    okButton: [{type: Input}],
    cancelButton: [{type: Input}],
    informationMessage: [{type: Input}],
    okClickEvent: [{type: Output}]
};
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(CenterModalComponent, [{
        type: Component,
        args: [{
            selector: 'sepia-center-modal',
            template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-title\">{{ title | translate}}</h4>\n  <button (click)=\"modal.dismiss(resultCancel)\" aria-describedby=\"modal-title\" aria-label=\"Close button\" class=\"close\"\n          type=\"button\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div *ngIf=\"informationMessage\" class=\"row-fluid alert alert-warning\" role=\"alert\">\n    <div class=\"row justify-content-center\">\n      {{ informationMessage | translate }}\n    </div>\n  </div>\n  {{ message | translate }}\n</div>\n<div class=\"modal-footer\">\n  <button (click)=\"modal.dismiss(resultCancel)\" class=\"btn btn-outline-secondary\" id=\"center-modal-cancel-button\"\n          type=\"button\">{{ cancelButton | translate }}</button>\n  <button (click)=\"modal.dismiss(resultOk)\" class=\"btn btn-danger\" id=\"center-modal-ok-button\" ngbAutofocus\n          type=\"button\">{{okButton | translate }}</button>\n</div>\n",
            styles: [""]
        }]
    }], function () {
        return [{type: ɵngcc3.NgbActiveModal}];
    }, {
        okClickEvent: [{
            type: Output
        }], id: [{
            type: Input
        }], title: [{
            type: Input
        }], message: [{
            type: Input
        }], okButton: [{
            type: Input
        }], cancelButton: [{
            type: Input
        }], informationMessage: [{
            type: Input
        }]
    });
})();
if (false) {
    /** @type {?} */
    CenterModalComponent.prototype.id;
    /** @type {?} */
    CenterModalComponent.prototype.title;
    /** @type {?} */
    CenterModalComponent.prototype.message;
    /** @type {?} */
    CenterModalComponent.prototype.okButton;
    /** @type {?} */
    CenterModalComponent.prototype.cancelButton;
    /** @type {?} */
    CenterModalComponent.prototype.informationMessage;
    /** @type {?} */
    CenterModalComponent.prototype.okClickEvent;
    /** @type {?} */
    CenterModalComponent.prototype.resultOk;
    /** @type {?} */
    CenterModalComponent.prototype.resultCancel;
    /** @type {?} */
    CenterModalComponent.prototype.modal;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/field-error-messages/field-error-messages.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldErrorMessagesComponent {
    constructor() {
    }

    /**
     * @return {?}
     */
    ngOnInit() {
    }
}

FieldErrorMessagesComponent.ɵfac = function FieldErrorMessagesComponent_Factory(t) {
    return new (t || FieldErrorMessagesComponent)();
};
FieldErrorMessagesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: FieldErrorMessagesComponent,
    selectors: [["sepia-field-error-messages"]],
    inputs: {fieldName: "fieldName", fieldLabel: "fieldLabel", errors: "errors"},
    decls: 1,
    vars: 1,
    consts: [["class", "invalid-feedback-rci", 3, "id", 4, "ngIf"], [1, "invalid-feedback-rci", 3, "id"], [4, "ngIf"]],
    template: function FieldErrorMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵtemplate(0, FieldErrorMessagesComponent_div_0_Template, 3, 3, "div", 0);
        }
        if (rf & 2) {
            ɵngcc0.ɵɵproperty("ngIf", ctx.errors);
        }
    },
    directives: [ɵngcc1.NgIf],
    pipes: [ɵngcc2.TranslatePipe],
    styles: [".invalid-feedback-rci[_ngcontent-%COMP%]{width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}"]
});
/** @nocollapse */
FieldErrorMessagesComponent.ctorParameters = () => [];
FieldErrorMessagesComponent.propDecorators = {
    fieldName: [{type: Input}],
    fieldLabel: [{type: Input}],
    errors: [{type: Input}]
};
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(FieldErrorMessagesComponent, [{
        type: Component,
        args: [{
            selector: 'sepia-field-error-messages',
            template: "<div id=\"{{fieldName}}-error\" class=\"invalid-feedback-rci\" *ngIf=\"errors\">\n  <p *ngIf=\"errors.required\">\n    {{ 'common.validation.required' | translate:{fieldName: fieldLabel | translate } }}\n  </p>\n  <p *ngIf=\"errors.maxlength\">\n    {{ 'common.validation.length' | translate:{fieldName: fieldLabel | translate , min: '0', max: errors.maxlength.requiredLength } }}\n  </p>\n</div>\n",
            styles: [".invalid-feedback-rci{width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}"]
        }]
    }], function () {
        return [];
    }, {
        fieldName: [{
            type: Input
        }], fieldLabel: [{
            type: Input
        }], errors: [{
            type: Input
        }]
    });
})();
if (false) {
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.fieldName;
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.fieldLabel;
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.errors;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/long-text-tooltip/long-text-tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LongTextTooltipComponent {
    constructor() {
    }

    /**
     * @return {?}
     */
    ngOnInit() {
    }

    /**
     * @param {?} divElement
     * @param {?} t
     * @return {?}
     */
    openTooltip(divElement, t) {
        if (divElement.offsetWidth < divElement.scrollWidth) {
            t.open();
        }
    }
}

LongTextTooltipComponent.ɵfac = function LongTextTooltipComponent_Factory(t) {
    return new (t || LongTextTooltipComponent)();
};
LongTextTooltipComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: LongTextTooltipComponent,
    selectors: [["sepia-long-text-tooltip"]],
    inputs: {longText: "longText"},
    decls: 4,
    vars: 3,
    consts: [["placement", "top", "triggers", "manual", "container", "body", 1, "largeTextEllipsis", 3, "ngbTooltip", "autoClose", "mouseover", "mouseleave"], ["divElement", "", "t", "ngbTooltip"]],
    template: function LongTextTooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
            const _r2 = ɵngcc0.ɵɵgetCurrentView();
            ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
            ɵngcc0.ɵɵlistener("mouseover", function LongTextTooltipComponent_Template_div_mouseover_0_listener() {
                ɵngcc0.ɵɵrestoreView(_r2);
                const _r0 = ɵngcc0.ɵɵreference(1);
                const _r1 = ɵngcc0.ɵɵreference(2);
                return ctx.openTooltip(_r0, _r1);
            })("mouseleave", function LongTextTooltipComponent_Template_div_mouseleave_0_listener() {
                ɵngcc0.ɵɵrestoreView(_r2);
                const _r1 = ɵngcc0.ɵɵreference(2);
                return _r1.close();
            });
            ɵngcc0.ɵɵtext(3);
            ɵngcc0.ɵɵelementEnd();
        }
        if (rf & 2) {
            ɵngcc0.ɵɵpropertyInterpolate("ngbTooltip", ctx.longText);
            ɵngcc0.ɵɵproperty("autoClose", true);
            ɵngcc0.ɵɵadvance(3);
            ɵngcc0.ɵɵtextInterpolate1(" ", ctx.longText, " ");
        }
    },
    directives: [ɵngcc3.NgbTooltip],
    styles: [""]
});
/** @nocollapse */
LongTextTooltipComponent.ctorParameters = () => [];
LongTextTooltipComponent.propDecorators = {
    longText: [{type: Input}]
};
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(LongTextTooltipComponent, [{
        type: Component,
        args: [{
            selector: 'sepia-long-text-tooltip',
            template: "<div #divElement\n     class=\"largeTextEllipsis\"\n    ngbTooltip=\"{{longText}}\"\n    [autoClose]=\"true\"\n    placement=\"top\"\n    triggers=\"manual\"\n    #t=\"ngbTooltip\"\n     container=\"body\"\n    (mouseover)=\"openTooltip(divElement, t)\" (mouseleave)=\"t.close()\">\n\n  {{ longText }}\n\n</div>\n",
            styles: [""]
        }]
    }], function () {
        return [];
    }, {
        longText: [{
            type: Input
        }]
    });
})();
if (false) {
    /** @type {?} */
    LongTextTooltipComponent.prototype.longText;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/svg/svg-icon.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SvgIcon = {
    ARROW_DOWN: 0,
    ARROW_REPEAT: 1,
    ARROW_UP: 2,
    CALENDAR: 3,
    CHECK_CIRCLE_FILL: 4,
    EYE: 5,
    GRID: 6,
    LIST: 7,
    PENCIL_SQUARE: 8,
    PERSON: 9,
    SEARCH: 10,
    X_CIRCLE: 11,
    X_CIRCLE_FILL: 12,
};
SvgIcon[SvgIcon.ARROW_DOWN] = 'ARROW_DOWN';
SvgIcon[SvgIcon.ARROW_REPEAT] = 'ARROW_REPEAT';
SvgIcon[SvgIcon.ARROW_UP] = 'ARROW_UP';
SvgIcon[SvgIcon.CALENDAR] = 'CALENDAR';
SvgIcon[SvgIcon.CHECK_CIRCLE_FILL] = 'CHECK_CIRCLE_FILL';
SvgIcon[SvgIcon.EYE] = 'EYE';
SvgIcon[SvgIcon.GRID] = 'GRID';
SvgIcon[SvgIcon.LIST] = 'LIST';
SvgIcon[SvgIcon.PENCIL_SQUARE] = 'PENCIL_SQUARE';
SvgIcon[SvgIcon.PERSON] = 'PERSON';
SvgIcon[SvgIcon.SEARCH] = 'SEARCH';
SvgIcon[SvgIcon.X_CIRCLE] = 'X_CIRCLE';
SvgIcon[SvgIcon.X_CIRCLE_FILL] = 'X_CIRCLE_FILL';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/svg/svg-icon/svg-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgIconComponent {
    constructor() {
    }

    /**
     * @return {?}
     */
    ngOnInit() {
    }

    /**
     * @return {?}
     */
    get SvgIcon() {
        return SvgIcon;
    }
}

SvgIconComponent.ɵfac = function SvgIconComponent_Factory(t) {
    return new (t || SvgIconComponent)();
};
SvgIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: SvgIconComponent,
    selectors: [["sepia-svg-icon"]],
    inputs: {type: "type"},
    decls: 13,
    vars: 13,
    consts: [["class", "bi bi-arrow-down", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-arrow-up", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-arrow-repeat", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-calendar", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-check-circle-fill", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-eye", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-grid-3x3-gap-fill", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-justify", "fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-pencil-square", "fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-person", "fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-search", "fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-x-circle", "fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "bi bi-x-circle-fill", "width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrow-down"], ["fill-rule", "evenodd", "d", "M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z", "clip-rule", "evenodd"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrow-up"], ["fill-rule", "evenodd", "d", "M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z", "clip-rule", "evenodd"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrow-repeat"], ["fill-rule", "evenodd", "d", "M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"], ["fill-rule", "evenodd", "d", "M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-calendar"], ["fill-rule", "evenodd", "d", "M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z", "clip-rule", "evenodd"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-check-circle-fill"], ["fill-rule", "evenodd", "d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-eye"], ["fill-rule", "evenodd", "d", "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z", "clip-rule", "evenodd"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-grid-3x3-gap-fill"], ["d", "M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-justify"], ["d", "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-pencil-square"], ["d", "M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"], ["clip-rule", "evenodd", "d", "M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-person"], ["d", "M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-search"], ["clip-rule", "evenodd", "d", "M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z", "fill-rule", "evenodd"], ["clip-rule", "evenodd", "d", "M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z", "fill-rule", "evenodd"], ["fill", "currentColor", "height", "1em", "viewBox", "0 0 16 16", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-x-circle"], ["fill-rule", "evenodd", "d", "M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z", "clip-rule", "evenodd"], ["clip-rule", "evenodd", "d", "M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z", "fill-rule", "evenodd"], ["clip-rule", "evenodd", "d", "M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z", "fill-rule", "evenodd"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-x-circle-fill"], ["fill-rule", "evenodd", "d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"]],
    template: function SvgIconComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵtemplate(0, SvgIconComponent__svg_svg_0_Template, 3, 0, "svg", 0);
            ɵngcc0.ɵɵtemplate(1, SvgIconComponent__svg_svg_1_Template, 3, 0, "svg", 1);
            ɵngcc0.ɵɵtemplate(2, SvgIconComponent__svg_svg_2_Template, 3, 0, "svg", 2);
            ɵngcc0.ɵɵtemplate(3, SvgIconComponent__svg_svg_3_Template, 3, 0, "svg", 3);
            ɵngcc0.ɵɵtemplate(4, SvgIconComponent__svg_svg_4_Template, 2, 0, "svg", 4);
            ɵngcc0.ɵɵtemplate(5, SvgIconComponent__svg_svg_5_Template, 3, 0, "svg", 5);
            ɵngcc0.ɵɵtemplate(6, SvgIconComponent__svg_svg_6_Template, 2, 0, "svg", 6);
            ɵngcc0.ɵɵtemplate(7, SvgIconComponent__svg_svg_7_Template, 2, 0, "svg", 7);
            ɵngcc0.ɵɵtemplate(8, SvgIconComponent__svg_svg_8_Template, 3, 0, "svg", 8);
            ɵngcc0.ɵɵtemplate(9, SvgIconComponent__svg_svg_9_Template, 2, 0, "svg", 9);
            ɵngcc0.ɵɵtemplate(10, SvgIconComponent__svg_svg_10_Template, 3, 0, "svg", 10);
            ɵngcc0.ɵɵtemplate(11, SvgIconComponent__svg_svg_11_Template, 4, 0, "svg", 11);
            ɵngcc0.ɵɵtemplate(12, SvgIconComponent__svg_svg_12_Template, 2, 0, "svg", 12);
        }
        if (rf & 2) {
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.ARROW_DOWN);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.ARROW_UP);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.ARROW_REPEAT);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.CALENDAR);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.CHECK_CIRCLE_FILL);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.EYE);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.GRID);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.LIST);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.PENCIL_SQUARE);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.PERSON);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.SEARCH);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.X_CIRCLE);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.SvgIcon.X_CIRCLE_FILL);
        }
    },
    directives: [ɵngcc1.NgIf],
    styles: [""]
});
/** @nocollapse */
SvgIconComponent.ctorParameters = () => [];
SvgIconComponent.propDecorators = {
    type: [{type: Input}]
};
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(SvgIconComponent, [{
        type: Component,
        args: [{
            selector: 'sepia-svg-icon',
            template: "<svg *ngIf=\"type === SvgIcon.ARROW_DOWN\" class=\"bi bi-arrow-down\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.ARROW_UP\" class=\"bi bi-arrow-up\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.ARROW_REPEAT\" class=\"bi bi-arrow-repeat\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.CALENDAR\" class=\"bi bi-calendar\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.CHECK_CIRCLE_FILL\" class=\"bi bi-check-circle-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.EYE\" class=\"bi bi-eye\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.GRID\" class=\"bi bi-grid-3x3-gap-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.LIST\" class=\"bi bi-justify\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z\"\n    fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.PENCIL_SQUARE\" class=\"bi bi-pencil-square\" fill=\"currentColor\" height=\"1em\"\n     viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z\"/>\n  <path clip-rule=\"evenodd\"\n        d=\"M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.PERSON\" class=\"bi bi-person\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z\"\n    fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.SEARCH\" class=\"bi bi-search\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path clip-rule=\"evenodd\"\n        d=\"M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z\"\n        fill-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.X_CIRCLE\" class=\"bi bi-x-circle\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z\" clip-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z\"\n        fill-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.X_CIRCLE_FILL\" class=\"bi bi-x-circle-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z\"/>\n</svg>\n",
            styles: [""]
        }]
    }], function () {
        return [];
    }, {
        type: [{
            type: Input
        }]
    });
})();
if (false) {
    /** @type {?} */
    SvgIconComponent.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/filtering/filter-input-type.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const FilterInputTypeEnum = {
    INPUT_TEXT: 0,
    DROPDOWN: 1,
    CHECKBOX: 2,
    RADIO_BUTTONS: 3,
};
FilterInputTypeEnum[FilterInputTypeEnum.INPUT_TEXT] = 'INPUT_TEXT';
FilterInputTypeEnum[FilterInputTypeEnum.DROPDOWN] = 'DROPDOWN';
FilterInputTypeEnum[FilterInputTypeEnum.CHECKBOX] = 'CHECKBOX';
FilterInputTypeEnum[FilterInputTypeEnum.RADIO_BUTTONS] = 'RADIO_BUTTONS';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/sorting/sorting-direction.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SortingDirectionEnum = {
    ASC: "ASC",
    DESC: "DESC",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/table-filter-headers/table-filter-headers.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableFilterHeadersComponent {
    constructor() {
        this.actionsWidth = '10%';
        this.sortEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.clearEvent = new EventEmitter();
        this.inputText = FilterInputTypeEnum.INPUT_TEXT;
        this.dropdown = FilterInputTypeEnum.DROPDOWN;
        this.checkbox = FilterInputTypeEnum.CHECKBOX;
        this.radiobuttons = FilterInputTypeEnum.RADIO_BUTTONS;
        this.ascSortDirection = SortingDirectionEnum.ASC;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
            (_) => {
        });
        this.onTouched = (/**
         * @return {?}
         */
            () => {
        });
    }

    /**
     * @return {?}
     */
    get value() {
        return this.form.value;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.form.setValue(value);
        try {
            this.onChange(value);
        } catch (e) {
            /** Do nothing with the error */
        }
    }

    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const formControls = {};
        this.sortableColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
            column => {
            formControls[column.name] = new FormControl('');
        }));
        this.form = new FormGroup(formControls);
        this.form.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
            value => {
            try {
                this.onChange(value);
            } catch (e) {
                /** Do nothing with the error */
            }
        }));
    }

    /**
     * @param {?} column
     * @return {?}
     */
    sort(column) {
        if (column.sortable) {
            column.toggleDirection();
            this.sortEvent.emit(column);
        }
    }

    /**
     * @return {?}
     */
    clear() {
        this.form.reset();
        this.clearEvent.emit();
        this.searchEvent.emit();
    }

    /**
     * @return {?}
     */
    search() {
        this.searchEvent.emit();
    }

    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
    }

    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.value = value;
        }
        if (value === null) {
            this.form.reset();
        }
    }

    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }

    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    /**
     * @param {?} _
     * @return {?}
     */
    validate(_) {
        return this.form.valid ? null : {filters: {valid: false}};
    }

    /**
     * @return {?}
     */
    get SvgIcon() {
        return SvgIcon;
    }
}

TableFilterHeadersComponent.ɵfac = function TableFilterHeadersComponent_Factory(t) {
    return new (t || TableFilterHeadersComponent)();
};
TableFilterHeadersComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: TableFilterHeadersComponent,
    selectors: [["sepia-table-filter-headers"]],
    inputs: {actionsWidth: "actionsWidth", sortableColumns: "sortableColumns"},
    outputs: {sortEvent: "sortEvent", searchEvent: "searchEvent", clearEvent: "clearEvent"},
    features: [ɵngcc0.ɵɵProvidersFeature([
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((/**
             * @return {?}
             */() => TableFilterHeadersComponent)),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef((/**
             * @return {?}
             */() => TableFilterHeadersComponent)),
            multi: true
        }
    ])],
    decls: 12,
    vars: 6,
    consts: [[1, "", 3, "formGroup"], ["scope", "col", 3, "className", "width", 4, "ngFor", "ngForOf"], ["scope", "col"], [1, "float-right", "row", "d-inline-block"], ["id", "headerSearchButton", "type", "button", 1, "btn", "btn-outline-primary", 2, "margin-top", "24px", "max-width", "40px!important", 3, "click"], [3, "type"], ["id", "headerClearButton", "type", "button", 1, "btn", "btn-outline-primary", 2, "margin-left", "10px", "margin-top", "24px", "max-width", "40px!important", 3, "click"], ["sortDescending", ""], ["sortAscending", ""], ["scope", "col", 3, "className"], [1, "row", 3, "id", "ngClass", "click"], ["class", "col-md-12", 4, "ngIf"], ["type", "text", "class", "form-control", 3, "formControlName", "id", "keyup.enter", 4, "ngIf"], ["class", "form-control", 3, "formControlName", "id", "change", 4, "ngIf"], ["class", "custom-control custom-switch", 4, "ngIf"], ["class", "btn-group btn-group-toggle btn-group-sm criteria-value", 4, "ngIf"], [1, "col-md-12"], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["type", "text", 1, "form-control", 3, "formControlName", "id", "keyup.enter"], [1, "form-control", 3, "formControlName", "id", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "custom-control", "custom-switch"], ["type", "checkbox", 1, "custom-control-input", 3, "formControlName", "id"], [1, "custom-control-label", 3, "htmlFor"], [1, "btn-group", "btn-group-toggle", "btn-group-sm", "criteria-value"], ["class", "btn btn-secondary", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "btn", "btn-secondary", 3, "id", "ngClass"], ["type", "radio", 3, "formControlName", "value"]],
    template: function TableFilterHeadersComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵelementStart(0, "tr", 0);
            ɵngcc0.ɵɵtemplate(1, TableFilterHeadersComponent_th_1_Template, 7, 12, "th", 1);
            ɵngcc0.ɵɵelementStart(2, "th", 2);
            ɵngcc0.ɵɵelementStart(3, "div", 3);
            ɵngcc0.ɵɵelementStart(4, "button", 4);
            ɵngcc0.ɵɵlistener("click", function TableFilterHeadersComponent_Template_button_click_4_listener() {
                return ctx.search();
            });
            ɵngcc0.ɵɵelement(5, "sepia-svg-icon", 5);
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementStart(6, "button", 6);
            ɵngcc0.ɵɵlistener("click", function TableFilterHeadersComponent_Template_button_click_6_listener() {
                return ctx.clear();
            });
            ɵngcc0.ɵɵelement(7, "sepia-svg-icon", 5);
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵtemplate(8, TableFilterHeadersComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
            ɵngcc0.ɵɵtemplate(10, TableFilterHeadersComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            ɵngcc0.ɵɵproperty("formGroup", ctx.form);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngForOf", ctx.sortableColumns);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵstyleProp("width", ctx.actionsWidth);
            ɵngcc0.ɵɵadvance(3);
            ɵngcc0.ɵɵproperty("type", ctx.SvgIcon.SEARCH);
            ɵngcc0.ɵɵadvance(2);
            ɵngcc0.ɵɵproperty("type", ctx.SvgIcon.X_CIRCLE);
        }
    },
    directives: [ɵngcc4.NgControlStatusGroup, ɵngcc4.FormGroupDirective, ɵngcc1.NgForOf, SvgIconComponent, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc4.DefaultValueAccessor, ɵngcc4.NgControlStatus, ɵngcc4.FormControlName, ɵngcc4.SelectControlValueAccessor, ɵngcc4.NgSelectOption, ɵngcc4.ɵangular_packages_forms_forms_x, ɵngcc4.CheckboxControlValueAccessor, ɵngcc4.RadioControlValueAccessor],
    pipes: [ɵngcc2.TranslatePipe],
    styles: [".custom-switch[_ngcontent-%COMP%]{padding-top:2em}"]
});
/** @nocollapse */
TableFilterHeadersComponent.ctorParameters = () => [];
TableFilterHeadersComponent.propDecorators = {
    sortableColumns: [{type: Input}],
    actionsWidth: [{type: Input}],
    sortEvent: [{type: Output}],
    searchEvent: [{type: Output}],
    clearEvent: [{type: Output}]
};
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(TableFilterHeadersComponent, [{
        type: Component,
        args: [{
            selector: 'sepia-table-filter-headers',
            template: "  <tr class=\"\" [formGroup]=\"form\">\n    <th\n      scope=\"col\" *ngFor=\"let column of sortableColumns\"\n      [className]=\"column.bootstrapClass\"\n      [style.width]=\"column.width\"\n    >\n      <div [id]=\"'sortBY' + column.name\" class=\"row\" [ngClass]=\"{ 'clickable': column.sortable }\"\n           (click)=\"sort(column)\">\n        <span class=\"col-md-12\" *ngIf=\"column.filterInputType != checkbox\">\n        {{ (column.title | translate) }}\n          <span *ngIf=\"column.direction != null\">\n            <span *ngIf=\"column.direction === ascSortDirection; then sortAscending else sortDescending\"></span>\n          </span>\n        </span>\n      </div>\n      <input (keyup.enter)=\"search()\" [formControlName]=\"column.name\" *ngIf=\"column.filterInputType === inputText\" type=\"text\" class=\"form-control\" [id]=\"column.name\">\n      <select (change)=\"search()\" [formControlName]=\"column.name\" *ngIf=\"column.filterInputType === dropdown\" class=\"form-control\" [id]=\"column.name\">\n        <option></option>\n        <option *ngFor=\"let elem of column.values\" [value]=\"elem.value\">{{ (elem.key| translate) }}</option>\n      </select>\n      <div class=\"custom-control custom-switch\" *ngIf=\"column.filterInputType === checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [formControlName]=\"column.name\" [id]=\"column.name\">\n        <label class=\"custom-control-label\" [htmlFor]=\"column.name\">{{ (column.title | translate) }}</label>\n      </div>\n      <div class=\"btn-group btn-group-toggle btn-group-sm criteria-value\"\n           *ngIf=\"column.filterInputType === radiobuttons\">\n        <label *ngFor=\"let elem of column.values\" [id]=\"'elem-'+ elem.key\"\n               [ngClass]=\"{'active' : form.controls[column.name].value === elem.key }\" class=\"btn btn-secondary\">\n          <input [formControlName]=\"column.name\" type=\"radio\" [value]=\"elem.key\">{{ elem.value }}\n        </label>\n      </div>\n    </th>\n    <th scope=\"col\" [style.width]=\"actionsWidth\">\n      <div class=\"float-right row d-inline-block\">\n        <button id=\"headerSearchButton\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"search()\"\n                style=\"margin-top: 24px; max-width: 40px!important;\">\n          <sepia-svg-icon [type]=\"SvgIcon.SEARCH\"></sepia-svg-icon>\n        </button>\n        <button id=\"headerClearButton\" type=\"button\"\n                style=\"margin-left: 10px; margin-top: 24px; max-width: 40px!important;\"\n                class=\"btn btn-outline-primary\" (click)=\"clear()\">\n          <sepia-svg-icon [type]=\"SvgIcon.X_CIRCLE\"></sepia-svg-icon>\n        </button>\n      </div>\n    </th>\n  </tr>\n\n  <ng-template #sortDescending>\n    <sepia-svg-icon [type]=\"SvgIcon.ARROW_DOWN\"></sepia-svg-icon>\n  </ng-template>\n\n  <ng-template #sortAscending>\n    <sepia-svg-icon [type]=\"SvgIcon.ARROW_UP\"></sepia-svg-icon>\n  </ng-template>\n",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((/**
                     * @return {?}
                     */() => TableFilterHeadersComponent)),
                    multi: true
                },
                {
                    provide: NG_VALIDATORS,
                    useExisting: forwardRef((/**
                     * @return {?}
                     */() => TableFilterHeadersComponent)),
                    multi: true
                }
            ],
            styles: [".custom-switch{padding-top:2em}"]
        }]
    }], function () {
        return [];
    }, {
        actionsWidth: [{
            type: Input
        }], sortEvent: [{
            type: Output
        }], searchEvent: [{
            type: Output
        }], clearEvent: [{
            type: Output
        }], sortableColumns: [{
            type: Input
        }]
    });
})();
if (false) {
    /** @type {?} */
    TableFilterHeadersComponent.prototype.sortableColumns;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.actionsWidth;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.sortEvent;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.searchEvent;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.clearEvent;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.inputText;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.dropdown;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.checkbox;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.radiobuttons;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.ascSortDirection;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.form;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.onChange;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.onTouched;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/directive/caps-detector.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CapsDetectorDirective {
    constructor() {
        this.capsLock = new EventEmitter();
    }

    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLock.emit(capsOn);
    }

    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        /** @type {?} */
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLock.emit(capsOn);
    }
}

CapsDetectorDirective.ɵfac = function CapsDetectorDirective_Factory(t) {
    return new (t || CapsDetectorDirective)();
};
CapsDetectorDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({
    type: CapsDetectorDirective,
    selectors: [["", "appCapsLock", ""]],
    hostBindings: function CapsDetectorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵlistener("keydown", function CapsDetectorDirective_keydown_HostBindingHandler($event) {
                return ctx.onKeyDown($event);
            }, false, ɵngcc0.ɵɵresolveWindow)("keyup", function CapsDetectorDirective_keyup_HostBindingHandler($event) {
                return ctx.onKeyUp($event);
            }, false, ɵngcc0.ɵɵresolveWindow);
        }
    },
    outputs: {capsLock: "capsLock"}
});
/** @nocollapse */
CapsDetectorDirective.ctorParameters = () => [];
CapsDetectorDirective.propDecorators = {
    capsLock: [{type: Output}],
    onKeyDown: [{type: HostListener, args: ['window:keydown', ['$event'],]}],
    onKeyUp: [{type: HostListener, args: ['window:keyup', ['$event'],]}]
};
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(CapsDetectorDirective, [{
        type: Directive,
        args: [{
            selector: '[appCapsLock]'
        }]
    }], function () {
        return [];
    }, {
        capsLock: [{
            type: Output
        }],
        /**
         * @param {?} event
         * @return {?}
         */
        onKeyDown: [{
            type: HostListener,
            args: ['window:keydown', ['$event']]
        }],
        /**
         * @param {?} event
         * @return {?}
         */
        onKeyUp: [{
            type: HostListener,
            args: ['window:keyup', ['$event']]
        }]
    });
})();
if (false) {
    /** @type {?} */
    CapsDetectorDirective.prototype.capsLock;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/directive/disable-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DisableControlDirective {
    /**
     * @param {?} ngControl
     */
    constructor(ngControl) {
        this.ngControl = ngControl;
    }

    /**
     * @param {?} condition
     * @return {?}
     */
    set disableControl(condition) {
        /** @type {?} */
        const action = condition ? 'disable' : 'enable';
        this.ngControl.control[action]();
    }
}

DisableControlDirective.ɵfac = function DisableControlDirective_Factory(t) {
    return new (t || DisableControlDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NgControl));
};
DisableControlDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({
    type: DisableControlDirective,
    selectors: [["", "disableControl", ""]],
    inputs: {disableControl: "disableControl"}
});
/** @nocollapse */
DisableControlDirective.ctorParameters = () => [
    {type: NgControl}
];
DisableControlDirective.propDecorators = {
    disableControl: [{type: Input}]
};
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(DisableControlDirective, [{
        type: Directive,
        args: [{
            selector: '[disableControl]'
        }]
    }], function () {
        return [{type: ɵngcc4.NgControl}];
    }, {
        disableControl: [{
            type: Input
        }]
    });
})();
if (false) {
    /**
     * @type {?}
     * @private
     */
    DisableControlDirective.prototype.ngControl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/pipe/boolean.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanPipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value === undefined || value === null) {
            return '';
        } else {
            if (value === true) {
                return this.translate.get('common.values.yes');
            } else {
                return this.translate.get('common.values.no');
            }
        }
    }
}

BooleanPipe.ɵfac = function BooleanPipe_Factory(t) {
    return new (t || BooleanPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService));
};
BooleanPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({name: "boolean", type: BooleanPipe, pure: true});
/** @nocollapse */
BooleanPipe.ctorParameters = () => [
    {type: TranslateService}
];
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(BooleanPipe, [{
        type: Pipe,
        args: [{
            name: 'boolean'
        }]
    }], function () {
        return [{type: ɵngcc2.TranslateService}];
    }, null);
})();
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanPipe.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/pipe/enum-to-array.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EnumToArrayPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object.keys(value).map((/**
         * @param {?} o
         * @return {?}
         */
            o => {
            return {index: +o, name: value[o]};
        }));
    }
}

EnumToArrayPipe.ɵfac = function EnumToArrayPipe_Factory(t) {
    return new (t || EnumToArrayPipe)();
};
EnumToArrayPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({name: "enumToArray", type: EnumToArrayPipe, pure: true});
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(EnumToArrayPipe, [{
        type: Pipe,
        args: [{name: 'enumToArray'}]
    }], null, null);
})();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/pipe/label.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LabelPipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }

    /**
     * @param {?} label
     * @return {?}
     */
    transform(label) {
        if (label) {
            if (this.translate.currentLang === 'fr') {
                return label.labelFr;
            } else {
                return label.labelEn;
            }
        }
    }
}

LabelPipe.ɵfac = function LabelPipe_Factory(t) {
    return new (t || LabelPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.TranslateService));
};
LabelPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({name: "label", type: LabelPipe, pure: true});
/** @nocollapse */
LabelPipe.ctorParameters = () => [
    {type: TranslateService}
];
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(LabelPipe, [{
        type: Pipe,
        args: [{
            name: 'label'
        }]
    }], function () {
        return [{type: ɵngcc2.TranslateService}];
    }, null);
})();
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SepiaLibraryModule {
}

SepiaLibraryModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({type: SepiaLibraryModule});
SepiaLibraryModule.ɵinj = ɵngcc0.ɵɵdefineInjector({
    factory: function SepiaLibraryModule_Factory(t) {
        return new (t || SepiaLibraryModule)();
    }, imports: [[
        BrowserModule,
        ReactiveFormsModule,
        NgbModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ]]
});
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SepiaLibraryModule, {
        declarations: function () {
            return [SepiaLibraryComponent, BusinessRuleErrorComponent, LabelPipe, BooleanPipe, EnumToArrayPipe, CenterModalComponent, TableFilterHeadersComponent, CapsDetectorDirective, DisableControlDirective, LongTextTooltipComponent, SvgIconComponent, FieldErrorMessagesComponent];
        }, imports: function () {
            return [BrowserModule,
                ReactiveFormsModule,
                NgbModule, ɵngcc2.TranslateModule];
        }, exports: function () {
            return [SepiaLibraryComponent, BusinessRuleErrorComponent, LabelPipe, BooleanPipe, EnumToArrayPipe, CenterModalComponent, TableFilterHeadersComponent, CapsDetectorDirective, DisableControlDirective, LongTextTooltipComponent, SvgIconComponent, FieldErrorMessagesComponent];
        }
    });
})();
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(SepiaLibraryModule, [{
        type: NgModule,
        args: [{
            declarations: [
                SepiaLibraryComponent,
                BusinessRuleErrorComponent,
                LabelPipe,
                BooleanPipe,
                EnumToArrayPipe,
                CenterModalComponent,
                TableFilterHeadersComponent,
                CapsDetectorDirective,
                DisableControlDirective,
                LongTextTooltipComponent,
                SvgIconComponent,
                FieldErrorMessagesComponent,
            ],
            imports: [
                BrowserModule,
                ReactiveFormsModule,
                NgbModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ],
            exports: [
                SepiaLibraryComponent,
                BusinessRuleErrorComponent,
                LabelPipe,
                BooleanPipe,
                EnumToArrayPipe,
                CenterModalComponent,
                TableFilterHeadersComponent,
                CapsDetectorDirective,
                DisableControlDirective,
                LongTextTooltipComponent,
                SvgIconComponent,
                FieldErrorMessagesComponent,
            ],
            entryComponents: [CenterModalComponent]
        }]
    }], null, null);
})();

// required for AOT compilation
/**
 * @param {?} http
 * @return {?}
 */
function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/business-rule/service/business-rule-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BusinessRuleService() {
}

if (false) {
    /**
     * @param {?} entity
     * @return {?}
     */
    BusinessRuleService.prototype.create = function (entity) {
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    BusinessRuleService.prototype.update = function (entity) {
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BusinessRuleService.prototype.delete = function (id) {
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/service/language.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LanguageService {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }

    /**
     * @return {?}
     */
    isEnglish() {
        return !this.translate.currentLang || this.translate.currentLang === 'en';
    }

    /**
     * @return {?}
     */
    isFrench() {
        return this.translate.currentLang === 'fr';
    }
}

LanguageService.ɵfac = function LanguageService_Factory(t) {
    return new (t || LanguageService)(ɵngcc0.ɵɵinject(ɵngcc2.TranslateService));
};
LanguageService.ɵprov = ɵngcc0.ɵɵdefineInjectable({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
});
/** @nocollapse */
LanguageService.ctorParameters = () => [
    {type: TranslateService}
];
/** @nocollapse */ LanguageService.ngInjectableDef = ɵɵdefineInjectable({
    factory: function LanguageService_Factory() {
        return new LanguageService(ɵɵinject(TranslateService));
    }, token: LanguageService, providedIn: "root"
});
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(LanguageService, [{
        type: Injectable,
        args: [{
            providedIn: 'root'
        }]
    }], function () {
        return [{type: ɵngcc2.TranslateService}];
    }, null);
})();
if (false) {
    /**
     * @type {?}
     * @private
     */
    LanguageService.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/edit-mode.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const EditModeEnum = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/modal-type.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ModalTypeEnum = {
    CANCEL_CREATION: "cancel_creation",
    CANCEL_MODIFICATION: "cancel_modification",
    DELETE: "delete",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/service/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalService {
    /**
     * @param {?} ngbModal
     */
    constructor(ngbModal) {
        this.ngbModal = ngbModal;
    }

    /**
     * @param {?} editMode
     * @return {?}
     */
    getCancel(editMode) {
        if (editMode === EditModeEnum.CREATE) {
            return this.getCancelCreation();
        } else if (editMode === EditModeEnum.UPDATE) {
            return this.getCancelModification();
        } else {
            return null;
        }
    }

    /**
     * @return {?}
     */
    getCancelCreation() {
        return this.getModal(ModalTypeEnum.CANCEL_CREATION);
    }

    /**
     * @return {?}
     */
    getCancelModification() {
        return this.getModal(ModalTypeEnum.CANCEL_MODIFICATION);
    }

    /**
     * @return {?}
     */
    getDelete() {
        return this.getModal(ModalTypeEnum.DELETE);
    }

    /**
     * @param {?} modalType
     * @param {?=} informationMessage
     * @return {?}
     */
    getModal(modalType, informationMessage) {
        /** @type {?} */
        const modal = this.ngbModal.open(CenterModalComponent);
        modal.componentInstance.id = 'confirmModal';
        modal.componentInstance.title = 'common.confirm.' + modalType + '.title';
        modal.componentInstance.message = 'common.confirm.' + modalType + '.message';
        modal.componentInstance.okButton = 'common.buttons.confirm';
        modal.componentInstance.cancelButton = 'common.buttons.cancel';
        modal.componentInstance.informationMessage = informationMessage;
        return modal;
    }
}

ModalService.ɵfac = function ModalService_Factory(t) {
    return new (t || ModalService)(ɵngcc0.ɵɵinject(ɵngcc3.NgbModal));
};
ModalService.ɵprov = ɵngcc0.ɵɵdefineInjectable({token: ModalService, factory: ModalService.ɵfac, providedIn: 'root'});
/** @nocollapse */
ModalService.ctorParameters = () => [
    {type: NgbModal}
];
/** @nocollapse */ ModalService.ngInjectableDef = ɵɵdefineInjectable({
    factory: function ModalService_Factory() {
        return new ModalService(ɵɵinject(NgbModal));
    }, token: ModalService, providedIn: "root"
});
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{
            providedIn: 'root'
        }]
    }], function () {
        return [{type: ɵngcc3.NgbModal}];
    }, null);
})();
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.ngbModal;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/sorting/sortable-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortableColumn {
    /**
     * @param {?} name
     * @param {?} title
     * @param {?} direction
     * @param {?} bootstrapClass
     * @param {?} filterInputType
     * @param {?=} values
     * @param {?=} sortable
     * @param {?=} width
     */
    constructor(name, title, direction, bootstrapClass, filterInputType, values, sortable, width) {
        this.name = name;
        this.title = title;
        this.direction = direction;
        this.bootstrapClass = bootstrapClass;
        this.filterInputType = filterInputType;
        this.values = values;
        if (sortable === false) {
            this.sortable = false;
        } else {
            this.sortable = true;
        }
        this.width = width;
    }

    /**
     * @return {?}
     */
    toggleDirection() {
        if (this.direction === SortingDirectionEnum.DESC) {
            this.direction = null;
        } else if (this.direction === SortingDirectionEnum.ASC) {
            this.direction = SortingDirectionEnum.DESC;
        } else {
            this.direction = SortingDirectionEnum.ASC;
        }
    }
}

if (false) {
    /** @type {?} */
    SortableColumn.prototype.name;
    /** @type {?} */
    SortableColumn.prototype.title;
    /** @type {?} */
    SortableColumn.prototype.direction;
    /** @type {?} */
    SortableColumn.prototype.bootstrapClass;
    /** @type {?} */
    SortableColumn.prototype.filterInputType;
    /** @type {?} */
    SortableColumn.prototype.values;
    /** @type {?} */
    SortableColumn.prototype.sortable;
    /** @type {?} */
    SortableColumn.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/service/sorting.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortingService {
    constructor() {
    }

    /**
     * @param {?} sortableColumns
     * @return {?}
     */
    getSortableColumn(sortableColumns) {
        if (sortableColumns) {
            return sortableColumns.find((/**
             * @param {?} column
             * @return {?}
             */
                column => column.direction != null));
        }
        return new SortableColumn('asd', 'asd', SortingDirectionEnum.ASC, '', null);
    }

    /**
     * @param {?} chosenColumn
     * @param {?} sortableColumns
     * @return {?}
     */
    clearPreviousSorting(chosenColumn, sortableColumns) {
        sortableColumns.filter((/**
         * @param {?} column
         * @return {?}
         */
            column => column !== chosenColumn)).forEach((/**
         * @param {?} column
         * @return {?}
         */
            column => column.direction = null));
    }
}

SortingService.ɵfac = function SortingService_Factory(t) {
    return new (t || SortingService)();
};
SortingService.ɵprov = ɵngcc0.ɵɵdefineInjectable({
    token: SortingService,
    factory: SortingService.ɵfac,
    providedIn: 'root'
});
/** @nocollapse */
SortingService.ctorParameters = () => [];
/** @nocollapse */ SortingService.ngInjectableDef = ɵɵdefineInjectable({
    factory: function SortingService_Factory() {
        return new SortingService();
    }, token: SortingService, providedIn: "root"
});
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(SortingService, [{
        type: Injectable,
        args: [{
            providedIn: 'root'
        }]
    }], function () {
        return [];
    }, null);
})();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/api-error.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiError {
}

if (false) {
    /** @type {?} */
    ApiError.prototype.timestamp;
    /** @type {?} */
    ApiError.prototype.errorKeys;
    /** @type {?} */
    ApiError.prototype.backendErrorType;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/backend-error-type.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const BackendErrorTypeEnum = {
    BAD_CREDENTIALS: "BAD_CREDENTIALS",
    SESSION_EXPIRED: "SESSION_EXPIRED",
    UNAUTHORIZED: "UNAUTHORIZED",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/key-value-pair.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KeyValuePair {
}

if (false) {
    /** @type {?} */
    KeyValuePair.prototype.key;
    /** @type {?} */
    KeyValuePair.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/label.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Label {
}

if (false) {
    /** @type {?} */
    Label.prototype.labelEn;
    /** @type {?} */
    Label.prototype.labelFr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/period.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Period {
}

if (false) {
    /** @type {?} */
    Period.prototype.start;
    /** @type {?} */
    Period.prototype.end;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/search-string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchString {
}

if (false) {
    /** @type {?} */
    SearchString.prototype.value;
    /** @type {?} */
    SearchString.prototype.isExact;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/generic-criteria.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GenericCriteria {
}

if (false) {
    /** @type {?} */
    GenericCriteria.prototype.sorting;
    /** @type {?} */
    GenericCriteria.prototype.paging;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/common-criteria.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonCriteria extends GenericCriteria {
}

if (false) {
    /** @type {?} */
    CommonCriteria.prototype.code;
    /** @type {?} */
    CommonCriteria.prototype.label;
    /** @type {?} */
    CommonCriteria.prototype.active;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This class contains all information relative to Pagination for a search page */
class Pagination {
    constructor() {
        /**
         * The current page of the results
         */
        this.currentPage = 1;
        /**
         * Maximum number of results displayed per page
         */
        this.pageSize = 10;
    }

    /**
     * Returns the index of the first row we want from the database
     * @return {?}
     */
    getFirstResult() {
        return (this.currentPage - 1) * this.pageSize;
    }
}

if (false) {
    /**
     * The current page of the results
     * @type {?}
     */
    Pagination.prototype.currentPage;
    /**
     * Maximum number of results displayed per page
     * @type {?}
     */
    Pagination.prototype.pageSize;
    /**
     * Total number of results matching the criteria in the database
     * @type {?}
     */
    Pagination.prototype.totalResult;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/sorting/paging.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Paging {
}

if (false) {
    /** @type {?} */
    Paging.prototype.firstResult;
    /** @type {?} */
    Paging.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/sorting/sorting.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Sorting {
}

if (false) {
    /** @type {?} */
    Sorting.prototype.property;
    /** @type {?} */
    Sorting.prototype.direction;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/handler/ErrorsHandler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorsHandler {
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        /** @type {?} */
        const appError = (/** @type {?} */ (error));
        // if is an BusinessError we should not log the error in the browser console
        if (!appError.errorKeys) {
            console.error('It happens: ', error);
        }
    }
}

ErrorsHandler.ɵfac = function ErrorsHandler_Factory(t) {
    return new (t || ErrorsHandler)();
};
ErrorsHandler.ɵprov = ɵngcc0.ɵɵdefineInjectable({token: ErrorsHandler, factory: ErrorsHandler.ɵfac});
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(ErrorsHandler, [{
        type: Injectable
    }], null, null);
})();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/utils/datepicker/DatePickerAdapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatePickerAdapter extends NgbDateAdapter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }

    /**
     * @param {?} value
     * @return {?}
     */
    fromModel(value) {
        if (value) {
            /** @type {?} */
            const date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    toModel(value) {
        return value ? value.day.toString().padStart(2, '0') + this.DELIMITER + value.month.toString().padStart(2, '0') + this.DELIMITER + value.year : '';
    }
}

DatePickerAdapter.ɵfac = function DatePickerAdapter_Factory(t) {
    return ɵDatePickerAdapter_BaseFactory(t || DatePickerAdapter);
};
DatePickerAdapter.ɵprov = ɵngcc0.ɵɵdefineInjectable({token: DatePickerAdapter, factory: DatePickerAdapter.ɵfac});
const ɵDatePickerAdapter_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(DatePickerAdapter);
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(DatePickerAdapter, [{
        type: Injectable
    }], null, null);
})();
if (false) {
    /** @type {?} */
    DatePickerAdapter.prototype.DELIMITER;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/utils/datepicker/DatePickerParserFormatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatePickerParserFormatter extends NgbDateParserFormatter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }

    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        if (value) {
            /** @type {?} */
            const date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }

    /**
     * @param {?} date
     * @return {?}
     */
    format(date) {
        return date ? date.day.toString().padStart(2, '0') + this.DELIMITER + date.month.toString().padStart(2, '0') + this.DELIMITER + date.year : '';
    }
}

DatePickerParserFormatter.ɵfac = function DatePickerParserFormatter_Factory(t) {
    return ɵDatePickerParserFormatter_BaseFactory(t || DatePickerParserFormatter);
};
DatePickerParserFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({
    token: DatePickerParserFormatter,
    factory: DatePickerParserFormatter.ɵfac
});
const ɵDatePickerParserFormatter_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(DatePickerParserFormatter);
/*@__PURE__*/
(function () {
    ɵngcc0.ɵsetClassMetadata(DatePickerParserFormatter, [{
        type: Injectable
    }], null, null);
})();
if (false) {
    /** @type {?} */
    DatePickerParserFormatter.prototype.DELIMITER;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/utils/DateUtils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateUtils {
    /**
     * @param {?} value
     * @return {?}
     */
    static toDate(value) {
        if (value) {
            /** @type {?} */
            const dateString = value.split('/');
            /** @type {?} */
            const date = new Date(parseInt(dateString[2], 10), parseInt(dateString[1], 10) - 1, parseInt(dateString[0], 10));
            if (isNaN(date.getTime())) {
                return undefined;
            } else {
                return date;
            }
        } else {
            return undefined;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: sepia-library.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export {
    ApiError,
    BackendErrorTypeEnum,
    BooleanPipe,
    BusinessRuleComponent,
    BusinessRuleErrorComponent,
    CapsDetectorDirective,
    CenterModalComponent,
    CommonCriteria,
    DatePickerAdapter,
    DatePickerParserFormatter,
    DateUtils,
    DisableControlDirective,
    EditModeEnum,
    EnumToArrayPipe,
    ErrorsHandler,
    FieldErrorMessagesComponent,
    FilterInputTypeEnum,
    GenericCriteria,
    HttpLoaderFactory,
    KeyValuePair,
    Label,
    LabelPipe,
    LanguageService,
    LongTextTooltipComponent,
    ModalExitEnum,
    ModalService,
    ModalTypeEnum,
    Pagination,
    Paging,
    Period,
    SearchString,
    SepiaLibraryComponent,
    SepiaLibraryModule,
    SepiaLibraryService,
    SortableColumn,
    Sorting,
    SortingDirectionEnum,
    SortingService,
    SvgIcon,
    SvgIconComponent,
    TableFilterHeadersComponent
};

//# sourceMappingURL=sepia-library.js.map
