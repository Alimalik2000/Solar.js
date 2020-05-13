

//load all textures
var suntexture = new THREE.TextureLoader().load( 'textures/suntexture.jpg' );
var mercurytexture = new THREE.TextureLoader().load( 'textures/mercurytexture.jpg' );
var venustexture = new THREE.TextureLoader().load( 'textures/venustexture.jpg' );
var earthtexture = new THREE.TextureLoader().load( 'textures/earthtexture.jpg' );
var earthmoontexture = new THREE.TextureLoader().load( 'textures/earthmoontexture.jpg' );
var marstexture = new THREE.TextureLoader().load( 'textures/marstexture.jpg' );
var marsmoon1texture = new THREE.TextureLoader().load( 'textures/marsmoon1texture.jpg' );
var marsmoon2texture = new THREE.TextureLoader().load( 'textures/marsmoon2texture.jpg' );
var jupitertexture = new THREE.TextureLoader().load( 'textures/jupitertexture.jpg' );
var saturntexture = new THREE.TextureLoader().load( 'textures/saturntexture.jpg' );
var uranustexture = new THREE.TextureLoader().load( 'textures/uranustexture.png' );
var neptunetexture = new THREE.TextureLoader().load( 'textures/neptunetexture.jpg' );
var galaxytexture1 = new THREE.TextureLoader().load( 'textures/galaxy.jpg' );
var galaxytexture2 = new THREE.TextureLoader().load( 'textures/galaxy2.jpg' );

//load all normals
var suntextureNORMAL = new THREE.TextureLoader().load( 'normals/suntextureNORMAL.png' );
var mercurytextureNORMAL = new THREE.TextureLoader().load( 'normals/mercurytextureNORMAL.png' );
var venustextureNORMAL = new THREE.TextureLoader().load( 'normals/venustextureNORMAL.png' );
var earthtextureNORMAL = new THREE.TextureLoader().load( 'normals/earthtextureNORMAL.png' );
var earthmoontextureNORMAL = new THREE.TextureLoader().load( 'textures/earthmoontextureNORMAL.png' );
var marstextureNORMAL = new THREE.TextureLoader().load( 'normals/marstextureNORMAL.png' );
var marsmoon1textureNORMAL = new THREE.TextureLoader().load( 'normals/marsmoon1textureNORMAL.png' );
var marsmoon2textureNORMAL = new THREE.TextureLoader().load( 'normals/marsmoon2textureNORMAL.png' );
var jupitertextureNORMAL = new THREE.TextureLoader().load( 'normals/jupitertextureNORMAL.png' );
var saturntextureNORMAL = new THREE.TextureLoader().load( 'normals/saturntextureNORMAL.png' );
var uranustextureNORMAL = new THREE.TextureLoader().load( 'normals/uranustextureNORMAL.png' );
var neptunetextureNORMAL = new THREE.TextureLoader().load( 'normals/neptunetextureNORMAL.png' );


