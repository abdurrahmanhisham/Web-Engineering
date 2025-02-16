<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdur Rahman - Portfolio</title>
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth; /* Smooth scrolling */
        }

        /* Navigation Bar */
        nav {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            background-color: #333;
            color: white;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            transition: color 0.3s ease;
        }

        nav a:hover {
            color: #ff6347; /* Change to your preferred hover color */
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 100px 20px;
            background-color: #f4f4f4;
        }

        .hero img.profile-picture {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-bottom: 20px;
            border: 4px solid #333;
        }

        .hero h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .hero p {
            font-size: 1.2em;
            margin-bottom: 20px;
        }

        .hero a.button {
            padding: 10px 20px;
            font-size: 1em;
            color: white;
            background-color: #333;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .hero a.button:hover {
            background-color: #555;
        }

        /* About Section */
        .about, .portfolio, .blog, .contact {
            padding: 50px 20px;
            background-color: #fff;
            text-align: center;
        }

        .about h2, .portfolio h2, .blog h2, .contact h2 {
            font-size: 2em;
            margin-bottom: 20px;
        }

        .about p, .blog p, .contact p {
            font-size: 1.1em;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto 20px;
        }

        /* Portfolio Section */
        .portfolio .projects {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .portfolio .project {
            width: 30%;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .portfolio .project:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .portfolio .project img {
            width: 100%;
            height: auto;
        }

        .portfolio .project h3 {
            font-size: 1.2em;
            margin: 10px 0;
        }

        .portfolio .project p {
            font-size: 0.9em;
            padding: 0 10px;
        }

        /* Blog Section */
        .blog .posts {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .blog .post {
            width: 30%;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog .post:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .blog .post img {
            width: 100%;
            height: auto;
        }

        .blog .post h3 {
            font-size: 1.2em;
            margin: 10px 0;
        }

        .blog .post a {
            text-decoration: none;
            color: inherit;
            display: block;
        }

        .blog .post a:hover h3 {
            text-decoration: underline;
        }

        .blog .post p {
            font-size: 0.9em;
            padding: 0 10px;
        }

        /* Contact Section */
        .contact form {
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
        }

        .contact form input, .contact form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .contact form button {
            padding: 10px 20px;
            font-size: 1em;
            color: white;
            background-color: #333;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .contact form button:hover {
            background-color: #555;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: white;
        }

        footer a {
            color: #ff6347;
            text-decoration: none;
            margin: 0 10px;
        }

        footer a:hover {
            text-decoration: underline;
        }

        /* Back-to-Top Button */
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #333;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 50%;
            cursor: pointer;
            display: none; /* Hidden by default */
            transition: background-color 0.3s ease;
        }

        .back-to-top:hover {
            background-color: #555;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .portfolio .project, .blog .post {
                width: 45%; /* Adjust for smaller screens */
            }

            nav {
                flex-direction: column;
                align-items: center;
            }

            nav a {
                margin: 10px 0;
            }
        }

        @media (max-width: 480px) {
            .portfolio .project, .blog .post {
                width: 100%; /* Full width on mobile */
            }

            .hero h1 {
                font-size: 2em;
            }

            .hero p {
                font-size: 1em;
            }
        }
    </style>
</head>
<body>
    <nav>
        <div>Abdur Rahman</div>
        <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
        </div>
        <div>
            <a href="#contact">Let's Talk</a>
        </div>
    </nav>

    <section class="hero" id="home">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Picture" class="profile-picture">
        <h1>Hi, I'm Abdur Rahman</h1>
        <p>UIUX and Product Designer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et officiis suscipit ut assumenda libero tenetur expedita eaque, quaerat quasi.</p>
        <a href="#contact" class="button" aria-label="Hire Me">Hire Me</a>
        <a href="#portfolio" class="button" aria-label="See Projects">See Projects</a>
    </section>

    <section class="about" id="about">
        <h2>About Me</h2>
        <p>
            Hey, I am Abdur Rahman, a professional UI/UX Designer with more than 2 years of experience creating mobile, web UI/UX, and tablet user interfaces and experiences. I am a true 'UI/UX' designer in that I have the creativity and artistic ability to conceptualize and design eye-catching visual UIs, as well as the UX training and know-how to bring my designs to life with an elegant, intuitive, and effective user experience.
        </p>
    </section>

    <section class="portfolio" id="portfolio">
        <h2>Portfolio</h2>
                <div class="projects">
                    <div class="project">
                        <img src="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 1 - Macbook Pro Mockup">
                        <h3>Project 1</h3>
                        <p>A stunning mockup of a Macbook Pro on bricks, showcasing modern design aesthetics.</p>
                    </div>
                    <div class="project">
                        <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 2 - Responsive Design">
                        <h3>Project 2</h3>
                        <p>Description of Project 2. This project highlights my ability to create responsive designs.</p>
                    </div>
                    <div class="project">
                        <img src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2025/02/431_Systems-thinking_Illustration_blog.png" alt="Project 3 - User-Centered Design">
                        <h3>Project 3</h3>
                        <p>Description of Project 3. This project demonstrates my expertise in user-centered design.</p>
                    </div>
                </div>
            </section>
        
            <section class="blog" id="blog">
                <h2>Blog</h2>
                <div class="posts">
                    <div class="post">
                        <a href="https://www.uxdesigninstitute.com/blog/ux-ui-upskilling-product-management/" target="_blank">
                            <img src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2025/02/433_PDUX-Course-Launch_Illustration_blog-_lighter.jpg" alt="Upskilling in UX/UI - Blog Post">
                            <h3>Upskilling in UX/UI: How Ekaterina succeeded at product management</h3>
                        </a>
                    </div>
                    <div class="post">
                        <a href="https://www.uxdesigninstitute.com/blog/what-is-systems-thinking/" target="_blank">
                            <img src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2025/02/434_Dark-mode_Illustration_blog.png" alt="What is Systems Thinking - Blog Post">
                            <h3>What is systems thinking and how can you apply it to design?</h3>
                        </a>
                    </div>
                    <div class="post">
                        <a href="https://www.uxdesigninstitute.com/blog/dark-mode-design-practical-guide/" target="_blank">
                            <img src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2025/02/435_Dark-mode_Illustration_blog.png" alt="Dark Mode Design - Blog Post">
                            <h3>Dark Mode Design: A Practical Guide</h3>
                        </a>
                    </div>
                </div>
            </section>
        
            <section class="contact" id="contact">
                <h2>Contact</h2>
                <form action="contact.php" method="POST" id="contactForm">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" aria-label="Send Message">Send Message</button>
                </form>
            </section>
        
            <footer>
                <p>&copy; 2025 Abdur Rahman. All rights reserved.</p>
                <p>
                    <a href="https://x.com/rahmanhisham_06" target="_blank" aria-label="Twitter">Twitter</a>
                    <a href="https://www.linkedin.com/in/abdur-rahman-hisham/" target="_blank" aria-label="LinkedIn">LinkedIn</a>
                    <a href="https://github.com/abdurrahmanhisham" target="_blank" aria-label="GitHub">GitHub</a>
                </p>
            </footer>
        
            <!-- Back-to-Top Button -->
            <button class="back-to-top" aria-label="Back to Top" onclick="scrollToTop()">↑</button>
        
            <script>
                // Back-to-Top Button Logic
                const backToTopButton = document.querySelector('.back-to-top');
        
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) {
                        backToTopButton.style.display = 'block';
                    } else {
                        backToTopButton.style.display = 'none';
                    }
                });
        
                function scrollToTop() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
        
                // Function to download the Excel file
                function downloadExcel(data) {
                    const blob = new Blob([data], { type: 'text/csv' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.setAttribute('hidden', '');
                    a.setAttribute('href', url);
                    a.setAttribute('download', 'contacts.csv');
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
        
                // Submit event listener for the form
                document.getElementById('contactForm').addEventListener('submit', function (e) {
                    e.preventDefault(); // Prevent default form submission
        
                    const formData = new FormData(this);
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'contact.php', true);
        
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            // Download the Excel file
                            downloadExcel(xhr.responseText);
        
                            // Redirect to the success page
                            window.location.href = 'contact_success.html';
                        } else {
                            alert('An error occurred while submitting the form.');
                        }
                    };
        
                    xhr.send(formData);
                });
            </script>
        </body>
        </html>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Retrieve form data
            $name = $_POST['name'];
            $email = $_POST['email'];
            $message = $_POST['message'];
        
            // Create a CSV string
            $csvData = "$name,$email,$message\n";
        
            // Output the CSV string
            header('Content-Type: text/csv');
            header('Content-Disposition: attachment; filename="contacts.csv"');
            echo $csvData;
            exit();
        }
        ?>

        
