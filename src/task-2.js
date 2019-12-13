
export default function getNthItem(a, n) {
    return (n > 0) ? (a - 2 * getNthItem(a, n - 1)) : 0;
}
