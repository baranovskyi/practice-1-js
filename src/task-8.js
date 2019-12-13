
export default function getTopLetter(str) {
    let count = 0,
        letter = "";
    const m = new Map();

    [...str].filter(x => {
        if (!m.has(x)) {
            m.set(x, 1);
        } else {
            m.set(x, m.get(x) + 1); a
        }
        return false;
    });

    m.forEach((value, key) => {
        if (value > count) {
            count = value;
            letter = key;
        }
    });

    return letter;
}
