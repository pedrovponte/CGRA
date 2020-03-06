/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTangram extends CGFobject {
    constructor(scene) {
		super(scene);
    
        this.diamond = new MyDiamond(scene);
        this.bigTriangle1 = new MyTriangleBig(scene);
        this.bigTriangle2 = new MyTriangleBig(scene);
        this.pgram = new MyParallelogram(scene);
        this.triangle = new MyTriangle(scene);
        this.smallTriangle1 = new MyTriangleSmall(scene);
        this.smallTriangle2 = new MyTriangleSmall(scene);
        
    }

    display() {
        //move diamond
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2,1,0,0);
        this.scene.translate(2.6,-3.6,0.01);
        this.scene.scale(0.8,0.8,0.8);
        this.scene.translate(0.3,0,0);
        this.scene.pushMatrix();
        // var move_diamond = [
        //     1.0, 0.0, 0.0, 0.0,
        //     0.0, 1.0, 0.0, 0.0,
        //     0.0, 0.0, 1.0, 0.0,
        //     -1.4, 2.5, 0.0, 1.0 
        // ];
        // this.scene.multMatrix(move_diamond);

        this.scene.translate(-1.8, 3.5, 0); 
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI*3/4, 0, 0, 1);
        this.scene.translate(1.5, -0.5, 0);
        this.bigTriangle1.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.scene.translate(-2,-1,0);
        this.pgram.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.translate(-0.2, -1.8, 0);
        this.bigTriangle2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI*3/4, 0, 0, 1);
        this.scene.translate(1.2, 2.8, 0);
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(3, 0, 0);
        this.smallTriangle1.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.scene.translate(4.3, -0.2, 0);
        this.smallTriangle2.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        
    }
}