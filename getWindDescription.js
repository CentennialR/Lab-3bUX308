function getWindDescription(speed) {
    if (speed < 0.3) return "Calm";
    if (speed < 1.5) return "Light air";
    if (speed < 3.3) return "Light breeze";
    if (speed < 20.7) return "Gale";
    if (speed < 32.6) return "Storm";
    return "Hurricane";
}

export { getWindDescription };