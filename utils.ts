import { parseArgs } from "https://deno.land/std@0.208.0/cli/parse_args.ts";

export function readCsvFromArgs(): string[] {
  const parsedArgs = parseArgs(Deno.args);
  /* If no input arg is given, just read the first arg */
  const content = Deno.readTextFileSync(
    parsedArgs["input"] ?? parsedArgs["_"].at(0),
  );
  return content.split(",").map((l) => l.trim());
}

export function readLinesFromArgs(): string[] {
  const parsedArgs = parseArgs(Deno.args);
  /* If no input arg is given, just read the first arg */
  const content = Deno.readTextFileSync(
    parsedArgs["input"] ?? parsedArgs["_"].at(0),
  );
  return content.split("\n").map((l) => l.trim());
}