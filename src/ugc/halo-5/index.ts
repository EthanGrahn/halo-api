import { HttpWrapper } from '../../httpWrapper'

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

export class Halo5 {
  private httpWrapper: HttpWrapper
  private readonly UGC_PATH: string = '/ugc/h5'

  constructor(httpWrapper: HttpWrapper) {
    this.httpWrapper = httpWrapper
  }

  /**
  * Returns Player Game Variant.</br>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40c?}
  * @param {string} player Player
  * @param {string} variant Variant (ID)
  * @example
  * halo.ugc.halo5.playerGameVariant('player', 'ID').then( (variant) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerGameVariant(player: string, variant: string): Promise<any> {
    return this.httpWrapper.request(`${this.UGC_PATH}/players/${player}/gamevariants/${variant}`)
  }

  /**
  * Returns Player Game Variants.</br>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40d?}
  * @param {string} player Player
  * @param {number} start Starting Index (Default 0)
  * @param {number} count Count (Default 100)
  * @param {Sort} sort Sort (Default Modified)
  * @param {Order} order Order (Default desc)
  * @example
  * halo.ugc.halo5.playerGameVariants('player', 0, 100, Sort.MODIFIED, Order.DESCENDING).then( (variants) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerGameVariants(player: string, start: number = 0, count: number = 100, sort: Sort = Sort.MODIFIED, order: Order = Order.DESCENDING): Promise<any> {
    start = start < 0 ? 0 : start
    count = count < 1 ? 1 : count

    return this.httpWrapper.request(`${this.UGC_PATH}/players/${player}/gamevariants?start=${start}&count=${count}&sort=${sort}&order=${order}`)
  }

  /**
  * Returns Player Map Variant.</br>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40e?}
  * @param {string} player Player
  * @param {string} variant Variant ID
  * @example
  * halo.ugc.halo5.playerMapVariant('player', 'variantID').then( (variant) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerMapVariant(player: string, variant: string): Promise<any> {
    return this.httpWrapper.request(`${this.UGC_PATH}/players/${player}/mapvariants/${variant}`)
  }

  /**
  * Returns Player Map Variants.</br>
  * {@link https://developer.haloapi.com/docs/services/58acde2921091812784ce8c3/operations/58acde292109180bdcacc40f?}
  * @param {string} player Player
  * @param {number} start Starting Index (Default 0)
  * @param {number} count Count (Default 100)
  * @param {Sort} sort Sort (Default Modified)
  * @param {Order} order Order (Default desc)
  * @example
  * halo.ugc.halo5.playerMapVariants('player', 0, 100, Sort.MODIFIED, Order.DESCENDING).then( (variants) => {
  *   //Do code here
  * });
  * @returns {Promise} Promise of JSON from API
  */
  playerMapVariants(player: string, start: number = 0, count: number = 25, sort: Sort = Sort.MODIFIED, order: Order = Order.DESCENDING): Promise<any> {
    start = start < 0 ? 0 : start
    count = count < 1 ? 1 : count

    return this.httpWrapper.request(`${this.UGC_PATH}/players/${player}/mapvariants?start=${start}&count=${count}&sort=${sort}&order=${order}`)
  }
}
