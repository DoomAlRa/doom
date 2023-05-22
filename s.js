var loader = new THREE.TextureLoader();
var muro = loader.load('media/viejo-muro-ladrillo.jpg');
var suelo = loader.load('media/suelo doom 3.jpg');
var cielo = loader.load('media/techo.jpg');
var loader = new THREE.TextureLoader();
var muro = loader.load('media/viejo-muro-ladrillo.jpg');
var suelo = loader.load('media/suelo doom 3.jpg');
var cielo = loader.load('media/techo.jpg');
var maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
// Crear una escena
var scene = new THREE.Scene();
var projectileGeometry = new THREE.SphereGeometry(0.1, 8, 8);
var projectileMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
var lastShotTime = null;
var shotDelay = 500;
var projectiles = [];
var projectileSpeed = 0.1;
var collision = false;
var enemyCollision = false;
var techo = 0.6;  // Cambia el valor según tu necesidad
// Crear una cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// Crear un renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Crear el suelo
suelo.wrapS = THREE.RepeatWrapping;
suelo.wrapT = THREE.RepeatWrapping;
suelo.repeat.set(10000, 10000);
var groundGeometry = new THREE.PlaneGeometry(10000, 10000);
var groundMaterial = new THREE.MeshBasicMaterial({ map: suelo, side: THREE.DoubleSide });
var ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // rotar el plano para que esté horizontal
ground.position.y = -0.5; // mover el suelo hacia abajo para que sea visible
scene.add(ground);
// Crear el cielo
cielo.wrapS = THREE.RepeatWrapping;
cielo.wrapT = THREE.RepeatWrapping;
cielo.repeat.set(10000, 10000);
var skyGeometry = new THREE.PlaneGeometry(10000, 10000);
var skyMaterial = new THREE.MeshBasicMaterial({ map: cielo, side: THREE.DoubleSide });
var sky = new THREE.Mesh(skyGeometry, skyMaterial);
sky.position.y = 0.6; // mover el cielo hacia arriba para que sea visible
sky.rotation.x = Math.PI / 2; // rotar el cielo para que esté arriba
scene.add(sky);
// Crear cubos para representar las paredes del laberinto
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ map: muro }); // cambiar el color a #e3865d
var redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var spawnPoint = new THREE.Vector3();
var playerGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.copy(spawnPoint); // posicionar el cubo en el punto de inicio
scene.add(player);
var projectiles = [];
// Crear una clase para representar los proyectiles
function Projectile(position, direction) {
  this.geometry = new THREE.SphereGeometry(0.1, 32, 32);
  this.material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  this.mesh = new THREE.Mesh(this.geometry, this.material);
  this.mesh.position.copy(position);
  this.direction = direction;
  scene.add(this.mesh);
}
for (var i = 0; i < maze.length; i++) {
  for (var j = 0; j < maze[i].length; j++) {
    if (maze[i][j] === 1) {
      var cube = new THREE.Mesh(geometry, material);
      cube.position.set(j - maze[i].length / 2, 0, i - maze.length / 2);
      scene.add(cube);
    } else if (maze[i][j] === 2) {
      camera.position.x = j - maze[i].length / 2;
      camera.position.z = i - maze.length / 2;
      spawnPoint.copy(camera.position);
    } else if (maze[i][j] === 3) {
      var redCube = new THREE.Mesh(geometry, redMaterial);
      redCube.position.set(j - maze[i].length / 2, 0, i - maze.length / 2);
      scene.add(redCube);
    }
  }
}
// Manejar la entrada del teclado para mover la cámara
var speed = 0.01;
var isJumping = false;
var jumpSpeed = 0.03;
var gravity = 0.001;
var currentJumpSpeed = 0;
var keys = {};
document.addEventListener('keydown', function (event) {
  keys[event.key] = true;
}, false);
document.addEventListener('keyup', function (event) {
  keys[event.key] = false;
}, false);
// Bloquear el puntero cuando se hace clic en el canvas
renderer.domElement.addEventListener('click', function () {
  renderer.domElement.requestPointerLock = renderer.domElement.requestPointerLock ||
    renderer.domElement.mozRequestPointerLock;
  renderer.domElement.requestPointerLock();
}, false);
// Manejar la entrada del ratón para girar la cámara
var sensitivity = 0.002;
function onMouseMove(event) {
  var movementX = event.movementX || event.mozMovementX || 0;
  var movementY = event.movementY || event.mozMovementY || 0;
  var quaternionY = new THREE.Quaternion();
  var quaternionX = new THREE.Quaternion();
  quaternionY.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -movementX * sensitivity);
  quaternionX.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -movementY * sensitivity);
  camera.quaternion.multiplyQuaternions(quaternionY, camera.quaternion);
  camera.quaternion.multiplyQuaternions(camera.quaternion, quaternionX);
  camera.rotation.setFromQuaternion(camera.quaternion);
}

