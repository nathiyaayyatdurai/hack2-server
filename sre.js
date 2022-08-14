import exp from 'express'
var app = exp()
const movie =[
    {
     "id": "101",
     "pic": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
     "name": "Iron man 2",
     "rating": "8.8",
     "description": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all s"
    },
    {
     "id": "102",
     "pic": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
     "name": "jai bhim",
     "rating": "8.8",
     "description": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was "
    },
    {
     "id": "103",
     "pic": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
     "name": "santhosh moveie",
     "rating": "8.8",
     "description": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
     "id": "104",
     "pic": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
     "name": "Ratatouille",
     "rating": "8.8",
     "description": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.."
    },
    {
     "id": "105",
     "pic": "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
     "name": "96",
     "rating": "8.8",
     "description": "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.."
    }
   ]
app.get('/',(res,req)=>{
   
    req.send(movie)
})

app.get('/san',(res,req)=>{
    req.send('part of san')
})
// app.get('/:id',(req,res)=>{
//     const id = req.params.id;
//     re.send(id);
// })
app.listen(4000)