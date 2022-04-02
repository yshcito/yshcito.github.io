export class Game extends Phaser.Scene{


    constructor(){
        super({ key : "game" });
    }


    preload(){
        this.load.image("btn", "38586419-botón-de-flecha-vector.webp");
        this.load.image("player", "player.png");

    }


    create(){
        this.btnLeft = this.add.image(100,100, "btn").setScale(0.1).setInteractive().setAngle(180);
        this.btnDown = this.add.image(200,100, "btn").setScale(0.1).setInteractive().setAngle(270);
        this.btnRight = this.add.image(300,100, "btn").setScale(0.1).setInteractive().setAngle(0);
        this.btnUp = this.add.image(400,100, "btn").setScale(0.1).setInteractive().setAngle(90);

        this.player = this.physics.add.sprite(100, 300, "player").setScale(0.1);
        this.player.body.allowGravity = false;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }


    update(){

        if(this.cursors.right.isDown || this.right){
            this.player.setVelocityX(100);
        }
        else if(this.cursors.left.isDown || this.left){
            this.player.setVelocityX(-100);
        }
        else{
            this.player.setVelocityX(0);
        }

        
        if(this.cursors.up.isDown || this.up){
            this.player.setVelocityY(100);
        }
        else if(this.cursors.down.isDown || this.down){
            this.player.setVelocityY(-100);
        }
        else{
            this.player.setVelocityY(0);
        }






        this.btnLeft.on("pointerdown", ()=>{
            this.left = true
        });
        this.btnLeft.on("pointerup", ()=>{
            this.left = false;
        })


        
        this.btnDown.on("pointerdown", ()=>{
            this.down = true
        });
        this.btnDown.on("pointerup", ()=>{
            this.down = false;
        })

        
        this.btnUp.on("pointerdown", ()=>{
            this.up = true
        });
        this.btnUp.on("pointerup", ()=>{
            this.up = false;
        })


        
        this.btnRight.on("pointerdown", ()=>{
            this.right = true
        });
        this.btnRight.on("pointerup", ()=>{
            this.right   = false;
        })

    
    }
    
    

}