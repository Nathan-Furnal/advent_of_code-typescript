import * as utils from "../../utils.ts";

interface Position {
  x: number;
  y: number;
}

interface Input {
  dir: string;
  steps: number;
}

function getSolutions(lines: string[]): Position[]{
  const inputs: Input[] = lines.map((l) => {
    return <Input> { dir: l.slice(0, 1), steps: Number(l.slice(1)) };
  });
  const pos: Position = { x: 0, y: 0 };
  let firstToVisitTwice:  Position = {x: 0, y: 0};
  let found = false;
  const seen: Set<string> = new Set(["(0, 0)"]);
  let rot = 0;
  function walk(pos: Position, rotation: number, input: Input, seen: Set<string>){  
    let attr: "x" | "y";
    let step: number;

    if (rotation === 0){
        attr = "y";
        step = 1;
    } else if (rotation === 180 || rotation === - 180){
        attr = "y";
        step = -1;
    } else if (rotation === 90 || rotation === -270){
        attr = "x";
        step = 1;
    }
    else{
        attr = "x";
        step = -1;
    }
    for(let i = 1; i <= input.steps; i++){
        pos[attr] += step;
        const strPos = `(${pos.x}, ${pos.y})`;
        if (!found && seen.has(strPos)){
            found = true;
            firstToVisitTwice = {x: pos.x, y: pos.y};            
        } else{
            seen.add(strPos);
        }
    }
}
  for (const input of inputs) {
    rot = input.dir == "R" ? rot = (rot + 90) % 360 : (rot - 90) % 360;
    walk(pos, rot, input, seen);
}
    return [pos, firstToVisitTwice];  
}

if (import.meta.main) {
  const lines = utils.readCsvFromArgs();
  const [sol1, sol2] = getSolutions(lines);
  console.log(Math.abs(sol1.x) + Math.abs(sol1.y), Math.abs(sol2.x) + Math.abs(sol2.y));
}