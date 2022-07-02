class Payment {
    paymentCustomerName;
    paymentAmount;
    paymentDate;



    constructor(paymentCustomerName,paymentAmount,paymentDate) {
        this.setPaymentCustomerName(paymentCustomerName);
        this.setPaymentAmount(paymentAmount);
        this.setPaymentDate(paymentDate);

    }
    setPaymentCustomerName(paymentCustomerName) {
        this.paymentCustomerName = paymentCustomerName;
    }
    setPaymentAmount(paymentAmount) {
        this.paymentAmount = paymentAmount;
    }
    setPaymentDate(paymentDate) {
        this.paymentDate = paymentDate;
    }
    getPaymentCustomerName() {
        return this.paymentCustomerName;
    }
    getPaymentAmount() {
        return this.paymentAmount;
    }
    getPaymentDate() {
        return this.paymentDate;
    }

}