     const reviews = [
            {
              id: 1,
              name: 'susan smith',
              job: 'web developer',
              img: './resimler/istockphoto-1140764346-612x612.jpg',
              text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
            },
            {
              id: 2,
              name: 'anna johnson',
              job: 'web designer',
              img: './resimler/WhatsApp Image 2022-12-13 at 14.45.13.jpeg',
              text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
            },
            {
              id: 3,
              name: 'peter jones',
              job: '   intern',
              img: './resimler/depositphotos.jpg',
              text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
            },
            {
              id: 4,
              name: 'bill anderson',
              job: 'the boss',
              img: './resimler/istockphoto-1175266114-612x612.jpg',
              text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
            },
          ];
 
          //select our tags 

          const img = document.querySelector('.img');
          const author = document.querySelector('.author')
          const job = document.querySelector('.job')
          const info = document.querySelector('.info')

          const prevBtn = document.querySelector('.prev-btn')
          const nextBtn = document.querySelector('.next-btn')
          const randomBtn = document.querySelector('.random-btn')

          //set starting item
          let currentItem = 0   // currentItem is global variable beacuse we used let 

          //load initial item first we will see 0 page one
          window.addEventListener('DOMContentLoaded', function(){
            showPersonal()

        });


        //show person based on item we can ascess everywhere 

        function showPersonal(){
            item =  reviews[currentItem]
            img.src = item.img
            author.textContent = item.name
            job.textContent = item.job
            info.textContent = item.text
        }

        //show next person on the list

        nextBtn.addEventListener('click', function(){
            currentItem++
            if(currentItem > reviews.length-1){
                currentItem = 0
            }
            showPersonal()
        })

        //show prev person on the list


        prevBtn.addEventListener('click', function(){
            currentItem--
            if(currentItem<0){
                currentItem = reviews.length-1
            }
            showPersonal()
        })

        // show as a random

        randomBtn.addEventListener('click', function(){
            currentItem =  Math.floor(Math.random() * reviews.length)
            showPersonal()
        })

        