//basic three setup
var scene, renderer, camera, controls, gui;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(45,
window.innerWidth/window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

	var guiDisplay = new dat.GUI({
    height : 5 * 32 - 1
});



function focus()
{
	console.log("reached");
}


function Main()
{	
	
	intro();
	createLight();
	createPlanets();
	createBackground();
	render();
	gui();
	


}

function intro()
{
	for(var i=0; i<100;i++)
	{
		zoomOut(10);
	}

}

var light1,light2,light3,light4,light5,light6,light7,light8,light9,liht10,
light11,light12,light13,light14,light15,light16,light17,light18;
function createLight()
{
	scene.add(new THREE.AmbientLight( 0x0f0f0f ));

	var lightsrc = new THREE.SphereGeometry(.001, 1, 1);
	var sunLight = new THREE.PointLight(0xffffff);
	sunLight.position.set(0, 0, 0); 
	sunLight.castShadow = true; 
	sunLight.shadowMapWidth = 1024; 
	sunLight.shadowMapHeight = 1024; 
	sunLight.shadowCameraNear = 500; 
	sunLight.shadowCameraFar = 4000;
	sunLight.add(new THREE.Mesh(lightsrc, new THREE.MeshBasicMaterial({ color: 0x000000 })));
	sunLight.shadowCameraFov = 30;
	scene.add(sunLight);

}


var sun, mercury,venus, earth, earthmoon, mars, marsmoon1, marsmoon2, jupiter, jupiterring,
saturn, saturnring, uranus, uranusring, neptune, neptunering;

var glow1,glow2,glow3,glow4,glow5,glow6,glow7,glow7,glow9,glow10;

function createPlanets()
{

	//sun 
	var geometry = new THREE.SphereGeometry(2.70, 50, 50);
	var material = new THREE.MeshBasicMaterial( { map:suntexture} );
	sun = new THREE.Mesh( geometry, material );
	scene.add( sun );

	//outer glow for sun
	var op=1.2;
	var mult=1.0;

	geometry =  new THREE.SphereGeometry( 2.75*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .3*op } );
	glow1 = new THREE.Mesh( geometry, material );
	scene.add(glow1);

	geometry =  new THREE.SphereGeometry( 2.81*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .29*op} );
	glow2 = new THREE.Mesh( geometry, material );
	scene.add(glow2);

	geometry =  new THREE.SphereGeometry( 2.88*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .27*op } );
	glow3 = new THREE.Mesh( geometry, material );
	scene.add(glow3);

	geometry =  new THREE.SphereGeometry( 2.96*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .24*op } );
	glow4 = new THREE.Mesh( geometry, material );
	scene.add(glow4);

	geometry =  new THREE.SphereGeometry( 3.03*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .19*op } );
	glow5 = new THREE.Mesh( geometry, material );
	scene.add(glow5);

	geometry =  new THREE.SphereGeometry( 3.13*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .13*op } );
	glow6 = new THREE.Mesh( geometry, material );
	scene.add(glow6);

	geometry =  new THREE.SphereGeometry( 3.24*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .05*op } );
	glow7 = new THREE.Mesh( geometry, material );
	scene.add(glow7);

	geometry =  new THREE.SphereGeometry( 3.36*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .01*op } );
	glow8 = new THREE.Mesh( geometry, material );
	scene.add(glow8);

	geometry =  new THREE.SphereGeometry( 3.49*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .005*op } );
	glow9 = new THREE.Mesh( geometry, material );
	scene.add(glow9);

	geometry =  new THREE.SphereGeometry( 3.63*mult, 30, 30 );
	material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: .001*op } );
	glow10 = new THREE.Mesh( geometry, material );
	scene.add(glow10);



	//Mercury
	geometry = new THREE.SphereGeometry(0.3, 10, 10);
	material = new THREE.MeshPhongMaterial( { map:mercurytexture, normalMap: mercurytextureNORMAL } );
	mercury = new THREE.Mesh( geometry, material );
	mercury.position.set(-5, 0, -5);
	scene.add(mercury);

	//Venus
	geometry = new THREE.SphereGeometry(0.4, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:venustexture, normalMap:venustextureNORMAL } );
	venus = new THREE.Mesh( geometry, material );
	venus.position.set(-7, 0, 7);
	scene.add(venus);

	//Earth
	geometry = new THREE.SphereGeometry(0.6, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:earthtexture, normalMap: earthtextureNORMAL } );
	earth = new THREE.Mesh( geometry, material );
	earth.position.set(20, 0, -20);
	scene.add(earth);

	//earth moon
	geometry = new THREE.SphereGeometry(.3, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:earthmoontexture } );
	earthmoon = new THREE.Mesh( geometry, material );
	earthmoon.position.set(20, .25, -20);
	scene.add(earthmoon);

	//Mars
	geometry = new THREE.SphereGeometry(0.5, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:marstexture, normalMap: marstextureNORMAL } );
	mars = new THREE.Mesh( geometry, material );
	mars.position.set(10, 0, 10);
	scene.add(mars);

	//Mars moon1 Phobos
	geometry = new THREE.SphereGeometry(0.2, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:marsmoon1texture, normalMap: marsmoon1textureNORMAL } );
	marsmoon1 = new THREE.Mesh( geometry, material );
	marsmoon1.position.set(10, 0, 10);
	scene.add(marsmoon1);

	//Mars moon2 Deimos
	geometry = new THREE.SphereGeometry(0.12, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:marsmoon2texture, normalMap: marsmoon2textureNORMAL } );
	marsmoon2 = new THREE.Mesh( geometry, material );
	marsmoon2.position.set(10, 0, 10);
	scene.add(marsmoon2);

	//Jupiter
	geometry = new THREE.SphereGeometry(2, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:jupitertexture, normalMap: jupitertextureNORMAL} );
	jupiter = new THREE.Mesh( geometry, material );
	jupiter.position.set(20, 0, -20);
	scene.add(jupiter);

	//Jupiter ring
	geometry = new THREE.RingGeometry( 2.2, 3, 32 );
	material = new THREE.MeshPhongMaterial( { map:jupitertexture, normalMap: jupitertextureNORMAL, side: THREE.DoubleSide, opacity: 0.5} );
	jupiterring = new THREE.Mesh( geometry, material );
	jupiterring.rotation.x=11;
	jupiterring.position.set(20, 0, -20);
	scene.add( jupiterring );

	//Saturn
	geometry = new THREE.SphereGeometry(1.2, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:saturntexture, normalMap: saturntextureNORMAL } );
	saturn = new THREE.Mesh( geometry, material );
	saturn.position.set(-10, 0, -20);
	scene.add(saturn);

	//Saturn ring
	geometry = new THREE.RingGeometry( 2, 2.9, 32 );
	material = new THREE.MeshPhongMaterial( { map:saturntexture, normalMap: saturntextureNORMAL, side: THREE.DoubleSide, opacity: 0.5 } );
	saturnring = new THREE.Mesh( geometry, material );
	saturnring.rotation.x=90;
	saturn.position.set(-10, 0, -20);
	scene.add( saturnring );

	//Uranus
	geometry = new THREE.SphereGeometry(1, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:uranustexture, normalMap: uranustextureNORMAL} );
	uranus = new THREE.Mesh( geometry, material );
	uranus.position.set(20, 0, -20);
	scene.add(uranus);

	//Uranus ring
	geometry = new THREE.RingGeometry( 1.6, 2.0, 32 );
	material = new THREE.MeshPhongMaterial( { map:uranustexture, normalMap: uranustextureNORMAL , side: THREE.DoubleSide, opacity: 0.5 } );
	uranusring = new THREE.Mesh( geometry, material );
	uranusring.position.set(-10, 0, -20);
	uranusring.rotation.x=3;
	scene.add( uranusring );

	// Neptune.
	geometry = new THREE.SphereGeometry(1, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:neptunetexture, normalMap:neptunetextureNORMAL } );
	neptune = new THREE.Mesh( geometry, material );
	neptune.position.set(50, 0, -20);
	scene.add(neptune);

	//Neptune ring
	geometry = new THREE.RingGeometry( 2.2, 2.4, 32 );
	material = new THREE.MeshPhongMaterial( { map:neptunetexture, normalMap: neptunetextureNORMAL, side: THREE.DoubleSide , opacity: 0.5} );
	neptunering = new THREE.Mesh( geometry, material );
	neptunering.position.set(-10, 0, -20);
	neptunering.rotation.x=-90;
	scene.add( neptunering );

}

