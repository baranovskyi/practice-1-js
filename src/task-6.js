
export default function getStats(data) {
    if (data.length > 0 ) {
        return {
            min: Math.min(...data),
            max: Math.max(...data),
            avg: data.reduce((sum, curr) => {
                return sum + curr
            }) / data.length
        }
    }
        return {
            min: null,
            max: null,
            avg: null
        };
}
