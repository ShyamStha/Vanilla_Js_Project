const corona= document.querySelector(".corona");
const clock= document.querySelector(".clock");
const url="https://nepalcorona.info/api/v1/data/nepal";
const data= function()
{
    axios.get(url).then(function(response)
    {
       let html=`
       <h3 class="first">Postive Cases:${response.data.tested_positive}</h3>
       <h3 class="second">Negative Cases:${response.data.tested_negative}</h3>
       <h3 class="third">Deaths:${response.data.deaths}</h3>
       <h3 class="fourth">Recovered:${response.data.recovered}</h3>
       `;

       corona.innerHTML=html;
    })
}

data();

let time= function()
{
    let today= new Date();
    //console.log(today.getSeconds())
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let dateHtml=`

    <span style="color:red">${h}:</span>
    <span>${m}:</span>
    <span>${s}</span>

    `;

    clock.innerHTML=dateHtml;
}

setInterval(time,1000);

