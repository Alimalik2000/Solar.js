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
var saturncloudmesh = new THREE.TextureLoader().load( 'textures/saturncloudmap.jpg' );
var uranustexture = new THREE.TextureLoader().load( 'textures/uranustexture.png' );
var uranuscloudmesh = new THREE.TextureLoader().load( 'textures/uranuscloudmap.jpg' );
var neptunetexture = new THREE.TextureLoader().load( 'textures/neptunetexture.jpg' );
var neptunecloudmesh = new THREE.TextureLoader().load( 'textures/neptunecloudmap.jpg' );

//load all normals
var suntextureNORMAL = new THREE.TextureLoader().load( 'normals/suntextureNORMAL.png' );
var mercurytextureNORMAL = new THREE.TextureLoader().load( 'normals/mercurytextureNORMAL.png' );
var venustextureNORMAL = new THREE.TextureLoader().load( 'normals/venustextureNORMAL.png' );
var venuscloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/venuscloudmapNORMAL.png' );
var earthtextureNORMAL = new THREE.TextureLoader().load( 'normals/earthtextureNORMAL.png' );
var earthcloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/earthcloudmeshNORMAL.png' );
var earthmoontextureNORMAL = new THREE.TextureLoader().load( 'textures/earthmoontextureNORMAL.png' );
var marstextureNORMAL = new THREE.TextureLoader().load( 'normals/marstextureNORMAL.png' );
var marscloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/marscloudmapNORMAL.png' );
var marsmoon1textureNORMAL = new THREE.TextureLoader().load( 'normals/marsmoon1textureNORMAL.png' );
var marsmoon2textureNORMAL = new THREE.TextureLoader().load( 'normals/marsmoon2textureNORMAL.png' );
var jupitertextureNORMAL = new THREE.TextureLoader().load( 'normals/jupitertextureNORMAL.png' );
var jupitercloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/jupitercloudmapNORMAL.png' );
var saturntextureNORMAL = new THREE.TextureLoader().load( 'normals/saturntextureNORMAL.png' );
var saturncloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/saturncloudmapNORMAL.png' );
var uranustextureNORMAL = new THREE.TextureLoader().load( 'normals/uranustextureNORMAL.png' );
var uranuscloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/uranuscloudmapNORMAL.png' );
var neptunetextureNORMAL = new THREE.TextureLoader().load( 'normals/neptunetextureNORMAL.png' );
var neptunecloudmeshNORMAL = new THREE.TextureLoader().load( 'normals/neptunecloudmapNORMAL.png' );

//html file will call main on load
function main()
{	

	basicSetup();
	createLight();
	createSun();
	createPlanets();
	stylizePlanets();
	createMoons();
	createBackground();
	setupGui();
	setupPlanetText();
	setupRaycasting();
	render();

}


//basic three setup with orbital controls, gui and font loader
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

	//ambient light
	scene.add(new THREE.AmbientLight( 0x0f0f0f ));

	//sunlight
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


//creates the sun in the scene and 100 glowing layers around it
var sun;

function createSun()
{

	//sun 
	var geometry = new THREE.SphereGeometry(2.70, 50, 50);
	var material = new THREE.MeshBasicMaterial( { map:suntexture} );
	sun = new THREE.Mesh( geometry, material );
	scene.add( sun );

	//outer glow for sun, eath layer is slightly farther from eath layer before with less opacity
	//than the layer before
	var exp=2.70;
	var pac=.3;

	for(var i=0;i<100;i++)
	{

		exp=exp*1.0027
		pac=pac*.97;
		geometry =  new THREE.SphereGeometry( exp, 30, 30 );
		material = new THREE.MeshBasicMaterial( { map:suntexture, transparent: true, opacity: pac } );
		glow1 = new THREE.Mesh( geometry, material );
		sun.add(glow1);

	}

}


//creates all planets in the scene, inside an array
//array planets are the planets in order from Mercury to Neptune
var planets=[];

function createPlanets()
{

	//planets in order from mercury to neptune with respective sizes, textures and normals
	//plents positions are set in render()
	// Mercury -> Venus -> Earth -> Jupiter -> Saturn -> Uranus -> Neptune
	var sizes = [.3,.4,.6,.5,2,1.2,1,1]
	var maps=[mercurytexture,venustexture,earthtexture, marstexture,jupitertexture,saturntexture,uranustexture,neptunetexture];
	var normals = [mercurytextureNORMAL,venustextureNORMAL,earthtextureNORMAL, marstextureNORMAL,jupitertextureNORMAL,saturntextureNORMAL,uranustextureNORMAL,neptunetextureNORMAL];

	for(var i=0;i<=7;i++)
	{

		geometry = new THREE.SphereGeometry(sizes[i], 20, 20);
		material = new THREE.MeshPhongMaterial( { map:maps[i], normalMap: normals[i] } );
		planets[i] = new THREE.Mesh( geometry, material );
		scene.add(planets[i]);

	}

}