var galaxy1, galaxy2, galaxy3, galaxy4, points, particles;

function createBackground()
{
		//Galaxy 1
	var geometry = new THREE.BoxGeometry(1, 100, 100);
	var material = new THREE.MeshBasicMaterial( { map:galaxytexture1 } );
	galaxy1 = new THREE.Mesh( geometry, material );
	galaxy1.position.set(800, 100, 50);
	scene.add(galaxy1);

	//Galaxy 2
	galaxy2 = new THREE.Mesh( geometry, material );
	galaxy2.position.set(200, -800, -100);
	scene.add(galaxy2);

	//Galaxy 3
	material = new THREE.MeshBasicMaterial( { map:galaxytexture2 } );
	galaxy3 = new THREE.Mesh( geometry, material );
	galaxy3.position.set(-900, 200, -400);
	galaxy3.rotation.y+=100;
	scene.add(galaxy3);

	//Galaxy 4
	galaxy4 = new THREE.Mesh( geometry, material );
	galaxy4.position.set(100, -100, 1000);
	galaxy4.rotation.y-=50;
	scene.add(galaxy4);

	//stars
	var geometry2 = new THREE.Geometry();
	var totalObjects = 40000;
	var container = document.createElement('div');
	document.body.appendChild( container );


	

var geometry = new THREE.SphereGeometry(.5, 10, 10);
	var material = new THREE.MeshBasicMaterial( {  } );

for ( var i = 0; i < 200; i ++ ) {

	var x = (Math.random()-.5)*800;
	var y = (Math.random()-.5)*800;
	var z = (Math.random()-.5)*800;
  if(distanceVector(new THREE.Vector3(x,y,z), new THREE.Vector3(0,0,0))>300)
	  {

	points = new THREE.Mesh( geometry, material );
	points.position.set(x, y, z);
	points.lookAt( camera.position );
	scene.add(points);
	var glowMesh	= new THREEx.GeometricGlowMesh(points)
	points.add(glowMesh.object3d)
}

	
}

var geometry2 = new THREE.Geometry();
	var totalObjects = 40000;
	var container = document.createElement('div');
	document.body.appendChild( container );
	scene.fog = new THREE.FogExp2( 0x000000, 0.001 );  

	for (i = 0; i < totalObjects; i ++) 
	{ 
	  var vertex = new THREE.Vector3();
	  vertex.x = (Math.random()-.5)*2000;
	  vertex.y = (Math.random()-.5)*2000;
	  vertex.z = (Math.random()-.5)*20000;

	  if(distanceVector(vertex, new THREE.Vector3(0,0,0))>150)
	  {
		geometry2.vertices.push( vertex );
	  }
	  
	}

	material = new THREE.ParticleBasicMaterial( { size: 3 });
	particles = new THREE.ParticleSystem( geometry2, material );

	scene.add( particles ); 

scene.fog = new THREE.FogExp2( 0x000000, 0.001 );  


}



