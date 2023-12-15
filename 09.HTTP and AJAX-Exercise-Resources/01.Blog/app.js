function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/blog';
    const selectElement = document.getElementById('posts');

    const btnViewPost = document.getElementById('btnViewPost');
    const btnLoadPosts = document.getElementById('btnLoadPosts');

    btnLoadPosts.addEventListener('click', (e) => {
        e.preventDefault();
        selectElement.innerHTML = '';
        fetch(`${URL}/posts`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                for (const key in data) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = data[key].title;
                    selectElement.appendChild(option);
                }
            })
    });

    btnViewPost.addEventListener('click', (e) => {
        e.preventDefault();

        const selectedPost = selectElement.options[selectElement.selectedIndex];
        const postId = selectedPost.value;
        console.log(postId);
        fetch(`${URL}/comments`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {

                for (const post in data) {

                    if (postId === data[post].postId) { 
                        const h1 = document.getElementById('post-title'); 
                        h1.textContent = selectedPost.textContent;
                        console.log(h1.textContent);
                           
                        const p = document.getElementById('post-body');
                        p.textContent = data[post].text;
    
                        const ul = document.getElementById('post-comments');
                        document.createElement('li');
                        ul.innerHTML = ""; 
    
                        for (const comment in post) {
                            if(comment === post.postId){
                                console.log(comment);
                                const li = document.createElement('li');
                                li.textContent = comment.text;
                                ul.appendChild(li);
                            }
                            
                        }
                    }
                }
            })
            .catch(error => {
                console.log('Error', error);
            });
    });
}

attachEvents();