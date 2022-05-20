import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../../app.component';
import {HomeComponent} from '../../home/home.component';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html'
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    theme = 'denim';

    constructor(public appMain: HomeComponent, public app: AppComponent) {
    }

    ngOnInit() {
        this.themes = [
            {name: 'denim', color: '#2f8ee5'},
            {name: 'sea-green', color: '#30A059'},
            {name: 'amethyst', color: '#834CA8'},
            {name: 'wedgewood', color: '#557DAA'},
            {name: 'tapestry', color: '#A74896'},
            {name: 'cape-palliser', color: '#A46B3E'},
            {name: 'apple', color: '#52A235'},
            {name: 'gigas', color: '#5751A9'},
            {name: 'jungle-green', color: '#2B9F9C'},
            {name: 'camelot', color: '#A54357'},
            {name: 'amber', color: '#D49341'},
            {name: 'cyan', color: '#399DB2'}
        ];

        this.onLayoutModeChange(null);
        setTimeout(() => {
            this.changeTheme(this.app.themeConfig.theme)
        }, 500);
    }

    onLayoutModeChange(event) {
        this.app.themeConfig.menuTheme = this.app.themeConfig.layoutMode;
        this.app.themeConfig.topbarTheme = this.app.themeConfig.layoutMode;

        if (this.app.themeConfig.layoutMode === 'light') {
            this.app.themeConfig.menuTheme = 'dim';
        }

        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const layoutHref = 'assets/layout/css/layout-' + this.app.themeConfig.layoutMode + '.css';
        this.replaceLink(layoutLink, layoutHref);

        const themeLink = document.getElementById('theme-css');
        const urlTokens = themeLink.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = 'theme-' + this.app.themeConfig.layoutMode + '.css';
        const newURL = urlTokens.join('/');

        this.replaceLink(themeLink, newURL, this.appMain['refreshTrafficChart']);
    }

    changeTheme(theme) {
        this.theme = theme;
        this.app.themeConfig.theme = theme;

        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const themeHref = 'assets/theme/' + theme + '/theme-' + this.app.themeConfig.layoutMode + '.css';
        this.replaceLink(themeLink, themeHref, this.appMain['refreshTrafficChart']);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href, callback?) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
            if (callback) {
                callback();
            }
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);

                if (callback) {
                    callback();
                }
            });
        }
    }

    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
}