document.addEventListener('mousemove', onMouseMove, false);
function shootProjectile() {
  var now = new Date().getTime();
  if (lastShotTime && now - lastShotTime < shotDelay) {
    return;  // Si no ha pasado suficiente tiempo desde el último disparo, no hacer nada
  }
  lastShotTime = now;
  var projectile = new THREE.Mesh(projectileGeometry, projectileMaterial);
  var pos = camera.position.clone(); // Clona la posición de la cámara
  pos.y += 0.1; // Añade un pequeño offset en el eje Y
  projectile.position.copy(pos); // Usa la posición modificada para la bala
  var direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  projectile.velocity = direction.normalize().multiplyScalar(projectileSpeed);
  projectiles.push(projectile);
  scene.add(projectile);
}
function updateProjectiles() {
  projectiles.forEach(function (projectile, index) {
    projectile.position.add(projectile.velocity);
    var xIndex = Math.round(projectile.position.x + maze[0].length / 2);
    var zIndex = Math.round(projectile.position.z + maze.length / 2);
    // Destruye la bala si toca el suelo
    if (projectile.position.y <= -0.6) {
      scene.remove(projectile);
      projectiles.splice(index, 1);
      return; // Salir temprano de la función forEach para este proyectil
    }
    // Destruye la bala si toca el techo
    if (projectile.position.y >= techo) {
      scene.remove(projectile);
      projectiles.splice(index, 1);
      return; // Salir temprano de la función forEach para este proyectil
    }
    if (maze[zIndex][xIndex] === 1) {
      scene.remove(projectile);
      projectiles.splice(index, 1);
    } else if (maze[zIndex][xIndex] === 3) {
      maze[zIndex][xIndex] = 0;
      scene.remove(projectile);
      projectiles.splice(index, 1);
      scene.children.forEach(function (object) {
        if (object.position.x === xIndex - maze[0].length / 2 &&
          object.position.z === zIndex - maze.length / 2 &&
          object.type === 'Mesh' && object.material.color.getHex() === 0xff0000) {
          scene.remove(object);
        }
      });
    }
  });
}

var waypoints = [
    new THREE.Vector3(-10, 0, -10),
    new THREE.Vector3(10, 0, 10)
];
var enemy = new Enemy('models/my_model.gltf', waypoints, 1);

/*
// Enemigo
class Enemy {
    constructor(modelUrl, waypoints, speed) {
        this.loader = new THREE.GLTFLoader();

        this.loader.load(
            modelUrl,
            (gltf) => { 
                this.model = gltf.scene; 
                this.model.position.copy(this.waypoints[0]);
                scene.add(this.model);
            },
            undefined, 
            (error) => console.error(error)
        );

        this.waypoints = waypoints;
        this.speed = speed;
        this.currentWaypointIndex = 0;
        this.position = new THREE.Vector3();
        this.position.copy(this.waypoints[0]);
    }

    update(deltaTime) {
    // Calcular la distancia hasta el waypoint actual
    const currentWaypoint = this.waypoints[this.currentWaypointIndex];
    const distance = this.position.distanceTo(currentWaypoint);

    // Si estamos lo suficientemente cerca, pasar al siguiente waypoint
    if (distance < 1) {
        this.currentWaypointIndex++;
        if (this.currentWaypointIndex >= this.waypoints.length) {
            this.currentWaypointIndex = 0;
        }
    }

    // Moverse hacia el waypoint
    const direction = new THREE.Vector3();
    direction.subVectors(this.waypoints[this.currentWaypointIndex], this.position).normalize();
    direction.multiplyScalar(this.speed * deltaTime);
    this.position.add(direction);

    // Actualizar la posición del modelo 3D
    if (this.model) {
        this.model.position.copy(this.position);
    }    }
}
*/

