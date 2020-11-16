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
     * Doit eppeller le constructeur parent et initialiser l'état locale du composant avec 2 varibles:
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
     * Trouve et retourne l'indice d'une case vide.
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
     * @return un élément <div> contenant un élément <div> de class "status" contenant le status
     * actuel du jeu (joueur actuel ou le gagnant) + 3 autres éléments <div> de class  "board-row"
     * qui contiennent les cases du jeu.
     */
    render() {
        return null;
    }
}
export default Board;