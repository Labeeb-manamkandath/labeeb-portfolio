import { useEffect, useState } from "react";
import CaseStudy from "./components/CaseStudy";
import caseStudies from "./data/caseStudies";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// Reads ?cs=slug from the URL. No router dependency needed for this size
// of site — ask Cursor to swap in react-router-dom later if you want
// real routes like /case-study/slug instead of query params.
function useSlugFromUrl() {
  const [slug, setSlug] = useState(
    () => new URLSearchParams(window.location.search).get("cs")
  );

  useEffect(() => {
    const onPop = () =>
      setSlug(new URLSearchParams(window.location.search).get("cs"));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (newSlug) => {
    const url = newSlug ? `?cs=${newSlug}` : window.location.pathname;
    window.history.pushState({}, "", url);
    setSlug(newSlug);
    window.scrollTo(0, 0);
  };

  return [slug, navigate];
}

function HomePage({ onSelect }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        color: "#F5F2ED",
        padding: "120px 48px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            color: "#FF4D00",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Labeeb Manamkandath — Case Studies
        </p>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            marginBottom: 56,
            lineHeight: 0.95,
          }}
        >
          Selected Work
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {caseStudies.map((cs) => (
            <button
              key={cs.slug}
              onClick={() => onSelect(cs.slug)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                padding: "28px 0",
                borderTop: "0.5px solid rgba(255,255,255,0.12)",
                background: "none",
                border: "none",
                color: "#F5F2ED",
                cursor: "pointer",
                fontSize: 22,
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              <span>{cs.meta.title.join(" ")}</span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {cs.meta.timeline} →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [slug, navigate] = useSlugFromUrl();
  const [caseStudy, setCaseStudy] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setCaseStudy(null);
      return;
    }
    setCaseStudy(null);
    setError(null);

    fetch(`${API_URL}/api/case-studies/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("API not reachable");
        return res.json();
      })
      .then(setCaseStudy)
      .catch(() => {
        const fallback = caseStudies.find((cs) => cs.slug === slug);
        if (fallback) {
          setCaseStudy(fallback);
          setError("Using local data — API not running");
        }
      });
  }, [slug]);

  if (!slug) {
    return <HomePage onSelect={navigate} />;
  }

  if (!caseStudy) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#F5F2ED",
          fontFamily: "monospace",
        }}
      >
        Loading case study…
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => navigate(null)}
        style={{
          position: "fixed",
          top: 18,
          right: 48,
          zIndex: 101,
          background: "none",
          border: "none",
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: "#6B6860",
          cursor: "pointer",
        }}
      >
        ← All work
      </button>
      {error && (
        <div
          style={{
            position: "fixed",
            bottom: 12,
            right: 12,
            zIndex: 999,
            background: "#FF4D00",
            color: "#0A0A0A",
            fontSize: 11,
            padding: "6px 12px",
            borderRadius: 4,
            fontFamily: "monospace",
          }}
        >
          {error}
        </div>
      )}
      <CaseStudy data={caseStudy} />
    </>
  );
}
