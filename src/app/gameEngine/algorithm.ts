import GameBoard from './board';
export default class Algorithm {
    solution: Array<any>;
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
                console.log('=====>>');
                this.solution.push({ color: colors[i], board: newGameBoard });
                if (this.backtrackAlgo(newGameBoard, colors) === true) {
                    return true;
                }
            } // this.solution.pop();
        }
        return false;
    }
}
