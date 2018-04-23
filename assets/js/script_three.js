  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
  var renderer = new THREE.WebGLRenderer( { alpha: true } );

  renderer.setSize(window.innerWidth, window.innerHeight);
  // javascript Function Number #1
  document.body.appendChild(renderer.domElement);
  var geometry = new THREE.SphereGeometry(5, 32, 32);
  var material = new THREE.MeshBasicMaterial({color: 0xff00c1 , wireframe: true});
  var sphere = new THREE.Mesh(geometry, material);

  var starsGeometry = new THREE.Geometry();

  for ( var i = 0; i < 10000; i ++ ) {
  	var star = new THREE.Vector3();
  	star.x = THREE.Math.randFloatSpread( 2000 );
  	star.y = THREE.Math.randFloatSpread( 2000 );
  	star.z = THREE.Math.randFloatSpread( 2000 );

  	starsGeometry.vertices.push( star );
  }

  var starsMaterial = new THREE.PointsMaterial( { color: 0xffffff, size: 2.0 } );

  var starField = new THREE.Points( starsGeometry, starsMaterial );

  scene.add( starField );


  scene.add(sphere);
  camera.position.z = 10;

  function render() {
  requestAnimationFrame(render);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  starField.rotation.x += 0.001;
  starField.rotation.y += 0.001;

  renderer.render(scene, camera);
  renderer.setClearColor( 0xffffff, 0 );
  };
  render();
