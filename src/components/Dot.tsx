/**
 * @author: luxudong@thinredline.com.cn
 * Dot
 */

interface DotProps {
  backgroundColor: string;
}

export default function Dot(props: DotProps) {
  const { backgroundColor } = props;
  return (
    <div
      className="w-4 h-4 rounded-full border"
      style={{ backgroundColor }}
    ></div>
  );
}
