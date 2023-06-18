function kirimData(event) {
    event.preventDefault();
    var nama = document.getElementById("nama").value
    var tanggal = document.getElementById("start").value
    var genre = document.getElementById("genre").value
    var dino = document.querySelector("input[name=dino]:checked").value
   
    alert(
        "Nama : " + nama +
        "\nTanggal : " + tanggal +
        "\nSenjata : " + genre +
        "\nDino : " + dino +
        "\n"
    )
}