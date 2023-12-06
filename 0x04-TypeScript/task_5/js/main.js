function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits'
    };
}
var majorSubject1 = { credits: 3, brand: 'MajorCredits' };
var majorSubject2 = { credits: 4, brand: 'MajorCredits' };
var minorSubject1 = { credits: 1, brand: 'MinorCredits' };
var minorSubject2 = { credits: 2, brand: 'MinorCredits' };
var resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
var resultMinor = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Sum of Major Credits:', resultMajor); // Should print { credits: 7, brand: 'MajorCredits' }
console.log('Sum of Minor Credits:', resultMinor); // Should print { credits: 3, brand: 'MinorCredits' }
