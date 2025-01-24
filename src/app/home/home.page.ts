import { Component } from '@angular/core';
declare let window: any; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [],
})
export class HomePage {
  isFlashlightOn = false;

  toggleFlashlight() {
    if (window.plugins && window.plugins.flashlight) {
      if (this.isFlashlightOn) {
        window.plugins.flashlight.switchOff();
      } else {
        window.plugins.flashlight.switchOn();
      }
      this.isFlashlightOn = !this.isFlashlightOn;
    } else {
      console.error('Flashlight plugin not available.');
    }
  }
}
