//////////////settings/////////
var actionZ = 0; //on left click action
var rotationA = 3.1; // amount of rotation
var movementSpeed = 10;
var zoomSpeed = 10;
var totalObjects = 40000;
/////////////////////////////////
var rotated = false; 
var container = document.createElement('div');
document.body.appendChild( container );

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,1, 10000)
camera.position.z = 2000; 

var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2( 0x555555, 0.0003 );  
var geometry = new THREE.Geometry();

for (i = 0; i < totalObjects; i ++) 
{ 
  var vertex = new THREE.Vector3();
  vertex.x = Math.random()*40000-20000;
  vertex.y = Math.random()*7000-3500;
  vertex.z = Math.random()*7000-3500;
  geometry.vertices.push( vertex );
}

var material = new THREE.ParticleBasicMaterial( { size: 6 });
var particles = new THREE.ParticleSystem( geometry, material );
      
scene.add( particles ); 

camera.position.x = -10000;


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild( renderer.domElement );

renderer.render( scene, camera );

render();

            function render() {
        requestAnimationFrame( render );
        if (!rotated && camera.position.x < 11000)
        {
          if(camera.position.x > 10000){
            rotated = true;
            if (camera.rotation.y < rotationA){
              camera.rotation.y += .015;
              rotated = false;
            }
            if (camera.position.z > -2000){
              camera.position.z -= 19;
              rotated = false;
            }
          }
          else{
          camera.position.x += movementSpeed;
          camera.position.z += actionZ;
          }
        }
        else if(rotated && camera.position.x > -11000){
                    if(camera.position.x < -10000){
            rotated = false;
            if (camera.rotation.y > 0){
              camera.rotation.y -= .015;
              rotated = true;
            }
            if (camera.position.z < 2000){
              camera.position.z += 19;
              rotated = true;
            }
          }
          else{
          camera.position.x -= movementSpeed;
          camera.position.z -= actionZ;
          }
        }
        
           
                renderer.render( scene, camera );

            }

window.addEventListener( 'mousedown', onDocumentMouseDown, false );
window.addEventListener( 'mouseup', onDocumentMouseUp, false );
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }
function onDocumentMouseDown(){
    event.preventDefault();
    actionZ = -zoomSpeed;
}

function onDocumentMouseUp(){
   actionZ = 0;
}