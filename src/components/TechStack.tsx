import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];

const textureLoader = new THREE.TextureLoader();

const sphereGeometry = new THREE.SphereGeometry(1, 16, 16);

const items = Array.from({ length: 16 }, (_, i) => ({
  position: [
    ((i * 37) % 20) - 10,
    ((i * 23) % 14) - 7,
    ((i * 17) % 8) - 4,
  ] as [number, number, number],
  scale: 0.55 + ((i * 13) % 5) * 0.1,
  speed: 0.3 + ((i * 7) % 5) * 0.08,
  offset: i * 0.7,
}));

type TechItemProps = {
  texture: THREE.Texture;
  position: [number, number, number];
  scale: number;
  speed: number;
  offset: number;
};

function TechItem({
  texture,
  position,
  scale,
  speed,
  offset,
}: TechItemProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime * speed + offset;

    ref.current.position.y = position[1] + Math.sin(time) * 0.7;

    ref.current.position.x =
      position[0] + Math.cos(time * 0.7) * 0.5;

    ref.current.rotation.x = time * 0.5;
    ref.current.rotation.y = time * 0.7;
  });

  return (
    <mesh
      ref={ref}
      geometry={sphereGeometry}
      position={position}
      scale={scale}
    >
      <meshStandardMaterial
        map={texture}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");

      if (!workSection) return;

      const top = workSection.getBoundingClientRect().top;

      setIsVisible(top < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textures = useMemo(() => {
    return imageUrls.map((url) => textureLoader.load(url));
  }, []);

  return (
    <div className="techstack">
      <h2>My Techstack</h2>

      <Canvas
        className="tech-canvas"
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 0, 20],
          fov: 32.5,
          near: 1,
          far: 100,
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 8, 10]}
          intensity={2}
        />

        {isVisible &&
          items.map((item, index) => (
            <TechItem
              key={index}
              texture={textures[index % textures.length]}
              position={item.position}
              scale={item.scale}
              speed={item.speed}
              offset={item.offset}
            />
          ))}
      </Canvas>
    </div>
  );
};

export default TechStack;