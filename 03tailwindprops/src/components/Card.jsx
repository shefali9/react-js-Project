import React from 'react'

function Card({ username ,btnText=" Visit me"}) {
    console.log(username,btnText);
    
    return (
          <div class ='relative h-[400px] w-[300px] rounded-md mb-4 content-center'>

        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/37555052/pexels-photo-37555052.jpeg" alt="" width="384" height="512" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
                <h1>{username}</h1>
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </div>

        
    )
}

export default Card