// Renderizar la escena
function animate() {
  requestAnimationFrame(animate);
  // Aquí comienza tu código insertado
  let euler = new THREE.Euler();
  euler.setFromQuaternion(camera.quaternion, 'YXZ');
  var dx = -Math.sin(euler.y);
  var dz = -Math.cos(euler.y);
  var newPosX = camera.position.x;
  var newPosZ = camera.position.z;
  var currentSpeed = keys['Shift'] ? speed * 2 : speed;

  if (keys['w']) {
    newPosX += dx * currentSpeed;
    newPosZ += dz * currentSpeed;
  }
  if (keys['s']) {
    newPosX -= dx * currentSpeed;
    newPosZ -= dz * currentSpeed;
  }
  if (keys['a']) {
    newPosX += dz * currentSpeed;
    newPosZ -= dx * currentSpeed;
  }
  if (keys['d']) {
    newPosX -= dz * currentSpeed;
    newPosZ += dx * currentSpeed;
  }
  if (keys[' ']) {
    if (!isJumping && camera.position.y <= 0) {
      isJumping = true;
      currentJumpSpeed = jumpSpeed;
    }
  }
  var xIndex = Math.round(newPosX + maze[0].length / 2);
  var zIndex = Math.round(newPosZ + maze.length / 2);
  var checkPoints = [
    { x: newPosX + 0.03, z: newPosZ },
    { x: newPosX - 0.03, z: newPosZ },
    { x: newPosX, z: newPosZ + 0.03 },
    { x: newPosX, z: newPosZ - 0.03 }
  ];
  var checkEnemyPoints = [
    { x: newPosX + 0.02, z: newPosZ },
    { x: newPosX - 0.02, z: newPosZ },
    { x: newPosX, z: newPosZ + 0.02 },
    { x: newPosX, z: newPosZ - 0.02 }
  ];
  var collision = false;
  var enemyCollision = false;
  for (var i = 0; i < checkPoints.length; i++) {
    var checkX = Math.round(checkPoints[i].x + maze[0].length / 2);
    var checkZ = Math.round(checkPoints[i].z + maze.length / 2);
    if (maze[checkZ][checkX] === 1) {
      collision = true;
      console.log('Collision detected at point', i, 'with coordinates', checkX, checkZ);
      break;
    }
  }
  for (var i = 0; i < checkEnemyPoints.length; i++) {
    var checkX = Math.round(checkEnemyPoints[i].x + maze[0].length / 2);
    var checkZ = Math.round(checkEnemyPoints[i].z + maze.length / 2);
    if (maze[checkZ][checkX] === 3) {
      enemyCollision = true;
      console.log('Enemy collision detected at point', i, 'with coordinates', checkX, checkZ);
      break;
    }
  }
  if (!collision) {
    if (enemyCollision) {
      camera.position.copy(spawnPoint);
      player.position.copy(spawnPoint);
    } else {
      camera.position.x = newPosX;
      camera.position.z = newPosZ;
      player.position.x = newPosX;
      player.position.z = newPosZ;
    }
  }
  if (isJumping) {
    if (camera.position.y + currentJumpSpeed > techo) {
      currentJumpSpeed = 0;
      isJumping = false;
    } else {
      camera.position.y += currentJumpSpeed;
      player.position.y += currentJumpSpeed;
      currentJumpSpeed -= gravity; // Aplicar gravedad
    }
  }
  if (!isJumping && camera.position.y > 0) {
    camera.position.y -= currentJumpSpeed;
    player.position.y -= currentJumpSpeed;
    currentJumpSpeed += gravity;
  }
  if (camera.position.y > techo) {
    camera.position.y = techo;
    player.position.y = techo;
  }
  if (camera.position.y < 0) {
    camera.position.y = 0;
    player.position.y = 0;
    currentJumpSpeed = 0;
    isJumping = false;
  }
  if (keys['e']) {
    shootProjectile();
  }
  updateProjectiles();
  renderer.render(scene, camera);
  // Aquí termina tu código insertado
}
animate()
// Crear una escena
var scene = new THREE.Scene();
var projectileGeometry = new THREE.SphereGeometry(0.1, 8, 8);
var projectileMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
var lastShotTime = null;
var shotDelay = 500;
var projectiles = [];
var projectileSpeed = 0.1;
var collision = false;
var enemyCollision = false;
var techo = 0.6;  // Cambia el valor según tu necesidad
// Crear una cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// Crear un renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Crear el suelo
suelo.wrapS = THREE.RepeatWrapping;
suelo.wrapT = THREE.RepeatWrapping;
suelo.repeat.set(10000, 10000);
var groundGeometry = new THREE.PlaneGeometry(10000, 10000);
var groundMaterial = new THREE.MeshBasicMaterial({ map: suelo, side: THREE.DoubleSide });
var ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // rotar el plano para que esté horizontal
ground.position.y = -0.5; // mover el suelo hacia abajo para que sea visible
scene.add(ground);
// Crear el cielo
cielo.wrapS = THREE.RepeatWrapping;
cielo.wrapT = THREE.RepeatWrapping;
cielo.repeat.set(10000, 10000);
var skyGeometry = new THREE.PlaneGeometry(10000, 10000);
var skyMaterial = new THREE.MeshBasicMaterial({ map: cielo, side: THREE.DoubleSide });
var sky = new THREE.Mesh(skyGeometry, skyMaterial);
sky.position.y = 0.6; // mover el cielo hacia arriba para que sea visible
sky.rotation.x = Math.PI / 2; // rotar el cielo para que esté arriba
scene.add(sky);
// Crear cubos para representar las paredes del laberinto
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ map: muro }); // cambiar el color a #e3865d
var redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var spawnPoint = new THREE.Vector3();
var playerGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.copy(spawnPoint); // posicionar el cubo en el punto de inicio
scene.add(player);
var projectiles = [];
// Crear una clase para representar los proyectiles
function Projectile(position, direction) {
  this.geometry = new THREE.SphereGeometry(0.1, 32, 32);
  this.material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  this.mesh = new THREE.Mesh(this.geometry, this.material);
  this.mesh.position.copy(position);
  this.direction = direction;
  scene.add(this.mesh);
}
for (var i = 0; i < maze.length; i++) {
  for (var j = 0; j < maze[i].length; j++) {
    if (maze[i][j] === 1) {
      var cube = new THREE.Mesh(geometry, material);
      cube.position.set(j - maze[i].length / 2, 0, i - maze.length / 2);
      scene.add(cube);
    } else if (maze[i][j] === 2) {
      camera.position.x = j - maze[i].length / 2;
      camera.position.z = i - maze.length / 2;
      spawnPoint.copy(camera.position);
    } else if (maze[i][j] === 3) {
      var redCube = new THREE.Mesh(geometry, redMaterial);
      redCube.position.set(j - maze[i].length / 2, 0, i - maze.length / 2);
      scene.add(redCube);
    }
  }
}
// Manejar la entrada del teclado para mover la cámara
var speed = 0.01;
var isJumping = false;
var jumpSpeed = 0.03;
var gravity = 0.001;
var currentJumpSpeed = 0;
var keys = {};
document.addEventListener('keydown', function (event) {
  keys[event.key] = true;
}, false);
document.addEventListener('keyup', function (event) {
  keys[event.key] = false;
}, false);
// Bloquear el puntero cuando se hace clic en el canvas
renderer.domElement.addEventListener('click', function () {
  renderer.domElement.requestPointerLock = renderer.domElement.requestPointerLock ||
    renderer.domElement.mozRequestPointerLock;
  renderer.domElement.requestPointerLock();
}, false);
// Manejar la entrada del ratón para girar la cámara
var sensitivity = 0.002;
function onMouseMove(event) {
  var movementX = event.movementX || event.mozMovementX || 0;
  var movementY = event.movementY || event.mozMovementY || 0;
  var quaternionY = new THREE.Quaternion();
  var quaternionX = new THREE.Quaternion();
  quaternionY.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -movementX * sensitivity);
  quaternionX.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -movementY * sensitivity);
  camera.quaternion.multiplyQuaternions(quaternionY, camera.quaternion);
  camera.quaternion.multiplyQuaternions(camera.quaternion, quaternionX);
  camera.rotation.setFromQuaternion(camera.quaternion);
}

