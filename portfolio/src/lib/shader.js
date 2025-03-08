// Simple vertex shader that passes through the position
export const vertexShader = `
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Fragment shader with optimized calculations
export const fragmentShader = `
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

void main() {
    vec2 uv = (2.0 * gl_FragCoord.xy - uResolution.xy) / min(uResolution.x, uResolution.y);
    
    // Define a looping period in seconds
    float loopDuration = 60.0; // loop time
    float loopTime = mod(uTime, loopDuration) / loopDuration * 6.28318; // normalize the time

    // Slower, more subtle wave effect
    for(float i = 1.0; i < 10.0; i++){
        uv.x += 0.5 / i * cos(i * 2.0 * uv.y + loopTime);
        uv.y += 0.5 / i * cos(i * 1.2 * uv.x + loopTime);
    }
    
    float intensity = 0.12 / abs(sin(loopTime - uv.y - uv.x)); // how bright the lines and how big they can get

    vec3 baseColor = vec3(0.6, 0.6, 0.7); // metallic color +-

    float metallic = sin(uv.x * 4.0) * sin(uv.y * 4.0) * 0.1 + 0.9; 
    float highlight = pow(intensity * metallic, 1.5) * 0.7; // randomizes the colors 

    vec3 tint = vec3(
        0.9 + 0.1 * sin(uv.x * 2.0 + loopTime * 0.7),
        0.9 + 0.1 * sin(uv.y * 2.0 + loopTime * 0.5),
        1.0 + 0.1 * sin((uv.x + uv.y) * 1.5 + loopTime * 0.3)
    );

    vec3 color = baseColor * highlight * tint * intensity * 0.9; // combines the shader

    float vignette = 1.5 - smoothstep(0.5, 1.5, length(uv));
    color *= vignette * 1.2;

    gl_FragColor = vec4(color, 0.1); // alpha of the bg and the final combined shader 
}
`;