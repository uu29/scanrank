import * as THREE from "three";

let camera, scene, renderer;
let geometry, material, mesh;

export default function init() {
  const FIELD_OF_VIEW = 30; // 카메라 시야각
  const ASPECT = window.innerWidth / window.innerHeight; // 시야의 가로세로비(카메라 화면 비율)
  const NEAR = 0.01; // 가장 가까이 보일 물체(사람으로 따지면 가장 가까이 볼 수 있는 거리)
  const FAR = 100000; // 가장 멀리 볼 수 있는 거리

  // 1. 카메라 종횡비 설정
  camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, ASPECT, NEAR, FAR);
  // 2. 카메라 설치
  camera.position.z = 1000;

  // 3. 무대를 만든다.
  scene = new THREE.Scene();

  // 박스 만들기
  // geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  // 구 만들기
  geometry = new THREE.SphereGeometry(200, 40, 30);

  // 재질 설정(컬러)
  const basic_map = new THREE.TextureLoader().load("/textures/texture.png");
  material = new THREE.MeshBasicMaterial({ map: basic_map });
  mesh = new THREE.Mesh(geometry, material);

  // 무대에 메쉬를 올린다
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  // 4. 화면 사이즈 설정
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  // 5.   렌더링
  document.body.appendChild(renderer.domElement);
}

function animation(time) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}
