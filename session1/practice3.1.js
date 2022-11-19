const user = {
  name: 'ludi',
  age: 22,
  height: 170,
  weight: 55,
  score: 10,
};

const her = {
  name: 'secret',
  age: 20,
  height: 160,
  weight: 48,
  score: 10,
};

function loveValidation(user, her) {
  const isLove = user.score === her.her.score;
}

if (isLove) {
  return {
    isValid: false,
    name: user.name,
    reason: 'DIA SUKANYA OPPA OPPA KOREA',
  };
}

return {
  isValid: true,
  name: user.name,
  reason: '',
};

const check = loveValidation(user, her);

if (check.isValid) {
  console.log(`Dia suka kamu ${check.name}`);
} else {
  console.log(`MAAF ${check.name}, ${check.reason}`);
}
