let wrt_title = document.querySelector("#wrt-title");
let wrt_desc = document.querySelector("#wrt-desc");
let wrt_button = document.querySelector("#wrt-button");
let wrt_url = document.querySelector("#wrt-url");
let imgt = document.querySelector("#imgt");

let usr = document.querySelector(".user-txt");

let nm = null;

//if login notfound
if (localStorage.getItem("login") === null) {
  window.location.replace("./login.html");
} else {
  let list = localStorage.getItem("users");
  let login = localStorage.getItem("login");
  list = JSON.parse(list);
  nm = list[login].name;
  usr.innerHTML = `Hello, <b>${nm}</b> !`;
}
let imgp = document.querySelector(".rhs")
wrt_url.addEventListener("blur", () =>{
  imgp.innerHTML = `<img src="${wrt_url.value}" alt="blg-img"></img>`
})

wrt_button.addEventListener("click", () => {
  let blog = {
    title: wrt_title.value,
    description: wrt_desc.value,
    url: wrt_url.value,
    author: nm,
    loginid:localStorage.getItem("login"),
    id:Date.now(),
  };

  if (wrt_title.value == "" || wrt_desc.value == "" || wrt_url.value == "") {
    alert("Please Fill Out All The Fields");
    return false;
  } else {
    let ext_blog = localStorage.getItem("blogs");
    ext_blog = ext_blog === null ? [] : JSON.parse(ext_blog);

    ext_blog.unshift(blog);

    localStorage.setItem("blogs", JSON.stringify(ext_blog));
    alert("Blog Saved Successfully");

    wrt_title.value = "";
    wrt_desc.value = "";
    wrt_url.value = "";
  }
});

//logout
let logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  let cnf = confirm("Are You Sure, You Want to LOGOUT ?");

  if (cnf === true) {
    localStorage.removeItem("login");
    window.location.replace("./index.html");
  }
});