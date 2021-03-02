const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'be370d58',
            s: 'avengers'
        }
    });

    console.log(response.data);
}

fetchData();