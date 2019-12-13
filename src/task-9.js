
export default function merge(data) {
    let res = {};
    data.forEach(object => {
        for (let prop in object) {
            if (prop in res) {
                res[prop].push(object[prop]);
            } else {
                res[prop] = [object[prop]]
            }
        }
    });
    return res;
}
