import { BlurFade } from "./ui/blur-fade";
import { TextAnimate } from "./ui/text-animate";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <BlurFade inView delay={0.1} className="mb-7">
      <TextAnimate
        as="h1"
        by="word"
        animation="blurInUp"
        className="uppercase font-bold text-center text-4xl w-full"
      >
        {title}
      </TextAnimate>
    </BlurFade>
  );
};

export default Title;
