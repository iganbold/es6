// There are 4 types of exports:
// 1— Named exports (several per module) 
// 2— Default exports (one per module)
// 3 — Mixed named & default exports 
// 4— Cyclical Dependencies

// 1. Name exports
export const sqrt = Math.sqrt;
export function square(x = 0) {
    return x * x;
}

export function diag(x, y) {
    return sqrt(x) + sqrt(y);
}