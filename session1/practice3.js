// VOID CASE
const user = {
  name: 'Dhafa',
  age: 15,
  amount: 0,
};

const movie = {
  name: 'Hentai The Movie',
  ticketPrice: 10000,
  minAge: 13,
};

// WITH RETURN DATA TYPE CASE (BEST PRACTICE) & Isolate the logic
function ticketValidation(user, movie) {
  const isAdult = user.age >= movie.minAge;
  const worthiness = user.amount >= movie.ticketPrice;

  // check negative case first
  if (isAdult && !worthiness) {
    return {
      isValid: false,
      name: user.name,
      reason: 'Kamu miskin',
    };
  }

  // check negative case first
  if (!isAdult && worthiness) {
    return {
      isValid: false,
      name: user.name,
      reason: 'Kamu belum dewasa',
    };
  }

  // check negative case first
  if (!isAdult && !worthiness) {
    return {
      isValid: false,
      name: user.name,
      reason: 'Kamu gak layak',
    };
  }

  // check positive case
  return {
    isValid: true,
    name: user.name,
    reason: '',
  };
}

const check = ticketValidation(user, movie);

if (check.isValid) {
  console.log(`Selamat ${check.name}`);
} else {
  console.log(`Maaf ${check.name}, ${check.reason}`);
}
