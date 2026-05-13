async function getData () {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    console.log(data)
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
    div.appendChild(table)
    data.slice(0, 20).forEach(post => {
      let postTitle = post.title
      let postBody = post.body
      let userId = post.userId
      let postId = post.id
      // console.log("Title of Post is " + post.title);
      // console.log("Body of Post is " + post.body);
      // console.log("UserId of Post is " + post.userId);
      displayPost(table, postTitle, postBody, userId, postId)
    })
  } catch (error) {
    console.log('Error in fetching Data:', error)
  }
}

function displayPost (table, postTitle, postBody, userId, postId) {
  const row = document.createElement('tr')
  const tdtitle = document.createElement('td')
  const tdbody = document.createElement('td')
  const link = document.createElement('a');
  link.setAttribute("href", "");
  link.setAttribute("target", "_blank");
  
    //td Post title 
  link.textContent = postTitle;
  tdtitle.appendChild(link);

  //td Post body 
  tdbody.textContent = postBody;

  //both td Append to row 
  row.appendChild(tdtitle)
  row.appendChild(tdbody)
  
  table.appendChild(row)
}
getData()
