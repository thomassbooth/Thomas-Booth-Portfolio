
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

interface ParallaxProps {
  children: string;
  inverse: boolean
}

function ParallaxText({ children, inverse}: ParallaxProps) {

  const { scrollYProgress } = useScroll()
  let range = inverse ? [0, 1] : [1, 0]
  const x = useTransform(scrollYProgress, range, [-200, -600])

  return (
    <div className="flex">
      <motion.div className={`flex flex-row gap-2`} style={{ x }}>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}

export default function Cities() {
  return (
    <section className = '2xl:py-44 py-20 text-6xl font-extrabold'>
      <ParallaxText inverse = {true} > DUBAI LONDON </ParallaxText>
      <ParallaxText inverse = {false} > LONDON DUBAI </ParallaxText>
    </section>
  );
}
