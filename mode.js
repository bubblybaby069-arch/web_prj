function tooglemode(){
            const body=document.getElementById('body');
            const mode=document.getElementById('modelabel');
            const isdark = body.classList.toggle('dark-mode');
            mode.textContent=isdark ? 'Dark Mode' : 'Light Mode';

        }