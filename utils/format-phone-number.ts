export function formatPhoneNumber(value: string, PREFIX: string = '+380 '): string {
   // Remove all non-digits
   const digits = value.replace(/[^\d]/g, '');
   
   // If empty or just country code, return prefix
   if (!digits || digits === '380' || digits === '38' || digits === '3') {
     return PREFIX;
   }
   
   // Normalize: remove leading 380 or 38 or 0 to get the actual number
   let phoneDigits = digits;
   if (digits.startsWith('380')) {
     phoneDigits = digits.slice(3);
   } else if (digits.startsWith('38') && digits.length > 2) {
     phoneDigits = digits.slice(2);
   } else if (digits.startsWith('0')) {
     phoneDigits = digits.slice(1);
   }
   
   // Limit to 9 digits (operator code + number)
   phoneDigits = phoneDigits.slice(0, 9);
   
   // If no digits after country code, return just prefix
   if (!phoneDigits) {
     return PREFIX;
   }
   
   // Format: +380 XX XXX XX XX
   let formatted = PREFIX;
   
   if (phoneDigits.length <= 2) {
     formatted += phoneDigits;
   } else if (phoneDigits.length <= 5) {
     formatted += phoneDigits.slice(0, 2) + ' ' + phoneDigits.slice(2);
   } else if (phoneDigits.length <= 7) {
     formatted += phoneDigits.slice(0, 2) + ' ' + phoneDigits.slice(2, 5) + ' ' + phoneDigits.slice(5);
   } else {
     formatted += phoneDigits.slice(0, 2) + ' ' + phoneDigits.slice(2, 5) + ' ' + phoneDigits.slice(5, 7) + ' ' + phoneDigits.slice(7, 9);
   }
   
   return formatted;
 }
 