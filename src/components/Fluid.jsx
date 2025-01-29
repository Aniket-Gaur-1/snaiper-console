// src/components/GLProgram.js
class GLProgram {
  constructor(vertexShaderSource, fragmentShaderSource) {
    const gl = document.createElement("canvas").getContext("webgl2");

    if (!gl) {
      console.error("WebGL2 is not supported!");
      return;
    }

    const vertexShader = this.createShader(
      gl,
      gl.VERTEX_SHADER,
      vertexShaderSource
    );
    const fragmentShader = this.createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );
    this.program = this.createProgram(gl, vertexShader, fragmentShader);
    this.attributes = {};
    this.uniforms = {};
    this.getAttributesAndUniforms(gl);
  }

  createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling shader!", gl.getShaderInfoLog(shader));
    }
    return shader;
  }

  createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("ERROR linking program!", gl.getProgramInfoLog(program));
    }
    gl.useProgram(program);
    return program;
  }

  getAttributesAndUniforms(gl) {
    const numAttributes = gl.getProgramParameter(
      this.program,
      gl.ACTIVE_ATTRIBUTES
    );
    const numUniforms = gl.getProgramParameter(
      this.program,
      gl.ACTIVE_UNIFORMS
    );

    for (let i = 0; i < numAttributes; i++) {
      const attribute = gl.getActiveAttrib(this.program, i);
      if (attribute) {
        this.attributes[attribute.name] = gl.getAttribLocation(
          this.program,
          attribute.name
        );
      }
    }

    for (let i = 0; i < numUniforms; i++) {
      const uniform = gl.getActiveUniform(this.program, i);
      if (uniform) {
        this.uniforms[uniform.name] = gl.getUniformLocation(
          this.program,
          uniform.name
        );
      }
    }
  }

  bind() {
    const gl = document.createElement("canvas").getContext("webgl2");
    gl.useProgram(this.program);
  }
}

export default GLProgram;
