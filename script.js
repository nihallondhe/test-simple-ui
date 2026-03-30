<!DOCTYPE >
< lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smooth Scroll & Dark Mode</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
         {
            scroll-behavior: smooth;
        }
        .dark-mode {
            background-color: #1a202c;
            color: #e2e8f0;
        }
        .dark-mode .bg-gray-100 {
            background-color: #2d3748;
        }
        .dark-mode .text-gray-800 {
            color: #e2e8f0;
        }
        .dark-mode .border-gray-200 {
            border-color: #4a5568;
        }
        .transition-all {
            transition: all 0.3s ease;
        }
    </style>
</head>
<body class="bg-gray-100 text-gray-800 transition-all">
    <nav class="sticky top-0 bg-white shadow-md p-4 z-50 transition-all dark-mode">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">MySite</h1>
            <div class="flex space-x-4">
                <a href="#home" class="hover:text-blue-500">Home</a>
                <a href="#about" class="hover:text-blue-500">About</a>
                <a href="#gallery" class="hover:text-blue-500">Gallery</a>
                <button id="darkModeToggle" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                    Dark Mode
                </button>
            </div>
        </div>
    </nav>

    <section id="home" class="min-h-screen flex items-center justify-center p-8">
        <div class="text-center">
            <h2 class="text-4xl font-bold mb-4">Welcome Home</h2>
            <p class="text-xl mb-8">Smooth scrolling and dark mode example</p>
            <a href="#about" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Learn More
            </a>
        </div>
    </section>

    <section id="about" class="min-h-screen p-8 flex items-center">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold mb-6">About Us</h2>
            <p class="text-lg mb-4">This page demonstrates smooth scrolling and dark mode toggle functionality.</p>
            <p class="text-lg">Click the Dark Mode button to toggle between light and dark themes.</p>
        </div>
    </section>

    <section id="gallery" class="min-h-screen p-8">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center">Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img src="https://source.unsplash.com/800x600/?nature" class="rounded-lg shadow-lg w-full h-64 object-cover">
                <img src="https://source.unsplash.com/800x600/?city" class="rounded-lg shadow-lg w-full h-64 object-cover">
                <img src="https://source.unsplash.com/800x600/?technology" class="rounded-lg shadow-lg w-full h-64 object-cover">
            </div>
        </div>
    </section>

    <footer class="bg-gray-800 text-white p-6 text-center">
        <p>© 2024 MySite. All rights reserved.</p>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const body = document.body;
            
            darkModeToggle.addEventListener('click', function() {
                body.classList.toggle('dark-mode');
                darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
</body>
</>