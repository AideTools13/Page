function tampil()
{
	const menu = new XMLHttpRequest()
	menu.open ('GET', 'menu.json', true)
	menu.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			let data = JSON.parse(this.responseText)
			let ul = document.getElementById('tampil')
				for(var i = 0; i<data.length;i++)
				{
				  	let li = document.createElement('li')
			        	li.innerHTML= '<ul>' + '<li><p>Nama: '+data[i].nama + '</p></li>' + '<li><p>Telpon: '+data[i].notelp + '</p></li>'+'<li><p>Alamat: '+data[i].alamat + '</p></li>' + '</ul>'
			        	ul.appendChild(li)
				}
		}
	}
	menu.send()
}
tampil()
