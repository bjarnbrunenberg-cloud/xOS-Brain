import { SECTION_META, type BriefSection } from "./types";

/**
 * Parse streaming markdown text into structured sections.
 * Detects ## SECTION_NAME headers and splits content accordingly.
 */
export function parseSections(text: string): BriefSection[] {
  const sections: BriefSection[] = [];
  const headerPattern = /^## (.+)$/gm;
  const matches: { title: string; startIndex: number }[] = [];

  let match;
  while ((match = headerPattern.exec(text)) !== null) {
    matches.push({ title: match[1].trim(), startIndex: match.index });
  }

  for (let i = 0; i < matches.length; i++) {
    const { title, startIndex } = matches[i];
    const contentStart = text.indexOf("\n", startIndex) + 1;
    const contentEnd =
      i + 1 < matches.length ? matches[i + 1].startIndex : text.length;
    const content = text.slice(contentStart, contentEnd).trim();
    const meta = SECTION_META[title];

    sections.push({
      id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title,
      content,
      icon: meta?.icon ?? "📋",
    });
  }

  return sections;
}
