class ErrorRepository extends Map {
  constructor(...args) {
    super(...args);
    this.unknownError = 'Unknown ERROR';
  }
  translate(code) {
    return this.has(code) ? this.get(code) : this.unknownError;
  }
}

export { ErrorRepository as default };
