export interface MajorCredits {
	credits: number & { __brand: 'MajorCredits.credits' };
}

export interface MinorCredits {
	credits: number & { __brand: 'MinorCredits.credits' };
}

export function sumMajorCredits(
	subject1: MajorCredits,
	subject2: MajorCredits
): MajorCredits {
	return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(
	subject1: MinorCredits,
	subject2: MinorCredits
): MinorCredits {
	return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Example usage
const subject1: MajorCredits = { credits: 50 as MajorCredits['credits'] };
const subject2: MajorCredits = { credits: 70 as MajorCredits['credits'] };

const majorSum = sumMajorCredits(subject1, subject2);
console.log(majorSum); // Output: { credits: 120 }

const subject3: MinorCredits = { credits: 20 as MinorCredits['credits'] };
const subject4: MinorCredits = { credits: 40 as MinorCredits['credits'] };

const minorSum = sumMinorCredits(subject3, subject4);
console.log(minorSum); // Output: { credits: 60 }
