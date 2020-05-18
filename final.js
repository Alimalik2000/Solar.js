
//load all textures
var suntexture = new THREE.TextureLoader().load( 'textures/suntexture.jpg' );
var mercurytexture = new THREE.TextureLoader().load( 'textures/mercurytexture.jpg' );
var venustexture = new THREE.TextureLoader().load( 'textures/venustexture.jpg' );
var venuscloudmesh = new THREE.TextureLoader().load( 'textures/venuscloudmap.jpg' );
var earthtexture = new THREE.TextureLoader().load( 'textures/earthtexture.jpg' );
var earthcloudmesh = new THREE.TextureLoader().load( 'textures/earthcloudmap.jpg' );
var earthmoontexture = new THREE.TextureLoader().load( 'textures/earthmoontexture.jpg' );
var marstexture = new THREE.TextureLoader().load( 'textures/marstexture.jpg' );
var marscloudmesh = new THREE.TextureLoader().load( 'textures/marscloudmap.jpg' );
var marsmoon1texture = new THREE.TextureLoader().load( 'textures/marsmoon1texture.jpg' );
var marsmoon2texture = new THREE.TextureLoader().load( 'textures/marsmoon2texture.jpg' );
var jupitertexture = new THREE.TextureLoader().load( 'textures/jupitertexture.jpg' );
var jupitercloudmesh = new THREE.TextureLoader().load( 'textures/jupitercloudmap.jpg' );
var saturntexture = new THREE.TextureLoader().load( 'textures/saturntexture.jpg' );
var uranustexture = new THREE.TextureLoader().load( 'textures/uranustexture.png' );
var neptunetexture = new THREE.TextureLoader().load( 'textures/neptunetexture.jpg' );
var galaxytexture1 = new THREE.TextureLoader().load( 'textures/galaxy.jpg' );
var galaxytexture2 = new THREE.TextureLoader().load( 'textures/galaxy2.jpg' );

//load all normals
var suntextureNORMAL = new THREE.TextureLoader().load( 'normals/suntextureNORMAL.png' );
var mercurytextureNORMAL = new THREE.TextureLoader().load( 'normals/mercurytextureNORMAL.png' );
var venustextureNORMAL = new THREE.TextureLoader().load( 'normals/venustextureNORMAL.png' );
var venuscloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/venuscloudmapNORMAL.png' );
var earthtextureNORMAL = new THREE.TextureLoader().load( 'normals/earthtextureNORMAL.png' );
var earthmoontextureNORMAL = new THREE.TextureLoader().load( 'textures/earthmoontextureNORMAL.png' );
var marstextureNORMAL = new THREE.TextureLoader().load( 'normals/marstextureNORMAL.png' );
var marscloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/marscloudmapNORMAL.png' );
var marsmoon1textureNORMAL = new THREE.TextureLoader().load( 'normals/marsmoon1textureNORMAL.png' );
var marsmoon2textureNORMAL = new THREE.TextureLoader().load( 'normals/marsmoon2textureNORMAL.png' );
var jupitertextureNORMAL = new THREE.TextureLoader().load( 'normals/jupitertextureNORMAL.png' );
var jupitercloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/jupitercloudmapNORMAL.png' );
var saturntextureNORMAL = new THREE.TextureLoader().load( 'normals/saturntextureNORMAL.png' );
var uranustextureNORMAL = new THREE.TextureLoader().load( 'normals/uranustextureNORMAL.png' );
var neptunetextureNORMAL = new THREE.TextureLoader().load( 'normals/neptunetextureNORMAL.png' );

//html file will call main on load
function main()
{	
	basicSetup();
	createLight();
	createSun();
	createPlanets();
	createBackground();
	setupGui();
	setupRaycasting();
	render();

}


//basic three setup with orbital controls
var scene, renderer, camera, controls, gui, loader;

function basicSetup()
{
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45,
	window.innerWidth/window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
		
	controls = new THREE.OrbitControls( camera, renderer.domElement );

	loader = new THREE.FontLoader();
}


