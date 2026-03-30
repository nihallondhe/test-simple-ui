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
    </style>
</head>
<body class="bg-gray-100 text-gray-800 transition-colors duration-300">
    <nav class="sticky top-0 bg-white shadow-md dark-mode:bg-gray-800 transition-colors duration-300">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#" class="text-xl font-bold">Logo</a>
            <div class="space-x-4">
                <a href="#home" class="hover:text-blue-500 transition">Home</a>
                <a href="#about" class="hover:text-blue-500 transition">About</a>
                <a href="#gallery" class="hover:text-blue-500 transition">Gallery</a>
                <button id="darkModeToggle" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                    Dark Mode
                </button>
            </div>
        </div>
    </nav>

    <main class="container mx-auto px-4 py-8">
        <section id="home" class="mb-16 pt-8">
            <h1 class="text-4xl font-bold mb-6">Welcome Home</h1>
            <p class="mb-6">Scroll smoothly through this page. Click the Dark Mode button to toggle themes.</p>
            <img src="https://source.unsplash.com/800x400/?landscape" alt="Landscape" class="rounded-lg shadow-lg w-full mb-6">
        </section>

        <section id="about" class="mb-16 pt-8">
            <h2 class="text-3xl font-bold mb-6">About Us</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <p class="mb-4">This page demonstrates smooth scrolling and dark mode functionality.</p>
                    <p>Click the navigation links to scroll to different sections.</p>
                </div>
                <img src="https://source.unsplash.com/600x400/?office" alt="Office" class="rounded-lg shadow-lg">
            </div>
        </section>

        <section id="gallery" class="pt-8">
            <h2 class="text-3xl font-bold mb-6">Gallery</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <img src="https://source.unsplash.com/400x300/?nature" alt="Nature" class="rounded-lg shadow-lg">
                <img src="https://source.unsplash.com/400x300/?city" alt="City" class="rounded-lg shadow-lg">
                <img src="https://source.unsplash.com/400x300/?technology" alt="Technology" class="rounded-lg shadow-lg">
            </div>
        </section>
    </main>

    <footer class="bg-white border-t border-gray-200 mt-12 py-6 dark-mode:bg-gray-800 dark-mode:border-gray-700 transition-colors duration-300">
        <div class="container mx-auto px-4 text-center">
            <p>© 2023 Smooth Scroll & Dark Mode Demo</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const Element = document.documentElement;
            
            darkModeToggle.addEventListener('click', function() {
                Element.classList.toggle('dark-mode');
                darkModeToggle.textContent = Element.classList.contains('dark-mode') 
                    ? 'Light Mode' 
                    : 'Dark Mode';
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