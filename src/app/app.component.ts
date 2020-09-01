import {Component, Inject, LOCALE_ID, Renderer2} from '@angular/core';
import {ConfigService} from '../@vex/services/config.service';
import {Settings} from 'luxon';
import {DOCUMENT} from '@angular/common';
import {Platform} from '@angular/cdk/platform';
import {NavigationService} from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import {LayoutService} from '../@vex/services/layout.service';
import {ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {SplashScreenService} from '../@vex/services/splash-screen.service';
import {Style, StyleService} from '../@vex/services/style.service';
import {ConfigName} from '../@vex/interfaces/config-name.model';

@Component({
    selector: 'vex-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ש.ח.ל.ב';

    constructor(private configService: ConfigService,
                private styleService: StyleService,
                private renderer: Renderer2,
                private platform: Platform,
                @Inject(DOCUMENT) private document: Document,
                @Inject(LOCALE_ID) private localeId: string,
                private layoutService: LayoutService,
                private route: ActivatedRoute,
                private navigationService: NavigationService,
                private splashScreenService: SplashScreenService) {
        Settings.defaultLocale = this.localeId;

        if (this.platform.BLINK) {
            this.renderer.addClass(this.document.body, 'is-blink');
        }

        /**
         * Customize the template to your needs with the ConfigService
         * Example:
         *  this.configService.updateConfig({
         *    sidenav: {
         *      title: 'Custom App',
         *      imageUrl: '//placehold.it/100x100',
         *      showCollapsePin: false
         *    },
         *    showConfigButton: false,
         *    footer: {
         *      visible: false
         *    }
         *  });
         */

        this.document.body.dir = 'rtl';
        this.document.documentElement.style.setProperty('--color-primary', '255, 87, 34');
        this.document.documentElement.style.setProperty('--color-primary-contrast', '255, 255, 255');
        this.configService.updateConfig({
            rtl: true
        });

        this.navigationService.items = [
            {
                type: 'link',
                label: 'מנהל',
                route: '/home/login/Manager',
            },
            {
                type: 'link',
                label: 'לקוח',
                route: '/home/login/Customer',
            },
            {
                type: 'link',
                label: 'ספק',
                route: '/home/login/Provider',
            },
            {
                type: 'link',
                label: 'נהג',
                route: '/home/login/Driver',
            }
        ];
    }
}
