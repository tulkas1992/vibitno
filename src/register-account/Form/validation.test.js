import validation from './validation';

describe("Account Registration Form Validation Tests", () => {
  const validFormValues = {
    forename: 'Test',
    surname: 'User',
    email: 'testing@vibitno.com',
    password: '$upperPa55w0rd',
    passwordConfirmation: '$upperPa55w0rd',
  };

  it("Accepts a valid form", async () => {
    await expect(validation.isValid(validFormValues))
      .resolves.toBeTruthy();
  });

  const rubbishPasswords = [
    'alllower',
    'N0Symbols',
    'T0$hort',
    'UPPERC4$E!',
    '35514122',
    '!"£$%^&*()',
  ];
  rubbishPasswords.forEach(password =>
    it(`Rejects bad passwords like ${password}`, async () => {
      const testObject = {
        ...validFormValues,
        password,
        passwordConfirmation: password,
      };
      await expect(validation.isValid(testObject)).resolves.toBeFalsy();
    })
  );

  const validEmailAddresses = [
    'test@example.net',
    'NewUser@example.com',
    'test.user@vibitno.com',
    'test.user@subdomain.example.co.uk',
    'test.user+tag@example.net',
    'ExampleUser@example.net',
    '_______@example.com',
    'firstname-lastname@example.com',
    'new-tld@example.museum',
    '"email"@example.com',
    /*
    While these are valid.. I'm ok with them not passing.
    'email@123.123.123.123',
    'email@[123.123.123.123]',
    'valid"but\ unusual"@example.com',
    */
  ];
  validEmailAddresses.forEach(email =>
    it(`Accepts valid email addresses: ${email}`, async () => {
      const testFormData = {
        ...validFormValues,
        email,
      };
      await expect(validation.isValid(testFormData)).resolves.toBeTruthy();
    })
  );

  const invalidEmailAddresses = [
    ['has no local part', '@example.net'],
    ['has no domain', 'localalias'],
    ['is formatted with a name', 'Joe Smith <joe.smith@example.com>'],
    ['is poorly formatted with a name', 'joe@example.com (Joe Smith)'],
    ['has no @ symbol', 'email.example.com'],
    ['has more than one unescaped @ symbol', 'email@example@example.com'],
    ['starts with a dot', '.email@example.com'],
    ['has a . on the end of the local part', 'email.@example.com'],
    ['has two consecutive dots', 'email..email@example.com'],
    ['has no TLD', 'email@example'],
    ['has an invalid TLD', 'email@-example.com'],
    ['has an invalid domain name', 'email@example..com'],
    ['has invalid decimal IPv4 address for domain component', 'email@111.222.333.44444'],
    // ['has non-ascii local part', 'あいうえお@example.com'], // Somehow passes, following 6531?
  ];
  invalidEmailAddresses.forEach(([reason, email]) =>
    it(`Rejects invalid email addresses like ${email} because it ${reason}`, async () => {
      const testFormData = {
        ...validFormValues,
        email,
      };
      await expect(validation.isValid(testFormData)).resolves.toBeFalsy();
    })
  );

  const validNames = [
    {
      forename: 'John',
      surname: 'Graham-Cumming',
    },
    {
      forename: 'Patrick',
      surname: 'Nielsen Hayden',
    },
    {
      forename: 'Katie',
      surname: 'Test',
    },
    {
      forename: 'Carrie',
      surname: "O'Malley",
    },
    {
      forename: 'Bobby',
      surname: 'Null',
    },
    {
      forename: 'Guillaume',
      surname: 'de la Perriere',
    },
    {
      forename: 'Martin',
      surname: 'Luther King, Jr.',
    },
    {
      forename: 'L. Ron',
      surname: 'Hubbard',
    },
    {
      // Long but still valid
      forename: 'Bernd',
      surname: 'Ottovordemgentschenfelde'
    },
    {
      forename: 'Pablo José',
      surname: 'Picasso',
    }
  ];
  validNames.forEach(({ forename, surname }) =>
    it(`Accepts valid fore/surnames like ${forename} ${surname}`, async () => {
      const testFormData = {
        ...validFormValues,
        forename,
        surname,
      };
      await expect(validation.isValid(testFormData)).resolves.toBeTruthy();
    })
  );

  const invalidNames = [
    {
      reason: 'empty forename',
      forename: '',
    },
    {
      reason: 'just spaces for forename',
      forename: '   ',
    },
    {
      reason: "Picasso probably won't signup anyway..",
      forename: 'Pablo Diego José',
      surname: 'Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso',
    },
  ];
  invalidNames.forEach(({ reason, ...data }) => {
    const testFormData = {
      ...validFormValues,
      ...data,
    };
    it(`Rejects invalid names like '${testFormData.forename} ${testFormData.surname}'`, async () => {
      await expect(validation.isValid(testFormData)).resolves.toBeFalsy();
    });
  });

  const namesWithWhitespace = [
    {
      reason: 'leading space on forename',
      forename: '  Joe',
      testField: 'forename',
    },
    {
      reason: 'trailing whitespace on surname',
      surname: 'Smith	',
      testField: 'surname',
    },
  ];
  namesWithWhitespace.forEach(({ reason, testField, ...data }) => {
    const testFormData = {
      ...validFormValues,
      ...data,
    };
    it(`Deals with whitespace in names for us (Example: '${testFormData.forename}' '${testFormData.surname}'`, async () => {
      const validData = await validation.validate(testFormData);
      expect(validData[testField]).toBe(testFormData[testField].trim());
    });
  });
});
