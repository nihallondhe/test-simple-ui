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
        .dark-mode .bg-white {
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
<body class="bg-gray-50 transition-colors duration-300">
    <nav class="bg-white shadow-lg fixed w-full z-10 transition-colors duration-300">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#home" class="text-2xl font-bold text-gray-800">Logo</a>
            <div class="space-x-4">
                <a href="#home" class="text-gray-600 hover:text-gray-900">Home</a>
                <a href="#about" class="text-gray-600 hover:text-gray-900">About</a>
                <a href="#gallery" class="text-gray-600 hover:text-gray-900">Gallery</a>
                <button id="darkModeToggle" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                    Dark Mode
                </button>
            </div>
        </div>
    </nav>

    <main class="pt-16">
        <section id="home" class="min-h-screen flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-5xl font-bold mb-4">Welcome</h1>
                <p class="text-xl mb-8">Smooth scrolling and dark mode example</p>
                <a href="#about" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Learn More
                </a>
            </div>
        </section>

        <section id="about" class="min-h-screen py-20 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold mb-8 text-center">About Us</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="https://source.unsplash.com/800x600/?office" alt="Office" class="rounded-lg shadow-lg">
                    </div>
                    <div class="flex items-center">
                        <p class="text-lg">This is a simple example demonstrating smooth scrolling and dark mode toggle functionality using vanilla JavaScript.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="gallery" class="min-h-screen py-20">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold mb-8 text-center">Gallery</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <img src="https://source.unsplash.com/800x600/?nature" alt="Nature" class="rounded-lg shadow-lg">
                    <img src="https://source.unsplash.com/800x600/?city" alt="City" class="rounded-lg shadow-lg">
                    <img src="https://source.unsplash.com/800x600/?technology" alt="Technology" class="rounded-lg shadow-lg">
                </div>
            </div>
        </section>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const Element = document.documentElement;
            const bodyElement = document.body;
            
            darkModeToggle.addEventListener('click', function() {
                bodyElement.classList.toggle('dark-mode');
                
                if (bodyElement.classList.contains('dark-mode')) {
                    darkModeToggle.textContent = 'Light Mode';
                    localStorage.setItem('darkMode', 'enabled');
                } else {
                    darkModeToggle.textContent = 'Dark Mode';
                    localStorage.setItem('darkMode', 'disabled');
                }
            });
            
            if (localStorage.getItem('darkMode') === 'enabled') {
                bodyElement.classList.add('dark-mode');
                darkModeToggle.textContent = 'Light Mode';
            }
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
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