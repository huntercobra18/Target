
const backgroundColor = 0x222222;

/*////////////////////////////////////////*/

var renderCalls = [];
function render () {
  requestAnimationFrame( render );
  renderCalls.forEach((callback)=>{ callback(); });
}
render();

/*////////////////////////////////////////*/
console.log(document.getElementById('model'));

var width = 564;
var height= 568;
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 80, window.width / window.height, 0.1, 800 );
camera.position.set(5,5,5);


var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.width, window.height );
renderer.setClearColor( backgroundColor );//0x );

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = Math.pow( 0.94, 5.0 );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

window.addEventListener( 'resize', function () {
  camera.aspect = window.width / window.height;
  camera.updateProjectionMatrix();
  renderer.setSize( window.width, window.height );
}, false );
console.log(document.querySelector("#model"));
document.querySelector("#model").appendChild( renderer.domElement);

function renderScene(){ renderer.render( scene, camera ); }
renderCalls.push(renderScene);

/* ////////////////////////////////////////////////////////////////////////// */
var controls = new THREE.OrbitControls( camera );

controls.rotateSpeed = 0.5;
controls.enableZoom=false;

controls.minDistance = 8;
// controls.maxDistance = 20;
controls.autoRotate=true;
controls.autoRotateSpeed=0.1;

controls.minPolarAngle = Math.PI /3; // radians
controls.maxPolarAngle = Math.PI /2.5; // radians

controls.enableDamping = true;
controls.dampingFactor = 0.1;

controls.enablePan=false;

renderCalls.push(function(){
  controls.update()
});
console.log(controls);


/* ////////////////////////////////////////////////////////////////////////// */


// var light = new THREE.PointLight( 0xAfAfAf, 20, 200 );
// light.position.set( 4, 30, -20 );
// scene.add( light );

var light2 = new THREE.AmbientLight( 0x191919, 20, 100 );
light2.position.set( 30, -10, 30 );
scene.add( light2 );

/* ////////////////////////////////////////////////////////////////////////// */

const size = 50;
const divisions = 50;

const gridHelper = new THREE.GridHelper( size, divisions,"red" );
scene.add( gridHelper );

/* ////////////////////////////////////////////////////////////////////////// */

var loader = new THREE.GLTFLoader();
loader.crossOrigin = true;
loader.load( 'model.gltf', function ( data ) {

  
    var object = data.scene;
     object.position.set(0,-4,0);

    scene.add( object );
  //, onProgress, onError );
});
