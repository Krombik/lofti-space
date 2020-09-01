const indexToTwoDigit = (index: number) => `${index < 9 ? 0 : ""}${index + 1}`;

export default indexToTwoDigit;
