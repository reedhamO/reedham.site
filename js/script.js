const main_menu = 
"\n" +
"[[gb;skyblue;]|] [[b;coral;]about]               [[;skyblue;]- About me]\n" +
"[[gb;skyblue;]|] [[b;coral;]education]           [[;skyblue;]- My education background]\n" +
"[[gb;skyblue;]|] [[b;coral;]resume]              [[;skyblue;]- My Resumé]\n" +
"[[gb;skyblue;]|] [[b;coral;]experience]          [[;skyblue;]- Professional Work Experience]\n" +
"[[gb;skyblue;]|] [[b;coral;]projects]            [[;skyblue;]- All my projects]\n" +
"[[gb;skyblue;]|] [[b;coral;]skills]              [[;skyblue;]- Technical Proficiencies]\n" +
"[[gb;skyblue;]|] [[b;coral;]credits]             [[;skyblue;]- How I made this website]\n" +
"[[gb;skyblue;]|] [[b;coral;]socials]             [[;skyblue;]- You can connect with me here]\n";


const about_me = "[[;skyblue;]Hey, Reedham here.]\n" +
"[[;skyblue;]whoami? Just a guy in love with computers.]";

const education = 
"[[gb;skyblue;]|] [[b;coral;]Rajiv Gandhi Institute of Petroleum Technology]    [[;skyblue;]- B.Tech in Electrical Engineering (Major: EV)]\n" +
"                         [[i;;]~ Amethi, Uttar Pradesh\n]" +
"[[gb;skyblue;]|] [[b;coral;]DAV Parwanoo, Solan, Himachal Pradesh]             [[;skyblue;]- 12th - 89%]\n" +
"[[gb;skyblue;]|] [[b;coral;]DAV Parwanoo, Solan, Himachal Pradesh]             [[;skyblue;]- 10th - 79%]\n";


// const resume = "[[;;]https://drive.google.com/file/d/1EPHt25Yl67ZNzPbW7zA6hK3kfoIvasAl/view?usp=sharing]";

const projects =
"\n" +
"[[b;coral;]WiFi-Based Joint Activity and Location Estimation Using Deep Learning       (May, 2023 - Ongoing)\n]" +
"[[;skyblue;]   - Developing a system that can accurately recognize human activities based on Wi-Fi signal data (CSI).]\n" +
"[[;skyblue;]   - Developed and implemented a Convolutional Neural Network (CNN) model on Jordanian Dataset.]\n" +
"[[;skyblue;]   - Collected CSI Data using ESP32 Microcontroller and processed using several Python libraries.]\n" +
"[[;skyblue;]   - Used TensorFlow and Scikit-learn to implement CNN and also made use of various technologies like WSL2.]\n";


const exp = 
"\n" +
"[[b;coral;]TATA 1mg - Web Analyst Intern (Dec, 2023 - Mar, 2024)] - [[i;;]https://t.ly/intern_certificate_reedham]\n" +
"[[;skyblue;]   - Analyzed competitor’s data using Python and Tableau.]\n" +
"[[;skyblue;]   - Worked with big datasets and made them ready for visualizing using Pandas and NumPy.]\n" +
"[[;skyblue;]   - Created Tableau Dashboards for proper visualization.]\n";


const skills = 
"\n" + 
"[[gb;skyblue;]|] [[b;coral;]Python]              [[;skyblue;]- Intermediate]\n" +
"[[gb;skyblue;]|] [[b;coral;]Web Scraping]        [[;skyblue;]- Intermediate]\n" +
"[[gb;skyblue;]|] [[b;coral;]Tensorflow]          [[;skyblue;]- Beginner]\n" +
"[[gb;skyblue;]|] [[b;coral;]Pandas]              [[;skyblue;]- Intermediate]\n" +
"[[gb;skyblue;]|] [[b;coral;]NumPy]               [[;skyblue;]- Intermediate]\n" +
"[[gb;skyblue;]|] [[b;coral;]C++]                 [[;skyblue;]- Beginner]\n" +
"[[gb;skyblue;]|] [[b;coral;]Flutter]             [[;skyblue;]- Beginner]\n" +
"[[gb;skyblue;]|] [[b;coral;]Unity]               [[;skyblue;]- Beginner]\n" +
"[[gb;skyblue;]|] [[b;coral;]HTML CSS]            [[;skyblue;]- Intermediate]\n" +
"[[gb;skyblue;]|] [[b;coral;]Javascript]          [[;skyblue;]- Beginner]\n" +
"[[gb;skyblue;]|] [[b;coral;]Django]              [[;skyblue;]- Beginner]\n";

const credits = 
"\n" + 
"[[gb;skyblue;]|] [[;skyblue;]Site built by] [[b;coral;]Reedham]\n" +
"[[gb;skyblue;]|] [[;skyblue;]Using] [[b;coral;]Jquery Terminal Emulator] [[;skyblue;]by] [[b;coral;]Jakub Jankiewicz]: http://terminal.jcubic.pl\n";

const socials = 
"\n" + 
"[[gb;skyblue;]|] [[b;coral;]LinkedIn]            [[i;skyblue;]- https://www.linkedin.com/in/reedham-sh/]\n" +
"[[gb;skyblue;]|] [[b;coral;]E-Mail]              [[i;skyblue;]- reedham.sh@gmail.com]\n" +
"[[gb;skyblue;]|] [[b;coral;]Github]              [[i;skyblue;]- https://github.com/reedhamO]\n" +
"[[gb;skyblue;]|] [[b;coral;]Instagram]           [[i;skyblue;]- https://www.instagram.com/realreedham/]\n";

$("body").terminal(
  {
    menu: function () {
      this.echo(main_menu);
      window.scrollTo(0, document.body.scrollHeight);
    },

    commands: function () {
      this.echo(main_menu);
      window.scrollTo(0, document.body.scrollHeight);
    },

    ls: function () {
      this.echo(main_menu);
      window.scrollTo(0, document.body.scrollHeight);
    },

    about: function () {
      this.echo(about_me);
      window.scrollTo(0, document.body.scrollHeight);
    },

    education: function () {
      this.echo(education);
      window.scrollTo(0, document.body.scrollHeight);
    },

    skills: function () {
      this.echo(skills);
      window.scrollTo(0, document.body.scrollHeight);
    },

    resume: function () {
      window.location.href = "./Reedham_resume.pdf";
      window.scrollTo(0, document.body.scrollHeight);
    },

    projects: function () {
      this.echo(projects);
      window.scrollTo(0, document.body.scrollHeight);
    },

    experience: function () {
      this.echo(exp);
      window.scrollTo(0, document.body.scrollHeight);
    },

    credits: function () {
      this.echo(credits);
      window.scrollTo(0, document.body.scrollHeight);
    },

    socials: function () {
      this.echo(socials);
      window.scrollTo(0, document.body.scrollHeight);
    },

    hola: function () {
      this.echo("Hello, Welcome to this terminal.");
      window.scrollTo(0, document.body.scrollHeight);
    },

    hello: function (what) {
      this.echo("Hello, " + what + ". Welcome to my portfolio.");
      window.scrollTo(0, document.body.scrollHeight);
    },

    cat: function (width, height) {
      const img = $(
        '<img src="https://placekitten.com/' + width + "/" + height + '">'
      );
      img.on("load", this.resume);
      this.pause();
      this.echo(img);
    },

    helloo: function () {
      this.echo("helloooooooooo");
    },
  },
  {
    greetings: greetings.innerHTML
  }
);