document.addEventListener('mousemove', onMouseMove, false);
function shootProjectile() {
  var now = new Date().getTime();
  if (lastShotTime && now - lastShotTime < shotDelay) {
    return;  // Si no ha pasado suficiente tiempo desde el último disparo, no hacer nada
  }
  lastShotTime = now;
  var projectile = new THREE.Mesh(projectileGeometry, projectileMaterial);
  var pos = camera.position.clone(); // Clona la posición de la cámara
  pos.y += 0.1; // Añade un pequeño offset en el eje Y
  projectile.position.copy(pos); // Usa la posición modificada para la bala
  var direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  projectile.velocity = direction.normalize().multiplyScalar(projectileSpeed);
  projectiles.push(projectile);
  scene.add(projectile);
}
function updateProjectiles() {
  projectiles.forEach(function (projectile, index) {
    projectile.position.add(projectile.velocity);
    var xIndex = Math.round(projectile.position.x + maze[0].length / 2);
    var zIndex = Math.round(projectile.position.z + maze.length / 2);
    // Destruye la bala si toca el suelo
    if (projectile.position.y <= -0.6) {
      scene.remove(projectile);
      projectiles.splice(index, 1);
      return; // Salir temprano de la función forEach para este proyectil
    }
    // Destruye la bala si toca el techo
    if (projectile.position.y >= techo) {
      scene.remove(projectile);
      projectiles.splice(index, 1);
      return; // Salir temprano de la función forEach para este proyectil
    }
    if (maze[zIndex][xIndex] === 1) {
      scene.remove(projectile);
      projectiles.splice(index, 1);
    } else if (maze[zIndex][xIndex] === 3) {
      maze[zIndex][xIndex] = 0;
      scene.remove(projectile);
      projectiles.splice(index, 1);
      scene.children.forEach(function (object) {
        if (object.position.x === xIndex - maze[0].length / 2 &&
          object.position.z === zIndex - maze.length / 2 &&
          object.type === 'Mesh' && object.material.color.getHex() === 0xff0000) {
          scene.remove(object);
        }
      });
    }
  });
}
// Renderizar la escena
function animate() {
  requestAnimationFrame(animate);
  // Aquí comienza tu código insertado
  let euler = new THREE.Euler();
  euler.setFromQuaternion(camera.quaternion, 'YXZ');
  var dx = -Math.sin(euler.y);
  var dz = -Math.cos(euler.y);
  var newPosX = camera.position.x;
  var newPosZ = camera.position.z;
  var currentSpeed = keys['Shift'] ? speed * 2 : speed;

  if (keys['w']) {
    newPosX += dx * currentSpeed;
    newPosZ += dz * currentSpeed;
  }
  if (keys['s']) {
    newPosX -= dx * currentSpeed;
    newPosZ -= dz * currentSpeed;
  }
  if (keys['a']) {
    newPosX += dz * currentSpeed;
    newPosZ -= dx * currentSpeed;
  }
  if (keys['d']) {
    newPosX -= dz * currentSpeed;
    newPosZ += dx * currentSpeed;
  }
  if (keys[' ']) {
    if (!isJumping && camera.position.y <= 0) {
      isJumping = true;
      currentJumpSpeed = jumpSpeed;
    }
  }
  var xIndex = Math.round(newPosX + maze[0].length / 2);
  var zIndex = Math.round(newPosZ + maze.length / 2);
  var checkPoints = [
    { x: newPosX + 0.03, z: newPosZ },
    { x: newPosX - 0.03, z: newPosZ },
    { x: newPosX, z: newPosZ + 0.03 },
    { x: newPosX, z: newPosZ - 0.03 }
  ];
  var checkEnemyPoints = [
    { x: newPosX + 0.02, z: newPosZ },
    { x: newPosX - 0.02, z: newPosZ },
    { x: newPosX, z: newPosZ + 0.02 },
    { x: newPosX, z: newPosZ - 0.02 }
  ];
  var collision = false;
  var enemyCollision = false;
  for (var i = 0; i < checkPoints.length; i++) {
    var checkX = Math.round(checkPoints[i].x + maze[0].length / 2);
    var checkZ = Math.round(checkPoints[i].z + maze.length / 2);
    if (maze[checkZ][checkX] === 1) {
      collision = true;
      console.log('Collision detected at point', i, 'with coordinates', checkX, checkZ);
      break;
    }
  }
  for (var i = 0; i < checkEnemyPoints.length; i++) {
    var checkX = Math.round(checkEnemyPoints[i].x + maze[0].length / 2);
    var checkZ = Math.round(checkEnemyPoints[i].z + maze.length / 2);
    if (maze[checkZ][checkX] === 3) {
      enemyCollision = true;
      console.log('Enemy collision detected at point', i, 'with coordinates', checkX, checkZ);
      break;
    }
  }
  if (!collision) {
    if (enemyCollision) {
      camera.position.copy(spawnPoint);
      player.position.copy(spawnPoint);
    } else {
      camera.position.x = newPosX;
      camera.position.z = newPosZ;
      player.position.x = newPosX;
      player.position.z = newPosZ;
    }
  }
  if (isJumping) {
    if (camera.position.y + currentJumpSpeed > techo) {
      currentJumpSpeed = 0;
      isJumping = false;
    } else {
      camera.position.y += currentJumpSpeed;
      player.position.y += currentJumpSpeed;
      currentJumpSpeed -= gravity; // Aplicar gravedad
    }
  }
  if (!isJumping && camera.position.y > 0) {
    camera.position.y -= currentJumpSpeed;
    player.position.y -= currentJumpSpeed;
    currentJumpSpeed += gravity;
  }
  if (camera.position.y > techo) {
    camera.position.y = techo;
    player.position.y = techo;
  }
  if (camera.position.y < 0) {
    camera.position.y = 0;
    player.position.y = 0;
    currentJumpSpeed = 0;
    isJumping = false;
  }
  if (keys['e']) {
    shootProjectile();
  }
  updateProjectiles();
  renderer.render(scene, camera);
  // Aquí termina tu código insertado
}
animate()