//creates only point of light in scene, from inside of the sun
//as well as a low ambiance
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


//creates the sun in the scene and 10 glowing layers around it
var sun, glow1,glow2,glow3,glow4,glow5,glow6,glow7,glow7,glow9,glow10;

function createSun()
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

}


//creates all planets in the scene and their rings
var sun, mercury, venus, venuscloudmesh, earth, earthmoon, earthcloudmesh, mars, marscloudmesh,marsmoon1, marsmoon2, jupiter, jupitercloudmesh, jupiterring,
saturn, saturnring, uranus, uranusring, neptune, neptunering;

function createPlanets()
{

	//Mercury
	geometry = new THREE.SphereGeometry(0.3, 10, 10);
	material = new THREE.MeshPhongMaterial( { map:mercurytexture, normalMap: mercurytextureNORMAL } );
	mercury = new THREE.Mesh( geometry, material );
	mercury.position.set(-5, 0, -5);
	scene.add(mercury);

	//Venus
	geometry = new THREE.SphereGeometry(0.4, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:venustexture, normalMap:venustextureNORMAL } );
	material.shininess=80;
	venus = new THREE.Mesh( geometry, material );
	venus.position.set(-7, 0, 7);
	scene.add(venus);

	//venus clouds
	geometry   = new THREE.SphereGeometry(.41, 20, 20)
	material  = new THREE.MeshPhongMaterial({map :venuscloudmesh, normalMap: venuscloudmeshNORMAL,
  	opacity     : 0.3, transparent : true,
	})
	venuscloudmesh = new THREE.Mesh(geometry, material)
	venus.add(venuscloudmesh)

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

	//earth clouds
	geometry   = new THREE.SphereGeometry(.61, 20, 20)
	material  = new THREE.MeshPhongMaterial({map :earthcloudmesh,
  	opacity     : 0.2, transparent : true,
	})
	earthcloudmesh = new THREE.Mesh(geometry, material)
	earth.add(earthcloudmesh)

	//Mars
	geometry = new THREE.SphereGeometry(0.5, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:marstexture, normalMap: marstextureNORMAL } );
	mars = new THREE.Mesh( geometry, material );
	mars.position.set(10, 0, 10);
	scene.add(mars);

	//mars clouds
	geometry   = new THREE.SphereGeometry(.51, 20, 20)
	material  = new THREE.MeshPhongMaterial({map :marscloudmesh, normalMap: marscloudmeshNORMAL,
  	opacity     : .3, transparent : true,
	})
	marscloudmesh = new THREE.Mesh(geometry, material)
	mars.add(marscloudmesh)

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
	material.shininess=80;
	jupiter = new THREE.Mesh( geometry, material );
	jupiter.position.set(20, 0, -20);
	scene.add(jupiter);

	//jupiter clouds
	geometry   = new THREE.SphereGeometry(2.02, 20, 20)
	material  = new THREE.MeshPhongMaterial({map :jupitercloudmesh, normalMap: jupitercloudmeshNORMAL,
  	opacity     : .3, transparent : true,
	})
	jupitercloudmesh = new THREE.Mesh(geometry, material)
	jupiter.add(jupitercloudmesh)

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

//creates background of scene, stars and galaxies
var galaxy1, galaxy2, galaxy3, galaxy4, bluestars, particles;

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

	//blue stars
	var geometry = new THREE.SphereGeometry(.5, 10, 10);
	var material = new THREE.MeshBasicMaterial( {  } );

	for ( var i = 0; i < 200; i ++ ) 
	{

		var x = (Math.random()-.5)*800;
		var y = (Math.random()-.5)*800;
		var z = (Math.random()-.5)*800;
	  
	  	//if distance from star to sun is greater than 255, create it
	  	if(distanceVector(new THREE.Vector3(x,y,z), new THREE.Vector3(0,0,0))>225)
		{

			bluestars = new THREE.Mesh( geometry, material );
			bluestars.position.set(x, y, z);
			scene.add(bluestars);
			var glowMesh	= new THREEx.GeometricGlowMesh(bluestars)
			bluestars.add(glowMesh.object3d)

		}
	}

	//white stars
	var geometry2 = new THREE.Geometry();
	scene.fog = new THREE.FogExp2( 0x000000, 0.001 );  

	for (i = 0; i < 10000; i ++) 
	{ 
		  var vertex = new THREE.Vector3();
		  vertex.x = (Math.random()-.5)*2000;
		  vertex.y = (Math.random()-.5)*2000;
		  vertex.z = (Math.random()-.5)*2000;

		  //if distance from star to sun is greater than 255, create it
		  if(distanceVector(vertex, new THREE.Vector3(0,0,0))>250)
		  {
				geometry2.vertices.push( vertex );
		  }
		}

	material = new THREE.ParticleBasicMaterial( { size: 3 });
	particles = new THREE.ParticleSystem( geometry2, material );
	scene.add( particles ); 

}


