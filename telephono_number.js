function telephoneCheck(str) {
    let s= /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
    return s.test(str);
  }
  
  telephoneCheck("555-555-5555");