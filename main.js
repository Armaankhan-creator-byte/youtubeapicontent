let myform=document.getElementById('myform');
let btn=document.getElementById('btn');
let result=document.getElementById('result');
let url=document.getElementById('url');
btn.addEventListener('click',function(event){
  event.preventDefault();

  var url=document.getElementById('url').value;
  var apiKey="AIzaSyCBuJ8aOw7N5Utkw6H4u62rLzzFdYhTS-Y";
   var videoId=url.split("v=")[1];
    
   
  
  
  var apiUrl =
      "https://www.googleapis.com/youtube/v3/videos?key="+apiKey +
      "&fields=items(snippet(title,description,tags,thumbnails))&part=snippet&id=" +
      videoId;

      
        fetch(apiUrl).then((response)=>{
          return response.json();
        }).then((data)=>{
          
          
          var title = data.items[0].snippet.title;

      var description = unescape(data.items[0].snippet.description);

      var tags = data.items[0].snippet.tags;

      var thumbnail = data.items[0].snippet.thumbnails.maxres.url;

      var tagsResult = "";

      tags.forEach((tag) => {
        tagsResult += tag + ",";
      });
      console.log(data);
      result.innerHTML=`

      <h3>Thumbnail:</h3>

      <img id="img" src="${thumbnail}" class="img-thumbnail" />

      <div class="form-group">

      <label for="title">Title:</label>
      
      <input type="text" class="form-control" disabled="true" value="${title}"/>

      </div>


      <div class="form-group">

      <label for="description">Description:</label>
      
      <textarea cols="12" rows="9" class="form-control" disabled="true">${description}</textarea>

      </div>


      <div class="form-group">

      <label for="tags">Tags:</label>
      
      <textarea cols="12" rows="5" class="form-control" disabled="true">${tagsResult}</textarea>

      </div>
      
      `;
        })
          

       
    })
    
  