var moveparticles=0;//used in render to move points

function render() {
  requestAnimationFrame(render);

  var time = Date.now() * 0.0001;

 
 
 	

  //galaxy rotation
  galaxy1.rotation.x+=.001;
  galaxy2.rotation.y-=.001;
  galaxy3.rotation.x+=.002;
  galaxy4.rotation.z-=.003;

  //sun rotation
  sun.scale.x=.999;
  sun.scale.y=.999;
  sun.scale.z=.999;

  sun.rotation.x+=.0001;
  sun.rotation.y+=.0001;
  sun.rotation.z+=.0001;

  glow1.rotation.x+=.0001;
  glow1.rotation.y+=.0001;
  glow1.rotation.z+=.0001;

  glow2.rotation.x+=.0001;
  glow2.rotation.y+=.0001;
  glow2.rotation.z+=.0001;

  glow3.rotation.x+=.0001;
  glow3.rotation.y+=.0001;
  glow3.rotation.z+=.0001;

  glow4.rotation.x+=.0001;
  glow4.rotation.y+=.0001;
  glow4.rotation.z+=.0001;

  glow5.rotation.x+=.0001;
  glow5.rotation.y+=.0001;
  glow5.rotation.z+=.0001;

  glow6.rotation.x+=.0001;
  glow6.rotation.y+=.0001;
  glow6.rotation.z+=.0001;

  glow7.rotation.x+=.0001;
  glow7.rotation.y+=.0001;
  glow7.rotation.x+=.0001;

  glow8.rotation.x-=.0001;
  glow8.rotation.y+=.0001;
  glow8.rotation.z+=.0001;

  glow9.rotation.x-=.0001;
  glow9.rotation.y-=.0001;
  glow9.rotation.z+=.0001;

  glow10.rotation.x-=.0001;
  glow10.rotation.y-=.0001;
  glow10.rotation.z-=.0001;

  //mercury rotation
  mercury.position.x = Math.sin( time * 4.5 ) * 5;
  mercury.position.y = Math.cos( time * 4.5 ) * 2;
  mercury.position.z = Math.cos( time * 4.5 ) * 5;
  
  //venus rotation
  venus.position.x = Math.sin( time * -2.5 ) * 9;
  venus.position.y = Math.sin( time * -1.5 ) * 2;
  venus.position.z = Math.cos( time * -2.5 ) * 9;
  
  //earth rotation
  earth.position.x = Math.sin( time * 1.5 ) * 13;
  earth.position.z = Math.cos( time * 1.5 ) * 13;

    //earth moon rotation
  earthmoon.position.x = earth.position.x+Math.sin( time * 1.1 ) * 1.5;
  earthmoon.position.z = earth.position.z-Math.cos( time * 1.1 ) * 1.5;
  earthmoon.rotation.y-=.001;

  //mars rotation
  mars.position.x = Math.sin( time * 1 ) * 18;
  mars.position.y = Math.cos( time * 1 ) * 4;
  mars.position.z = Math.cos( time * 1 ) * 18;

  //mars moon1 rotation
  marsmoon1.position.x = mars.position.x + Math.sin( time * 5 ) * 1.25;
  marsmoon1.position.y = mars.position.y - .2;
  marsmoon1.position.z = mars.position.z - Math.cos( time * 5 ) * 1.25;

   //mars moon2 rotation
  marsmoon2.position.x = mars.position.x - Math.sin( time * 3 ) * 2.5;
  marsmoon2.position.y = mars.position.y +.1;
  marsmoon2.position.z = mars.position.z - Math.cos( time * 3 ) * 2.5;
  
  //jupiter rotation
  jupiter.position.x = jupiterring.position.x = Math.sin( time * 0.5 ) * 25;
  jupiter.position.y = jupiterring.position.y = Math.sin( time * 0.5 ) * 3;
  jupiter.position.z = jupiterring.position.z = Math.cos( time * 0.5 ) * 25;
  
  //saturn rotation
  saturn.position.x = saturnring.position.x = Math.sin( time * 0.3 ) * 32;
  saturn.position.z = saturnring.position.z = Math.cos( time * 0.3 ) * 32;
  
  //uranus rotation
  uranus.position.x = uranusring.position.x = Math.sin( time * 0.2 ) * 40;
  uranus.position.y = uranusring.position.y = Math.cos( time * 0.2 ) * 10;
  uranus.position.z = uranusring.position.z = Math.cos( time * 0.2 ) * 40;
  
  //nepune rotation
  neptune.position.x = neptunering.position.x = Math.sin( time * 0.1 ) * 50;
  neptune.position.y = neptunering.position.y = Math.cos( time * 0.1 ) * 20;
  neptune.position.z = neptunering.position.z = Math.cos( time * 0.1 ) * 50;

  //ring rotation
  uranusring.rotation.z-=.0025;
  saturnring.rotation.z+=.0025;
  jupiterring.rotation.z-=.0025;
  neptunering.rotation.z-=.0025;

  //used to move points slghtly
  moveparticles++;


	 if(moveparticles<3000)
	 {
	 	particles.position.x+=.03;
	 	particles.position.z-=.03;

	 }
	 else if(moveparticles<6000)
	 {
	 	particles.position.x-=.03;
	 	particles.position.z+=.03;
	 }
	 else
	 {
	 	moveparticles=0;
	 }


  renderer.render(scene, camera);
}