//creates all moons in scene
var earthmoon;
//array holds moons from Phobos until Deimos
var moons =[];

function createMoons()
{

	//earth moon, creating outside array because it does not have a normal
	geometry = new THREE.SphereGeometry(.3, 20, 20);
	material = new THREE.MeshPhongMaterial( { map:earthmoontexture} );
	earthmoon = new THREE.Mesh( geometry, material );
	earthmoon.position.set(20, .25, -20);
	scene.add(earthmoon);

	//creating moons from Phobos until Deimos
	var sizes = [.2,.12];
	var maps = [marsmoon1texture, marsmoon2texture];
	var normals = [marsmoon1textureNORMAL, marsmoon2textureNORMAL]

	for(var i=0;i<2;i++)
	{

		geometry = new THREE.SphereGeometry(sizes[i], 20, 20);
		material = new THREE.MeshPhongMaterial( { map:maps[i], normalMap: normals[i] } );
		moons[i] = new THREE.Mesh( geometry, material );
		scene.add(moons[i]);

	}

}


var venuscloudmesh, earthcloudmesh, marscloudmesh,jupitercloudmesh, jupiterring,
saturnring,  uranusring, neptunering;
var saturncloudmesh, uranuscloudmesh, neptunecloudmesh;
var clouds=[];
//adds clouds to all planets with an atmosphere and rings to all planets with rings
function stylizePlanets()
{

	//clouds for all planets venus until Neptune
	var sizes=[.41,.61,.51,2.02,1.21,1.02,1.02];
	var texts=[venuscloudmesh,earthcloudmesh,marscloudmesh,jupitercloudmesh,saturncloudmesh,uranuscloudmesh,neptunecloudmesh];
	var norms=[venuscloudmeshNORMAL,earthcloudmeshNORMAL,marscloudmeshNORMAL,jupitercloudmeshNORMAL,saturncloudmeshNORMAL,uranuscloudmeshNORMAL,neptunecloudmeshNORMAL];
	var opac=[.3,.2,.3,.3,.15,.1,.15];
	for(var i=0;i<7;i++)
	{
		geometry   = new THREE.SphereGeometry(sizes[i], 20, 20);
		material  = new THREE.MeshPhongMaterial({map :texts[i], normalMap: norms[i],
  		opacity     : opac[i], transparent : true,
		})
		if(i==1)
		{
			material  = new THREE.MeshPhongMaterial({map :texts[i],
  		opacity     : opac[i], transparent : true,
		})
		}

		clouds[i] = new THREE.Mesh(geometry, material);
		planets[i+1].add(clouds[i]);


	}


	//Jupiter ring
	geometry = new THREE.RingGeometry( 2.2, 3, 32 );
	material = new THREE.MeshPhongMaterial( { map:jupitertexture, normalMap: jupitertextureNORMAL, side: THREE.DoubleSide, opacity: 0.5} );
	jupiterring = new THREE.Mesh( geometry, material );
	jupiterring.rotation.x=11;
	jupiterring.position.set(20, 0, -20);
	scene.add( jupiterring );

	//Saturn ring
	geometry = new THREE.RingGeometry( 2, 2.9, 32 );
	material = new THREE.MeshPhongMaterial( { map:saturntexture, normalMap: saturntextureNORMAL, side: THREE.DoubleSide, opacity: 0.5 } );
	saturnring = new THREE.Mesh( geometry, material );
	saturnring.rotation.x=90;
	saturnring.position.set(-10, 0, -20);
	scene.add( saturnring );

	//Uranus ring
	geometry = new THREE.RingGeometry( 1.6, 2.0, 32 );
	material = new THREE.MeshPhongMaterial( { map:uranustexture, normalMap: uranustextureNORMAL , side: THREE.DoubleSide, opacity: 0.5 } );
	uranusring = new THREE.Mesh( geometry, material );
	uranusring.position.set(-10, 0, -20);
	uranusring.rotation.x=20;
	scene.add( uranusring );

	//Neptune ring
	geometry = new THREE.RingGeometry( 1.7, 2.4, 32 );
	material = new THREE.MeshPhongMaterial( { map:neptunetexture, normalMap: neptunetextureNORMAL, side: THREE.DoubleSide , opacity: 0.5} );
	neptunering = new THREE.Mesh( geometry, material );
	neptunering.position.set(-10, 0, -20);
	neptunering.rotation.x=-90;
	scene.add( neptunering );


}

