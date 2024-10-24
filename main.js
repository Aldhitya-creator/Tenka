document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time with a timeout
    setTimeout(function() {
      // Hide the loading spinner
      document.getElementById("loading").style.display = "none";
    }, 3000); // Change the time to simulate actual loading duration
  });
  

// Toggle mobile menu visibility
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const button = document.getElementById('rpgButton');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const description = document.getElementById('description');
const sidebar1 = document.getElementById('sidebar');
const backgroundImage = document.getElementById('backgroundImage');
const sakuraElements = document.querySelectorAll('.sakura');
const cloudElements = document.querySelectorAll('.animate-cloud');
const annotations = [
    document.getElementById('annotation1'),
    document.getElementById('annotation2'),
    document.getElementById('annotation3'),
    document.getElementById('annotation4'),
];

button.addEventListener('click', () => {
    // Change the brightness of the image to normal
    backgroundImage.classList.toggle('active-image');
    
    // Hide the button with a fade-out effect
    button.classList.add('fade-out');
    title.classList.add('fade-out');
    subtitle.classList.add('fade-out');
    description.classList.add('fade-out');

    // Permanently hide the button after the animation is finished
    setTimeout(() => {
        button.style.display = 'none';
        title.style.display = 'none';
        subtitle.style.display = 'none';
        description.style.display = 'none';
    }, 300); // Adjust the duration to match the transition duration

    // Sidebar 
    sidebar1.classList.add('fade-in');
    sidebar1.classList.remove('opacity-0');
    
    // Show annotations with a fade-in effect
    annotations.forEach(annotation => {
        annotation.classList.add('fade-in');
        annotation.classList.remove('opacity-0');
    });

    // Display sakura flowers after the button is clicked
    sakuraElements.forEach(sakura => {
        sakura.classList.remove('opacity-0');
        sakura.classList.add('fade-in'); // Show sakura
    });

    // Display clouds after the button is clicked
    cloudElements.forEach(cloud => {
        cloud.classList.remove('opacity-0');
        cloud.classList.add('fade-in'); // Show clouds
    });
});

// Modal open
const openModal1 = document.getElementById('openModal1');
const closeModal1 = document.getElementById('closeModal1');
const modal1 = document.getElementById('myModal1');
const kimono = document.getElementById('myKimono');

const openModal2 = document.getElementById('openModal2');
const closeModal2 = document.getElementById('closeModal2');
const modal2 = document.getElementById('myModal2');
const kimono1 = document.getElementById('myKimono1');

const openModal3 = document.getElementById('openModal3');
const closeModal3 = document.getElementById('closeModal3');
const modal3 = document.getElementById('myModal3');
const pagoda = document.getElementById('myPagoda');

const openModal4 = document.getElementById('openModal4');
const closeModal4 = document.getElementById('closeModal4');
const modal4 = document.getElementById('myModal4');
const village = document.getElementById('myVillage');

const sidebar = document.getElementById('sidebarModal');
const openSidebarButton = document.getElementById('openSidebar');
const closeSidebarButton = document.getElementById('closeSidebar');

// Function to open the first modal
// Add full translate y so the image doesn't sink
openModal1.addEventListener('click', () => {
    modal1.classList.remove('hidden');
    kimono.classList.remove('hidden');
    setTimeout(() => {
        modal1.classList.remove('translate-y-full');
        kimono.classList.remove('translate-y-full');
    }, 20);
});

// Function to close the first modal
closeModal1.addEventListener('click', () => {
    kimono.classList.remove('translate-y-full');
    modal1.classList.add('translate-y-full');
    setTimeout(() => {
        modal1.classList.add('hidden');
        kimono.classList.add('hidden');
    }, 300);
});

// Function to open the second modal
openModal2.addEventListener('click', () => {
    modal2.classList.remove('hidden');
    kimono1.classList.remove('hidden');
    setTimeout(() => {
        modal2.classList.remove('translate-y-full');
        kimono1.classList.remove('translate-y-full');
    }, 20);
});

// Function to close the second modal
closeModal2.addEventListener('click', () => {
    modal2.classList.add('translate-y-full');
    kimono1.classList.remove('translate-y-full');
    setTimeout(() => {
        modal2.classList.add('hidden');
        kimono1.classList.add('hidden');
    }, 300);
});

// Function to open the third modal
openModal3.addEventListener('click', () => {
    modal3.classList.remove('hidden');
    pagoda.classList.remove('hidden');
    setTimeout(() => {
        modal3.classList.remove('translate-y-full');
        pagoda.classList.remove('translate-y-full');
    }, 20);
});

// Function to close the third modal
closeModal3.addEventListener('click', () => {
    modal3.classList.add('translate-y-full');
    pagoda.classList.remove('translate-y-full');
    setTimeout(() => {
        modal3.classList.add('hidden');
        pagoda.classList.add('hidden');
    }, 300);
});

// Function to open the fourth modal
openModal4.addEventListener('click', () => {
    modal4.classList.remove('hidden');
    village.classList.remove('hidden');
    setTimeout(() => {
        modal4.classList.remove('translate-y-full');
        village.classList.remove('translate-y-full');
    }, 20);
});

// Function to close the fourth modal
closeModal4.addEventListener('click', () => {
    modal4.classList.add('translate-y-full');
    village.classList.remove('translate-y-full');
    setTimeout(() => {
        modal4.classList.add('hidden');
        village.classList.add('hidden');
    }, 300);
});

// Open sidebar
openSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    setTimeout(() => {
        sidebar.classList.remove('translate-y-full');
    }, 10); // Ensure smooth transition
});

// Close sidebar
closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.add('translate-y-full');
    setTimeout(() => {
        sidebar.classList.add('hidden');
    }, 300); // Wait for transition to complete
});

// Close modal when clicking outside
[modal1, modal2, modal3, modal4, sidebar].forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('translate-y-full');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    });
});
