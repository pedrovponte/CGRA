/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0.5,	//0
			-0.5, 0.5, 0.5,	    //1
			0.5, 0.5, 0.5,	    //2
            0.5, -0.5, 0.5,		//3
            -0.5, -0.5, -0.5,   //4
            -0.5, 0.5, -0.5,    //5
            0.5, 0.5, -0.5,     //6
            0.5, -0.5, -0.5     //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            3, 1, 0, //frente
            1, 3, 2,
            4, 1, 0, //esquerda
            1, 4, 5,
            4, 0, 3, //baixo
            4, 3, 7,
            6, 2, 3, //direita
            6, 3, 7,
            5, 1, 2, //cima
            5, 2, 6,
            6, 5, 4, //tras
            6, 4, 7
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}