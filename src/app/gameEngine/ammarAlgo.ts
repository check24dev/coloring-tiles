import Algorithm from './algorithm';
import GameBoard from './board';

export default class AmmarAlgo extends Algorithm {
    constructor() {
        super();
    }
    solve(gameBoard: GameBoard, colors: Array<string>): boolean {
        if (gameBoard.isFullyColored()) {
            return true;
        }
        let tmpGameBoard = gameBoard.copy();
        for (let j = 0; j < gameBoard.dim * gameBoard.dim  ; j++) {
            for (let i = 0; i < colors.length; i++) {
                tmpGameBoard.setSourceColor(colors[i]);
                this.solution.push(tmpGameBoard);
                if (tmpGameBoard.isFullyColored()) {
                    return true;
                }
                tmpGameBoard = tmpGameBoard.copy();
            }
        }
        return false;
    }
}
