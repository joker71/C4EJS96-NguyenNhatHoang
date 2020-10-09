async function load()
{
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    const data = await conn.json();
    console.log(data.abilities[1]);
}
load();