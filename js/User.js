class User {
  #userId;
  #companyId;
  #password;
  #name;
  #email;
  constructor(userId, companyId, password, name, email) {
    this.#password = this.setPassword(password);
    this.#name = this.setName(name);
    this.#email = this.setEmail(email);
    this.userId = this.setUserId(userId);
    this.#companyId = this.setCompanyId(companyId);
  }

  setUserId(id) {
    this.#userId = id;
  }
  setCompanyId(companyId) {
    this.#companyId = companyId;
  }

  setPassword(password) {
    this.password = password;
  }

  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.#email = email;
  }

  getUserId() {
    return this.#userId;
  }

  getEmail() {
    return this.#email;
  }

  getCompanyId() {
    return this.#companyId;
  }

  getPassword() {
    return this.#password;
  }

  getName() {
    return this.name;
  }






}
