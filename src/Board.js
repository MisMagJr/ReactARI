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
     * *xIsNext*: Boolean définissant si c'est le tour du joueur "X", initialisé à true.
     */
    constructor(){
        super();
        //TODO
    }
    /**
     * Fonction déclenché lors du clique sur une case de la grille.
     * Dans le cas ou la partie est finie ou i différent de null : ne fait rien, sinon modifie la case d'indice *i* avec la valeur du joueur actuel
     * et met à jour l'état de *squares* et *xIsNext*.
     * @param i Indice de la case
     */
    handleClick(i) {
        //TODO
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