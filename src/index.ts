/**
 * Converts A to B and returns an object that can continue the conversion
 * @param a Data that needs to be transformed
 * @param transformer Transfer function
 * @returns
 * ```ts
 * { data, transform }
 * ```
 * @example
 * ```ts
 * const a = { a: 'test'}
 * transformA2B(a, (a) => {
 *  return {
 *    ...a,
 *    b: 'test'
 *  }
 * }).transform((b) => {
 *  return {
 *    ...b,
 *    c: 'test' as 'test'
 *  }
 * }).data;
 * // { a: 'test', b: 'test', c: 'test' }
 * ```
 */
export const transformA2B = <A, B>(a: A, transformer: (a: A) => B) => {
  const b = transformer(a);
  return {
    /**
     * The converted data
     */
    data: b,
    /**
     * Continuation conversion
     */
    transform<C>(transformer: (b: B) => C) {
      return transformA2B(b, transformer);
    },
  };
};
