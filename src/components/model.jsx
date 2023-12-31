/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 car2.glb
Author: luyssport (https://sketchfab.com/luyssport)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/cob-8a555ce7382c4c55b798f4cf7b9cae0c
Title: Cob
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/public/models/car2.glb')
  return (
    <group {...props} dispose={null} scale={[0.1,0.1,0.1]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[0.45, -0.47, 1.65]} scale={1.69}>
          <mesh geometry={nodes.crow_0.geometry} material={materials.eyes} />
          <mesh geometry={nodes.crow_1.geometry} material={materials.gradient} />
          <mesh geometry={nodes.crow_1_1.geometry} material={materials.gradient} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/public/models/car2.glb')
