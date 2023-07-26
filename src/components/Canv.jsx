import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Model } from './model'

const Canv = () => {
    const cam = useRef(null)
    if (!!cam.current) {
        cam.current.enableZoom = false
        cam.current.autoRotate = true   
        cam.current.enablePan = false
        cam.current.enableRotate = false
        cam.current.rotate = false
        cam.current.autoRotateSpeed = 10 

    }
//   useFrame(()=>{
//   })
  return (
    <Canvas className='canv'>
        <PerspectiveCamera makeDefault position={[0,4,6]}/>
        <OrbitControls ref={cam} />
        <Model/>
        {/* <AmbientLight args={["#fff" , 2]} /> */}
        <SpotLight args={["#fff" , 1.4 , 0 , Math.PI/2 , 0.6]} position={[2,2,0]} castShadow/>
        <directionalLight isDirectionalLight castShadow position={[2, 2, 0]} />
    </Canvas>
  )
}

export default Canv