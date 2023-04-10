export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const paginate = <T,>(array: T[], page_size: number, page_number: number) => {
    return array.slice((page_number) * page_size, (page_number + 1) * page_size);
}
