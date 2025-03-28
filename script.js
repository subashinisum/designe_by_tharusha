<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tharusha | Creative Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="cursor">
        <div class="cursor-dot"></div>
        <div class="cursor-outline"></div>
    </div>
    <div class="cursor-trail"></div>
    <div class="space-background">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="nebula"></div>
        <div class="shooting-stars"></div>
    </div>

    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="nav-brand">
            <div class="logo-container">
                <span class="logo-text">T</span>
            </div>
            <h1>Tharusha</h1>
        </div>

        <div class="nav-menu">
            <a href="#home" class="nav-link active">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
            <a href="#services" class="nav-link">
                <i class="fas fa-laptop-code"></i>
                <span>Services</span>
            </a>
            <a href="#projects" class="nav-link">
                <i class="fas fa-code"></i>
                <span>Projects</span>
            </a>
            <a href="#about" class="nav-link">
                <i class="fas fa-user"></i>
                <span>About</span>
            </a>
            <a href="#contact" class="nav-link">
                <i class="fas fa-envelope"></i>
                <span>Contact</span>
            </a>
        </div>

        <button class="nav-toggle">
            <i class="fas fa-bars"></i>
        </button>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu">
        <a href="#home" class="nav-link active">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </a>
        <a href="#services" class="nav-link">
            <i class="fas fa-laptop-code"></i>
            <span>Services</span>
        </a>
        <a href="#projects" class="nav-link">
            <i class="fas fa-code"></i>
            <span>Projects</span>
        </a>
        <a href="#about" class="nav-link">
            <i class="fas fa-user"></i>
            <span>About</span>
        </a>
        <a href="#contact" class="nav-link">
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
        </a>
    </div>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Home Section -->
        <section id="home" class="section active">
            <div class="profile-container">
                <div class="profile-wrapper">
                    <div class="profile-photo">
                        <img src="c.jpg" alt="Tharusha">
                    </div>
                    <div class="neon-ring"></div>
                    <div class="neon-glow"></div>
                </div>
                <div class="profile-info">
                    <h1>Hey I'm Tharusha </h1>
                    <h3 class="typewriter">Full Stack Developer</h3>
                    <p>Crafting digital experiences with code and creativity</p>
                    <br>
                    <div class="cta-buttons">
                        <a href="#about" class="btn btn-primary">View Work</a>
                        <a href="#contact" class="btn btn-outline">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="section">
            <div class="services-grid">
                <div class="service-card">
                    <div class="card-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>Creating responsive and modern web applications</p>
                </div>
                <div class="service-card">
                    <div class="card-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3>Mobile Apps</h3>
                    <p>Building cross-platform mobile solutions</p>
                </div>
                <div class="service-card">
                    <div class="card-icon">
                        <i class="fas fa-server"></i>
                    </div>
                    <h3>Backend Development</h3>
                    <p>Developing robust server-side applications</p>
                </div>

                <div class="service-card">
                    <div class="card-icon">
                        <i class="fa-solid fa-video"></i>
                    </div>
                    <h3>Video editing</h3>
                    <p>Creative video</p>
                </div>

            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="section">
            <div class="projects-grid">
                <article class="project-card">
                    <div class="project-image">
                        <img src="v.jpg" alt="Project 1">
                    </div>
                    <div class="project-info">
                        <h3>Education Management System</h3>
                       
                        
                    </div>
                </article>
                <article class="project-card">
                    <div class="project-image">
                        <img src="b.jpg" alt="Project 2">
                    </div>
                    <div class="project-info">
                        <h3>Modern E-Commerce Website UI</h3>
                       
                    
                    </div>
                </article>

                <article class="project-card">
                    <div class="project-image">
                        <img src="h.jpeg" alt="Project 2">
                    </div>
                    <div class="project-info">
                        <h3>Online learning Platform</h3>
                        
                    
                    </div>
                </article>

                <article class="project-card">
                    <div class="project-image">
                        <img src="j.jpeg" alt="Project 2">
                    </div>
                    <div class="project-info">
                        <h3>Professional Project Management System</h3>
                 
                    
                    </div>
                </article>

                <article class="project-card">
                    <div class="project-image">
                        <img src="n.jpg" alt="Project 2">
                    </div>
                    <div class="project-info">
                        <h3>Real Time Chat Aplication</h3>
                      
                    
                    </div>
                </article>

                <article class="project-card">
                    <div class="project-image">
                        <img src="l.jpeg" alt="Project 2">
                    </div>
                    <div class="project-info">
                        <h3>Professional E-comerce Website</h3>
                     
                    
                    </div>
                </article>

            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="section">
            <div class="contact-container">
                <form class="contact-form">
                    <div class="form-group">
                        <input type="text" required placeholder="Your Name">
                        <div class="form-border"></div>
                    </div>
                    <div class="form-group">
                        <input type="email" required placeholder="Your Email">
                        <div class="form-border"></div>
                    </div>
                    <div class="form-group">
                        <textarea required placeholder="Your Message"></textarea>
                        <div class="form-border"></div>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
        <!--Abouth section-->
        <section id="about" class="section">
            <div class="about-container">
                <!-- Decorative elements -->
                <div class="about-decoration about-decoration-1"></div>
                <div class="about-decoration about-decoration-2"></div>
                
                <div class="about-content-wrapper">
                    <!-- Profile Image with 3D effect -->
                    <div class="about-profile">
                        <div class="profile-3d-container">
                            <img src="c.jpg" alt="Tharusha" class="about-image">
                            <div class="profile-neon-ring"></div>
                            <div class="profile-neon-glow"></div>
                        </div>
                    </div>
                    
                    <!-- Content Area -->
                    <div class="about-content">
                        
                        <div class="about-text-group">
                            <p class="about-text">
                                <i class="fas fa-code neon-icon"></i>
                                <span class="highlight">Full Stack Developer</span> with 3+ years of experience building web and mobile applications.
                            </p>
                            
                            <p class="about-text">
                                <i class="fas fa-graduation-cap neon-icon"></i>
                                Computer Science graduate passionate about creating <span class="highlight">interactive digital experiences</span>.
                            </p>
                            
                            <p class="about-text">
                                <i class="fas fa-lightbulb neon-icon"></i>
                                Specializing in <span class="highlight">React, Node.js,laravel,Django and modern JavaScript</span> frameworks.
                            </p>
                        </div>
                        
     
    </main>
   <!--skils-->
   <div class="skills-section"></div>

   

  
  <!--hero-->
  <section class="hero">
    <div class="gradient-overlay"></div>
    <div class="slider">
        <!-- Slide 1 -->
        <div class="slide active" style="background-image: url('images/t.jpg')">
            <div class="slide-content">
                <h2>Innovative Technology</h2>
                <p>Discover cutting-edge solutions that push boundaries and transform industries with our advanced technological expertise.</p>
            </div>
        </div>
        
        <!-- Slide 2 -->
        <div class="slide" style="background-image: url('images/D.jpg')">
            <div class="slide-content">
                <h2>Creative Development</h2>
                <p>Custom software solutions tailored to your business needs, crafted with precision and innovative thinking.</p>
            </div>
        </div>
        
        <!-- Slide 3 -->
        <div class="slide" style="background-image: url('images/s.jpg')">
            <div class="slide-content">
                <h2>Data Revolution</h2>
                <p>Harness the power of data analytics to drive decision-making and gain competitive advantage in your market.</p>
            </div>
        </div>
    </div>
    
    <!-- Navigation Dots -->
    <div class="dots">
        <div class="dot active" data-index="0"></div>
        <div class="dot" data-index="1"></div>
        <div class="dot" data-index="2"></div>
    </div>
</section>


    <!--sotiol media-->
    <!-- From Uiverse.io by wilsondesouza --> 
    <ul class="example-2">
        <li class="icon-content">
          <a
            href="https://linkedin.com/"
            aria-label="LinkedIn"
            data-social="linkedin"
          >
            <div class="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
              xml:space="preserve"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div class="tooltip">LinkedIn</div>
        </li>
        <li class="icon-content">
          <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
            <div class="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
              xml:space="preserve"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div class="tooltip">GitHub</div>
        </li>
        <li class="icon-content">
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            data-social="instagram"
          >
            <div class="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
              xml:space="preserve"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div class="tooltip">Instagram</div>
        </li>
        <li class="icon-content">
          <a href="https://youtube.com/" aria-label="Youtube" data-social="youtube">
            <div class="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-youtube"
              viewBox="0 0 16 16"
              xml:space="preserve"
            >
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div class="tooltip">Youtube</div>
        </li>
      </ul>

    <script src="script.js">
      
    </script>
</body>
</html>
