import useReveal from "../hooks/useReveal";

// Wraps any block of content and fades/slides it in on scroll.
// <Reveal><div className="research-grid">...</div></Reveal>
export default function Reveal({ children, className = "", as = "div" }) {
  const [ref, visible] = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
