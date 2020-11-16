import React from 'react';

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
    // TODO
    // Test si une des combinaisons gagnantes est satisfaites.
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
        //TODO
    }

    /**
     * Réinitialise la grille et les scores des joueurs.
     */
    resetGame() {
        // TODO
    }

    /**
     * Ajoute 1 point au gagnant et réinitialise la grille.
     * @param winner le gagnant de la partie. Valeur possible: "red" | "blue".
     */
    incrementScore(winner) {
        // TODO
    }

    /**
     * Trouve et retourne l'indice d'une case vide au hasard.
     * @param squares tableau de cases.
     * @return indice d'une case vide du tableau squares.
     */
    random(squares){
        // TODO
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
        //TODO
    }

    /**
     * Réinitialise la grille et les scores des joueurs lors du clique sur le bouton reset.
     */
    handleReset = () => {
        // TODO
    };

    /**
     * Réinitialise la grille et les scores des joueurs et active le mode vsBot lors du clique sur le bouton singleplayer.
     */
    handleSinglePlayerButton = () => {
        // TODO
    }

    /**
     * Réinitialise la grille et les scores des joueurs et désactive le mode vsBot lors du clique sur le bouton multiplayer.
     */
    handleMultiPlayerButton = () => {
        // TODO
    }

    /**
     * Retourne la grille (*Square*) d'indice *i* en lui passant la valeur de la case correspondante comme prop.
     * @param i indice de la case.
     * @return un élément *<Square>*.
     */
    renderSquare(i) {
        //TODO
    }

    /**
     * Représentation du Board.
     * @return un élément <div> représentant le jeu.
     */
    render() {
        return (
            <div>
                <div className="scoreboard">
                    <div className="red-score"><p>{/*TODO*/}</p></div>
                    <div className="blue-score"><p>{/*TODO*/}</p></div>
                </div>
                <input
                    type="button"
                    className="reset"
                    //TODO click event
                    value="Reset"
                >
                </input>
                <input
                    type="button"
                    className="handleSinglePlayerButton"
                    //TODO click event
                    value="singleplayer"
                >
                </input>
                <input
                    type="button"
                    className="handleMultiPlayerButton"
                    //TODO click event
                    value="multipalyer"
                >
                </input>
                <div className="grid">
                    <div className="status">{/*TODO*/}</div>
                    {/*Chaque div de class board-row contient 3 éléments Square dans l'ordre.*/}
                    <div className="board-row">
                        {/*TODO*/}
                    </div>
                    <div className="board-row">
                        {/*TODO*/}
                    </div>
                    <div className="board-row">
                        {/*TODO*/}
                    </div>
                </div>
            </div>
        );
    }
}
export default Board;