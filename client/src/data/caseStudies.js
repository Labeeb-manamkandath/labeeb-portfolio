import aiVoiceInsight from "./aiVoiceInsightGenerator";
import aiFaceRegistration from "./aiFaceRegistrationFlow";
import driverDailyRouteTimeline from "./driverDailyRouteTimeline";
import zaperAiWebsiteDesign from "./zaperAiWebsiteDesign";

const caseStudies = [aiVoiceInsight, aiFaceRegistration, driverDailyRouteTimeline, zaperAiWebsiteDesign];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((cs) => cs.slug === slug);

export default caseStudies;
