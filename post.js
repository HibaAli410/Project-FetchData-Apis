const params = new URLSearchParams(location.search);
console.log(params);
const userId = params.get('userId');
//console.log(paramuserId);
const id = params.get('id');
//console.log(parampostId);

async function fetchPost(){
    try{
        const URL = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId + '&id=' + id;
        //console.log(URL);
        const getPost = await fetch(URL);
        const response = await getPost.json();
        console.log(response);
        const title = response.title;
        const body = response.body;
        displayPost(userId,id,title,body)

    }
    catch(error){

    }
}
fetchPost();
function displayPost(userId,id,title,body){
const div = document.getElementById('container')
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    table.appendChild(thead)
    const headerrow = document.createElement('tr')
    const headingtitle = document.createElement('th')
    const headingbody = document.createElement('th')
    headerrow.appendChild(headingtitle)
    headerrow.appendChild(headingbody)
    headingtitle.textContent = 'Post Title'
    headingbody.textContent = 'Post Detail'
    thead.appendChild(headerrow)
    table.appendChild(thead)
    
    const row = document.createElement('tr')
  const tdtitle = document.createElement('td')
  const tdbody = document.createElement('td')
  tdtitle.textContent = title;
  tdbody.textContent = body;
  row.appendChild(tdtitle);
  row.appendChild(tdbody);
  table.appendChild(row);
  document.body.appendChild(table);

}
