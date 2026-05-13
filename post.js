const params = new URLSearchParams(location.search);
console.log(params);
const userId = params.get('userId');
//console.log(paramuserId);
const id = params.get('id');
//console.log(parampostId);

async function fetchPost(){
    try{
        // Get Post
        const UrlPost  = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId + '&id=' + id;;
        //console.log(URLpost);
        const getPost = await fetch(UrlPost);
        const response = await getPost.json();

        //console.log(URLauthor);
        response.forEach(data => {
        //console.log(data.title);
        const title = data.title;
        const body = data.body;
        displayPost(userId,id,title,body)
        });
        

    }
    catch(error){

    }
}
// Call asynFunction
fetchPost();

async function author() {
    try {
        // Get Author
        const UrlAuthor = 'https://jsonplaceholder.typicode.com/users?id=' + userId;

        const getAuthor = await fetch(UrlAuthor);
        const authorDetail = await getAuthor.json();
        const authorName = authorDetail[0]["name"];
        return authorName;
        
    } catch (error) {
        console.log("Error:", error);
    }
}

author();

// Diplay Post Table
async function displayPost(userId,id,title,body){
const div = document.getElementById('container')
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    table.appendChild(thead)
    const headerrow = document.createElement('tr')
    const headingtitle = document.createElement('th')
    const headingauthor = document.createElement('th')
    const headingbody = document.createElement('th')
    headerrow.appendChild(headingauthor)
    headerrow.appendChild(headingtitle)
    headerrow.appendChild(headingbody)
    headingauthor.textContent = "Author"
    headingtitle.textContent = 'Title'
    headingbody.textContent = 'Detail'
    thead.appendChild(headerrow)
    table.appendChild(thead)
    
    const row = document.createElement('tr')
    const tdauthor = document.createElement('td')
  const tdtitle = document.createElement('td')
  const tdbody = document.createElement('td')
  tdauthor.textContent = await author();
//     author().then(name=>{
//     tdauthor.textContent = name;
//    });
  tdtitle.textContent = title;
  tdbody.textContent = body;
  row.appendChild(tdauthor);
  row.appendChild(tdtitle);
  row.appendChild(tdbody);
  table.appendChild(row);
  document.body.appendChild(table);

}
