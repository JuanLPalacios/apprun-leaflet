export type ContextBased<T, E = any> = T & {
    context?:E
};
