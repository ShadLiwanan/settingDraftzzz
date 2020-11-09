//IMPORTANT STUFF
const SCENE = new THREE.Scene();
const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;
const MAXPARTICLES = 5;
const RENDERER = new THREE.WebGLRenderer();
RENDERER.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(RENDERER.domElement);

//CAMERA
let camera = new THREE.PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  NEAR,
  FAR
);

camera.position.x = 0;
camera.position.y = 0.4;
//camera.position.z = 40;
camera.position.z = 0.5;


camera.lookAt(new THREE.Vector3(0, 0, 0));  

//Particles
let particlesGeometry = new THREE.Geometry();
for (let i = 0; i < MAXPARTICLES; i++) {
  let particle = new THREE.Vector3(
    random(-69, 69),
    random(-9, 9),
    random(-11, 11)
  );
  particlesGeometry.vertices.push(particle);
}
let particleMaterial = new THREE.ParticleBasicMaterial({
  color: 0xFFA500,
  size: 0.3,
 
});
let particleMesh = new THREE.ParticleSystem(particlesGeometry, particleMaterial);
particleMesh.sortParticles = true;
SCENE.add(particleMesh);

//TREE 1 (Round)
  //BARK
let bark1Geometry = new THREE.CylinderGeometry(0.03,0.03,0.4,32);
let bark1Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
let bark1Mesh = new THREE.Mesh(bark1Geometry, bark1Material);
SCENE.add(bark1Mesh);

bark1Mesh.position.y = 0
bark1Mesh.position.x = 0
bark1Mesh.position.z = -0.5
  //LEAVES
let leaves1Geometry = new THREE.SphereGeometry(0.1, 6, 6);
let leaves1Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
let leaves1Mesh = new THREE.Mesh(leaves1Geometry, leaves1Material);
SCENE.add(leaves1Mesh);

leaves1Mesh.position.y = 0.2
leaves1Mesh.position.x = 0
leaves1Mesh.position.z = -0.5

//TREE 2 (Round) 
  //BARK
let bark2Geometry = new THREE.CylinderGeometry(0.03,0.03,0.3,32);
let bark2Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
let bark2Mesh = new THREE.Mesh(bark2Geometry, bark2Material);
SCENE.add(bark2Mesh);

bark2Mesh.position.y = -0.1
bark2Mesh.position.x = -0.5
bark2Mesh.position.z = -0.3
  //LEAVES
let leaves2Geometry = new THREE.SphereGeometry(0.1, 6, 6);
let leaves2Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
let leaves2Mesh = new THREE.Mesh(leaves2Geometry, leaves2Material);
SCENE.add(leaves2Mesh);

leaves2Mesh.position.y = 0.1
leaves2Mesh.position.x = -0.5
leaves2Mesh.position.z = -0.3

//TREE 3 (Pointy)
  //BARK
let bark3Geometry = new THREE.CylinderGeometry(0.02,0.02,0.3,32);
let bark3Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
let bark3Mesh = new THREE.Mesh(bark3Geometry, bark3Material);
SCENE.add(bark3Mesh);

bark3Mesh.position.y = -0.1
bark3Mesh.position.x = -0.4
bark3Mesh.position.z = -0.6
  //LEAVES
let leaves3Geometry = new THREE.CylinderGeometry(0, 0.07, 0.4, 4, 2);
let leaves3Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
let leaves3Mesh = new THREE.Mesh(leaves3Geometry, leaves3Material);
SCENE.add(leaves3Mesh);

leaves3Mesh.position.y = 0.1
leaves3Mesh.position.x = -0.4
leaves3Mesh.position.z = -0.6

