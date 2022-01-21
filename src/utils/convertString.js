export const capitalize = (string) => {
    const firstLetter = string[0].toUpperCase();
    const restWord = string.slice(1, string.length).toLowerCase();
    return firstLetter + restWord;
};
