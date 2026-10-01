import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { vertexShader, fragmentShader } from './shaders';

// Concept proportions only; no production dimensions or fold mechanics implied.
export function createProduct() {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({color:0x687587,metalness:.88,roughness:.26});
  const add = (w:number,h:number,d:number,x:number,y:number,z:number,parent=group) => {
    const mesh=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,4,.045),metal);
    mesh.position.set(x,y,z); parent.add(mesh); return mesh;
  };
  // The inner edges meet at the hinge. The shader's UVs continue across both halves.
  add(5.4,.14,3.3,0,0,.47);
  const lid=new THREE.Group();
  lid.position.set(0,.08,-1.18); lid.rotation.x=-.18; group.add(lid);
  add(5.4,3.3,.14,0,1.65,-.07,lid);
  const time={value:0};
  const materials=[0,1].map(panel=>new THREE.ShaderMaterial({
    vertexShader,fragmentShader,uniforms:{uTime:time,uPanel:{value:panel}},side:THREE.DoubleSide
  }));
  const lower=new THREE.Mesh(new THREE.PlaneGeometry(5.24,3.22),materials[0]);
  lower.rotation.x=-Math.PI/2; lower.position.set(0,.081,.43); group.add(lower);
  const upper=new THREE.Mesh(new THREE.PlaneGeometry(5.24,3.22),materials[1]);
  upper.position.set(0,1.61,.001); lid.add(upper);
  group.position.y=-.9;
  return {group,lid,shader:materials[0]};
}
