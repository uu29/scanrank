import * as THREE from "three";
import { OrbitControls } from "@three-ts/orbit-controls";
import { XRWebGLLayer } from "three";

let camera, scene, renderer;
let geometry, material, earth;

export default function init() {
  const FIELD_OF_VIEW = 75; // 카메라 시야각
  const sceneWidth = window.innerWidth / 1.8;
  const sceneHeight = window.innerHeight;
  const ASPECT = sceneWidth / sceneHeight; // 시야의 가로세로비(카메라 화면 비율)
  const NEAR = 0.1; // 가장 가까이 보일 물체(사람으로 따지면 가장 가까이 볼 수 있는 거리)
  const FAR = 1000; // 가장 멀리 볼 수 있는 거리

  // 1. 카메라 종횡비 설정
  camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, ASPECT, NEAR, FAR);
  // 2. 카메라 설치
  camera.position.z = 24;
  // 3. 무대를 만든다.
  scene = new THREE.Scene();
  // scene.position.x = -10;
  // scene.position.z = 10;

  // 구 만들기
  geometry = new THREE.SphereGeometry(10, 32, 32);

  // 재질 설정(컬러)
  const basic_map = new THREE.TextureLoader().load("/textures/custom-texture.png");
  material = new THREE.MeshPhongMaterial({
    map: basic_map,
  });
  earth = new THREE.Mesh(geometry, material);
  // earth.position.x = -10;

  // 무대에 메쉬를 올린다
  scene.add(earth);

  // 구름 만들기
  let earthCloudGeo = new THREE.SphereGeometry(10, 32, 32);

  // 구름에 질감 추가
  let earthCloudTexture = new THREE.TextureLoader().load("/textures/earthhiresclouds4K.jpg");

  // 구름 물질 추가
  let earthMaterialClouds = new THREE.MeshLambertMaterial({
    color: 0x404040,
    transparent: true,
    opacity: 0.3,
  });

  // 최종 구름 생성
  let earthClouds = new THREE.Mesh(earthCloudGeo, earthMaterialClouds);

  // 구름 사이즈 설정
  earthClouds.scale.set(1.015, 1.015, 1.015);

  // 지구의 자식 객체로 추가하기
  earth.add(earthClouds);

  // 무대 조명 설치
  createLights(scene);

  createSkyBox(scene);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  const controls = new OrbitControls(camera, renderer.domElement);

  // 카메라 줌 가능 범위 지정(너무 가깝거나 멀리 줌 하는 것 방지)
  controls.enableZoom = false;
  controls.enablePan = false;

  const default_polat_angle = 1.5707963267948966;
  controls.maxPolarAngle = default_polat_angle + 0.02; // 수직 궤도 최대 각
  controls.minPolarAngle = default_polat_angle - 0.06; // 수직 궤도 최소 각, 일치시키면 각이 고정됨

  console.log(controls.object);

  controls.update();
  controls.saveState();
  // 4. 화면 사이즈 설정
  renderer.setSize(sceneWidth, sceneHeight);
  renderer.setAnimationLoop(animation);
  // 5.   렌더링
  document.body.appendChild(renderer.domElement);

  // 좌표값 추가
  const kr = {
    latitude: 37.5326,
    longitude: 127.024612,
    color: "orange",
  };
  const ny = {
    latitude: 40.6643,
    longitude: -73.9385,
    color: "red",
  };
  addCountryCoord(0, 0, "white", earthClouds);
  addCountryCoord(kr.latitude, kr.longitude, kr.color, earthClouds);
  addCountryCoord(ny.latitude, ny.longitude, ny.color, earthClouds);

  // 이벤트리스너 추가하기
  window.addEventListener("resize", onWindowResize, false);

  // 윈도우 리사이즈 해도 perspective가 그대로 보이도록(반응형)
  function onWindowResize() {
    camera.aspect = window.innerWidth / 1.8 / sceneHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 1.8, sceneHeight);
  }

  document.getElementById("globeDom").appendChild(renderer.domElement);
}

function createSkyBox(scene) {
  const cubeLoaderOnLoad = () => {
    console.log("cubeLoaderOnLoad");
  };

  const cubeLoaderOnProgress = () => {
    console.log("onProgress");
  };
  const cubeLoaderOnError = (err) => {
    console.log("onError");
    console.log(err);
  };

  const cubeLoader = new THREE.CubeTextureLoader().load(
    [
      "/textures/cubeMaps/px.png",
      "/textures/cubeMaps/nx.png",
      "/textures/cubeMaps/py.png",
      "/textures/cubeMaps/ny.png",
      "/textures/cubeMaps/pz.png",
      "/textures/cubeMaps/nz.png",
    ],
    cubeLoaderOnLoad,
    cubeLoaderOnProgress,
    cubeLoaderOnError
  );

  scene.background = cubeLoader;
}

function animation(time) {
  // 애니메이션 조절
  // earth.rotation.x = time / 2000;
  earth.rotation.y = time / 8000;

  renderer.render(scene, camera);
}

function createLights(scene) {
  let lights = [];
  lights[0] = new THREE.PointLight("#3010f7", 0.5, 0);
  lights[1] = new THREE.PointLight("#3010f7", 0.5, 0);
  lights[2] = new THREE.PointLight("#c5bdf4", 0.7, 0);
  lights[3] = new THREE.AmbientLight("#ffffff");
  lights[4] = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.8);

  // 조명 위치 조절
  lights[0].position.set(200, 0, -400);
  lights[1].position.set(200, 200, 400);
  lights[2].position.set(0, 400, 0);
  lights[3].position.set(-200, -200, 50);

  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);
  scene.add(lights[3]);
  scene.add(lights[4]);
}

function addCountryCoord(latitude, longitude, color, earthClouds) {
  let pointOfInterest = new THREE.SphereGeometry(0.1, 32, 32); // 작은 입체 구를 만든다.
  const radius = 10;

  let material = new THREE.MeshBasicMaterial({
    color: color,
  });

  let mesh = new THREE.Mesh(pointOfInterest, material);
  const [x, y, z] = calcPosFromLatLonRad(latitude, longitude, radius);

  mesh.position.set(x, y, z);
  earthClouds.add(mesh);
}

function calcPosFromLatLonRad(lat, lon, radius) {
  let x, y, z;
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  x = -(radius * Math.sin(phi) * Math.cos(theta));
  z = radius * Math.sin(phi) * Math.sin(theta);
  y = radius * Math.cos(phi);

  return [x, y, z];
}
