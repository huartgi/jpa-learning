import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FilterMatchMode, PrimeNGConfig} from 'primeng/api';
import {ThemeConfig} from './common/theme/theme-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    themeConfig = new ThemeConfig();

    constructor(private primengConfig: PrimeNGConfig,
                private translate: TranslateService,
                private config: PrimeNGConfig) {

        this.themeConfig.load();
        translate.setDefaultLang('en');
    }

    ngOnInit() {
        this.primengConfig.ripple = true;

        // FILTER CONFIGURATIONS FOR PRIMENG TABLE COMPONENT
        this.config.filterMatchModeOptions = {
            text: [
                FilterMatchMode.CONTAINS,
            ],
            numeric: [
                FilterMatchMode.EQUALS,
                FilterMatchMode.NOT_EQUALS,
                FilterMatchMode.LESS_THAN,
                FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
                FilterMatchMode.GREATER_THAN,
                FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
            ],
            date: [
                FilterMatchMode.EQUALS,
                FilterMatchMode.GREATER_THAN,
                FilterMatchMode.LESS_THAN
            ]
        }
    }
}
