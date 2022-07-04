export class Company {
  companyId;
  currency;
  county;
  businessName;

  constructor(companyId, currency,  county, businessName) {
    this.companyId = this.setcompanyId(companyId);
    this.currency = this.setcurrency(currency);
    this.county = this.setcounty(county);
    this.businessName = this.setbusinessName(businessName);
  }
  setcompanyId(id) {
    this.companyId = id;
  }

  setcurrency(currency) {
    this.currency = currency;
  }

  setName(name) {
    this.name = name;
  }
  setcounty(county) {
    this.county = county;
  }
  setbusinessName(businessName) {
    this.businessName = businessName;
  }

  getName() {
    return this.name;
  }

  getbusinessName() {
    return this.businessName;
  }

  gettcounty() {
    return this.county;
  }

  getcurrency() {
    return this.currency;
  }

  getcompanyId() {
    return this.companyId;
  }
}
