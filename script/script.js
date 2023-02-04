let data = JSON.parse(localStorage.getItem("data")) || {
  name: "Mohammad Ahmadii",
  about: "Sales Repesentative",
  phone: "989134044621",
  email: "emohammadreza568@gmail.com",
  site: "www.mernstack.com",
  location: "123 anywhere",
  img: "./img/tyler-nix-PQeoQdkU9jQ-1024x1024.jpg",
  color: "#ff1493",
};

let root = document.documentElement;
const banner = document.getElementById("banner");
const showModal = document.getElementById("showModal");
const modal = document.getElementById("modal");
const body = document.getElementsByTagName("body").item(0);
const save = document.getElementById("save");
const colorPic = document.getElementById("color");
function renderData() {
  localStorage.setItem("data", JSON.stringify(data));
  console.log(localStorage.getItem("data"))
  root.style.setProperty("--primary", data.color);
  banner.innerHTML = `
    <div class="profile" id="profile">
        <div class="avatar " id="avatar">
            <img class="photo"id="photo" src=${data.img} alt="">
        </div>
        <span class="company" id="company"><img class="logo" id="logo" src="./img/ngtree—corporate image logo free logo_1026060.png" alt=""></span>    
    </div>
    <div class="description" id="description">
        <h1 id="name">${data.name}</h1>
        <h2 id="about">${data.about}</h2>
        <p id="phone" class="border-bottom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>${data.phone}</p>
        <p id="email" class="border-bottom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>${data.email}</p>
        <p id="site" class="border-bottom"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-browser-chrome" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
          </svg>${data.site}</p>
        <p id="location"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>${data.location}</p>
    </div>
    `;
}

renderData();

showModal.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("new-name").value = data.name;
  modal.style.display = "flex";
});

modal.addEventListener("click", (e) => {
  const parent = e.target.parentElement;
  parent === body && (modal.style.display = "none");
});

save.addEventListener("click", (e) => {
  e.preventDefault();
  const newColor = document.getElementById("color").value;
  const newName = document.getElementById("new-name").value;
  let radios = document.getElementsByClassName("radio");
  radios = [...radios];
  radios = radios.filter((element) => element.checked === true)[0];
  let labels = document.getElementsByTagName("label");
  labels = [...labels];
  labels = labels.filter((e) => e.nextElementSibling === radios)[0];
  const newImg = labels.children[0].getAttribute("src");
  data = { ...data, name: newName, img: newImg, color: newColor };

  modal.style.display = "none";
  renderData();
});
