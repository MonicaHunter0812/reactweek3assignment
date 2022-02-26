const HOUSES_ENDPOINT = "https://crudcrud.com/api/682391a831994c47aa3b7e8fbaf27f4a";

class HousesApi {
    get = async ()  => {
        try {
        const resp = await fetch(HOUSES_ENDPOINT);
        const data = await resp.json();
        return data;
    }   catch(e) {
        console.log("There's an error.", e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._api}`, {
                method: 'PUT',
                headers: {
                 'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            }); 
            return await resp.json();
        }   catch(e) {
                console.log("Houses not updating correctly", e);
            }
        }    
     }

     export const HousesApi = new HousesApi(); 
