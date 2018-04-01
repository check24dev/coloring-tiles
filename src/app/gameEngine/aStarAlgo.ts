import * as priorityQueue from 'priorityqueue';

import Algorithm from './algorithm';
import GameBoard from './board';

export default class AStarAlgo extends Algorithm {

    pQueue: priorityQueue;

    constructor() {
        super();
    }
    solve(gameBoard: GameBoard, colors: Array<string>): Array<GameBoard> {
        this.pQueue = new priorityQueue({
            comparator: (a, b) => a.cost - b.cost
        });
        this.pQueue.push({
            cost: 0,
            board: gameBoard,
        });
        const comeFrom = new Array<GameBoard>();
        let iter = 0;
        while (this.pQueue.empty() === false) {
            const topQueue = this.pQueue.dequeue();
            const currentBoard = topQueue.board;
            if (currentBoard.isFullyColored()) {
                comeFrom.push(currentBoard);
                break;
            }
            const possibleBoards = this.generateAllBoards(currentBoard, colors);
            possibleBoards.forEach((board, index) => {
                const cost = this.heuristic(board);
                this.pQueue.push({ cost, board });
            });
            if (iter !== 0) {
                comeFrom.push(currentBoard);
            }
            iter++;
        }
        this.solution = comeFrom;
        return comeFrom;
    }
    generateAllBoards(board: GameBoard, colors: Array<string>): Array<GameBoard> {
        const res = new Array<GameBoard>();
        for (let i = 0; i < colors.length; i++) {
            if (board.sourceTile.color !== colors[i]) {
                const tempBoard = board.copy();
                tempBoard.setSourceColor(colors[i]);
                res.push(tempBoard);
            }
        }
        return res;
    }
    heuristic(gameBoard: GameBoard): number {
        gameBoard.reset();
        gameBoard.calculateSameColorConnectedTiles(gameBoard.sourceTile, gameBoard.sourceTile.color);
        return gameBoard.sourceConnectedTilesNumber;
    }
}
