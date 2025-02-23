import Validator from "../utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
