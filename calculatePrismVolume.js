function calculatePrismVolume(sideLength, height) {
    let baseArea = (1.732 / 4) * (sideLength * sideLength);
    return baseArea * height;
}

export { calculatePrismVolume };