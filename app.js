window.onload = ev =>{
    var searchBtn = document.getElementById('searchButton');
    searchBtn.onclick = ev => {
        fetch('superheroes.php',{method: 'get'})
        .then((response)=>{
            return response.text();
        })
        .then((data)=>{
            alert(data);
        });
    }
}