//TREE 4 (Pointy)
  //BARK
  let bark4Geometry = new THREE.CylinderGeometry(0.02,0.02,0.3,32);
  let bark4Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark4Mesh = new THREE.Mesh(bark4Geometry, bark4Material);
  SCENE.add(bark4Mesh);
  
  bark4Mesh.position.y = -0.1
  bark4Mesh.position.x = -0.6
  bark4Mesh.position.z = -0.09
    //LEAVES
  let leaves4Geometry = new THREE.CylinderGeometry(0, 0.07, 0.4, 4, 2);
  let leaves4Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves4Mesh = new THREE.Mesh(leaves4Geometry, leaves4Material);
  SCENE.add(leaves4Mesh);
  
  leaves4Mesh.position.y = 0.1
  leaves4Mesh.position.x = -0.6
  leaves4Mesh.position.z = -0.09


  //TREE 5 (Pointy)
  //BARK
  let bark5Geometry = new THREE.CylinderGeometry(0.02,0.02,0.3,32);
  let bark5Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark5Mesh = new THREE.Mesh(bark4Geometry, bark4Material);
  SCENE.add(bark5Mesh);
  
  bark5Mesh.position.y = -0.1
  bark5Mesh.position.x = 0.5
  bark5Mesh.position.z = -0.7
    //LEAVES
  let leaves5Geometry = new THREE.CylinderGeometry(0, 0.07, 0.4, 4, 2);
  let leaves5Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves5Mesh = new THREE.Mesh(leaves5Geometry, leaves5Material);
  SCENE.add(leaves5Mesh);
  
  leaves5Mesh.position.y = 0.1
  leaves5Mesh.position.x = 0.5
  leaves5Mesh.position.z = -0.7

  //TREE 6 (Pointy)
  //BARK
  let bark6Geometry = new THREE.CylinderGeometry(0.02,0.02,0.3,32);
  let bark6Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark6Mesh = new THREE.Mesh(bark6Geometry, bark6Material);
  SCENE.add(bark6Mesh);
  
  bark6Mesh.position.y = -0.1
  bark6Mesh.position.x = 0.2
  bark6Mesh.position.z = -0.7
    //LEAVES
  let leaves6Geometry = new THREE.CylinderGeometry(0, 0.07, 0.4, 4, 2);
  let leaves6Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves6Mesh = new THREE.Mesh(leaves6Geometry, leaves6Material);
  SCENE.add(leaves6Mesh);
  
  leaves6Mesh.position.y = 0.1
  leaves6Mesh.position.x = 0.2
  leaves6Mesh.position.z = -0.7

//TREE 7 (Round) 
  //BARK
  let bark7Geometry = new THREE.CylinderGeometry(0.03,0.03,0.3,32);
  let bark7Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark7Mesh = new THREE.Mesh(bark7Geometry, bark7Material);
  SCENE.add(bark7Mesh);
  
  bark7Mesh.position.y = -0.1
  bark7Mesh.position.x = 0.6
  bark7Mesh.position.z = -0.3
    //LEAVES
  let leaves7Geometry = new THREE.SphereGeometry(0.1, 6, 6);
  let leaves7Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
  let leaves7Mesh = new THREE.Mesh(leaves7Geometry, leaves7Material);
  SCENE.add(leaves7Mesh);
  
  leaves7Mesh.position.y = 0.1
  leaves7Mesh.position.x = 0.6
  leaves7Mesh.position.z = -0.3

