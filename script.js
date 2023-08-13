// Header Toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed= new Typed('.auto-input',{
    strings:['Front-End Developer!','Learner Software Developer !','Learner App Developer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})

// Active Link State On Scroll

// Get All Links
let navLinks=document.querySelectorAll('nav ul a')
// Get All Section
let sections=document.querySelectorAll('section')


window.addEventListener('scroll',function (){
    const scrollPos=window.scrollY + 20 
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});

// Dark Theme

let Dark=document.getElementById('DarkBtn');


Dark.onclick=function(){
    document.body.classList.toggle("dark-theme") ;
    // if(document.body.classList.contains("dark-theme")){
    //     light.getElementById ="LightBtn"
        
    // }
}

// Send Message

function sendEmail(){
    var Name=document.getElementById("name").value;
    var Email=document.getElementById("email").value;
    var Subject=document.getElementById("subject").value;
    var Message=document.getElementById("msg").value;

    var body="Name: " + Name + "<br/> Email:" + Email + "<br/> Subject:" + Subject + "<br/> Message:" + Message;
    console.log(body);
    Email.send({
        
        Host : "smtp.elasticemail.com",
        Username : "sakilahamedportfolio23@gmail.com",
        Password : "C2F366235CDECA6266B91B4160DCAD7EBE20",
        To : 'sakilahamedportfolio23@gmail.com',
        From :"sakilahamedportfolio23@gmail.com",
        Subject : Subject,
        Body : body
    }).then(
      message => alert("Message Sent Succesfully")
    );
}