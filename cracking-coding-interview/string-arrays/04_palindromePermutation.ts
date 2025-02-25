// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
	const cleanStr = str.toLowerCase().replace(' ', '');

	const hash: Record<string, number> = {};

	for (let i = 0; i < cleanStr.length; i++) {
		const current = cleanStr[i];

		if (!hash[current]) {
			hash[current] = 1;
		} else {
			hash[current] += 1;
		}
	}

	const oddChars = Object.keys(hash).filter((char) => hash[char] % 2 === 1);
	const isPalindromePermutation = oddChars.length <= 1;

	return isPalindromePermutation;
}

console.log(palindromePermutation('taco cat'));
