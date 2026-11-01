// Turns an Anthropic SDK error into a short, safe reason code.
// The full error goes to the Vercel function logs; visitors only see the code.
import Anthropic from "@anthropic-ai/sdk";

export function reasonFor(err) {
  const msg = String((err && err.message) || "") + " " + JSON.stringify((err && err.error) || "");
  if (err instanceof Anthropic.RateLimitError) return "busy";
  if (err instanceof Anthropic.AuthenticationError) return "key";
  if (err instanceof Anthropic.PermissionDeniedError) return "access";
  if (err instanceof Anthropic.BadRequestError) return /credit|billing|balance/i.test(msg) ? "billing" : "request";
  if (err instanceof Anthropic.NotFoundError) return "model";
  if (err instanceof Anthropic.APIConnectionError) return "network";
  if (err instanceof Anthropic.APIError) return err.status === 529 ? "busy" : "upstream";
  return "server";
}

export function logError(where, err) {
  console.error(`[${where}]`, err && err.status, err && err.name, String((err && err.message) || err).slice(0, 500));
}
