import Algorithm from './algorithm';
import GameBoard from './board';

export default class BacktrackAlgo extends Algorithm {
    constructor() {
        super();
    }
    solve(gameBoard: GameBoard, colors: Array<string>): boolean {
        if (gameBoard.isFullyColored()) {
            return true;
        }
        for (let i = 0; i < colors.length; i++) {
            const newGameBoard = gameBoard.copy();
            newGameBoard.setSourceColor(colors[i]);
            if (gameBoard.isTheSame(newGameBoard) !== true) {
                this.solution.push(newGameBoard);
                if (this.solve(newGameBoard, colors) === true) {
                    return true;
                }
            }
        }
        return false;
    }
}
