
export default function formatTime(seconds) {
    const hour24 = Math.floor((seconds / 3600) % 24);
    const dayPart = (hour24 < 12) ? 'AM' : 'PM';
    let hour12 = hour24 % 12;
    hour12 = (hour12 === 0) ? 12 : hour12;
    let minutes = Math.floor((seconds % 3600) / 60);
    let second = seconds % 60
    function fmt(x) {
        return ((x <= 9) ? '0': '') + String(x);
    }
    return `${fmt(hour12)}:${fmt(minutes)}:${fmt(second)} ${dayPart}`;
}
