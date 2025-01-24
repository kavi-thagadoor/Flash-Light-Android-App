import { Component } from '@angular/core';
declare let window: any; 
import { AdMob, AdOptions, BannerAdSize } from '@capacitor-community/admob';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [],
})
export class HomePage {
  isFlashlightOn = false;

  ngOnInit() {
    this.showAd();
  }

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


  constructor() {}

  async showAd() {
    const adOptions: AdOptions = {
      adId: environment.admobBannerId, // Test Banner Ad Unit ID
      isTesting: environment.adMobTesting, // Ensure test ads are used
      // To control alignment, you can use additional styles (explained below).
    };
  
    try {
      await AdMob.initialize(); // Initialize AdMob
      await AdMob.showBanner(adOptions); // Show the ad
      console.log('Ad displayed at the top!');
    } catch (error) {
      console.error('Error showing AdMob banner:', error);
    }
  }

  async hideAd() {
    try {
      await AdMob.hideBanner(); // Hide the ad
    } catch (error) {
      console.error('Error hiding AdMob banner:', error);
    }
  }

}
