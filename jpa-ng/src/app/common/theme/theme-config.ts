export class ThemeConfig {
    private _topbarTheme = 'light';
    private _menuTheme = 'dim';
    private _layoutMode = 'light';
    private _menuMode = 'static';
    private _isRTL = false;
    private _inputStyle = 'outlined';
    private _ripple: boolean;
    private _theme = 'denim';


    get topbarTheme(): string {
        return this._topbarTheme;
    }

    set topbarTheme(value: string) {
        this._topbarTheme = value;
        this.store();
    }

    get menuTheme(): string {
        return this._menuTheme;
    }

    set menuTheme(value: string) {
        this._menuTheme = value;
        this.store();
    }

    get layoutMode(): string {
        return this._layoutMode;
    }

    set layoutMode(value: string) {
        this._layoutMode = value;
        this.store();
    }

    get menuMode(): string {
        return this._menuMode;
    }

    set menuMode(value: string) {
        this._menuMode = value;
        this.store();
    }

    get isRTL(): boolean {
        return this._isRTL;
    }

    set isRTL(value: boolean) {
        this._isRTL = value;
        this.store();
    }

    get inputStyle(): string {
        return this._inputStyle;
    }

    set inputStyle(value: string) {
        this._inputStyle = value;
        this.store();
    }

    get ripple(): boolean {
        return this._ripple;
    }

    set ripple(value: boolean) {
        this._ripple = value;
        this.store();
    }

    get theme(): any {
        return this._theme;
    }

    set theme(value: any) {
        this._theme = value;
        this.store();
    }

    store() {
        localStorage.setItem('ser-theme', JSON.stringify(this));
    }

    load() {
        const currentThemeConfig = localStorage.getItem('ser-theme');
        if (!currentThemeConfig) {
            localStorage.setItem('ser-theme', JSON.stringify(this));
        } else {
            const config = JSON.parse(currentThemeConfig);
            this._topbarTheme = config._topbarTheme;
            this._menuTheme = config._menuTheme;
            this._layoutMode = config._layoutMode;
            this._menuMode = config._menuMode;
            this._isRTL = config._isRTL;
            this._inputStyle = config._inputStyle;
            this._ripple = config._ripple;
            this._theme = config._theme;
        }
    }
}
