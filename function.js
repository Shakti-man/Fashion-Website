
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


        const mobileMenuButton = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
        document.getElementById("show-login").addEventListener("click",function(){
            document.querySelector(".popup").classList.add("active");
            document.querySelector(".popup").classList.add('scroll-lock');

        });
        document.querySelector(".close-btn").addEventListener("click",function(){
            document.querySelector(".popup").classList.remove("active");
        });
        function toggleScrollLock() {
            const body = document.body;
            const lockButton = document.getElementById('show-login');
            const unlockButton = document.getElementById('unlockButton');
            
            body.classList.toggle('scroll-lock');
            
            if (body.classList.contains('scroll-lock')) {
              lockButton.style.display = 'none';
              unlockButton.style.display = 'block';
            } else {
              lockButton.style.display = 'block';
              unlockButton.style.display = 'none';
            }
          }
        // document.getElementById("show-login").addEventListener("click",function(){
        //     document.querySelector("body").classList.toggle('blur');
        // });
        