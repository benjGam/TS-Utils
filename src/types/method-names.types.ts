export type MethodNames<T> = Extract<
  keyof T,
  {
    [K in keyof T]: T[K] extends Function ? K : never;
  }[keyof T]
>;
