document.getElementById("pictures").style.columns = "100px 3";
const items=['Boats', 'Kamnik', 'Candles', 'Portrait', 'Leaves', 'Background', 'Mountains', 'Swans', 'Bridge', 'Maribor', 'Berries', 'Fish']
const $pictures=document.getElementById('pictures')
const html=[]
for(const item of items){
    html.push(`<p style="text-align: center;">
    <span style="font-size: 5rem;"></span><br>
    <img src="images/${item}.png">
<code>${item}</code>
</p>`)
  } 
$pictures.innerHTML = html.join('')