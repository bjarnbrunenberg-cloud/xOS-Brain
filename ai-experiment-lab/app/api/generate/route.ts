import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { SYSTEM_PROMPT, buildUserPrompt } from "@/lib/prompt";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { initiative, context } = await req.json();

  if (!initiative || typeof initiative !== "string" || initiative.length < 10) {
    return new Response(
      JSON.stringify({ error: "Please describe your AI initiative in at least a few sentences." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const result = streamText({
    model: anthropic("claude-sonnet-4-5-20250929"),
    system: SYSTEM_PROMPT,
    prompt: buildUserPrompt(initiative, context),
    maxTokens: 4000,
    temperature: 0.7,
  });

  return result.toDataStreamResponse();
}