//creates background of scene, stars and galaxies
var bluestars, particles;

function createBackground()
{
	

	//blue stars
	var geometry = new THREE.SphereGeometry(.6, 8, 8);
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

  //sun rotation

  sun.rotation.x+=.0001;
  sun.rotation.y+=.0001;
  sun.rotation.z+=.0001;


  //mercury rotation
  planets[0].position.x = Math.sin( time * 4.5 ) * 5;
  planets[0].position.y = Math.cos( time * 4.5 ) * 2;
  planets[0].position.z = Math.cos( time * 4.5 ) * 5;

  planets[0].rotation.y+=.001;
  
  //venus rotation
  planets[1].position.x = Math.sin( time * -2.5 ) * 9;
  planets[1].position.y = Math.sin( time * -1.5 ) * 2;
  planets[1].position.z = Math.cos( time * -2.5 ) * 9;

  //venus cloudmap rotation
  clouds[0].rotation.y+=.001;
  
  //earth rotation
  planets[2].position.x = Math.sin( time * 1.5 ) * 13;
  planets[2].position.z = Math.cos( time * 1.5 ) * 13;

    //earth moon rotation
  earthmoon.position.x = planets[2].position.x+Math.sin( time * 1.1 ) * 1.5;
  earthmoon.position.z = planets[2].position.z-Math.cos( time * 1.1 ) * 1.5;
  earthmoon.rotation.y-=.001;

  //earth cloudmap rotation
  clouds[1].rotation.y+=.001;

  //mars rotation
  planets[3].position.x = Math.sin( time * 1 ) * 18;
  planets[3].position.y = Math.cos( time * 1 ) * 4;
  planets[3].position.z = Math.cos( time * 1 ) * 18;

  //mars clouds rotation
  clouds[2].rotation.y+=.001;

  //mars moon1 rotation
  moons[0].position.x = planets[3].position.x + Math.sin( time * 5 ) * 1.25;
  moons[0].position.y = planets[3].position.y - .2;
  moons[0].position.z = planets[3].position.z - Math.cos( time * 5 ) * 1.25;

   //mars moon2 rotation
  moons[1].position.x = planets[3].position.x - Math.sin( time * 3 ) * 2.5;
  moons[1].position.y = planets[3].position.y +.1;
  moons[1].position.z = planets[3].position.z - Math.cos( time * 3 ) * 2.5;
  
  //jupiter rotation
  planets[4].position.x = jupiterring.position.x = Math.sin( time * 0.5 ) * 25;
  planets[4].position.y = jupiterring.position.y = Math.sin( time * 0.5 ) * 3;
  planets[4].position.z = jupiterring.position.z = Math.cos( time * 0.5 ) * 25;
  
  //jupiter clouds rotation
  clouds[3].rotation.y+=.001;

  //saturn rotation
  planets[5].position.x = saturnring.position.x = Math.sin( time * 0.3 ) * 32;
  planets[5].position.z = saturnring.position.z = -Math.cos( time * 0.3 ) * 32;

  clouds[4].rotation.y+=.001;
  
  //uranus rotation
  planets[6].position.x = uranusring.position.x = Math.sin( time * 0.2 ) * 40;
  planets[6].position.y = uranusring.position.y = Math.cos( time * 0.2 ) * 10;
  planets[6].position.z = uranusring.position.z = Math.cos( time * 0.2 ) * 40;

   clouds[5].rotation.y+=.001;
  
  //nepune rotation
  planets[7].position.x = neptunering.position.x = Math.sin( time * 0.1 ) * 50;
  planets[7].position.y = neptunering.position.y = Math.cos( time * 0.1 ) * 20;
  planets[7].position.z = neptunering.position.z = Math.cos( time * 0.1 ) * 50;

  clouds[6].rotation.y+=.001;

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
	 		controls.target0.set( planets[0].position.x, planets[0].position.y, planets[0].position.z);
  			controls.reset();
  			camera.position.x=planets[0].position.x+Math.sin(time)*3;
  			camera.position.y=planets[0].position.y;
  			camera.position.z=planets[0].position.z-Math.cos(time)*3;

	 	}
	 	if(lockVenus)
	 	{
	 		controls.target0.set( planets[1].position.x, planets[1].position.y, planets[1].position.z);
  			controls.reset();
  			camera.position.x=planets[1].position.x+Math.sin(time*4)*4;
  			camera.position.y=planets[1].position.y;
  			camera.position.z=planets[1].position.z-Math.cos(time*4)*4;
	 	}
	 	if(lockEarth)
	 	{
	 		controls.target0.set( planets[2].position.x, planets[2].position.y, planets[2].position.z);
  			controls.reset();
  			camera.position.x=planets[2].position.x+Math.sin(time*2)*5;
  			camera.position.y=planets[2].position.y;
  			camera.position.z=planets[2].position.z-Math.cos(time*2)*5;
	 	}
	 	if(lockMars)
	 	{
	 		controls.target0.set( planets[3].position.x, planets[3].position.y, planets[3].position.z);
  			controls.reset();
  			camera.position.x=planets[3].position.x+Math.sin(time*2)*4;
  			camera.position.y=planets[3].position.y;
  			camera.position.z=planets[3].position.z-Math.cos(time*2)*4;
	 	}
	 	if(lockJupiter)
	 	{
	 		controls.target0.set( planets[4].position.x, planets[4].position.y, planets[4].position.z);
  			controls.reset();
  			camera.position.x=planets[4].position.x+Math.sin(time*2)*10;
  			camera.position.y=planets[4].position.y+2;
  			camera.position.z=planets[4].position.z-Math.cos(time*2)*10;
	 	}
	 	if(lockSaturn)
	 	{
	 		controls.target0.set( planets[5].position.x, planets[5].position.y, planets[5].position.z);
  			controls.reset();
  			camera.position.x=planets[5].position.x+Math.sin(time*2)*9;
  			camera.position.y=planets[5].position.y;
  			camera.position.z=planets[5].position.z-Math.cos(time*2)*9;
	 	}
	 	if(lockUranus)
	 	{
	 		controls.target0.set( planets[6].position.x, planets[6].position.y, planets[6].position.z);
  			controls.reset();
  			camera.position.x=planets[6].position.x+Math.sin(time*2)*9;
  			camera.position.y=planets[6].position.y;
  			camera.position.z=planets[6].position.z-Math.cos(time*2)*9;
	 	}
	 	if(lockNeptune)
	 	{
	 		controls.target0.set( planets[7].position.x, planets[7].position.y, planets[7].position.z);
  			controls.reset();
  			camera.position.x=planets[7].position.x+Math.sin(time*2)*9;
  			camera.position.y=planets[7].position.y;
  			camera.position.z=planets[7].position.z-Math.cos(time*2)*9;
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


var camrotate=false;
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

var suntext, mercurytext, venustext, earthtext, earthmoontext,marstext,marsmoon1text,marsmoon2text,
jupitertext,saturntext,uranustext,neptunenext;

function setupPlanetText()
{
	var textMaterial = new THREE.MeshBasicMaterial( 
    { color: 0xffffff,transparent: true }
  );

	var textGeometry;

	

	
  loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Sun", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  suntext = new THREE.Mesh( textGeometry, textMaterial );
	  suntext.position.y+=3.5;
	  suntext.lookAt(camera.position);
	  sun.add( suntext );
	  suntext.visible=false;
	});   

   loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Mercury", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  mercurytext = new THREE.Mesh( textGeometry, textMaterial );
	  mercurytext.position.y+=.5;
	  planets[0].add( mercurytext );
	  mercurytext.visible=false;
	});   

    loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Venus", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  venustext = new THREE.Mesh( textGeometry, textMaterial );
	  venustext.position.y+=.5;
	  planets[1].add( venustext );
	  venustext.visible=false;
	});   

	 loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Earth", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  earthtext = new THREE.Mesh( textGeometry, textMaterial );
	  earthtext.position.y+=.75;
	  planets[2].add( earthtext );
	  earthtext.visible=false;
	});   

	  loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Moon", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  earthmoontext = new THREE.Mesh( textGeometry, textMaterial );
	  earthmoontext.position.y+=.5;
	  earthmoon.add( earthmoontext );
	  earthmoontext.visible=false;
	});   

	   loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Mars", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  marstext = new THREE.Mesh( textGeometry, textMaterial );
	  marstext.position.y+=1;
	  planets[3].add( marstext );
	  marstext.visible=false;
	});   

	    loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Phobos", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  marsmoon1text = new THREE.Mesh( textGeometry, textMaterial );
	  marsmoon1text.position.y+=.5;
	  moons[0].add( marsmoon1text );
	  marsmoon1text.visible=false;
	});

	 loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Deimos", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  marsmoon2text = new THREE.Mesh( textGeometry, textMaterial );
	  marsmoon2text.position.y+=.5;
	  moons[1].add( marsmoon2text );
	  marsmoon2text.visible=false;
	});    

	  loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Jupiter", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  jupitertext = new THREE.Mesh( textGeometry, textMaterial );
	  jupitertext.position.y+=2;
	  planets[4].add( jupitertext );
	  jupitertext.visible=false;
	});   

	   loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Saturn", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  saturntext = new THREE.Mesh( textGeometry, textMaterial );
	  saturntext.position.y+=1.5;
	  planets[5].add( saturntext );
	  saturntext.visible=false;
	});

	    loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Uranus", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  uranustext = new THREE.Mesh( textGeometry, textMaterial );
	  uranustext.position.y+=1.5;
	  planets[6].add( uranustext );
	  uranustext.visible=false;
	});   

	     loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
	    textGeometry = new THREE.TextGeometry( "Neptune", {font: font,
	    size: 1.0,
	    height: .1,
	    curveSegments: 5,
	  });
	  neptunetext = new THREE.Mesh( textGeometry, textMaterial );
	  neptunetext.position.y+=1;
	  planets[7].add( neptunetext );
	  neptunetext.visible=false;
	});   





}



