import * as priorityQueue from 'priorityqueue';
import GameBoard from './board';
export default class Algorithm {
    solution: Array<any>;
    pQueue: priorityQueue;
    constructor() {
        this.solution = new Array<any>();
    }
    backtrackAlgo(gameBoard: GameBoard, colors: Array<string>): boolean {
        if (gameBoard.isFinished()) {
            return true;
        }
        for (let i = 0; i < colors.length; i++) {
            const newGameBoard = gameBoard.copyBoard();
            newGameBoard.setTileSourceColor(colors[i]);
            if (gameBoard.isTheSame(newGameBoard) !== true) {
                this.solution.push({ color: colors[i], board: newGameBoard });
                if (this.backtrackAlgo(newGameBoard, colors) === true) {
                    return true;
                }
            }
        }
        return false;
    }
    AstarAlgo(gameBoard: GameBoard, colors: Array<string>): Array<GameBoard> {
        this.pQueue = new priorityQueue({
            comparator: (a, b) => a.cost - b.cost 
        });
        this.pQueue.push({
            cost: 0,
            board: gameBoard,
        });
        let comeFrom = new Array<GameBoard>();
        let iter = 0;
        while(this.pQueue.empty() === false) {
            let topQueue = this.pQueue.dequeue();
            let currentBoard = topQueue.board;
            if (currentBoard.isFinished()) {
                comeFrom.push(currentBoard);
                break;
            }
            const possibleBoards = this.generateAllBoards(currentBoard, colors);            
            possibleBoards.forEach((board, index) => {
                const cost = this.heuristic(board);          
                this.pQueue.push({ cost, board });
            });
            if(iter !== 0)
                comeFrom.push(currentBoard);
            iter++;
        }
        return comeFrom;
    }
    generateAllBoards(board: GameBoard, colors: Array<string>): Array<GameBoard> {
        let res = new Array<GameBoard>();
        for (let i = 0; i < colors.length; i++) {
            if(board.board[0][0].color !== colors[i]) {
                const tempBoard = board.copyBoard();
                tempBoard.setTileSourceColor(colors[i]);
                res.push(tempBoard);
            }
        }
        return res;
    }
    heuristic(gameBoard: GameBoard): number {
        gameBoard.resetBoard();
        gameBoard.calculateConnectedTiles(gameBoard.board[0][0], gameBoard.board[0][0].color);
        return gameBoard.sameColorTilesNumber;
    }
}
