export function add(...args) {
    return args.reduce((pv, cv) => pv + cv)
}