const agaclar = [
    {
        ad: 'Himalaya Sediri (<span class="bilimsel">Cedrus deodara</span>)',
        bilgi: "6-10 yaş aralığındadır. En ayırt edici özelliği, ana dalların uçlarının ve tepe sürgününün aşağıya doğru sarkık olmasıdır; bu ona ağlayan bir görünüm kazandırır.İğne yaprakları genellikle parlak yeşil veya hafif mavimsi-yeşil renktedir ve diğer sedir türlerine göre daha yumuşaktır.Işık isteği yüksek olan, derin ve iyi direnajlı toprakları seven bir ağaçtır.",
        resim: "images/agac4.jpg"
    },
];

function getId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id")) || 1;
}

function agaciGoster(id) {
    const agac = agaclar[id - 1];
    document.getElementById("agacAdi").innerHTML = agac.ad;
    document.getElementById("agacBilgi").innerText = agac.bilgi;
    document.getElementById("agacResim").src = agac.resim;
}

function sonrakiAgac() {
    let id = getId();
    id++;
    if (id > agaclar.length) id = 1;
    window.location.search = "?id=" + id;
}

agaciGoster(getId());