//moves planets in orbit, plus rotates and spins them, also moves star
//position slightly, also locks camera to planets if clicked in gui

//used in render to move white stars
var moveparticles=0;

//planet locks
var lockSun=true, lockMercury=false,lockVenus=false,lockEarth=false, lockMars=false, lockJupiter=false,lockSaturn=false,
lockUranus=false,lockNeptune=false;

//true is camera is not locked on a planet from gui, false otherwise
var freeRoam=false;

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

  //venus cloudmap rotation
  venuscloudmesh.rotation.y+=.001;
  
  //earth rotation
  earth.position.x = Math.sin( time * 1.5 ) * 13;
  earth.position.z = Math.cos( time * 1.5 ) * 13;

    //earth moon rotation
  earthmoon.position.x = earth.position.x+Math.sin( time * 1.1 ) * 1.5;
  earthmoon.position.z = earth.position.z-Math.cos( time * 1.1 ) * 1.5;
  earthmoon.rotation.y-=.001;

  //earth cloudmap rotation
  earthcloudmesh.rotation.y+=.001;

  //mars rotation
  mars.position.x = Math.sin( time * 1 ) * 18;
  mars.position.y = Math.cos( time * 1 ) * 4;
  mars.position.z = Math.cos( time * 1 ) * 18;

  //mars clouds rotation
  marscloudmesh.rotation.y+=.001;

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
  
  //jupiter clouds rotation
  jupitercloudmesh.rotation.y+=.001;

  //saturn rotation
  saturn.position.x = saturnring.position.x = Math.sin( time * 0.3 ) * 32;
  saturn.position.z = saturnring.position.z = -Math.cos( time * 0.3 ) * 32;
  
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

  //star position change, moves slightly both ways on x axis
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

	 //planet lock system
	 if(freeRoam==false)
	 {

	 	if(lockSun)
	 	{
	 		controls.target0.set( sun.position.x, sun.position.y, sun.position.z);
  			controls.reset();
  			camera.position.x=sun.position.x+Math.sin(time)*21;
  			camera.position.y=sun.position.y;
  			camera.position.z=sun.position.z-Math.cos(time)*21;

	 	}
	 	if(lockMercury)
	 	{
	 		controls.target0.set( mercury.position.x, mercury.position.y, mercury.position.z);
  			controls.reset();
  			camera.position.x=mercury.position.x+Math.sin(time)*3;
  			camera.position.y=mercury.position.y;
  			camera.position.z=mercury.position.z-Math.cos(time)*3;

	 	}
	 	if(lockVenus)
	 	{
	 		controls.target0.set( venus.position.x, venus.position.y, venus.position.z);
  			controls.reset();
  			camera.position.x=venus.position.x+Math.sin(time*4)*4;
  			camera.position.y=venus.position.y;
  			camera.position.z=venus.position.z-Math.cos(time*4)*4;
	 	}
	 	if(lockEarth)
	 	{
	 		controls.target0.set( earth.position.x, earth.position.y, earth.position.z);
  			controls.reset();
  			camera.position.x=earth.position.x+Math.sin(time*2)*5;
  			camera.position.y=earth.position.y;
  			camera.position.z=earth.position.z-Math.cos(time*2)*5;
	 	}
	 	if(lockMars)
	 	{
	 		controls.target0.set( mars.position.x, mars.position.y, mars.position.z);
  			controls.reset();
  			camera.position.x=mars.position.x+Math.sin(time*2)*4;
  			camera.position.y=mars.position.y;
  			camera.position.z=mars.position.z-Math.cos(time*2)*4;
	 	}
	 	if(lockJupiter)
	 	{
	 		controls.target0.set( jupiter.position.x, jupiter.position.y, jupiter.position.z);
  			controls.reset();
  			camera.position.x=jupiter.position.x+Math.sin(time*2)*10;
  			camera.position.y=jupiter.position.y+2;
  			camera.position.z=jupiter.position.z-Math.cos(time*2)*10;
	 	}
	 	if(lockSaturn)
	 	{
	 		controls.target0.set( saturn.position.x, saturn.position.y, saturn.position.z);
  			controls.reset();
  			camera.position.x=saturn.position.x+Math.sin(time*2)*9;
  			camera.position.y=saturn.position.y;
  			camera.position.z=saturn.position.z-Math.cos(time*2)*9;
	 	}
	 	if(lockUranus)
	 	{
	 		controls.target0.set( uranus.position.x, uranus.position.y, uranus.position.z);
  			controls.reset();
  			camera.position.x=uranus.position.x+Math.sin(time*2)*9;
  			camera.position.y=uranus.position.y;
  			camera.position.z=uranus.position.z-Math.cos(time*2)*9;
	 	}
	 	if(lockNeptune)
	 	{
	 		controls.target0.set( neptune.position.x, neptune.position.y, neptune.position.z);
  			controls.reset();
  			camera.position.x=neptune.position.x+Math.sin(time*2)*9;
  			camera.position.y=neptune.position.y;
  			camera.position.z=neptune.position.z-Math.cos(time*2)*9;
	 	}

	 	controls.update();
	 
	 }
  
  renderer.render(scene, camera);
}



