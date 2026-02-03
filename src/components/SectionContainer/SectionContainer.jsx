export default function SectionContainer({ children, className = "" }) {
  return (
    <div className={`section-container ${className}`.trim()}>{children}</div>
  );
}
