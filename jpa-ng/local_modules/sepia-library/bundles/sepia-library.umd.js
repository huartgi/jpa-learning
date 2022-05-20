(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/forms'), require('@angular/platform-browser'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-translate/core'), require('@ngx-translate/http-loader'), require('rxjs'), require('rxjs/operators')) :
        typeof define === 'function' && define.amd ? define('sepia-library', ['exports', '@angular/core', '@angular/common/http', '@angular/forms', '@angular/platform-browser', '@ng-bootstrap/ng-bootstrap', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators'], factory) :
            (global = global || self, factory(global['sepia-library'] = {}, global.ng.core, global.ng.common.http, global.ng.forms, global.ng.platformBrowser, global.ngBootstrap, global.core$1, global.httpLoader, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, http, forms, platformBrowser, ngBootstrap, core$1, httpLoader, rxjs, operators) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
                resolve(value);
            });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }

            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }

            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = {
            label: 0, sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
            }, trys: [], ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
        }), g;

        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {value: op[1], done: false};
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];
                y = 0;
            } finally {
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {value: op[0] ? op[1] : void 0, done: true};
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return {value: o && o[i++], done: !o};
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
            e = {error: error};
        } finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this;
        }, i;

        function verb(n) {
            if (g[n]) i[n] = function (v) {
                return new Promise(function (a, b) {
                    q.push([n, v, a, b]) > 1 || resume(n, v);
                });
            };
        }

        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }

        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
            resume("next", value);
        }

        function reject(value) {
            resume("throw", value);
        }

        function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
            return this;
        }, i;

        function verb(n, f) {
            i[n] = o[n] ? function (v) {
                return (p = !p) ? {value: __await(o[n](v)), done: n === "return"} : f ? f(v) : v;
            } : f;
        }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this;
        }, i);

        function verb(n) {
            i[n] = o[n] && function (v) {
                return new Promise(function (resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }

        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
                resolve({value: v, done: d});
            }, reject);
        }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", {value: raw});
        } else {
            cooked.raw = raw;
        }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : {default: mod};
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia-library.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SepiaLibraryService = /** @class */ (function () {
        function SepiaLibraryService() {
        }

        SepiaLibraryService.decorators = [
            {
                type: core.Injectable, args: [{
                    providedIn: 'root'
                },]
            }
        ];
        /** @nocollapse */
        SepiaLibraryService.ctorParameters = function () {
            return [];
        };
        /** @nocollapse */ SepiaLibraryService.ngInjectableDef = core.ɵɵdefineInjectable({
            factory: function SepiaLibraryService_Factory() {
                return new SepiaLibraryService();
            }, token: SepiaLibraryService, providedIn: "root"
        });
        return SepiaLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia-library.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SepiaLibraryComponent = /** @class */ (function () {
        function SepiaLibraryComponent() {
        }

        /**
         * @return {?}
         */
        SepiaLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        SepiaLibraryComponent.decorators = [
            {
                type: core.Component, args: [{
                    selector: 'lib-sepia-library',
                    template: "\n    <p>\n      sepia-library works!\n    </p>\n  "
                }]
            }
        ];
        /** @nocollapse */
        SepiaLibraryComponent.ctorParameters = function () {
            return [];
        };
        return SepiaLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/business-rule/component/business-rule-component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BusinessRuleComponent = /** @class */ (function () {
        function BusinessRuleComponent(service) {
            this.service = service;
            this.withErrors = false;
            this.init();
        }

        /**
         * @return {?}
         */
        BusinessRuleComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            this.withErrors = false;
            this.errorKeys = [];
        };
        /**
         * @param {?} entity
         * @return {?}
         */
        BusinessRuleComponent.prototype.create = /**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            var _this = this;
            this.init();
            return this.service.create(entity).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error.error);
            })));
        };
        /**
         * @param {?} entity
         * @return {?}
         */
        BusinessRuleComponent.prototype.update = /**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            var _this = this;
            this.init();
            return this.service.update(entity).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error.error);
            })));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        BusinessRuleComponent.prototype.delete = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            var _this = this;
            this.init();
            return this.service.delete(id).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error.error);
            })));
        };
        /**
         * @param {?} apiError
         * @return {?}
         */
        BusinessRuleComponent.prototype.handleError = /**
         * @param {?} apiError
         * @return {?}
         */
        function (apiError) {
            var _this = this;
            this.withErrors = true;
            if (apiError && apiError.errorKeys) {
                apiError.errorKeys.forEach((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return _this.errorKeys.push(error);
                }));
            }
            return rxjs.throwError(apiError);
        };
        return BusinessRuleComponent;
    }());
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
    var BusinessRuleErrorComponent = /** @class */ (function () {
        function BusinessRuleErrorComponent() {
        }

        /**
         * @return {?}
         */
        BusinessRuleErrorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BusinessRuleErrorComponent.decorators = [
            {
                type: core.Component, args: [{
                    selector: 'sepia-business-rule-error',
                    template: "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n  <div class=\"row-fluid business-rule-error\" *ngFor=\"let error of businessRuleComponent.errorKeys\"> {{error | translate}} </div>\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"businessRuleComponent.init()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n",
                    styles: [""]
                }]
            }
        ];
        /** @nocollapse */
        BusinessRuleErrorComponent.ctorParameters = function () {
            return [];
        };
        BusinessRuleErrorComponent.propDecorators = {
            businessRuleComponent: [{type: core.Input}]
        };
        return BusinessRuleErrorComponent;
    }());
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
    var ModalExitEnum = {
        OK: "OK",
        CANCEL: "CANCEL",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/component/center-modal/center-modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CenterModalComponent = /** @class */ (function () {
        function CenterModalComponent(modal) {
            this.modal = modal;
            this.okClickEvent = new core.EventEmitter();
            this.resultOk = ModalExitEnum.OK;
            this.resultCancel = ModalExitEnum.CANCEL;
        }

        /**
         * @return {?}
         */
        CenterModalComponent.prototype.okWasClicked = /**
         * @return {?}
         */
        function () {
            this.modal.close('Ok click');
            this.okClickEvent.emit();
        };
        CenterModalComponent.decorators = [
            {
                type: core.Component, args: [{
                    selector: 'sepia-center-modal',
                    template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-title\">{{ title | translate}}</h4>\n  <button (click)=\"modal.dismiss(resultCancel)\" aria-describedby=\"modal-title\" aria-label=\"Close button\" class=\"close\"\n          type=\"button\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div *ngIf=\"informationMessage\" class=\"row-fluid alert alert-warning\" role=\"alert\">\n    <div class=\"row justify-content-center\">\n      {{ informationMessage | translate }}\n    </div>\n  </div>\n  {{ message | translate }}\n</div>\n<div class=\"modal-footer\">\n  <button (click)=\"modal.dismiss(resultCancel)\" class=\"btn btn-outline-secondary\" id=\"center-modal-cancel-button\"\n          type=\"button\">{{ cancelButton | translate }}</button>\n  <button (click)=\"modal.dismiss(resultOk)\" class=\"btn btn-danger\" id=\"center-modal-ok-button\" ngbAutofocus\n          type=\"button\">{{okButton | translate }}</button>\n</div>\n",
                    styles: [""]
                }]
            }
        ];
        /** @nocollapse */
        CenterModalComponent.ctorParameters = function () {
            return [
                {type: ngBootstrap.NgbActiveModal}
            ];
        };
        CenterModalComponent.propDecorators = {
            id: [{type: core.Input}],
            title: [{type: core.Input}],
            message: [{type: core.Input}],
            okButton: [{type: core.Input}],
            cancelButton: [{type: core.Input}],
            informationMessage: [{type: core.Input}],
            okClickEvent: [{type: core.Output}]
        };
        return CenterModalComponent;
    }());
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
    var FieldErrorMessagesComponent = /** @class */ (function () {
        function FieldErrorMessagesComponent() {
        }

        /**
         * @return {?}
         */
        FieldErrorMessagesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        FieldErrorMessagesComponent.decorators = [
            {
                type: core.Component, args: [{
                    selector: 'sepia-field-error-messages',
                    template: "<div id=\"{{fieldName}}-error\" class=\"invalid-feedback-rci\" *ngIf=\"errors\">\n  <p *ngIf=\"errors.required\">\n    {{ 'common.validation.required' | translate:{fieldName: fieldLabel | translate } }}\n  </p>\n  <p *ngIf=\"errors.maxlength\">\n    {{ 'common.validation.length' | translate:{fieldName: fieldLabel | translate , min: '0', max: errors.maxlength.requiredLength } }}\n  </p>\n</div>\n",
                    styles: [".invalid-feedback-rci{width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}"]
                }]
            }
        ];
        /** @nocollapse */
        FieldErrorMessagesComponent.ctorParameters = function () {
            return [];
        };
        FieldErrorMessagesComponent.propDecorators = {
            fieldName: [{type: core.Input}],
            fieldLabel: [{type: core.Input}],
            errors: [{type: core.Input}]
        };
        return FieldErrorMessagesComponent;
    }());
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
    var LongTextTooltipComponent = /** @class */ (function () {
        function LongTextTooltipComponent() {
        }

        /**
         * @return {?}
         */
        LongTextTooltipComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} divElement
         * @param {?} t
         * @return {?}
         */
        LongTextTooltipComponent.prototype.openTooltip = /**
         * @param {?} divElement
         * @param {?} t
         * @return {?}
         */
        function (divElement, t) {
            if (divElement.offsetWidth < divElement.scrollWidth) {
                t.open();
            }
        };
        LongTextTooltipComponent.decorators = [
            {
                type: core.Component, args: [{
                    selector: 'sepia-long-text-tooltip',
                    template: "<div #divElement\n     class=\"largeTextEllipsis\"\n    ngbTooltip=\"{{longText}}\"\n    [autoClose]=\"true\"\n    placement=\"top\"\n    triggers=\"manual\"\n    #t=\"ngbTooltip\"\n     container=\"body\"\n    (mouseover)=\"openTooltip(divElement, t)\" (mouseleave)=\"t.close()\">\n\n  {{ longText }}\n\n</div>\n",
                    styles: [""]
                }]
            }
        ];
        /** @nocollapse */
        LongTextTooltipComponent.ctorParameters = function () {
            return [];
        };
        LongTextTooltipComponent.propDecorators = {
            longText: [{type: core.Input}]
        };
        return LongTextTooltipComponent;
    }());
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
    var SvgIcon = {
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
    var SvgIconComponent = /** @class */ (function () {
        function SvgIconComponent() {
        }

        /**
         * @return {?}
         */
        SvgIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        Object.defineProperty(SvgIconComponent.prototype, "SvgIcon", {
            get: /**
             * @return {?}
             */
            function () {
                return SvgIcon;
            },
            enumerable: true,
            configurable: true
        });
        SvgIconComponent.decorators = [
            {
                type: core.Component, args: [{
                    selector: 'sepia-svg-icon',
                    template: "<svg *ngIf=\"type === SvgIcon.ARROW_DOWN\" class=\"bi bi-arrow-down\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.ARROW_UP\" class=\"bi bi-arrow-up\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.ARROW_REPEAT\" class=\"bi bi-arrow-repeat\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.CALENDAR\" class=\"bi bi-calendar\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.CHECK_CIRCLE_FILL\" class=\"bi bi-check-circle-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.EYE\" class=\"bi bi-eye\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.GRID\" class=\"bi bi-grid-3x3-gap-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.LIST\" class=\"bi bi-justify\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z\"\n    fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.PENCIL_SQUARE\" class=\"bi bi-pencil-square\" fill=\"currentColor\" height=\"1em\"\n     viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z\"/>\n  <path clip-rule=\"evenodd\"\n        d=\"M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.PERSON\" class=\"bi bi-person\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z\"\n    fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.SEARCH\" class=\"bi bi-search\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path clip-rule=\"evenodd\"\n        d=\"M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z\"\n        fill-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.X_CIRCLE\" class=\"bi bi-x-circle\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z\" clip-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z\"\n        fill-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.X_CIRCLE_FILL\" class=\"bi bi-x-circle-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z\"/>\n</svg>\n",
                    styles: [""]
                }]
            }
        ];
        /** @nocollapse */
        SvgIconComponent.ctorParameters = function () {
            return [];
        };
        SvgIconComponent.propDecorators = {
            type: [{type: core.Input}]
        };
        return SvgIconComponent;
    }());
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
    var FilterInputTypeEnum = {
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
    var SortingDirectionEnum = {
        ASC: "ASC",
        DESC: "DESC",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/component/table-filter-headers/table-filter-headers.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableFilterHeadersComponent = /** @class */ (function () {
        function TableFilterHeadersComponent() {
            this.actionsWidth = '10%';
            this.sortEvent = new core.EventEmitter();
            this.searchEvent = new core.EventEmitter();
            this.clearEvent = new core.EventEmitter();
            this.inputText = FilterInputTypeEnum.INPUT_TEXT;
            this.dropdown = FilterInputTypeEnum.DROPDOWN;
            this.checkbox = FilterInputTypeEnum.CHECKBOX;
            this.radiobuttons = FilterInputTypeEnum.RADIO_BUTTONS;
            this.ascSortDirection = SortingDirectionEnum.ASC;
            this.onChange = (/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
            });
            this.onTouched = (/**
             * @return {?}
             */
            function () {
            });
        }

        Object.defineProperty(TableFilterHeadersComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this.form.value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.form.setValue(value);
                try {
                    this.onChange(value);
                } catch (e) {
                    /** Do nothing with the error */
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var formControls = {};
            this.sortableColumns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                formControls[column.name] = new forms.FormControl('');
            }));
            this.form = new forms.FormGroup(formControls);
            this.form.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                try {
                    _this.onChange(value);
                } catch (e) {
                    /** Do nothing with the error */
                }
            }));
        };
        /**
         * @param {?} column
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.sort = /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.sortable) {
                column.toggleDirection();
                this.sortEvent.emit(column);
            }
        };
        /**
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.form.reset();
            this.clearEvent.emit();
            this.searchEvent.emit();
        };
        /**
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.search = /**
         * @return {?}
         */
        function () {
            this.searchEvent.emit();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.value = value;
            }
            if (value === null) {
                this.form.reset();
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} _
         * @return {?}
         */
        TableFilterHeadersComponent.prototype.validate = /**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            return this.form.valid ? null : {filters: {valid: false}};
        };
        Object.defineProperty(TableFilterHeadersComponent.prototype, "SvgIcon", {
            get: /**
             * @return {?}
             */
            function () {
                return SvgIcon;
            },
            enumerable: true,
            configurable: true
        });
        TableFilterHeadersComponent.decorators = [
            {
                type: core.Component, args: [{
                    selector: 'sepia-table-filter-headers',
                    template: "  <tr class=\"\" [formGroup]=\"form\">\n    <th\n      scope=\"col\" *ngFor=\"let column of sortableColumns\"\n      [className]=\"column.bootstrapClass\"\n      [style.width]=\"column.width\"\n    >\n      <div [id]=\"'sortBY' + column.name\" class=\"row\" [ngClass]=\"{ 'clickable': column.sortable }\"\n           (click)=\"sort(column)\">\n        <span class=\"col-md-12\" *ngIf=\"column.filterInputType != checkbox\">\n        {{ (column.title | translate) }}\n          <span *ngIf=\"column.direction != null\">\n            <span *ngIf=\"column.direction === ascSortDirection; then sortAscending else sortDescending\"></span>\n          </span>\n        </span>\n      </div>\n      <input (keyup.enter)=\"search()\" [formControlName]=\"column.name\" *ngIf=\"column.filterInputType === inputText\" type=\"text\" class=\"form-control\" [id]=\"column.name\">\n      <select (change)=\"search()\" [formControlName]=\"column.name\" *ngIf=\"column.filterInputType === dropdown\" class=\"form-control\" [id]=\"column.name\">\n        <option></option>\n        <option *ngFor=\"let elem of column.values\" [value]=\"elem.value\">{{ (elem.key| translate) }}</option>\n      </select>\n      <div class=\"custom-control custom-switch\" *ngIf=\"column.filterInputType === checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [formControlName]=\"column.name\" [id]=\"column.name\">\n        <label class=\"custom-control-label\" [htmlFor]=\"column.name\">{{ (column.title | translate) }}</label>\n      </div>\n      <div class=\"btn-group btn-group-toggle btn-group-sm criteria-value\"\n           *ngIf=\"column.filterInputType === radiobuttons\">\n        <label *ngFor=\"let elem of column.values\" [id]=\"'elem-'+ elem.key\"\n               [ngClass]=\"{'active' : form.controls[column.name].value === elem.key }\" class=\"btn btn-secondary\">\n          <input [formControlName]=\"column.name\" type=\"radio\" [value]=\"elem.key\">{{ elem.value }}\n        </label>\n      </div>\n    </th>\n    <th scope=\"col\" [style.width]=\"actionsWidth\">\n      <div class=\"float-right row d-inline-block\">\n        <button id=\"headerSearchButton\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"search()\"\n                style=\"margin-top: 24px; max-width: 40px!important;\">\n          <sepia-svg-icon [type]=\"SvgIcon.SEARCH\"></sepia-svg-icon>\n        </button>\n        <button id=\"headerClearButton\" type=\"button\"\n                style=\"margin-left: 10px; margin-top: 24px; max-width: 40px!important;\"\n                class=\"btn btn-outline-primary\" (click)=\"clear()\">\n          <sepia-svg-icon [type]=\"SvgIcon.X_CIRCLE\"></sepia-svg-icon>\n        </button>\n      </div>\n    </th>\n  </tr>\n\n  <ng-template #sortDescending>\n    <sepia-svg-icon [type]=\"SvgIcon.ARROW_DOWN\"></sepia-svg-icon>\n  </ng-template>\n\n  <ng-template #sortAscending>\n    <sepia-svg-icon [type]=\"SvgIcon.ARROW_UP\"></sepia-svg-icon>\n  </ng-template>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((/**
                             * @return {?}
                             */
                            function () {
                                return TableFilterHeadersComponent;
                            })),
                            multi: true
                        },
                        {
                            provide: forms.NG_VALIDATORS,
                            useExisting: core.forwardRef((/**
                             * @return {?}
                             */
                            function () {
                                return TableFilterHeadersComponent;
                            })),
                            multi: true,
                        }
                    ],
                    styles: [".custom-switch{padding-top:2em}"]
                }]
            }
        ];
        /** @nocollapse */
        TableFilterHeadersComponent.ctorParameters = function () {
            return [];
        };
        TableFilterHeadersComponent.propDecorators = {
            sortableColumns: [{type: core.Input}],
            actionsWidth: [{type: core.Input}],
            sortEvent: [{type: core.Output}],
            searchEvent: [{type: core.Output}],
            clearEvent: [{type: core.Output}]
        };
        return TableFilterHeadersComponent;
    }());
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
    var CapsDetectorDirective = /** @class */ (function () {
        function CapsDetectorDirective() {
            this.capsLock = new core.EventEmitter();
        }

        /**
         * @param {?} event
         * @return {?}
         */
        CapsDetectorDirective.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var capsOn = event.getModifierState && event.getModifierState('CapsLock');
            this.capsLock.emit(capsOn);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        CapsDetectorDirective.prototype.onKeyUp = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var capsOn = event.getModifierState && event.getModifierState('CapsLock');
            this.capsLock.emit(capsOn);
        };
        CapsDetectorDirective.decorators = [
            {
                type: core.Directive, args: [{
                    selector: '[appCapsLock]'
                },]
            }
        ];
        /** @nocollapse */
        CapsDetectorDirective.ctorParameters = function () {
            return [];
        };
        CapsDetectorDirective.propDecorators = {
            capsLock: [{type: core.Output}],
            onKeyDown: [{type: core.HostListener, args: ['window:keydown', ['$event'],]}],
            onKeyUp: [{type: core.HostListener, args: ['window:keyup', ['$event'],]}]
        };
        return CapsDetectorDirective;
    }());
    if (false) {
        /** @type {?} */
        CapsDetectorDirective.prototype.capsLock;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/directive/disable-control.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DisableControlDirective = /** @class */ (function () {
        function DisableControlDirective(ngControl) {
            this.ngControl = ngControl;
        }

        Object.defineProperty(DisableControlDirective.prototype, "disableControl", {
            set: /**
             * @param {?} condition
             * @return {?}
             */
            function (condition) {
                /** @type {?} */
                var action = condition ? 'disable' : 'enable';
                this.ngControl.control[action]();
            },
            enumerable: true,
            configurable: true
        });
        DisableControlDirective.decorators = [
            {
                type: core.Directive, args: [{
                    selector: '[disableControl]'
                },]
            }
        ];
        /** @nocollapse */
        DisableControlDirective.ctorParameters = function () {
            return [
                {type: forms.NgControl}
            ];
        };
        DisableControlDirective.propDecorators = {
            disableControl: [{type: core.Input}]
        };
        return DisableControlDirective;
    }());
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
    var BooleanPipe = /** @class */ (function () {
        function BooleanPipe(translate) {
            this.translate = translate;
        }

        /**
         * @param {?} value
         * @return {?}
         */
        BooleanPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === undefined || value === null) {
                return '';
            } else {
                if (value === true) {
                    return this.translate.get('common.values.yes');
                } else {
                    return this.translate.get('common.values.no');
                }
            }
        };
        BooleanPipe.decorators = [
            {
                type: core.Pipe, args: [{
                    name: 'boolean'
                },]
            }
        ];
        /** @nocollapse */
        BooleanPipe.ctorParameters = function () {
            return [
                {type: core$1.TranslateService}
            ];
        };
        return BooleanPipe;
    }());
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
    var EnumToArrayPipe = /** @class */ (function () {
        function EnumToArrayPipe() {
        }

        /**
         * @param {?} value
         * @return {?}
         */
        EnumToArrayPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return Object.keys(value).map((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return {index: +o, name: value[o]};
            }));
        };
        EnumToArrayPipe.decorators = [
            {type: core.Pipe, args: [{name: 'enumToArray'},]}
        ];
        return EnumToArrayPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/pipe/label.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelPipe = /** @class */ (function () {
        function LabelPipe(translate) {
            this.translate = translate;
        }

        /**
         * @param {?} label
         * @return {?}
         */
        LabelPipe.prototype.transform = /**
         * @param {?} label
         * @return {?}
         */
        function (label) {
            if (label) {
                if (this.translate.currentLang === 'fr') {
                    return label.labelFr;
                } else {
                    return label.labelEn;
                }
            }
        };
        LabelPipe.decorators = [
            {
                type: core.Pipe, args: [{
                    name: 'label'
                },]
            }
        ];
        /** @nocollapse */
        LabelPipe.ctorParameters = function () {
            return [
                {type: core$1.TranslateService}
            ];
        };
        return LabelPipe;
    }());
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
    var SepiaLibraryModule = /** @class */ (function () {
        function SepiaLibraryModule() {
        }

        SepiaLibraryModule.decorators = [
            {
                type: core.NgModule, args: [{
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
                        platformBrowser.BrowserModule,
                        forms.ReactiveFormsModule,
                        ngBootstrap.NgbModule,
                        core$1.TranslateModule.forRoot({
                            loader: {
                                provide: core$1.TranslateLoader,
                                useFactory: HttpLoaderFactory,
                                deps: [http.HttpClient]
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
                },]
            }
        ];
        return SepiaLibraryModule;
    }());

    // required for AOT compilation
    /**
     * @param {?} http
     * @return {?}
     */
    function HttpLoaderFactory(http) {
        return new httpLoader.TranslateHttpLoader(http);
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
    var LanguageService = /** @class */ (function () {
        function LanguageService(translate) {
            this.translate = translate;
        }

        /**
         * @return {?}
         */
        LanguageService.prototype.isEnglish = /**
         * @return {?}
         */
        function () {
            return !this.translate.currentLang || this.translate.currentLang === 'en';
        };
        /**
         * @return {?}
         */
        LanguageService.prototype.isFrench = /**
         * @return {?}
         */
        function () {
            return this.translate.currentLang === 'fr';
        };
        LanguageService.decorators = [
            {
                type: core.Injectable, args: [{
                    providedIn: 'root'
                },]
            }
        ];
        /** @nocollapse */
        LanguageService.ctorParameters = function () {
            return [
                {type: core$1.TranslateService}
            ];
        };
        /** @nocollapse */ LanguageService.ngInjectableDef = core.ɵɵdefineInjectable({
            factory: function LanguageService_Factory() {
                return new LanguageService(core.ɵɵinject(core$1.TranslateService));
            }, token: LanguageService, providedIn: "root"
        });
        return LanguageService;
    }());
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
    var EditModeEnum = {
        CREATE: "CREATE",
        UPDATE: "UPDATE",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/model/modal-type.enum.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ModalTypeEnum = {
        CANCEL_CREATION: "cancel_creation",
        CANCEL_MODIFICATION: "cancel_modification",
        DELETE: "delete",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/service/modal.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalService = /** @class */ (function () {
        function ModalService(ngbModal) {
            this.ngbModal = ngbModal;
        }

        /**
         * @param {?} editMode
         * @return {?}
         */
        ModalService.prototype.getCancel = /**
         * @param {?} editMode
         * @return {?}
         */
        function (editMode) {
            if (editMode === EditModeEnum.CREATE) {
                return this.getCancelCreation();
            } else if (editMode === EditModeEnum.UPDATE) {
                return this.getCancelModification();
            } else {
                return null;
            }
        };
        /**
         * @return {?}
         */
        ModalService.prototype.getCancelCreation = /**
         * @return {?}
         */
        function () {
            return this.getModal(ModalTypeEnum.CANCEL_CREATION);
        };
        /**
         * @return {?}
         */
        ModalService.prototype.getCancelModification = /**
         * @return {?}
         */
        function () {
            return this.getModal(ModalTypeEnum.CANCEL_MODIFICATION);
        };
        /**
         * @return {?}
         */
        ModalService.prototype.getDelete = /**
         * @return {?}
         */
        function () {
            return this.getModal(ModalTypeEnum.DELETE);
        };
        /**
         * @param {?} modalType
         * @param {?=} informationMessage
         * @return {?}
         */
        ModalService.prototype.getModal = /**
         * @param {?} modalType
         * @param {?=} informationMessage
         * @return {?}
         */
        function (modalType, informationMessage) {
            /** @type {?} */
            var modal = this.ngbModal.open(CenterModalComponent);
            modal.componentInstance.id = 'confirmModal';
            modal.componentInstance.title = 'common.confirm.' + modalType + '.title';
            modal.componentInstance.message = 'common.confirm.' + modalType + '.message';
            modal.componentInstance.okButton = 'common.buttons.confirm';
            modal.componentInstance.cancelButton = 'common.buttons.cancel';
            modal.componentInstance.informationMessage = informationMessage;
            return modal;
        };
        ModalService.decorators = [
            {
                type: core.Injectable, args: [{
                    providedIn: 'root'
                },]
            }
        ];
        /** @nocollapse */
        ModalService.ctorParameters = function () {
            return [
                {type: ngBootstrap.NgbModal}
            ];
        };
        /** @nocollapse */ ModalService.ngInjectableDef = core.ɵɵdefineInjectable({
            factory: function ModalService_Factory() {
                return new ModalService(core.ɵɵinject(ngBootstrap.NgbModal));
            }, token: ModalService, providedIn: "root"
        });
        return ModalService;
    }());
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
    var SortableColumn = /** @class */ (function () {
        function SortableColumn(name, title, direction, bootstrapClass, filterInputType, values, sortable, width) {
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
        SortableColumn.prototype.toggleDirection = /**
         * @return {?}
         */
        function () {
            if (this.direction === SortingDirectionEnum.DESC) {
                this.direction = null;
            } else if (this.direction === SortingDirectionEnum.ASC) {
                this.direction = SortingDirectionEnum.DESC;
            } else {
                this.direction = SortingDirectionEnum.ASC;
            }
        };
        return SortableColumn;
    }());
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
    var SortingService = /** @class */ (function () {
        function SortingService() {
        }

        /**
         * @param {?} sortableColumns
         * @return {?}
         */
        SortingService.prototype.getSortableColumn = /**
         * @param {?} sortableColumns
         * @return {?}
         */
        function (sortableColumns) {
            if (sortableColumns) {
                return sortableColumns.find((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    return column.direction != null;
                }));
            }
            return new SortableColumn('asd', 'asd', SortingDirectionEnum.ASC, '', null);
        };
        /**
         * @param {?} chosenColumn
         * @param {?} sortableColumns
         * @return {?}
         */
        SortingService.prototype.clearPreviousSorting = /**
         * @param {?} chosenColumn
         * @param {?} sortableColumns
         * @return {?}
         */
        function (chosenColumn, sortableColumns) {
            sortableColumns.filter((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                return column !== chosenColumn;
            })).forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                return column.direction = null;
            }));
        };
        SortingService.decorators = [
            {
                type: core.Injectable, args: [{
                    providedIn: 'root'
                },]
            }
        ];
        /** @nocollapse */
        SortingService.ctorParameters = function () {
            return [];
        };
        /** @nocollapse */ SortingService.ngInjectableDef = core.ɵɵdefineInjectable({
            factory: function SortingService_Factory() {
                return new SortingService();
            }, token: SortingService, providedIn: "root"
        });
        return SortingService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/model/api-error.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiError = /** @class */ (function () {
        function ApiError() {
        }

        return ApiError;
    }());
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
    var BackendErrorTypeEnum = {
        BAD_CREDENTIALS: "BAD_CREDENTIALS",
        SESSION_EXPIRED: "SESSION_EXPIRED",
        UNAUTHORIZED: "UNAUTHORIZED",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/model/key-value-pair.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KeyValuePair = /** @class */ (function () {
        function KeyValuePair() {
        }

        return KeyValuePair;
    }());
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
    var Label = /** @class */ (function () {
        function Label() {
        }

        return Label;
    }());
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
    var Period = /** @class */ (function () {
        function Period() {
        }

        return Period;
    }());
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
    var SearchString = /** @class */ (function () {
        function SearchString() {
        }

        return SearchString;
    }());
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
    var GenericCriteria = /** @class */ (function () {
        function GenericCriteria() {
        }

        return GenericCriteria;
    }());
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
    var CommonCriteria = /** @class */ (function (_super) {
        __extends(CommonCriteria, _super);

        function CommonCriteria() {
            return _super !== null && _super.apply(this, arguments) || this;
        }

        return CommonCriteria;
    }(GenericCriteria));
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
    var Pagination = /** @class */ (function () {
        function Pagination() {
            /**
             * The current page of the results
             */
            this.currentPage = 1;
            /**
             * Maximum number of results displayed per page
             */
            this.pageSize = 10;
        }

        /** Returns the index of the first row we want from the database */
        /**
         * Returns the index of the first row we want from the database
         * @return {?}
         */
        Pagination.prototype.getFirstResult = /**
         * Returns the index of the first row we want from the database
         * @return {?}
         */
        function () {
            return (this.currentPage - 1) * this.pageSize;
        };
        return Pagination;
    }());
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
    var Paging = /** @class */ (function () {
        function Paging() {
        }

        return Paging;
    }());
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
    var Sorting = /** @class */ (function () {
        function Sorting() {
        }

        return Sorting;
    }());
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
    var ErrorsHandler = /** @class */ (function () {
        function ErrorsHandler() {
        }

        /**
         * @param {?} error
         * @return {?}
         */
        ErrorsHandler.prototype.handleError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            /** @type {?} */
            var appError = (/** @type {?} */ (error));
            // if is an BusinessError we should not log the error in the browser console
            if (!appError.errorKeys) {
                console.error('It happens: ', error);
            }
        };
        ErrorsHandler.decorators = [
            {type: core.Injectable}
        ];
        return ErrorsHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/utils/datepicker/DatePickerAdapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatePickerAdapter = /** @class */ (function (_super) {
        __extends(DatePickerAdapter, _super);

        function DatePickerAdapter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.DELIMITER = '/';
            return _this;
        }

        /**
         * @param {?} value
         * @return {?}
         */
        DatePickerAdapter.prototype.fromModel = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                /** @type {?} */
                var date = value.split(this.DELIMITER);
                return {
                    day: parseInt(date[0], 10),
                    month: parseInt(date[1], 10),
                    year: parseInt(date[2], 10)
                };
            }
            return null;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DatePickerAdapter.prototype.toModel = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value ? value.day.toString().padStart(2, '0') + this.DELIMITER + value.month.toString().padStart(2, '0') + this.DELIMITER + value.year : '';
        };
        DatePickerAdapter.decorators = [
            {type: core.Injectable}
        ];
        return DatePickerAdapter;
    }(ngBootstrap.NgbDateAdapter));
    if (false) {
        /** @type {?} */
        DatePickerAdapter.prototype.DELIMITER;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/utils/datepicker/DatePickerParserFormatter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatePickerParserFormatter = /** @class */ (function (_super) {
        __extends(DatePickerParserFormatter, _super);

        function DatePickerParserFormatter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.DELIMITER = '/';
            return _this;
        }

        /**
         * @param {?} value
         * @return {?}
         */
        DatePickerParserFormatter.prototype.parse = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                /** @type {?} */
                var date = value.split(this.DELIMITER);
                return {
                    day: parseInt(date[0], 10),
                    month: parseInt(date[1], 10),
                    year: parseInt(date[2], 10)
                };
            }
            return null;
        };
        /**
         * @param {?} date
         * @return {?}
         */
        DatePickerParserFormatter.prototype.format = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return date ? date.day.toString().padStart(2, '0') + this.DELIMITER + date.month.toString().padStart(2, '0') + this.DELIMITER + date.year : '';
        };
        DatePickerParserFormatter.decorators = [
            {type: core.Injectable}
        ];
        return DatePickerParserFormatter;
    }(ngBootstrap.NgbDateParserFormatter));
    if (false) {
        /** @type {?} */
        DatePickerParserFormatter.prototype.DELIMITER;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sepia/utils/DateUtils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateUtils = /** @class */ (function () {
        function DateUtils() {
        }

        /**
         * @param {?} value
         * @return {?}
         */
        DateUtils.toDate = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                /** @type {?} */
                var dateString = value.split('/');
                /** @type {?} */
                var date = new Date(parseInt(dateString[2], 10), parseInt(dateString[1], 10) - 1, parseInt(dateString[0], 10));
                if (isNaN(date.getTime())) {
                    return undefined;
                } else {
                    return date;
                }
            } else {
                return undefined;
            }
        };
        return DateUtils;
    }());

    exports.ApiError = ApiError;
    exports.BackendErrorTypeEnum = BackendErrorTypeEnum;
    exports.BooleanPipe = BooleanPipe;
    exports.BusinessRuleComponent = BusinessRuleComponent;
    exports.BusinessRuleErrorComponent = BusinessRuleErrorComponent;
    exports.CapsDetectorDirective = CapsDetectorDirective;
    exports.CenterModalComponent = CenterModalComponent;
    exports.CommonCriteria = CommonCriteria;
    exports.DatePickerAdapter = DatePickerAdapter;
    exports.DatePickerParserFormatter = DatePickerParserFormatter;
    exports.DateUtils = DateUtils;
    exports.DisableControlDirective = DisableControlDirective;
    exports.EditModeEnum = EditModeEnum;
    exports.EnumToArrayPipe = EnumToArrayPipe;
    exports.ErrorsHandler = ErrorsHandler;
    exports.FieldErrorMessagesComponent = FieldErrorMessagesComponent;
    exports.FilterInputTypeEnum = FilterInputTypeEnum;
    exports.GenericCriteria = GenericCriteria;
    exports.HttpLoaderFactory = HttpLoaderFactory;
    exports.KeyValuePair = KeyValuePair;
    exports.Label = Label;
    exports.LabelPipe = LabelPipe;
    exports.LanguageService = LanguageService;
    exports.LongTextTooltipComponent = LongTextTooltipComponent;
    exports.ModalExitEnum = ModalExitEnum;
    exports.ModalService = ModalService;
    exports.ModalTypeEnum = ModalTypeEnum;
    exports.Pagination = Pagination;
    exports.Paging = Paging;
    exports.Period = Period;
    exports.SearchString = SearchString;
    exports.SepiaLibraryComponent = SepiaLibraryComponent;
    exports.SepiaLibraryModule = SepiaLibraryModule;
    exports.SepiaLibraryService = SepiaLibraryService;
    exports.SortableColumn = SortableColumn;
    exports.Sorting = Sorting;
    exports.SortingDirectionEnum = SortingDirectionEnum;
    exports.SortingService = SortingService;
    exports.SvgIcon = SvgIcon;
    exports.SvgIconComponent = SvgIconComponent;
    exports.TableFilterHeadersComponent = TableFilterHeadersComponent;

    Object.defineProperty(exports, '__esModule', {value: true});

})));
//# sourceMappingURL=sepia-library.umd.js.map
