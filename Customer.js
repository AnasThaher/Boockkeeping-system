
class Customer {
    customerName;
    customerId;
    companyId;
    customers = ['ruba','alaa'];
    

    constructor(customerId,customerName,companyId) {
        this.setCustomerId(customerId);
        this.setCustomerName(customerName);
        this.setCompanyId(companyId);

    }
    setCustomerId(customerId) {
        this.customerId = customerId;
    }
    setCustomerName(customerName) {
        this.customerName = customerName;
    }
    setCompanyId(companyId) {
        this.companyId = companyId;
    }
    getCustomerId() {
        return this.customerId;
    }
    getCustomerName() {
        return this.customerName;
    }
    getCompanyId() {
        return this.companyId;
    }

}
console.log(new Customer(1,'ruba',123).customers);






