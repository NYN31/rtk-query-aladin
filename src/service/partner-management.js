import Service from './index';

const PARTNER_SEARCH_PATH = '/partner/all';

export default class PartnerManagement {
  static async getAllPartner() {
    return Service.get(`${PARTNER_SEARCH_PATH}`).then(
      response => response.data
    );
  }
}
