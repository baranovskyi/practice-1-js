
export default function trim(text, maxLength) {
    if (maxLength < 1) {
        throw new RangeError('enter valid number')
    }
    if (text.length > maxLength) {
      return `${text.substr(0, maxLength - 1)}…`
    }
    return text;
}
