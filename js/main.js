window.addEventListener('load', function(e){
    // console.log(e)
    const tagFilter = document.querySelector('#filter')
    const photoArray = document.querySelectorAll('.tags')
    const resetButton = document.querySelector('.reset')
        // console.log(photoArray)
        // console.log(resetButton)

        resetButton.addEventListener('click', onNewFilter)

        function onNewFilter(e){
            const newFilter = tagFilter.value.trim();

            if(newTagFilter !== ""){

            }else{

            }
        } //END OF EVENT HANDLER

        tagFilter.addEventListener('input', onSearchPhotos)

        function onSearchPhotos(e){
            // console.log(e.currentTarget.value)

            const inputtedTag = e.currentTarget.value.trim().toLowerCase()
                // console.log(searchTag)

                if(inputtedTag === "" ){
                    // console.log("PUT SOMETHING IN THE SEARCH BAR!")
                    resetDisplay();
                }else{
                    searchMatchingTags(inputtedTag)
                }
        } // END OF EVENT HANDLER

        function searchMatchingTags(inputtedTag){
            // console.log(inputtedTag)
            // console.log(photoArray)

            photoArray.forEach(function(photo,index){
                // console.log(photo)

                const photoTag = photo.textContent.trim().toLowerCase();

                    if(photoTag.includes(inputtedTag)){
                        // console.log("THIS IS THE ONE!!!!")
                        photo.classList.add('thumb-display');
                        if(photo.classList.contains('thumb-display hidden')){
                            photo.classList.remove('thumb-display hidden')
                        }
                    }else{
                        // console.log("HIDE THIS STUFF!!!")
                        photo.classList.add('hidden')
                    }
            }) // END OF SEARCHING
                
            function resetDisplay(){
                photoArray.forEach(function(photo, index){

                    if(photo.classList.contains('thumb-display hidden')){
                        photo.classList.remove('thumb-display hidden')
                    }
                })
            }
        }

})