            //your javascript goes here
            var currentTab = 0;
            document.addEventListener("DOMContentLoaded", function(event) {


                showTab(currentTab);

            });

            function showTab(n) {
                var x = document.getElementsByClassName("tab");
                x[n].style.display = "block";
                if (n == 0) {
                    document.getElementById("prevBtn").style.display = "none";
                } else {
                    document.getElementById("prevBtn").style.display = "inline";
                }
                if (n == (x.length - 1)) {
                    document.getElementById("nextBtn").innerHTML = "Submit";
                } else {
                    document.getElementById("nextBtn").innerHTML = "Next";
                }
                fixStepIndicator(n)
            }

            function AddPastClass() {
                let steps = document.querySelectorAll('.step')
                let past = document.querySelectorAll('.past')
                if (past.length+2 === steps.length) {
                    steps[5].parentElement.parentElement.parentElement.parentElement.classList.add('lastOne') 
                }else{
                    steps[0].parentElement.parentElement.classList.remove('lastOne')
                }
                steps.forEach(stp => {
                    stp.classList.remove('past')
                })
                for (let i = 0; i < steps.length; i++) {
                    if (!steps[i].classList.contains('active')) {
                        steps[i].classList.add('past')
                    }else{
                        break;
                    }
                    
                }  
            }


            function nextPrev(n) {
                var x = document.getElementsByClassName("tab");
                // if (n == 1 && !validateForm()) return true;
                x[currentTab].style.display = "none";
                currentTab = currentTab + n;
                if (currentTab == x.length) {
                    // document.getElementById("regForm").submit();
                    // return false;
                    //alert("sdf");
                    document.getElementById("nextprevious").style.display = "none";
                    document.getElementById("all-steps").style.display = "none";
                    document.getElementById("register").style.display = "none";
                    // document.getElementsByClassName("Add__Student").style.display = "none";




                }
                showTab(currentTab);
                AddPastClass()
            }

            function fixStepIndicator(n) {
                var i, x = document.getElementsByClassName("step");
                for (i = 0; i < x.length; i++) { x[i].className = x[i].className.replace(" active", ""); }
                x[n].className += " active";
            }