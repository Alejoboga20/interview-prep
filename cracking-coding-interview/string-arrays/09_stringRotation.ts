// 9. *String Rotation*;

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
// [e.g., "waterbottle" is a rotation of 'erbottlewat")

/* 
waterbottle | erbottlewat
*/

function isSubstring(s1: string, s2: string): boolean {
	return s1.includes(s2);
}

export default function stringRotation(s1: string, s2: string): boolean {
	let isRotation = false;
	let rotatedString = s2;

	for (let i = 0; i < s1.length; i++) {
		if (rotatedString === s1) {
			isRotation = true;
			break;
		}

		rotatedString =
			rotatedString.slice(1, rotatedString.length) + rotatedString[0];
	}

	return isRotation;
}
