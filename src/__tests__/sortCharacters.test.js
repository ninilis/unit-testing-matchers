import { sortCharacters } from '../sortCharacters';

const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
];

test('should sort characters by health descending', () => {
    const result = sortCharacters(characters);
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    // ВАЖНО: toEqual для объектов, toBe НЕ РАБОТАЕТ!
    expect(result).toEqual(expected);
});