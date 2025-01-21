/* 
Roman to integers
I: 1, V: 5, X: 10, L: 50, C: 100,D: 500,M: 1000,

*/

const romanToIntegerMap = new Map();

romanToIntegerMap.set('I', 1);
romanToIntegerMap.set('V', 5);
romanToIntegerMap.set('X', 10);
romanToIntegerMap.set('L', 50);
romanToIntegerMap.set('C', 100);
romanToIntegerMap.set('D', 500);
romanToIntegerMap.set('M', 1000);

const firstTest = 'III';
const secondTest = 'IX';

const romanToInt = (romanNumber = '') => {
	let intNumber = 0;

	for (let i = 0; i < romanNumber.length; i++) {
		const num = romanToIntegerMap.get(romanNumber[i]);
		const nextNum = romanToIntegerMap.get(romanNumber[i + 1]);

		console.log({ num, nextNum });

		if (nextNum !== undefined && nextNum > num) {
			intNumber -= num;
		} else {
			intNumber += num;
		}
	}

	return intNumber;
};

console.log(romanToInt(firstTest));
console.log(romanToInt(secondTest));
