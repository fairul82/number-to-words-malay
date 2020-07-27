const toWords = require('../src/toWords');

test('11 = sebelas', () => {
    expect(toWords(11)).toBe('sebelas');
});

test('103 = satu ratus tiga', () => {
    expect(toWords(103)).toBe('satu ratus tiga');
});

test('515 = lima ratus lima belas', () => {
    expect(toWords(515)).toBe('lima ratus lima belas ');
});

test('1789 = satu ribu tujuh ratus lapan puluh sembilan', () => {
    expect(toWords(1789)).toBe('satu ribu, tujuh ratus lapan puluh sembilan');
});

test('100189 = satu ratus ribu, satu ratus lapan puluh sembilan', () => {
    expect(toWords(100189)).toBe('satu ratus  ribu, satu ratus lapan puluh sembilan');
});