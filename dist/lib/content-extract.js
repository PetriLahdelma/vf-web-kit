function extractText(input) {
  let out = input;
  out = out.replace(/```[\s\S]*?```/g, ' ');
  out = out.replace(/`[^`]*`/g, ' ');
  out = out.replace(/<script[\s\S]*?<\/script>/g, ' ');
  out = out.replace(/<style[\s\S]*?<\/style>/g, ' ');
  out = out.replace(/<[^>]+>/g, ' ');
  out = out.replace(/\s+/g, ' ');
  return out.trim();
}

export { extractText };
