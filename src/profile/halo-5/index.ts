import { HttpWrapper } from '../../httpWrapper'

export enum ImageSize {
    'NINETY_FIVE' = 95,
    'ONE_HUNDRED_TWENTY_EIGHT' = 128,
    'ONE_HUNDRED_NINETY' = 190,
    'TWO_HUNDRED_FIFTY_SIX' = 256,
    'FIVE_HUNDRED_TWELVE' = 512
}

export enum ImageCrop {
    'FULL' = 'full',
    'PORTRAIT' = 'portrait'
}

export class Halo5 {
    private httpWrapper: HttpWrapper
    private readonly PROFILE_PATH: string = '/profile/h5/profiles'

    constructor(httpWrapper: HttpWrapper) {
      this.httpWrapper = httpWrapper
    }

    /**
  * Returns Appearance.
  * {@link https://developer.haloapi.com/docs/services/58acdc2e21091812784ce8c2/operations/Halo-5-Player-Appearance}
  * @param {string} - Player Gamertag
  * @example
  * halo.profile.halo5.appearance('Gamertag').then((image) => {
  *   //Do code here
  * });
  * @returns Promise that resolves with JSON from API
  */
    appearance(player: string): Promise<any> {
      return this.httpWrapper.request(`${this.PROFILE_PATH}/${player}/appearance`)
    }

    /**
  * Returns Emblem Image.
  * {@link https://developer.haloapi.com/docs/services/58acdc2e21091812784ce8c2/operations/Halo-5-Player-Emblem-Image?}
  * @param {string} - Player Gamertag
  * @param {ImageSize} - Size in pixels (default 256). Must be 95, 128, 190, 256, or 512.
  * @example
  * halo.profile.halo5.emblemImage('Gamertag').then((image) => {
  *   //Do code here
  * });
  * @returns Promise that resolves with JSON from API
  */
    emblemImage(player: string, size: ImageSize = ImageSize.TWO_HUNDRED_FIFTY_SIX): Promise<any> {
      return this.httpWrapper.request(`${this.PROFILE_PATH}/${player}/emblem?size=${size}`)
    }

    /**
  * Returns spartanImage.
  * {@link https://developer.haloapi.com/docs/services/58acdc2e21091812784ce8c2/operations/Halo-5-Player-Spartan-Image?}
  * @param {string} - Player Gamertag
  * @param {ImageSize} - Size in pixels (default 256). Must be 95, 128, 190, 256, or 512.
  * @param {ImageCrop} - Crop; Used to determined portion of image returned. (default 'full'). Must be 'full' or 'portrait'.
  * @example
  * halo.profile.halo5.spartanImage('Gamertag').then((image) => {
  *   //Do code here
  * });
  * @returns Promise that resolves with JSON from API
  */
    spartanImage(player: string, size: ImageSize = ImageSize.TWO_HUNDRED_FIFTY_SIX, crop: ImageCrop = ImageCrop.FULL): Promise<any> {
      return this.httpWrapper.request(`${this.PROFILE_PATH}/${player}/spartan?size=${size}&crop=${crop}`)
    }
}