//TREE 8 (Round)
  //BARK
  let bark8Geometry = new THREE.CylinderGeometry(0.03,0.03,0.4,32);
  let bark8Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark8Mesh = new THREE.Mesh(bark8Geometry, bark8Material);
  SCENE.add(bark8Mesh);
  
  bark8Mesh.position.y = 0
  bark8Mesh.position.x = 0.5
  bark8Mesh.position.z = 0
    //LEAVES
  let leaves8Geometry = new THREE.SphereGeometry(0.1, 6, 6);
  let leaves8Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
  let leaves8Mesh = new THREE.Mesh(leaves8Geometry, leaves8Material);
  SCENE.add(leaves8Mesh);
  
  leaves8Mesh.position.y = 0.2
  leaves8Mesh.position.x = 0.5
  leaves8Mesh.position.z = 0

  //TREE 9 (Round) 
  //BARK
  let bark9Geometry = new THREE.CylinderGeometry(0.04,0.04,0.6,32);
  let bark9Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark9Mesh = new THREE.Mesh(bark9Geometry, bark9Material);
  SCENE.add(bark9Mesh);
  
  bark9Mesh.position.y = -0.1
  bark9Mesh.position.x = 0.8  
  bark9Mesh.position.z = -0.7
    //LEAVES
  let leaves9Geometry = new THREE.SphereGeometry(0.2, 6, 6);
  let leaves9Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
  let leaves9Mesh = new THREE.Mesh(leaves9Geometry, leaves9Material);
  SCENE.add(leaves9Mesh);
  
  leaves9Mesh.position.y = 0.3
  leaves9Mesh.position.x = 0.8
  leaves9Mesh.position.z = -0.7

  //TREE 10 (Pointy)
  //BARK
  let bark10Geometry = new THREE.CylinderGeometry(0.02,0.02,0.3,32);
  let bark10Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark10Mesh = new THREE.Mesh(bark10Geometry, bark10Material);
  SCENE.add(bark10Mesh);
  
  bark10Mesh.position.y = -0.1
  bark10Mesh.position.x = 0.4
  bark10Mesh.position.z = 0.6
    //LEAVES
  let leaves10Geometry = new THREE.CylinderGeometry(0, 0.07, 0.4, 4, 2);
  let leaves10Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves10Mesh = new THREE.Mesh(leaves10Geometry, leaves10Material);
  SCENE.add(leaves10Mesh);
  
  leaves10Mesh.position.y = 0.1
  leaves10Mesh.position.x = 0.4
  leaves10Mesh.position.z = 0.6

  //TREE 11 (Pointy)
  //BARK
  let bark11Geometry = new THREE.CylinderGeometry(0.04,0.04,0.5,32);
  let bark11Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark11Mesh = new THREE.Mesh(bark11Geometry, bark11Material);
  SCENE.add(bark11Mesh);
  
  bark11Mesh.position.y = -0.1
  bark11Mesh.position.x = 0.3
  bark11Mesh.position.z = 0.6
    //LEAVES
  let leaves11Geometry = new THREE.CylinderGeometry(0, 0.09, 0.4, 6, 2);
  let leaves11Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves11Mesh = new THREE.Mesh(leaves11Geometry, leaves11Material);
  SCENE.add(leaves11Mesh);
  
  leaves11Mesh.position.y = 0.2
  leaves11Mesh.position.x = 0.3
  leaves11Mesh.position.z = 0.6

  //TREE 12 (Round) 
  //BARK
  let bark12Geometry = new THREE.CylinderGeometry(0.04,0.04,0.4,32);
  let bark12Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark12Mesh = new THREE.Mesh(bark12Geometry, bark12Material);
  SCENE.add(bark12Mesh);
  
  bark12Mesh.position.y = -0.1
  bark12Mesh.position.x = 0.8  
  bark12Mesh.position.z = 0.4
    //LEAVES
  let leaves12Geometry = new THREE.SphereGeometry(0.2, 6, 6);
  let leaves12Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
  let leaves12Mesh = new THREE.Mesh(leaves12Geometry, leaves12Material);
  SCENE.add(leaves12Mesh);
  
  leaves12Mesh.position.y = 0.2
  leaves12Mesh.position.x = 0.8
  leaves12Mesh.position.z = 0.4

  //TREE 13 (Pointy)
  //BARK
  let bark13Geometry = new THREE.CylinderGeometry(0.03,0.03,0.4,32);
  let bark13Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark13Mesh = new THREE.Mesh(bark13Geometry, bark13Material);
  SCENE.add(bark13Mesh);
  
  bark13Mesh.position.y = -0.1
  bark13Mesh.position.x = 0.8
  bark13Mesh.position.z = 0.8
    //LEAVES
  let leaves13Geometry = new THREE.CylinderGeometry(0, 0.09, 0.4, 5, 2);
  let leaves13Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves13Mesh = new THREE.Mesh(leaves13Geometry, leaves13Material);
  SCENE.add(leaves13Mesh);
  
  leaves13Mesh.position.y = 0.1
  leaves13Mesh.position.x = 0.8
  leaves13Mesh.position.z = 0.8

  //TREE 14 (Round) 
  //BARK
  let bark14Geometry = new THREE.CylinderGeometry(0.04,0.04,0.5,32);
  let bark14Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark14Mesh = new THREE.Mesh(bark14Geometry, bark14Material);
  SCENE.add(bark14Mesh);
  
  bark14Mesh.position.y = -0.1
  bark14Mesh.position.x = 0.0
  bark14Mesh.position.z = 0.7
    //LEAVES
  let leaves14Geometry = new THREE.SphereGeometry(0.2, 6, 6);
  let leaves14Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
  let leaves14Mesh = new THREE.Mesh(leaves14Geometry, leaves14Material);
  SCENE.add(leaves14Mesh);
  
  leaves14Mesh.position.y = 0.2
  leaves14Mesh.position.x = 0.0
  leaves14Mesh.position.z = 0.7

  //TREE 15 (Pointy)
  //BARK
  let bark15Geometry = new THREE.CylinderGeometry(0.03,0.03,0.4,32);
  let bark15Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark15Mesh = new THREE.Mesh(bark15Geometry, bark15Material);
  SCENE.add(bark15Mesh);
  
  bark15Mesh.position.y = -0.1
  bark15Mesh.position.x = -0.3
  bark15Mesh.position.z = 0.7
    //LEAVES
  let leaves15Geometry = new THREE.CylinderGeometry(0, 0.09, 0.4, 5, 2);
  let leaves15Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves15Mesh = new THREE.Mesh(leaves15Geometry, leaves15Material);
  SCENE.add(leaves15Mesh);
  
  leaves15Mesh.position.y = 0.1
  leaves15Mesh.position.x = -0.3
  leaves15Mesh.position.z = 0.7

    //TREE 16 (Round) 
  //BARK
  let bark16Geometry = new THREE.CylinderGeometry(0.04,0.04,0.5,32);
  let bark16Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark16Mesh = new THREE.Mesh(bark16Geometry, bark16Material);
  SCENE.add(bark16Mesh);
  
  bark16Mesh.position.y = -0.1
  bark16Mesh.position.x = -0.8
  bark16Mesh.position.z = 0.4
    //LEAVES
  let leaves16Geometry = new THREE.SphereGeometry(0.2, 6, 6);
  let leaves16Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
  let leaves16Mesh = new THREE.Mesh(leaves16Geometry, leaves16Material);
  SCENE.add(leaves16Mesh);
  
  leaves16Mesh.position.y = 0.2
  leaves16Mesh.position.x = -0.8
  leaves16Mesh.position.z = 0.4

  //TREE 17 (Pointy)
  //BARK
  let bark17Geometry = new THREE.CylinderGeometry(0.03,0.03,0.4,32);
  let bark17Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark17Mesh = new THREE.Mesh(bark17Geometry, bark17Material);
  SCENE.add(bark17Mesh);
  
  bark17Mesh.position.y = -0.1
  bark17Mesh.position.x = -0.6
  bark17Mesh.position.z = 0.8
    //LEAVES
  let leaves17Geometry = new THREE.CylinderGeometry(0, 0.09, 0.4, 5, 2);
  let leaves17Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves17Mesh = new THREE.Mesh(leaves17Geometry, leaves17Material);
  SCENE.add(leaves17Mesh);
  
  leaves17Mesh.position.y = 0.1
  leaves17Mesh.position.x = -0.6
  leaves17Mesh.position.z = 0.8

  
