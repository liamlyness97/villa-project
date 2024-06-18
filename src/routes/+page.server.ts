export const load = async () => {
    const res = await fetch('https://api.football-data.org/v4/competitions/PL/standings', {
        headers: {
            "X-Auth-Token": "14a91a5b45c341da89efb45ff3e387f8"
        }
    })

    const data = await res.json();

    return {
        premTable: data.standings[0].table
    }
}