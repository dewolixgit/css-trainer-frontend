/**
 * Выводит тип, равный объединению чисел
 * от 0 до переданного первым дженериком числа, не включая его.
 * Второй дженерик передавать не нужно
 *
 * @example
 * type E = Enumerate<5>; // 0 | 1 | 2 | 3 | 4
 */
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * Выводит тип, равный объединению чисел от переданного первым дженериком числа
 * до переданного вторым дженериком числа, не включая его.
 *
 * @example
 * type R = IntRange<4, 9>; // 4 | 5 | 6 | 7 | 8
 */
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
