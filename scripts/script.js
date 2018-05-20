const quote = document.querySelector(".quote_content");
const q_btn = document.querySelector("#quote_btn");
const author = document.querySelector(".author_title");
const url = 'https://talaikis.com/api/quotes/random/';
q_btn.addEventListener("click", function() {
    axios.get(url)
    .then(res => {
        var content = res.data.quote;
        var auth_title = res.data.author;

        setHtml(quote, content);
        setHtml(author, auth_title);

    })
    .catch(error => console.log(error));
})
function setHtml(parent, element)
{
    parent.innerHTML = element;
}
