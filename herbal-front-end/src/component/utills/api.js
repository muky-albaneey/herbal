export async function realtorInfo() {
    const url = 'https://realtor.p.rapidapi.com/agents/list?postal_code=11234&offset=0&limit=20&types=agent&sort=recent_activity_high';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c509ad528emsha7ade10a0b84800p191a3djsnb4cd0fa2a2cf',
            'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
        // console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}
export async function realtorProfile() {
    const adID = 1633379;
    const valId = 150577018;
    const url = `https://realtor.p.rapidapi.com/agents/get-profile?advertiser_id=${adID}&nrds_id=${valId}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c509ad528emsha7ade10a0b84800p191a3djsnb4cd0fa2a2cf',
            'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    }
    catch (error) {
        console.error(error);
    }
}
export async function realtorListing() {
    const fulfillment_id = 1633379;
    const id = "AVCA";
    const agentId = 77018;
    const url = `https://realtor.p.rapidapi.com/agents/get-listings?fulfillment_id=${fulfillment_id}&id=${id}&agent_id=${agentId}&type=all&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c509ad528emsha7ade10a0b84800p191a3djsnb4cd0fa2a2cf',
            'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
        // console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}
