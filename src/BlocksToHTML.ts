import { blocksToHTML } from "./blocks";

export class BlocksToHTML {
  convert(blocks: any[], users: any[]): string {
    return blocksToHTML(blocks, users)
  }
}
