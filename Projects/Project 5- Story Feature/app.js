arr= [
    {
        dp:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1597461525891-c0c8d8fcd9bd?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtbWFibGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1645367277953-031a4790ba50?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtbWFibGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1658312510283-4e2700802f6a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtbWFibGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1525393839361-867d646aea41?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1605018508356-ee7c95b00bae?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluc3RhZ3JhbSUyMHN0b3J5fGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1534564533601-4d3e3d9fd229?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1vZGVscyUyMG1hbGV8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1564403848767-9db2a39c65aa?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
    }
]

var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem,idx)
{
   clutter += `<div class="mystory">
   <img src="${elem.dp}" alt="" id="${idx}">
</div>`
})

stories.innerHTML = clutter

stories.addEventListener("click",function(dets)
{
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function()
    {
        document.querySelector("#full-screen").style.display = "none"
    },2000)
})
