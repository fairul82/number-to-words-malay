
let SEPULUH = 10;
let SATU_RATUS = 100;
let SATU_RIBU = 1000;
let SATU_JUTA = 1000000;
let SATU_BILLION = 1000000000;           //         1.000.000.000 (9)
let SATU_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
let SATU_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
let MAX = 9007199254740992;    // 9.007.199.254.740.992 (15)

let LESS_THAN_12 = [
    'kosong',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'lapan',
    'sembilan',
    'sepuluh',
    'sebelas'
];


function toWords(number) {
    let remainder, word,
        words = arguments[1];

    if (number === 0) {
        return !words ? 'kosong' : words.join('').replace(/,$/, '');
    }

    if (!words) {
        words = [];
    }

    if (number < 0) {
        words.push(' negatif');
        number = Math.abs(number);
    }

    if (number < 12) {
        remainder = 0;
        word = LESS_THAN_12[number];

    } else if (number < 20) {
        remainder = 0;
        word = toWords(Math.floor(number % SEPULUH)) + ' belas ';

    } else if (number < SATU_RATUS) {
        remainder = number % SEPULUH;
        word = toWords(Math.floor(number / SEPULUH)) + ' puluh ';

    } else if (number < SATU_RIBU) {
        remainder = number % SATU_RATUS;
        word = toWords(Math.floor(number / SATU_RATUS)) + ' ratus ';

    } else if (number < SATU_JUTA) {
        remainder = number % SATU_RIBU;
        word = toWords(Math.floor(number / SATU_RIBU)) + ' ribu, ';

    } else if (number < SATU_BILLION) {
        remainder = number % SATU_JUTA;
        word = toWords(Math.floor(number / SATU_JUTA)) + ' juta, ';

    } else if (number < SATU_TRILLION) {
        remainder = number % SATU_BILLION;
        word = toWords(Math.floor(number / SATU_BILLION)) + ' billion, ';

    } else if (number < SATU_QUADRILLION) {
        remainder = number % SATU_TRILLION;
        word = toWords(Math.floor(number / SATU_TRILLION)) + ' trillion, ';

    } else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = toWords(Math.floor(number / ONE_QUADRILLION)) +
            ' quadrillion, ';
    }

    words.push(word);
    return toWords(remainder, words)
}





