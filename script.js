
const headers = document.querySelectorAll(".accordion-header");
headers.forEach(header => {
    header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";  
        } else {
           
            document.querySelectorAll(".accordion-content").forEach(item => {
                item.style.display = "none";
            });

            content.style.display = "block"; 
        }
    });
});
