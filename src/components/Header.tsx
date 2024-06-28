/**
 * @author: Lxdll
 * Calendar Header
 */

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex justify-between border p-2">
      <div>left TODO</div>

      <div>center TODO</div>

      <div>right TODO</div>
    </div>
  );
}
