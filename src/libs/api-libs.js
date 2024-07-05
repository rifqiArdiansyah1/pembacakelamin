export const getApiResponse = async (inputNama) => {
    try {
        const response = await fetch(`https://api.genderize.io/?name=${inputNama}&country_id=ID`);
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        const predict = await response.json();
        return predict;
    } catch (error) {
        console.error('Error fetch data', error)
    }
}