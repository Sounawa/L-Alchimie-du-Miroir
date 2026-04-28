export default function OrnamentDivider({ children = '◈ ◈ ◈' }: { children?: string }) {
  return (
    <div className="ornament-divider">{children}</div>
  );
}