var raycaster, mouse;

function setupRaycasting()
{
	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();

	render2();
}


document.addEventListener("mousemove", function(event){

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

});


var lockon=false;

function render2() {
	window.requestAnimationFrame(render2);

	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects( scene.children );

	

	for ( var i = 0; i < intersects.length; i++ ) {


		if(intersects[ i ].object.id==sun.id)
		{
			lockon=true;
			suntext.lookAt(camera.position);
  			suntext.visible=true;
  			setTimeout(function(){ suntext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==planets[0].id)
		{
			lockon=true;
			mercurytext.lookAt(camera.position);
  			mercurytext.visible=true;
  			setTimeout(function(){ mercurytext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==planets[1].id)
		{
			lockon=true;
			venustext.lookAt(camera.position);
  			venustext.visible=true;
  			setTimeout(function(){ venustext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==planets[2].id)
		{
			lockon=true;
			earthtext.lookAt(camera.position);
  			earthtext.visible=true;
  			setTimeout(function(){ earthtext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==earthmoon.id)
		{
			lockon=true;
			earthmoontext.lookAt(camera.position);
  			earthmoontext.visible=true;
  			setTimeout(function(){ earthmoontext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==planets[3].id)
		{
			lockon=true;
			marstext.lookAt(camera.position);
  			marstext.visible=true;
  			setTimeout(function(){ marstext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==moons[0].id)
		{
			lockon=true;
			marsmoon1text.lookAt(camera.position);
  			marsmoon1text.visible=true;
  			setTimeout(function(){ marsmoon1text.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==moons[1].id)
		{
			lockon=true;
			marsmoon2text.lookAt(camera.position);
  			marsmoon2text.visible=true;
  			setTimeout(function(){ marsmoon2text.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==planets[4].id)
		{
			lockon=true;
			jupitertext.lookAt(camera.position);
  			jupitertext.visible=true;
  			setTimeout(function(){ jupitertext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==planets[5].id)
		{
			lockon=true;
			saturntext.lookAt(camera.position);
  			saturntext.visible=true;
  			setTimeout(function(){ saturntext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==planets[6].id)
		{
			lockon=true;
			uranustext.lookAt(camera.position);
  			uranustext.visible=true;
  			setTimeout(function(){ uranustext.visible=false }, 1500);
		}
		else if(intersects[ i ].object.id==planets[7].id)
		{
			lockon=true;
			neptunetext.lookAt(camera.position);
  			neptunetext.visible=true;
  			setTimeout(function(){ neptunetext.visible=false }, 1500);
		}
		else
		{
			lockon=false;
		}
	
	}

	renderer.render( scene, camera );

}





window.addEventListener("load", function () {

    
 	const loader = document.querySelector(".loader");
	   loader.className += " hidden"; // class "loader hidden"



});



	
