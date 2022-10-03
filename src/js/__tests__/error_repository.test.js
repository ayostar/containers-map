import ErrorRepository from '../error_repository';

const arrayErrors = [
  [1, 'Code - 1: Ошибка 1.'],
  [2, 'Code - 2: Ошибка 2.'],
  [3, 'Code - 3: Ошибка 2.'],
];

const errors = new ErrorRepository();

arrayErrors.forEach((error) => errors.set(...error));

console.log(errors); // => ErrorRepository(3) [Map] {
//     1 => 'Code - 1: Ошибка 1.',
//     2 => 'Code - 2: Ошибка 2.',
//     3 => 'Code - 3: Ошибка 2.',
//     unknownError: 'Unknown ERROR'
//   } Почему сюда попадает unknowError?

test.each([
  arrayErrors[2],
  arrayErrors[0],
  arrayErrors[1],
  [404, errors.unknownError],
  ['error', errors.unknownError],
])(
  'Should test class ErrorRepository - method translate(code)',
  (params, expected) => {
    const received = errors.translate(params);
    expect(expected).toBe(received);
  }
);
