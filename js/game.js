const game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'game-area',{
    preload : preload,
    create  : create,
    update  : update   
})


var jumpForce=0;

function preload() {

    game.load.image('sky','./Assets/sky.png')
    game.load.image('floor', './Assets/floor.png')
    game.load.image('cloud', './Assets/cloud.png')
    game.load.spritesheet('fit','./Assets/fit.png', 180, 200)

}

//var cloud_1;
//var cloud_2;

function create()  {


    game.physics.startSystem(Phaser.Physics.ARCADE)

    let sky = game.add.sprite(0,0,'sky')
    sky.scale.setTo(2.5,2.5)

    let cloud_1 = game.add.sprite(40,40,'cloud');
    cloud_1.scale.setTo(2,2)
    //cloud_1.fixedToCamera = true;

    let cloud_2 = game.add.sprite(220,150,'cloud');
    cloud_2.scale.setTo(1.5,1.5)
    //cloud_2.fixedToCamera = true;

    platforms = game.add.group()
    platforms.enableBody = true

    let ground = platforms.create(70, 400, 'floor')
    ground.scale.setTo(1,1)
    ground.body.immovable = true

    player = game.add.sprite(125, 200, 'fit')
    player.scale.setTo(0.5,0.5)
    game.physics.arcade.enable(player)
    player.body.bounce.y=0.2
    player.body.gravity.y=800
    player.body.collideWorldBounds=true

    player.animations.add('run', [0,1,2,3],4,true)
    player.animations.add('jump', [4,5,6,7,8],4,true)

    scoreText = game.add.text(16,16,'', {fontSize : '32px', fill:'#000'})
    cursors = game.input.keyboard.createCursorKeys()

}
function update()  {

     game.physics.arcade.collide(player,platforms)

    if(player.body.touching.down)
    {   
        player.animations.play('run')
        
        if(MouthOpen > 10)
        {   
            if(MouthOpen>20 &&  MouthOpen<=25){
                jumpForce=20;
                //jumpForce=0;
            }
            else if(MouthOpen>25 && MouthOpen<=30)
            {
                jumpForce=40;
            }
            else if(MouthOpen>30 && MouthOpen<40)
            {
                jumpForce=70;
            }

            else 
            {
                jumpForce=0;
            }

            player.body.velocity.y = -MouthOpen*jumpForce;
            player.animations.play('jump')

            MouthOpen=0;
        }

        if(cursors.up.isDown || game.input.pointer1.isDown)
        {
            
            player.body.velocity.y = -400
            player.animations.play('jump')
        }

    }

    //cloud_1.tilePosition.x -= 0.1;
    //cloud_2.tilePosition.x -= 0.4;
    //if(cloud_1.)

}