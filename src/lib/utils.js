/**
 * Applys
 * @param fn
 * @param args
 */
export const partial = (fn, ...args) => fn.bind(null, ...args);