function gui()
{

	var guiElements =  new function() {

	  this.Sun = false;
	  this.Mercury=false;
	  this.Venus=false;
	  this.Earth=false;
	  this.Mars=false;
	  this.Jupiter=false;
	  this.Saturn=false;
	  this.Uranus=false;
	  this.Neptune=false;
	  
	};

	 
	 var sun1 =  guiDisplay.add(guiElements, 'Sun');
	 sun1.onChange(function(value) {focus("sun");});

	 var mercury1 =  guiDisplay.add(guiElements, 'Mercury');
	 mercury1.onChange(function(value) {focus("mercury");});

	  var venus1 =  guiDisplay.add(guiElements, 'Venus');
	 venus1.onChange(function(value) {focus("venus");});

	  var earth1 =  guiDisplay.add(guiElements, 'Earth');
	 earth1.onChange(function(value) {focus("earth");});

	 var mars1 =  guiDisplay.add(guiElements, 'Mars');
	 mars1.onChange(function(value) {focus("mars");});

	  var jupiter1 =  guiDisplay.add(guiElements, 'Jupiter');
	 jupiter1.onChange(function(value) {focus("jupiter");});

	  var saturn1 =  guiDisplay.add(guiElements, 'Saturn');
	 saturn1.onChange(function(value) {focus("saturn");});

	  var uranus1 =  guiDisplay.add(guiElements, 'Uranus');
	 uranus1.onChange(function(value) {focus("uranus");});

	  var neptune1 =  guiDisplay.add(guiElements, 'Neptune');
	 neptune1.onChange(function(value) {focus("neptune");});


}


