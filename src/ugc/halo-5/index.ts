import { HttpWrapper } from '../../httpWrapper'
import { PlayerGameVariant, PlayerGameVariants, PlayerMapVariant, PlayerMapVariants } from './response'

export * from './response'

export enum Sort {
  NAME = 'name',
  DESCRIPTION = 'description',
  ACCESSIBILITY = 'accessibility',
  CREATED = 'created',
  MODIFIED = 'modified',
  BOOKMARK_COUNT = 'bookmarkCount'
}

export enum Order {
  ASCENDING = 'asc',
  DESCENDING = 'desc'
}

export class Halo5UGC {
  private httpWrapper: HttpWrapper
  private readonly UGC_PATH: string = '/ugc/h5'

  constructor(arg: HttpWrapper | string) {
    // argument is of type HttpWrapper
    if (typeof arg !== 'string')
      this.httpWrapper = arg
    // argument is of type string (API Key passed in)
    else
      this.httpWrapper = new HttpWrapper(arg)
  }

  /**
  * Returns Player Game Variant.
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40c?}
  * @param player - Player
  * @param variant - Variant (ID)
  * @example
  * ```ts
  * halo.ugc.halo5.playerGameVariant('Gamertag', 'ID').then((variant) => {
  *   //Do code here
  * });
  * ```
  * @see {@link PlayerGameVariant} for the returned data structure
  * @returns Promise that resolves with JSON from API
  */
  playerGameVariant(player: string, variant: string): Promise<PlayerGameVariant> {
    return this.httpWrapper.request(`${this.UGC_PATH}/players/${player}/gamevariants/${variant}`)
  }

  /**
  * Returns Player Game Variants.
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40d?}
  * @param player - Player
  * @param start - Starting Index (Default 0)
  * @param count - Count (Default 100)
  * @param sort - Sort (Default Modified)
  * @param order - Order (Default desc)
  * @example
  * ```ts
  * halo.ugc.halo5.playerGameVariants('Gamertag', 0, 100, Sort.MODIFIED, Order.DESCENDING).then((variants) => {
  *   //Do code here
  * });
  * ```
  * @returns Promise that resolves with JSON from API
  */
  playerGameVariants(player: string, start = 0, count = 100, sort: Sort = Sort.MODIFIED, order: Order = Order.DESCENDING): Promise<PlayerGameVariants> {
    start = start < 0 ? 0 : start
    count = count < 1 ? 1 : count

    return this.httpWrapper.request(`${this.UGC_PATH}/players/${player}/gamevariants?start=${start}&count=${count}&sort=${sort}&order=${order}`)
  }

  /**
  * Returns Player Map Variant.
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40e?}
  * @param player - Player
  * @param variant - Variant ID
  * @example
  * ```ts
  * halo.ugc.halo5.playerMapVariant('Gamertag', 'variantID').then((variant) => {
  *   //Do code here
  * });
  * ```
  * @returns Promise that resolves with JSON from API
  */
  playerMapVariant(player: string, variant: string): Promise<PlayerMapVariant> {
    return this.httpWrapper.request(`${this.UGC_PATH}/players/${player}/mapvariants/${variant}`)
  }

  /**
  * Returns Player Map Variants.<br/>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40f?}
  * @param player - Player
  * @param start - Starting Index (Default 0)
  * @param count - Count (Default 100)
  * @param sort - Sort (Default Modified)
  * @param order - Order (Default desc)
  * @example
  * ```ts
  * halo.ugc.halo5.playerMapVariants('Gamertag', 0, 100, Sort.MODIFIED, Order.DESCENDING).then((variants) => {
  *   //Do code here
  * });
  * ```
  * @returns Promise that resolves with JSON from API
  */
  playerMapVariants(player: string, start = 0, count = 25, sort: Sort = Sort.MODIFIED, order: Order = Order.DESCENDING): Promise<PlayerMapVariants> {
    start = start < 0 ? 0 : start
    count = count < 1 ? 1 : count

    return this.httpWrapper.request(`${this.UGC_PATH}/players/${player}/mapvariants?start=${start}&count=${count}&sort=${sort}&order=${order}`)
  }
}
