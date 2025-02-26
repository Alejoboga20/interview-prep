// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
	let diffs = 0;
	let p1 = 0;
	let p2 = 0;

	while (p1 < str1.length && p2 < str2.length) {
		const c1 = str1[p1];
		const c2 = str2[p2];

		if (c1 === c2) {
			p1++;
			p2++;
			continue;
		}

		diffs++;

		if (diffs > 1) return false;

		if (str1.length === str2.length) {
			p1++;
			p2++;
			continue;
		} else if (str1.length > str2.length) {
			p1++;
			continue;
		} else {
			p2++;
			continue;
		}
	}

	return true;
}
