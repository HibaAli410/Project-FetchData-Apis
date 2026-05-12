async function getData(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
        data.slice(0,20).forEach((post)=>{
            let postTitle = post.title;
            let postBody = post.body;
            let postUserId = post.userID;
            // console.log("Title of Post is " + post.title);
            // console.log("Body of Post is " + post.body);
            // console.log("UserId of Post is " + post.userId);
            displayPost()
        })
        
    }
    catch(error){
        console.log("Error in fetching Data:",error);
    }
    }
    getData();
    function displayPost(userID,postId){

    }