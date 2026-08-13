import Reveal from "./Reveal";
import styles from "./CaseStudy.module.css";

// Renders a full case study page from a single data object.
// See src/data/aiVoiceInsight.js for the expected shape.
export default function CaseStudy({ data, name = "Labeeb Manamkandath" }) {
  const {
    meta,
    impactStrip,
    problem,
    research,
    principles,
    experiments,
    designProcess,
    decisionLog,
    solution,
    screenAnnotations,
    screenDeepDive,
    flow,
    humanImpact,
    keyFeatures,
    uniqueContribution,
    infoArchitecture,
    challenges,
    outcomes,
    reflections,
  } = data;

  return (
    <div>
      {/* NAV */}
      <nav className={styles.nav}>
        <span className={styles.navName}>{name} — Case Study</span>
        <div className={styles.navLinks}>
          <a href="#problem">Problem</a>
          <a href="#research">Research</a>
          <a href="#design">Design</a>
          <a href="#impact">Impact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBgText}>{meta.bgWord}</div>
        <div className={styles.heroTag}>{meta.tag}</div>
        <h1 className={styles.heroTitle}>
          {meta.title.map((line, i) => (
            <span key={i}>
              <span className={line === meta.accentWord ? styles.accentLine : ""}>
                {line}
              </span>
              {i < meta.title.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {meta.heroImage && (
          <div className={styles.heroMockupWrap}>
            <img src={meta.heroImage} alt={meta.heroImageAlt} />
          </div>
        )}

        <div className={styles.heroMeta}>
          <div className={styles.heroMetaItem}>
            <label>My Role</label>
            <span>{meta.role}</span>
          </div>
          <div className={styles.heroMetaItem}>
            <label>Platform</label>
            <span>{meta.platform}</span>
          </div>
          <div className={styles.heroMetaItem}>
            <label>Timeline</label>
            <span>{meta.timeline}</span>
          </div>
          <div className={styles.heroMetaItem}>
            <label>Product</label>
            <span>{meta.product}</span>
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <div className={styles.impactStrip}>
        <Reveal className={styles.impactGrid}>
          {impactStrip.map((item, i) => (
            <div className={styles.impactItem} key={i}>
              <span className={styles.impactNum}>{item.num}</span>
              <p className={styles.impactLabel}>{item.label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* PROBLEM */}
      <section className={styles.section} id="problem">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>{problem.label}</div>
          <Reveal className={styles.twoColWide}>
            <div>
              <h2 className={styles.h2}>
                {problem.heading[0]}
                <br />
                {problem.heading[1]}
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 300,
                  lineHeight: 1.8,
                  maxWidth: "100%",
                  color: "var(--black)",
                }}
              >
                {problem.bodyLead}
              </p>
              <p style={{ marginTop: 20 }}>{problem.bodySecondary}</p>
            </div>
          </Reveal>

          <Reveal className={styles.pullquote}>
            <p>"{problem.quote.text}"</p>
            <cite>— {problem.quote.cite}</cite>
          </Reveal>

          <Reveal className={styles.researchGrid}>
            {problem.statCards.map((card, i) => (
              <div className={styles.researchCard} key={i}>
                <span className="num" style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 48,
                  color: "var(--accent)",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 12,
                }}>
                  {card.num}
                </span>
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* RESEARCH */}
      <section className={`${styles.section} ${styles.sectionCream}`} id="research">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>{research.label}</div>
          <Reveal as="h2" className={styles.h2}>
            {research.heading[0]}
            <br />
            {research.heading[1]}
          </Reveal>

          <Reveal as="ul" className={styles.insightList}>
            {research.insights.map((insight, i) => (
              <li key={i}>
                <span className={styles.insightNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.insightText}>
                  <strong>{insight.title}</strong>
                  <span>{insight.body}</span>
                </div>
              </li>
            ))}
          </Reveal>

          {/* Optional badge legend (Driver case study visual language) */}
          {research.badgeLegend && (
            <Reveal style={{ marginTop: 64 }}>
              <div className={styles.sectionLabel}>{research.badgeLegend.label}</div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, marginBottom: 16 }}>
                {research.badgeLegend.heading}
              </h3>
              <p style={{ maxWidth: 580 }}>{research.badgeLegend.body}</p>
              <div className={styles.badgeLegend}>
                {research.badgeLegend.badges.map((b, i) => (
                  <div className={styles.badge} key={i}>
                    <div className={`${styles.badgeDot} ${styles[b.dotClass]}`}></div>
                    {b.label}
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className={styles.section} id="design">
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>{principles.label}</div>
          <Reveal as="h2" className={styles.h2}>
            {principles.heading[0]}
            <br />
            {principles.heading[1]}
          </Reveal>

          <Reveal className={styles.principles}>
            {principles.items.map((p, i) => (
              <div className={styles.principleBlock} data-n={i + 1} key={i}>
                <div className={styles.principleTag}>{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* DESIGN PROCESS (optional 5-phase strip) */}
      {designProcess && (
        <section className={`${styles.section} ${styles.sectionCream}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>{designProcess.label}</div>
            <Reveal as="h2" className={styles.h2}>
              {designProcess.heading[0]}<br />{designProcess.heading[1]}
            </Reveal>
            {designProcess.intro && <Reveal as="p">{designProcess.intro}</Reveal>}
            <Reveal className={styles.processRow}>
              {designProcess.phases.map((phase, i) => (
                <div key={i} className={`${styles.processStep} ${phase.active ? styles.processStepActive : ""}`}>
                  <div className={styles.processStepNum}>{phase.num}</div>
                  <h4>{phase.title}</h4>
                  <p>{phase.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* INSIGHT CARDS (optional research expectations grid) */}
      {research.insightCards && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>{research.insightCards.label}</div>
            <Reveal as="h2" className={styles.h2}>
              {research.insightCards.heading[0]}<br />{research.insightCards.heading[1]}
            </Reveal>
            {research.insightCards.intro && <Reveal as="p">{research.insightCards.intro}</Reveal>}
            <Reveal className={styles.insightCards}>
              {research.insightCards.items.map((card, i) => (
                <div className={styles.insightCard} key={i}>
                  <span className={styles.insightCardIcon}>{card.icon}</span>
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* EXPERIMENTS & TRADE-OFFS (optional section) */}
      {experiments && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>{experiments.label}</div>
            <Reveal as="h2" className={styles.h2}>
              {experiments.heading[0]}
              <br />
              {experiments.heading[1]}
            </Reveal>
            {experiments.intro && <Reveal as="p">{experiments.intro}</Reveal>}

            <Reveal className={styles.experimentsGrid}>
              {experiments.items.map((item, i) => (
                <div
                  className={`${styles.experimentCard} ${item.winner ? styles.winner : styles.rejected}`}
                  key={i}
                >
                  <div className={styles.expNum}>{String(i + 1).padStart(2, "0")}</div>
                  <div className={`${styles.expStatus} ${item.winner ? styles.win : styles.fail}`}>
                    {item.winner ? "Final Direction" : "Rejected"}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </Reveal>

            {/* Optional screen mockups comparing explored versions */}
            {experiments.screenComparisons && (
              <Reveal className={styles.mockupAnnotationWrap} style={{ marginTop: 64 }}>
                {experiments.screenComparisons.map((screen, i) => (
                  <div key={i}>
                    <div className={styles.screenFrame}>
                      <img src={screen.image} alt={screen.alt} />
                    </div>
                    <div className={styles.screenCaption}>
                      <div className={styles.screenLabel}>{screen.label}</div>
                      <h4>{screen.title}</h4>
                      <p>{screen.body}</p>
                      <div className={styles.annotationStack}>
                        {screen.annotations.map((a, j) => (
                          <div className={`${styles.annotationRow} ${styles[a.type]}`} key={j}>
                            <span className={styles.annotationKicker}>
                              {a.type === "problem" ? "Problem" : a.type === "fix" ? "Fix" : a.type === "tradeoff" ? "Trade-off" : "Decision"}
                            </span>
                            <span>{a.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* DECISION LOG */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>{decisionLog.label}</div>
          <Reveal as="h2" className={styles.h2}>
            {decisionLog.heading[0]}
            <br />
            {decisionLog.heading[1]}
          </Reveal>
          <Reveal as="p">{decisionLog.intro}</Reveal>

          <Reveal className={styles.decisionLog}>
            {decisionLog.entries.map((entry, i) => (
              <div className={styles.decisionEntry} key={i}>
                <div className={styles.decisionPhase}>{entry.phase}</div>
                <div className={styles.decisionOld}>
                  <div className={`${styles.decisionTag} ${styles.tagBefore}`}>
                    Initial direction
                  </div>
                  <p className={styles.decisionText}>{entry.before}</p>
                </div>
                <div className={styles.decisionNew}>
                  <div className={`${styles.decisionTag} ${styles.tagAfter}`}>
                    Final decision
                  </div>
                  <p className={styles.decisionText}>{entry.after}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SOLUTION: TWO LAYERS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>{solution.label}</div>
          <Reveal as="h2" className={styles.h2}>
            {solution.heading[0]}
            <br />
            {solution.heading[1]}
          </Reveal>
          <Reveal as="p">{solution.intro}</Reveal>

          <Reveal className={styles.layerSplit}>
            {solution.layers.map((layer, i) => (
              <div
                className={`${styles.layerPanel} ${layer.dark ? styles.layerPanelDark : ""}`}
                key={i}
              >
                <div className={styles.layerBadge}>{layer.badge}</div>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
                <ul className={styles.featList}>
                  {layer.features.map((f, j) => (
                    <li className={styles.featItem} key={j}>
                      <div className={styles.featDot}></div>
                      <div>
                        <strong>{f.title}</strong>
                        <span>{f.body}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          {/* SCREEN ANNOTATIONS */}
          <Reveal className={styles.mockupAnnotationWrap}>
            {screenAnnotations.map((screen, i) => (
              <div key={i}>
                <div className={styles.screenFrame}>
                  <img src={screen.image} alt={screen.alt} />
                </div>
                <div className={styles.screenCaption}>
                  <div className={styles.screenLabel}>{screen.label}</div>
                  <h4>{screen.title}</h4>
                  <p>{screen.body}</p>
                  <div className={styles.annotationStack}>
                    {screen.annotations.map((a, j) => (
                      <div className={`${styles.annotationRow} ${styles[a.type]}`} key={j}>
                        <span className={styles.annotationKicker}>
                          {a.type === "problem" ? "Problem" : a.type === "fix" ? "Fix" : "Decision"}
                        </span>
                        <span>{a.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* KEY FEATURES (optional grid section) */}
      {keyFeatures && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>{keyFeatures.label}</div>
            <Reveal as="h2" className={styles.h2}>
              {keyFeatures.heading[0]}<br />{keyFeatures.heading[1]}
            </Reveal>
            <Reveal as="p">{keyFeatures.intro}</Reveal>
            <Reveal className={styles.featureGrid}>
              {keyFeatures.items.map((f, i) => (
                <div className={styles.featureCard} key={i}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* UNIQUE CONTRIBUTION (optional feature callout block) */}
      {uniqueContribution && (
        <section className={`${styles.section} ${styles.sectionCream}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>{uniqueContribution.label}</div>
            <Reveal as="h2" className={styles.h2}>
              {uniqueContribution.heading[0]}<br />{uniqueContribution.heading[1]}
            </Reveal>
            {uniqueContribution.intro && <Reveal as="p">{uniqueContribution.intro}</Reveal>}
            <Reveal className={styles.contributionBlock}>
              <div className={styles.contributionTag}>{uniqueContribution.feature.tag}</div>
              <h3>{uniqueContribution.feature.title}</h3>
              <p>{uniqueContribution.feature.body}</p>
              <div className={styles.contributionFeatures}>
                {uniqueContribution.feature.items.map((item, i) => (
                  <div className={styles.contributionFeat} key={i}>
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* INFO ARCHITECTURE / MENU GRID (optional) */}
      {infoArchitecture && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>{infoArchitecture.label}</div>
            <Reveal as="h2" className={styles.h2}>
              {infoArchitecture.heading[0]}<br />{infoArchitecture.heading[1]}
            </Reveal>
            {infoArchitecture.intro && <Reveal as="p">{infoArchitecture.intro}</Reveal>}
            <Reveal className={styles.menuGrid}>
              {infoArchitecture.sections.map((s, i) => (
                <div className={`${styles.menuCard} ${s.dark ? styles.menuCardDark : ""}`} key={i}>
                  <div className={styles.menuCardLabel}>{s.label}</div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* SCREEN DEEP DIVE (optional annotated screen section) */}
      {screenDeepDive && (
        <section className={`${styles.section} ${styles.sectionCream}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>{screenDeepDive.label}</div>
            <Reveal as="h2" className={styles.h2}>
              {screenDeepDive.heading[0]}<br />{screenDeepDive.heading[1]}
            </Reveal>
            <Reveal as="p">{screenDeepDive.intro}</Reveal>

            {/* Two-col screens */}
            <Reveal className={styles.screenDeepDiveGrid}>
              {screenDeepDive.twoCol.map((screen, i) => (
                <div key={i}>
                  <div className={styles.screenFrame}>
                    <img src={screen.image} alt={screen.alt} />
                  </div>
                  <div className={styles.screenCaption}>
                    <div className={styles.screenLabel}>{screen.label}</div>
                    <h4>{screen.title}</h4>
                    <p>{screen.body}</p>
                    <div className={styles.annotationStack}>
                      {screen.annotations.map((a, j) => (
                        <div className={`${styles.annotationRow} ${styles[a.type]}`} key={j}>
                          <span className={styles.annotationKicker}>
                            {a.type === "problem" ? "Problem" : a.type === "tradeoff" ? "Trade-off" : a.type === "fix" ? "Fix" : "Decision"}
                          </span>
                          <span>{a.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>

            {/* Full-width detail screen */}
            {screenDeepDive.detailScreen && (
              <Reveal className={styles.screenDetailRow}>
                <div>
                  <div className={styles.screenFrame}>
                    <img src={screenDeepDive.detailScreen.image} alt={screenDeepDive.detailScreen.alt} />
                  </div>
                </div>
                <div style={{ paddingTop: 12 }}>
                  <div className={styles.screenLabel}>{screenDeepDive.detailScreen.label}</div>
                  <h4 style={{ fontSize: 20, fontWeight: 500, marginBottom: 12, color: "var(--black)" }}>
                    {screenDeepDive.detailScreen.title}
                  </h4>
                  <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.7 }}>
                    {screenDeepDive.detailScreen.body}
                  </p>
                  <div className={styles.annotationStack} style={{ marginTop: 24 }}>
                    {screenDeepDive.detailScreen.annotations.map((a, i) => (
                      <div className={`${styles.annotationRow} ${styles[a.type]}`} key={i}>
                        <span className={styles.annotationKicker}>
                          {a.type === "problem" ? "Problem" : a.type === "tradeoff" ? "Trade-off" : a.type === "fix" ? "Fix" : "Decision"}
                        </span>
                        <span>{a.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* HUMAN IMPACT (optional emotional quote section) */}
      {humanImpact && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>{humanImpact.label}</div>
            <Reveal as="h2" className={styles.h2}>
              {humanImpact.heading[0]}
              <br />
              {humanImpact.heading[1]}
            </Reveal>
            {humanImpact.intro && <Reveal as="p">{humanImpact.intro}</Reveal>}

            <Reveal className={styles.quotePair}>
              {humanImpact.quotes.map((q, i) => (
                <div className={styles.quoteCard} key={i}>
                  <p>"{q.text}"</p>
                  <cite>— {q.cite}</cite>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* USER FLOW */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>{flow.label}</div>
          <Reveal as="h2" className={styles.h2}>
            {flow.heading[0]}
            <br />
            {flow.heading[1]}
          </Reveal>

          <Reveal className={styles.flowWrap}>
            <div className={styles.flowRow}>
              {flow.steps.map((step, i) => (
                <>
                  <div
                    className={`${styles.flowStep} ${step.accent ? styles.flowStepAccent : ""}`}
                    key={`step-${i}`}
                  >
                    <div className={styles.flowStepLabel}>{step.label}</div>
                    <div className={styles.flowStepTitle}>{step.title}</div>
                    <div className={styles.flowStepDesc}>{step.body}</div>
                  </div>
                  {i < flow.steps.length - 1 && (
                    <div className={styles.flowArrow} key={`arrow-${i}`}>
                      →
                    </div>
                  )}
                </>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>{challenges.label}</div>
          <Reveal as="h2" className={styles.h2}>
            {challenges.heading[0]}
            <br />
            {challenges.heading[1]}
          </Reveal>

          <Reveal className={styles.challengeGrid}>
            {challenges.items.map((c, i) => (
              <div className={styles.challengeCard} key={i}>
                <div className={styles.cNum}>{String(i + 1).padStart(2, "0")}</div>
                <h4>{c.question}</h4>
                <div className={`${styles.cLabel} ${styles.tagBefore}`}>The problem</div>
                <div className={styles.cProblem}>{c.problem}</div>
                <div className={`${styles.cLabel} ${styles.tagAfter}`} style={{ marginTop: 12 }}>
                  My solution
                </div>
                <div className={styles.cSolution}>{c.solution}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* OUTCOMES */}
      <div className={styles.outcomeStrip} id="impact">
        <div className={styles.outcomeInner}>
          <div className={`${styles.sectionLabel} ${styles.sectionLabelDark}`}>
            {outcomes.label}
          </div>
          <h2 className={styles.h2}>
            {outcomes.heading[0]}
            <br />
            {outcomes.heading[1]}
          </h2>
          <Reveal className={styles.outcomeGrid}>
            {outcomes.items.map((item, i) => (
              <div className={styles.outcomeItem} key={i}>
                <div className={styles.oNum}>{item.num}</div>
                <div className={styles.oLabel}>{item.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* REFLECTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>{reflections.label}</div>
          <Reveal as="h2" className={styles.h2}>
            {reflections.heading[0]}
            <br />
            {reflections.heading[1]}
          </Reveal>

          <Reveal className={styles.reflectionGrid}>
            {reflections.items.map((r, i) => (
              <div className={styles.reflectionCard} key={i}>
                <span className={styles.rIcon}>{r.icon}</span>
                <h4>{r.title}</h4>
                <p>{r.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <h2 className={styles.h2} style={{ marginBottom: 12 }}>
            {name.split(" ")[0]}
            <br />
            {name.split(" ").slice(1).join(" ")}
          </h2>
          <p>Senior Product Designer · Dubai, UAE</p>
          <p style={{ marginTop: 8 }}>
            Available for product design, UX leadership, and AI product roles.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://labeeeb.framer.website" target="_blank" rel="noreferrer">
            Portfolio ↗
          </a>
          <a
            href="https://www.linkedin.com/in/labeeb-manamkandath"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:labeebmanamkandath@gmail.com">
            labeebmanamkandath@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
