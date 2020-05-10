	
	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(50,
	window.innerWidth/window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	
var controls;

var texture = new THREE.TextureLoader().load( 'suntexture.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture } );

// Sun (spotlight).
var sun = new THREE.SphereGeometry(3, 1, 1);
var sun2 = new THREE.SphereGeometry(3, 50, 50);

var sunLight = new THREE.PointLight(0xffffff); 
sunLight.position.set(0, 0, 0); 
sunLight.castShadow = true; 
sunLight.shadowMapWidth = 1024; 
sunLight.shadowMapHeight = 1024; 
sunLight.shadowCameraNear = 500; 
sunLight.shadowCameraFar = 4000;
sunLight.add(new THREE.Mesh(sun, new THREE.MeshBasicMaterial({ color: 0xffa500 })));
sunLight.shadowCameraFov = 30;
scene.add(sunLight);

var sunsphere = new THREE.Mesh( sun2, material );
scene.add( sunsphere );




// Extra lighting.
var light = new THREE.PointLight( 0xffffff, 0.5, 100 );
light.position.set(0, 0, 50);
scene.add( light );

var light2 = new THREE.PointLight( 0xffffff, 0.5, 100 );
light2.position.set(0, 0, -50);
scene.add( light2 );

var light3 = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

// mercury.
var geometry = new THREE.SphereGeometry(0.3, 10, 10);

var texture = new THREE.TextureLoader().load( 'mercurytexture.jpg' );
var material = new THREE.MeshLambertMaterial( { map:texture } );
var mercury = new THREE.Mesh( geometry, material );
mercury.position.set(-5, 0, -5);

scene.add(mercury);

// Venus.
var geometry = new THREE.SphereGeometry(0.4, 20, 20);
var texture = new THREE.TextureLoader().load( 'venustexture.jpg' );
var material = new THREE.MeshLambertMaterial( { map:texture } );
var venus = new THREE.Mesh( geometry, material );
venus.position.set(-7, 0, 7);
scene.add(venus);

// Earth.
var geometry = new THREE.SphereGeometry(0.6, 20, 20);
var texture = new THREE.TextureLoader().load( 'earthtexture.jpg' );
var material = new THREE.MeshLambertMaterial( { map:texture } );
var earth = new THREE.Mesh( geometry, material );
earth.position.set(20, 0, -20);
scene.add(earth);

// Mars.
var geometry = new THREE.SphereGeometry(0.5, 20, 20);
var texture = new THREE.TextureLoader().load( 'marstexture.jpg' );
var material = new THREE.MeshLambertMaterial( { map:texture } );
var mars = new THREE.Mesh( geometry, material );
mars.position.set(10, 0, 10);
scene.add(mars);

// Jupiter.
var geometry = new THREE.SphereGeometry(2, 20, 20);
var texture = new THREE.TextureLoader().load( 'jupitertexture.jpg' );
var material = new THREE.MeshLambertMaterial( { map:texture } );
var jupiter = new THREE.Mesh( geometry, material );
jupiter.position.set(20, 0, -20);
scene.add(jupiter);

// Saturn.
var geometry = new THREE.SphereGeometry(1.2, 20, 20);
var texture = new THREE.TextureLoader().load( 'saturntexture.jpg' );
var material = new THREE.MeshLambertMaterial( { map:texture } );
var saturn = new THREE.Mesh( geometry, material );
saturn.position.set(-10, 0, -20);
scene.add(saturn);

// Uranus.
var geometry = new THREE.SphereGeometry(1, 20, 20);
var texture = new THREE.TextureLoader().load( 'uranustexture.png' );
var material = new THREE.MeshLambertMaterial( { map:texture } );
var uranus = new THREE.Mesh( geometry, material );
uranus.position.set(20, 0, -20);
scene.add(uranus);

// Neptune.
var geometry = new THREE.SphereGeometry(1, 20, 20);
var texture = new THREE.TextureLoader().load( 'neptunetexture.jpg' );
var material = new THREE.MeshLambertMaterial( { map:texture } );
var neptune = new THREE.Mesh( geometry, material );
neptune.position.set(50, 0, -20);
scene.add(neptune);






var geometry2 = new THREE.Geometry();

var actionZ = 0; //on left click action
var rotationA = 3.1; // amount of rotation
var movementSpeed = 10;
var zoomSpeed = 10;
var totalObjects = 40000;

var rotated = false; 
var container = document.createElement('div');
document.body.appendChild( container );

scene.fog = new THREE.FogExp2( 0x000000, 0.001 );  


for (i = 0; i < totalObjects; i ++) 
{ 
  var vertex = new THREE.Vector3();
  vertex.x = (Math.random()-.5)*2000;
  vertex.y = (Math.random()-.5)*2000;
  vertex.z = (Math.random()-.5)*20000;
  if(distanceVector(vertex, new THREE.Vector3(0,0,0))>100)
  {
geometry2.vertices.push( vertex );
  }
  

  
}

var material = new THREE.ParticleBasicMaterial( { size: 3 });
var particles = new THREE.ParticleSystem( geometry2, material );

scene.add( particles ); 



  var moveparticles=0;
  var moveparticles=0;





var geometry = new THREE.BoxGeometry(1, 100, 100);
var texture = new THREE.TextureLoader().load( 'galaxy.jpg' );
var material = new THREE.MeshBasicMaterial( { map:texture } );
var galaxy1 = new THREE.Mesh( geometry, material );
galaxy1.position.set(700, 100, 50);
scene.add(galaxy1);

var geometry = new THREE.BoxGeometry(100, 1, 100);
var texture = new THREE.TextureLoader().load( 'galaxy.jpg' );
var material = new THREE.MeshBasicMaterial( { map:texture } );
var galaxy2 = new THREE.Mesh( geometry, material );
galaxy2.position.set(200, -700, -100);
scene.add(galaxy2);

var geometry = new THREE.BoxGeometry(1, 100, 100);
var texture = new THREE.TextureLoader().load( 'galaxy2.jpg' );
var material = new THREE.MeshBasicMaterial( { map:texture } );
var galaxy3 = new THREE.Mesh( geometry, material );
galaxy3.position.set(-800, 200, -400);
galaxy3.rotation.y+=100;
scene.add(galaxy3);


var geometry = new THREE.BoxGeometry(100, 100, 1);
var texture = new THREE.TextureLoader().load( 'galaxy2.jpg' );
var material = new THREE.MeshBasicMaterial( { map:texture } );
var galaxy4 = new THREE.Mesh( geometry, material );
galaxy4.position.set(100, -100, 900);
galaxy4.rotation.y-=50;
scene.add(galaxy4);




function render() {
  requestAnimationFrame(render);
  var time = Date.now() * 0.0002;

  sunsphere.rotation.x+=.0002;
   sunsphere.rotation.y+=.0002;
   sunsphere.rotation.z+=.0002;

  //mercury.rotation.x += 0ps;
  mercury.position.x = Math.sin( time * 4.5 ) * 5;
  mercury.position.y = Math.cos( time * 4.5 ) * 2;
  mercury.position.z = Math.cos( time * 4.5 ) * 5;
  
  //venus.rotation.x += 0ps;
  venus.position.x = Math.sin( time * -2.5 ) * 9;
  venus.position.y = Math.sin( time * -1.5 ) * 2;
  venus.position.z = Math.cos( time * -2.5 ) * 9;
  
  //earth.rotation.x += 0ps;
  earth.position.x = Math.sin( time * 1.5 ) * 13;
  earth.position.z = Math.cos( time * 1.5 ) * 13;
  
  mars.position.x = Math.sin( time * 1 ) * 18;
  mars.position.y = Math.cos( time * 1 ) * 4;
  mars.position.z = Math.cos( time * 1 ) * 18;
  
  jupiter.position.x = Math.sin( time * 0.5 ) * 25;
  jupiter.position.y = Math.sin( time * 0.5 ) * 3;
  jupiter.position.z = Math.cos( time * 0.5 ) * 25;
  
  saturn.position.x = Math.sin( time * 0.3 ) * 32;
  saturn.position.z = Math.cos( time * 0.3 ) * 32;
  
  uranus.position.x = Math.sin( time * 0.2 ) * 40;
  uranus.position.y = Math.cos( time * 0.2 ) * 10;
  uranus.position.z = Math.cos( time * 0.2 ) * 40;
  
  neptune.position.x = Math.sin( time * 0.1 ) * 50;
  neptune.position.y = Math.cos( time * 0.1 ) * 20;
  neptune.position.z = Math.cos( time * 0.1 ) * 50;

  moveparticles++;
 var ps=.04;
 
  if(moveparticles<1000)
  {
  	particles.position.x+=ps;
  }
  else if(moveparticles<2000)
  {
  	particles.position.y+=ps;
  }
  else if(moveparticles<3000)
  {
  	particles.position.z+=ps;
  }
  else if(moveparticles<4000)
  {
  	particles.position.x-=ps;
  }
  else if(moveparticles<5000)
  {
  	particles.position.y-=ps;
  }
  else if(moveparticles<6000)
  {
  	particles.position.z-=ps;
  }
  else
  {
  	moveparticles=0;
  }

  
galaxy1.rotation.x+=.001;
galaxy2.rotation.y-=.001;
galaxy3.rotation.x+=.002;
galaxy4.rotation.y-=.003;
	
  renderer.render(scene, camera);
}




function distanceVector( v1, v2 )
{
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
}

camera.position.z=4;
main();
function main()
{
	var x=0;
	while(x<100)
	{
	pomodoro(10);
	x++;
	}
	
		
	

	render();



 
}

var seconds = 0;
var interval ;
var starting=true;

function pomodoro(seconds) { 

  
  interval = setInterval(function() {
 
           
    clearInterval(interval);      
    if(starting) 
    {    

    	

    	if(camera.position.z<7)
    	{
    		camera.position.z+=.0009;
    		scene.rotation.y+=.00005;
    	}
    	else if(camera.position.z<15)
    	{
    		{
    		camera.position.z+=.00085;
    		scene.rotation.y+=.000045;
    		}
    	}
    	else if(camera.position.z<25)
    	{
    		{
    		camera.position.z+=.0008;
    		scene.rotation.y+=.00004;
    		}
    	}
    	else if(camera.position.z<35)
    	{
    		{
    		camera.position.z+=.00075;
    		scene.rotation.y+=.000035;
    		}
    	}
    	else if(camera.position.z<45)
    	{
    		{
    		camera.position.z+=.00070;
    		scene.rotation.y+=.00003;
    		}
    	}
    	else
    	{
    		starting=false;
    		controls = new THREE.OrbitControls( camera, renderer.domElement );
    	}
  
  		
    		
    	

        }   },1)
}


