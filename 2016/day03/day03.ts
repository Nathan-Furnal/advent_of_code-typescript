import * as utils from "../../utils.ts";

function getLineValues(line: string): [number, number, number]{
  //@ts-ignore: I know the output will always be three numbers
    return line.match(/\d+/g)!.map(i => Number(i));
}
const isPossible = (a: number, b: number, c: number) => (a + b > c) && (a + c > b) && (b + c > a);

function getSolutions(lines: string[]): number[] {
  const rc = lines.map(l => getLineValues(l)).filter(l => isPossible(...l)).length;
  let vc = 0;
  for(let i = 0; i < lines.length; i += 3){
    const l1 = getLineValues(lines[i]);
    const l2 = getLineValues(lines[i+1]);
    const l3 = getLineValues(lines[i+2]);
    for(let j = 0; j < 3; j++){
      if(isPossible(l1[j], l2[j], l3[j])){
        vc++;
      }
    }
  }
  return [rc, vc];
}

if (import.meta.main) {
  const lines = utils.readLinesFromArgs();
  console.log(getSolutions(lines));
}