function focus(x)
{
	camera.position.set( 0, 20, 100 );
	controls.update();

}





var seconds = 0;
var interval ;
var starting=true;
var reverse=false;
function zoomOut(seconds) { 

	camera.position.z=4;
  
  interval = setInterval(function() {
    clearInterval(interval);      
    if(starting) 
    {    
    	if(reverse==false&&camera.position.z<7)
    	{
    		camera.position.z+=.0009;
    		scene.rotation.y+=.00005;
    	}
    	else if(reverse==false&&camera.position.z<15)
    	{
    		{
    		camera.position.z+=.00085;
    		scene.rotation.y+=.000045;
    		}
    	}
    	else if(reverse==false&&camera.position.z<25)
    	{
    		{
    		camera.position.z+=.0008;
    		scene.rotation.y+=.00004;
    		}
    	}
    	else if(reverse==false&&camera.position.z<35)
    	{
    		{
    		camera.position.z+=.00075;
    		scene.rotation.y+=.000035;
    		}
    	}
    	else if(reverse==false&&camera.position.z<45)
    	{
    		{
    		camera.position.z+=.00070;
    		scene.rotation.y+=.00003;
    		}
    	}
    	else if(reverse==false&&camera.position.z<55)
    	{
    		{
    		camera.position.z+=.00065;
    		scene.rotation.y+=.000025;
    		}
    	}
    	else if(reverse==false&&camera.position.z<65)
    	{
    		{
    		camera.position.z+=.00060;
    		scene.rotation.y+=.00002;
    		}
    	}
    	else if(reverse==false&&camera.position.z<75)
    	{
    		{
    		camera.position.z+=.00055;
    		scene.rotation.y+=.000015;

    		if(camera.position.z<76)
    		{
    			reverse=true;
    		}
    	}
    		}
    	else if(reverse==true&&camera.position.z>70)
    	{
    		camera.position.z-=.00050;
    		scene.rotation.y+=.000015;
    	}
    	else if(reverse==true&&camera.position.z>60)
    	{
    		camera.position.z-=.00045;
    	scene.rotation.y+=.000010;
    	}
    	else if(reverse==true&&camera.position.z>50)
    	{
    		camera.position.z-=.00040;
    		scene.rotation.y+=.000005;
    	}
    	else if(reverse==true&&camera.position.z>40)
    	{
    		camera.position.z-=.00035;
    		scene.rotation.y+=.0000025;
    	}
    	else
    	{
    		starting=false;
    		controls = new THREE.OrbitControls( camera, renderer.domElement );
    	}
        }   
    	},1)
}



//method to find distance bewteen two three vectors
function distanceVector( v1, v2 )
{
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
}

