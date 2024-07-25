// let ism = prompt('birdan 7 gacha son kiriting:')


// let fruit = 'son';

// switch (fruit) {
//   case '1':
//     alert('dushanba');
//     break;
//   case '2':
//     alert('seshanba');
//     break;
//   case '3':
//     alert('chorshnaba');
//     break;
//     case '4':
//     alert('payshanba');
//     break;
//   case '5':
//     alert('juma');
//     break;
//   case '6':
//     alert('shanba');
//     break;
//     case '7':
//     alert('yakshanba');
//     break;

//   default:
//     alert('Unknown .');
// }

// let kun = prompt('Hafta kunini raqam bilan kiriting (1-7):');
// kunIndex = parseInt(kun);

// let hafta = [
//   'Dushanba',
//   'Seshanba',
//   'Chorshanba',
//   'Payshanba',
//   'Juma',
//   'Shanba',
//   'Yakshanba'
// ];


// if (Number.isInteger(kun) && kun >= 1 && kun <= 7) {

//   alert('Bugun: ' + hafta[kun - 1]);
// } else {
  
//   alert('Iltimos, 1 dan 7 gacha bo\'lgan raqam kiriting.');
// }









// Foydalanuvchidan hafta kunini raqam bilan kiritishni so'rash
let son = prompt('Hafta kunini raqam bilan kiriting (1-7):');

// Kiritilgan qiymatni son sifatida olish
son = parseInt(son, 10);

// Hafta kunlarini belgilash
const haftaKunlari = [
  'Dushanba',
  'Seshanba',
  'Chorshanba',
  'Payshanba',
  'Juma',
  'Shanba',
  'Yakshanba'
];

// Sonning to'g'riligi va doiraligi tekshiriladi
if (Number.isInteger(son) && son >= 1 && son <= 7) {
  // Hafta kunini chiqarish
  alert('Bugun: ' + haftaKunlari[son - 1]);
} else {
  // Noto'g'ri son kiritilganini bildiruvchi xabar
  alert('Iltimos, 1 dan 7 gacha bo\'lgan raqam kiriting.');
}

