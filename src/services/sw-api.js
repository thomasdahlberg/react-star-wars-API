export function getAllStarShips() {
    return fetch(`https://swapi.co/api/starships/`, 
        {mode: 'cors'}
        ).then(res => res.json());
}