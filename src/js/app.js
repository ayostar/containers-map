import ErrorRepository from './error_respository';

const errors = new ErrorRepository();
errors.set(201, 'Code - 201: Created.');
errors.set(404, 'Code - 404: Not Found.');
console.log(errors.keys);
