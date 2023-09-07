export const useVariable = (variable: string) => {
    return getComputedStyle(document.body)
    .getPropertyValue(`--grams-${variable}`);
}
