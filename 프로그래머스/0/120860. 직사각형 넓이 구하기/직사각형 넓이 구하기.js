function solution(dots) {
    const xCoords = dots.map(dot => dot[0]);
    const yCoords = dots.map(dot => dot[1]);

    const width = Math.max(...xCoords) - Math.min(...xCoords);
    
    const height = Math.max(...yCoords) - Math.min(...yCoords);
    
    return width * height;
}