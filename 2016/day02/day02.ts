import * as utils from "../../utils.ts";
import { Position, Direction, addDirectionToPosition, addDirectionToPositionInPlace } from "../common.ts";

const N1 = 3;
const N2 = 5;
const GRID1 = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
]
const GRID2 = [
    ["" , "" , "1", "" , "" ],
    ["" , "2", "3", "4", "" ],
    ["5", "6", "7", "8", "9"],
    ["" , "A", "B", "C", "" ],
    ["" , "" , "D", "" , "" ],

]

function inbound(p: Position, d: Direction, n: number): boolean{
    const pos = addDirectionToPosition(p, d);
    return pos.x >= 0 && pos.y >= 0 && pos.x < n && pos.y < n;
}

function getSolutions(lines: string[]): string[]{
    const code1: string[] = new Array(lines.length).fill('0');
    const code2: string[] = new Array(lines.length).fill('0');
    const pos1: Position = {x: 1, y: 1};
    const pos2: Position = {x: 2, y: 0};
    for (let i = 0; i < lines.length; i++){
        for(const d of lines[i]){     
            // @ts-ignore: type-checker not smart enough        
            if (inbound(pos1, d, N1)){
                // @ts-ignore: type-checker not smart enough        
                addDirectionToPositionInPlace(pos1, d);
            }
            // @ts-ignore: type-checker not smart enough        
            const pos2Tmp = addDirectionToPosition(pos2, d);
            // @ts-ignore: type-checker not smart enough        
            if(inbound(pos2, d, N2) && GRID2[pos2Tmp.x][pos2Tmp.y] != ""){
                // @ts-ignore: type-checker not smart enough        
                addDirectionToPositionInPlace(pos2, d);
            }
        }
        code1[i] = GRID1[pos1.x][pos1.y];
        code2[i] = GRID2[pos2.x][pos2.y];
    }
    return [code1.join(""), code2.join("")];
}

if(import.meta.main){
    const lines = utils.readLinesFromArgs();
    console.log(getSolutions(lines));
}