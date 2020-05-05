import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    updateMessage = 'project-pwa';

    constructor(private swUpdate: SwUpdate) {

    }

    ngOnInit(): void {
        if ('serviceWorker' in navigator) {
        console.log('service worker!!!!!!!!!!!!!');
        
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
            if (confirm('New version available. Load New Version?')) {
                window.location.reload(); // 재시작하면 캐시된 데이터를 버리고 새 버전의 코드를 불러와 적용한다.
            }
            });
        }
        }
        else {
            console.log('service worker is not ready');
        }
    }

}
