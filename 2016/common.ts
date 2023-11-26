export type Direction = "L" | "R" | "U" | "D";

export interface Position {
    x: number;
    y: number;
  }

export function addDirectionToPosition(p: Position, d: Direction): Position{
  switch(d){
    case "L": return {x: p.x, y: p.y - 1}
    case "R": return {x: p.x, y: p.y + 1}
    case "U": return {x: p.x - 1, y: p.y}
    case "D": return {x: p.x + 1, y: p.y}
  }
}

export function addDirectionToPositionInPlace(p: Position, d: Direction): void{
  switch(d){
    case "L": p.y -= 1;
    break;
    case "R": p.y += 1;
    break;
    case "U": p.x -= 1;
    break;
    case "D": p.x += 1;
    break;
  }
}