//gui to lock planets
var guiElements;
function setupGui()
{

	var guiDisplay = new dat.GUI({
    height : 5 * 32 - 1
	});

	guiElements =  new function() {
		
	  this.PLANETLOCK = "          ENABLED";
	  this.Sun = function(){};
	  this.Mercury= function(){};
	  this.Venus= function(){};
	  this.Earth= function(){};
	  this.Mars= function(){};
	  this.Jupiter= function(){};
	  this.Saturn= function(){};
	  this.Uranus= function(){};
	  this.Neptune= function(){};

	};
	
	 var PT =  guiDisplay.add(guiElements, 'PLANETLOCK').listen();

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

//when a planet is chosen on gui, it is locked and all other planets are unlocked
//freeroam is then set to false
function focus(planet)
{
	freeRoam=false;

	guiElements.PLANETLOCK="          ENABLED";
	if(planet=="sun")lockSun=true;
	if(planet=="mercury")lockMercury=true;
	if(planet=="venus")lockVenus=true;
	if(planet=="earth")lockEarth=true;
	if(planet=="mars")lockMars=true;
	if(planet=="jupiter")lockJupiter=true;
	if(planet=="saturn")lockSaturn=true;
	if(planet=="uranus")lockUranus=true;
	if(planet=="neptune")lockNeptune=true;

}


//if a user choose to use orbtal controls, planetlock is disabled
document.addEventListener("mousedown", function(event){

    freeRoam=true

    guiElements.PLANETLOCK="          DISABLED"
    lockSun=false;
	lockMercury=false;
	lockVenus=false;
	lockEarth=false;
	lockMars=false;
	lockJupiter=false;
	lockSaturn=false;
	lockUranus=false;
	lockNeptune=false;
  
});


//helper method to find distance bewteen two vectors of size three
function distanceVector( v1 , v2 )
{
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
}




//_____________________________________IN PROGRESS_________________________________


var raycaster, mouse;

var textMaterial;
var textGeometry;


function setupRaycasting()
{
	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();

	textMaterial = new THREE.MeshBasicMaterial( 
    { color: 0xf0f0f0 }
  );

	setTimeout(function(){ hold=false; }, 100);

	render2();
}


document.addEventListener("mousemove", function(event){

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

});

function render2() {
	window.requestAnimationFrame(render2);

	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects( scene.children );

	if(!hold)
	{

	for ( var i = 0; i < intersects.length; i++ ) {

		if(intersects[ i ].object.id==sun.id)
		{
			labels("Sun");
		}
		else if(intersects[ i ].object.id==mercury.id)
		{
			labels("Mercury");
		}
		else if(intersects[ i ].object.id==venus.id)
		{
			labels("Venus");
		}
		else if(intersects[ i ].object.id==earth.id)
		{
			labels("Earth");
		}
		else if(intersects[ i ].object.id==earthmoon.id)
		{
			labels("Moon");
		}
		else if(intersects[ i ].object.id==mars.id)
		{
			labels("Mars");
		}
		else if(intersects[ i ].object.id==marsmoon1.id)
		{
			labels("Deimos");
		}
		else if(intersects[ i ].object.id==marsmoon2.id)
		{
			labels("Phobos");
		}
		else if(intersects[ i ].object.id==jupiter.id)
		{
			labels("Jupiter");
		}
		else if(intersects[ i ].object.id==saturn.id)
		{
			labels("Saturn");
		}
		else if(intersects[ i ].object.id==uranus.id)
		{
			labels("Uranus");
		}
		else if(intersects[ i ].object.id==neptune.id)
		{
			labels("Neptune");
		}

	

	}
}


	renderer.render( scene, camera );



}

var hold = true;
function labels(planet)
{
	hold=true;
	setTimeout(function(){hold=false; }, 10);
	loader.load( 'helvetiker_regular.typeface.json', function ( font ) {

    textGeometry = new THREE.TextGeometry( planet, {

    font: font,
    size: .5,
    height: .11,
   

  });

});   

  var mesh = new THREE.Mesh( textGeometry, textMaterial );
 

  if(planet=="Sun")
  {
  	mesh.position.y+=3.5;
  	sun.add(mesh);
  	 mesh.lookAt( camera.position );
  	setTimeout(function(){ sun.remove(mesh);}, 200);
  }
  else if(planet=="Mercury")
  {
  	mesh.position.y+=.5;
  	mercury.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ mercury.remove(mesh);}, 200);
  }
  else if(planet=="Venus")
  {

  	mesh.position.y+=.5;
  	venus.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ venus.remove(mesh);}, 200);

  }
  else if(planet=="Earth")
  {
  	mesh.position.y+=1;
  	earth.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ earth.remove(mesh);}, 200);
  }
  else if(planet=="Moon")
  {
	mesh.position.y+=.5;
  	earthmoon.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ earthmoon.remove(mesh);}, 200);
  }
  else if(planet=="Mars")
  {
  	mesh.position.y+=1;
  	mars.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ mars.remove(mesh);}, 200);
  }
  else if(planet=="Deimos")
  {
  	mesh.position.y+=.5;
  	marsmoon1.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ marsmoon1.remove(mesh);}, 200);
  }
  else if(planet=="Phobos")
  {
  	mesh.position.y+=.5;
  	marsmoon2.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ marsmoon2.remove(mesh);}, 200);

  }
  else if(planet=="Jupiter")
  {
  	mesh.position.y+=1;
  	jupiter.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ jupiter.remove(mesh);}, 200);
  }
  else if(planet=="Saturn")
  {
  	mesh.position.y+=1;
  	saturn.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ saturn.remove(mesh);}, 200);
  }
  else if(planet=="Neptune")
  {
  	mesh.position.y+=.5;
  	neptune.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ neptune.remove(mesh);}, 200);
  }
  else if(planet=="Uranus")
  {
  	mesh.position.y+=.5;
  	uranus.add(mesh);
  	mesh.lookAt( camera.position );
  	setTimeout(function(){ uranus.remove(mesh);}, 200);
  }
 


  

}