//LAMP BASE
  let lampbaseGeometry = new THREE.CylinderGeometry(0.02,0.02,0.4,32);
  let lampbaseMaterial = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/lampbaseTexture.png'), side: THREE.DoubleSide} );
  let lampbaseMesh = new THREE.Mesh(lampbaseGeometry, lampbaseMaterial);
  SCENE.add(lampbaseMesh);
  
  lampbaseMesh.position.y = 0
  lampbaseMesh.position.x = 0
  lampbaseMesh.position.z = 0
  
  //LAMP LIGHT
  let lamplightGeometry = new THREE.CylinderGeometry(0.1  , 0, 0.1, 0.3, 2);
  let lamplightMaterial = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/lamplightTexture.png'), side: THREE.DoubleSide});
  let lamplightMesh = new THREE.Mesh(lamplightGeometry, lamplightMaterial);
  SCENE.add(lamplightMesh);
  
  lamplightMesh.position.y = 0.2
  lamplightMesh.position.x = 0
  lamplightMesh.position.z = 0
  




  

//SKYBOX 
let stageGeometry = new THREE.BoxBufferGeometry(3,1,3);
let stageGround = 
[
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/groundTexture.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide})

];
let stageMaterials = new THREE.MeshFaceMaterial(stageGround);
let stageCube = new THREE.Mesh(stageGeometry, stageMaterials);
SCENE.add(stageCube);
stageCube.position.x=0
stageCube.position.y=0
stageCube.position.z=0 // this can vary from the position of your camera



//RANDOM NUMBER GENERATOR
function random(min, max) {
  if (isNaN(max)) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

//LIGHT
let light = new THREE.AmbientLight( "#FFFFFF" );
SCENE.add( light );



//RENDER LOOP
function render() {
    requestAnimationFrame(render);
    particleMesh.rotation.y += -0.00200;
    particleMesh.rotation.x += 0.00200;
    particleMesh.rotation.z += -0.00200;
    //stageCube.rotation.y += -0.0020;
    //sphere1.rotation.y += -0.0020;
    //cylinder5.rotation.y += -0.0020;
    //camera.rotation.y += -0.005;
   
    
    
    RENDERER.render(SCENE, camera);
  }
  render();

//RESIZE
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  RENDERER.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", resize, false);