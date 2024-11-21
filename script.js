function maxDaysInMonth(month, year) {
    if (month < 1 || month > 12) return 0;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Vérification pour les années bissextiles
    if (month === 2 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
        return 29;
    }
    return daysInMonth[month - 1];
}
   return day > 0 && day <= maxDaysInMonth(month, year);
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Nettoyage des caractères non alphanumériques
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;}
function getNextPalindromes(count) {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1; // Les mois commencent à 0
    let year = today.getFullYear();
        // Incrémenter le jour
    }
    return results;
    function isPalindrome(str) {
        const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    } 
    function isDatePalindrome(dateStr) {
        if (!isValidDate(dateStr)) return false;
        const cleanedDate = dateStr.replace(/\//g, '');
        return isPalindrome(cleanedDate);
    }
    console.log(isValidDate("03/04/2001"));
console.log(isValidDate("31/11/2023")); // false
console.log(isDatePalindrome("11/02/2011")); // true
console.log(isDatePalindrome("03/04/2001")); // false
console.log(getNextPalindromes(8));
[
    "22/02/2022",
    "03/02/2030",
    "13/02/2031",
    "23/02/2032",
    "04/02/2040",
    "14/02/2041",
    "24/02/2042",
    "05/02/2050"
  ]
  

