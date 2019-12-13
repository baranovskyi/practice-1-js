
export default function sumDigits(n) {
    return Array.from(String(n)).reduce((x, y) => x + Number(y), 0)
}
