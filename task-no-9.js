function alphabetical_order(text) {
    //check if value is a string
    if (typeof text !== 'string') {
        return false
    }
    // if value is a string then,
    return text.split('').sort().join('');
}

console.log(alphabetical_order(9877));
console.log(alphabetical_order("9877"));
console.log(alphabetical_order("nvgyalo"));