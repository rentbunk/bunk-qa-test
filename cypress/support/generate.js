import { faker } from '@faker-js/faker';

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const firstName = faker.internet.userName() + '_' + random;
  const lastName = faker.internet.userName() + '_' + random;
  const email = `${lastName}@mail.com`;
  const phone = faker.phone.phoneNumber('#######');
  const password = '12345Qwert!';

  return { firstName, lastName, email, phone, password };
}

module.exports = { generateUser };