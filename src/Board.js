import React from 'react';
import Square from "./Square";

/**
 * Calcule le gagnant.
 * @param squares tableau des grilles.
 * @return Le gagnant de la partie, null si la partie est toujours en cours.
 */
function calculateWinner(squares) {
    const lines = [ // Combinaisons gagnantes
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
/**
 * Composant désignant la grille.
 */
class Board extends React.Component {
    /**
     * Constructeur du composant.
     * Doit eppeller le constructeur parent et initialiser l'état locale du composant avec 5 varibles:
     * *squares*: Tableau de 9 éléments initialisés à null.
     * *redIsNext*: Boolean définissant si c'est le tour du joueur "red", initialisé à true.
     * *redWins*: compteur définissant le nombre de victoire de "red", initialisé à 0.
     * *blueWins*: compteur définissant le nombre de victoire de "blue", initialisé à 0.
     * *vsBot*: Boolean définissant si le mode singleplayer est activé ou pas, initialisé à false.
     */
    constructor(){
        super();
        this.state = {
            squares: Array(9).fill(null),
            redIsNext: true,
            redWins: 0,
            blueWins: 0,
            vsBot: false
        }
    }

    componentDidUpdate() {
        const winner = calculateWinner(this.state.squares);
        if (winner)
            this.incrementScore(winner);
        else if (!this.state.squares.includes(null))
            this.setState({
                squares: Array(9).fill(null)
            });
    }

    /**
     * Réinitialise la grille et les scores des joueurs.
     */
    resetGame() {
        this.setState({
            squares: Array(9).fill(null),
            redWins: 0,
            blueWins: 0
        });
    }

    /**
     * Ajoute 1 point au gagnant et réinitialise la grille.
     * @param winner le gagnant de la partie. Valeur possible: "red" | "blue".
     */
    incrementScore(winner) {
        winner === "red"? this.setState({redWins: this.state.redWins + 1}) : this.setState({blueWins: this.state.blueWins + 1});
        this.setState({
            squares: Array(9).fill(null)
        });
    }

    /**
     * Trouve et retourne l'indice d'une case vide au hasard.
     * @param squares tableau de cases.
     * @return indice d'une case vide du tableau squares.
     */
    random(squares){
        let rand = Math.floor(Math.random() * Math.floor(8));
        while (squares[rand] != null){
            rand = Math.floor(Math.random() * Math.floor(8));
        }
        return rand;
    }

    /**
     * Fonction déclenché lors du clique sur une case de la grille.
     * Dans le cas ou la partie est finie ou i différent de null : ne fait rien, sinon dans le cas de
     * multiplayer, met à jour la case d'indice *i* avec la valeur du joueur actuel
     * et met à jour l'état de *squares* et *redIsNext*, sinon dans le cas de singleplayer
     * met à jour la case d'indice *i* à "red" et joue le tour de l'ordinateur.
     * @param i Indice de la case
     */
    handleClick(i) {
        const squares = this.state.squares;
        if (squares[i] != null || !squares.includes(null))
            return;
        if (!this.state.vsBot){
            squares[i] = this.state.redIsNext? "red" : "blue";
            this.setState({
                squares,
                redIsNext: !this.state.redIsNext,
            })
        }else{
            squares[i] = "red";
            squares[this.random(squares)] = "blue";
            this.setState({
                squares
            });
        }
    }

    /**
     * Réinitialise la grille et les scores des joueurs lors du clique sur le bouton reset.
     */
    handleReset = () => {
        this.resetGame();
    };

    /**
     * Réinitialise la grille et les scores des joueurs et active le mode vsBot lors du clique sur le bouton singleplayer.
     */
    handleSinglePlayerButton = () => {
        this.resetGame();
        this.setState({
            vsBot: true
        });
    }

    /**
     * Réinitialise la grille et les scores des joueurs et désactive le mode vsBot lors du clique sur le bouton multiplayer.
     */
    handleMultiPlayerButton = () => {
        this.resetGame();
        this.setState({
            vsBot: false
        });
    }

    /**
     * Retourne la grille (*Square*) d'indice *i* en lui passant la valeur de la case correspondante comme prop.
     * @param i indice de la case.
     * @return un élément *<Square>*.
     */
    renderSquare(i) {
        return <Square bgColor={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    /**
     * Représentation du Board.
     * @return un élément <div> représentant le jeu.
     */
    render() {
        const status = "Next player: " + (this.state.redIsNext? "Red" : "Blue");
        return (
            <div>
                <div className="scoreboard">
                    <div className="red-score"><p>{this.state.redWins}</p></div>
                    <div className="blue-score"><p>{this.state.blueWins}</p></div>
                </div>
                <input
                    type="button"
                    className="reset"
                    onClick={this.handleReset}
                    value="Reset"
                >
                </input>
                <input
                    type="button"
                    className="handleSinglePlayerButton"
                    onClick={this.handleSinglePlayerButton}
                    value="singleplayer"
                >
                </input>
                <input
                    type="button"
                    className="handleMultiPlayerButton"
                    onClick={this.handleMultiPlayerButton}
                    value="multipalyer"
                >
                </input>
                <div className="grid">
                    <div className="status">{status}</div>
                    {/*Chaque div de class board-row contient 3 éléments Square dans l'ordre.*/}
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Board;