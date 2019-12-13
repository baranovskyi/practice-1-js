
export default function isTriangle(a, b, c) {
    if ((a < b + c) && (b < a + c) && ( c < a + b)){
        return true;
    } 
    return false;
}
