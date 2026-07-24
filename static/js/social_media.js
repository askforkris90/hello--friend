// Function to create a post and save to SQLite database
function createPost(event) {
    event.preventDefault();
    const postTitle = document.getElementById("postTitle").value;
    const postContent = document.getElementById("postContent").value;

    fetch('/create-post', {
        method: 'POST',
        body: JSON.stringify({
            title: postTitle,
            content: postContent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Post created successfully!');
            loadPosts(); // Reload posts
        } else {
            alert('Failed to create post.');
        }
    });
}

// Function to load posts from SQLite database into home section
function loadPosts() {
    fetch('/load-posts')
    .then(response => response.json())
    .then(data => {
        const postContainer = document.querySelector('.post-container');
        postContainer.innerHTML = ''; // Clear previous posts
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deletePost(${post.id})">Delete</button>
            `;
            postContainer.appendChild(postElement);
        });
    });
}

// Function to delete a post
function deletePost(postId) {
    fetch(`/delete-post/${postId}`, { method: 'DELETE' })
    .then(response => {
        if (response.ok) {
            alert('Post deleted successfully!');
            loadPosts(); // Reload posts after deletion
        } else {
            alert('Failed to delete post.');
        }
    });
}

// Call loadPosts when the document is ready
document.addEventListener("DOMContentLoaded", loadPosts);

document.addEventListener("DOMContentLoaded", function() {
    // Initialize your UI here
    loadPosts(); // Ensure you load posts or any other necessary data

    // Example navigation handling
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionClass = event.target.getAttribute('data-section');
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none'; // Hide all sections
            });
            document.querySelector(`.${sectionClass}`).style.display = 'block'; // Show selected section
        });
    });
});