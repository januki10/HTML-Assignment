//CALENDAR

if (window.location.href == "http://127.0.0.1:5500/TurtleBliss/tickets.html") {

    const presentDate = document.querySelector(".currentdate");
    daysBracket = document.querySelector(".days"),
        arrowIcons = document.querySelectorAll(".calendaricons i");

    let date = new Date(),
        presentYear = date.getFullYear(),
        presentMonth = date.getMonth();



    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const displaycalendar = () => {
        let firstDayofMonth = new Date(presentYear, presentMonth, 1).getDay();
        let lastDateofMonth = new Date(presentYear, presentMonth + 1, 0).getDate();
        let lastDayofMonth = new Date(presentYear, presentMonth, lastDateofMonth).getDay();
        let lastDateofLastMonth = new Date(presentYear, presentMonth, 0).getDate();
        let liBracket = "";

        for (let i = firstDayofMonth; i > 0; i--) {
            liBracket += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;

        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            let dayToday = i === date.getDate() && presentMonth === new Date().getMonth()
                && presentYear === new Date().getFullYear() ? "active" : "";
            liBracket += `<li class="${dayToday}" id="num${i}" onclick="getSelectedDay(${i})">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            liBracket += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;

        }

        presentDate.innerText = `${months[presentMonth]} ${presentYear}`;
        daysBracket.innerHTML = liBracket;
    }


    displaycalendar();

    arrowIcons.forEach(icon => {

        icon.addEventListener("click", () => {

            presentMonth = icon.id === "previous" ? presentMonth - 1 : presentMonth + 1;

            if (presentMonth < 0 || presentMonth > 11) {
                date = new Date(presentYear, presentMonth);
                presentYear = date.getFullYear();
                presentMonth = date.getMonth();
            } else {
                date = new Date();
            }
            displaycalendar();
        });
    });

    let dateSetup = new Date();
    let day = dateSetup.getDate();

    let prev = "num" + day;

    function getSelectedDay(i) {

        let selectedDay = document.getElementById(`num${i}`);
        selectedDay.classList.add("active");


        let selectedDefaultDay = document.getElementById(prev);
        selectedDefaultDay.classList.remove("active");

        prev = "num" + i;

        dateSetup = i + '/' + (presentMonth + 1) + '/' + presentYear;

        document.getElementById('tabledate').innerText = dateSetup;

    }

    let today = new Date();


    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;

    document.getElementById('tabledate').innerText = today;






    //DURATION

    /*7:00AM-8:00AM*/

    let peaktime1 = false;
    let peaktime2 = false;
    let peaktime3 = false;
    let peaktime4 = false;
    let peaktime5 = false;
    let peaktime6 = false;


    function checking() {



        let checkbox1 = document.getElementById("select1");
        let slotA = document.getElementById("slot1");

        if (checkbox1.checked == true) {
            slotA.style.backgroundColor = "rgb(3, 69, 45)";

        } else {
            slotA.style.backgroundColor = "rgb(54, 160, 148)";
        }




        let checkbox2 = document.getElementById("select2");
        let slotB = document.getElementById("slot2");

        if (checkbox2.checked == true) {
            slotB.style.backgroundColor = "rgb(3, 69, 45)";

        } else {
            slotB.style.backgroundColor = "rgb(54, 160, 148)";
        }




        let checkbox3 = document.getElementById("select3");
        let slotC = document.getElementById("slot3");

        if (checkbox3.checked == true) {
            slotC.style.backgroundColor = "rgb(3, 69, 45)";

        } else {
            slotC.style.backgroundColor = "rgb(54, 160, 148)";
        }





        let checkbox4 = document.getElementById("select4");
        let slotD = document.getElementById("slot4");

        if (checkbox4.checked == true) {
            slotD.style.backgroundColor = "rgb(5, 132, 85)";
            peaktime1 = true;

        } else {
            slotD.style.backgroundColor = "rgb(54, 160, 148)";
            peaktime1 = false;
        }





        let checkbox5 = document.getElementById("select5");
        let slotE = document.getElementById("slot5");

        if (checkbox5.checked == true) {
            slotE.style.backgroundColor = "rgb(5, 132, 85)";
            peaktime2 = true;

        } else {
            slotE.style.backgroundColor = "rgb(54, 160, 148)";
            peaktime2 = false;
        }






        let checkbox6 = document.getElementById("select6");
        let slotF = document.getElementById("slot6");

        if (checkbox6.checked == true) {
            slotF.style.backgroundColor = "rgb(5, 132, 85)";
            peaktime3 = true;
        } else {
            slotF.style.backgroundColor = "rgb(54, 160, 148)";
            peaktime3 = false;
        }




        let checkbox7 = document.getElementById("select7");
        let slotG = document.getElementById("slot7");

        if (checkbox7.checked == true) {
            slotG.style.backgroundColor = "rgb(3, 69, 45)";

        } else {
            slotG.style.backgroundColor = "rgb(54, 160, 148)";
        }





        let checkbox8 = document.getElementById("select8");
        let slotH = document.getElementById("slot8");

        if (checkbox8.checked == true) {
            slotH.style.backgroundColor = "rgb(3, 69, 45)";

        } else {
            slotH.style.backgroundColor = "rgb(54, 160, 148)";
        }





        let checkbox9 = document.getElementById("select9");
        let slotI = document.getElementById("slot9");

        if (checkbox9.checked == true) {
            slotI.style.backgroundColor = "rgb(5, 132, 85)";
            peaktime4 = true;

        } else {
            slotI.style.backgroundColor = "rgb(54, 160, 148)";
            peaktime4 = false;
        }






        let checkbox10 = document.getElementById("select10");
        let slotJ = document.getElementById("slot10");

        if (checkbox10.checked == true) {
            slotJ.style.backgroundColor = "rgb(5, 132, 85)";
            peaktime5 = true;

        } else {
            slotJ.style.backgroundColor = "rgb(54, 160, 148)";
            peaktime5 = false;
        }




        let checkbox11 = document.getElementById("select11");
        let slotK = document.getElementById("slot11");

        if (checkbox11.checked == true) {
            slotK.style.backgroundColor = "rgb(5, 132, 85)";
            peaktime6 = true;

        } else {
            slotK.style.backgroundColor = "rgb(54, 160, 148)";
            peaktime6 = false;
        }

    }



    function peakcounting() {

        let peakCount = 0;

        if ((peaktime1 == true) && (peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true) && (peaktime6 == true)) {
            peakCount = 6;
        }
        else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true)) {
            peakCount = 5;
        }
        else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime6 == true)) {
            peakCount = 5;
        }
        else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime3 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 5; } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime4 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 5; } else if ((peaktime1 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true) && (peaktime6 == true)) {
            peakCount = 5;
        }
        else if ((peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true) && (peaktime6 == true)) {
            peakCount = 5;
        }
        else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true)) {
            peakCount = 4;
        }

        else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime3 == true) && (peaktime5 == true)) { peakCount = 4; } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime3 == true) && (peaktime6 == true)) { peakCount = 4; } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime4 == true) && (peaktime5 == true)) { peakCount = 4; } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime4 == true) && (peaktime6 == true)) { peakCount = 4; } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime5 == true) && (peaktime6 == true)) {
            peakCount = 4;
        } else if ((peaktime1 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true)) { peakCount = 4; } else if ((peaktime1 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime6 == true)) { peakCount = 4; } else if ((peaktime1 == true) && (peaktime3 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 4; } else if ((peaktime1 == true) && (peaktime4 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 4; } else if ((peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true)) { peakCount = 4; } else if ((peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime6 == true)) {
            peakCount = 4;
        } else if ((peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true)) { peakCount = 4; } else if ((peaktime2 == true) && (peaktime3 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 4; } else if ((peaktime2 == true) && (peaktime4 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 4; } else if ((peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true) && (peaktime6 == true)) {
            peakCount = 4;
        } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime3 == true)) { peakCount = 3; } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime4 == true)) { peakCount = 3; } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime5 == true)) { peakCount = 3; } else if ((peaktime1 == true) && (peaktime2 == true) && (peaktime6 == true)) { peakCount = 3; } else if ((peaktime1 == true) && (peaktime3 == true) && (peaktime4 == true)) {
            peakCount = 3;
        } else if ((peaktime1 == true) && (peaktime3 == true) && (peaktime5 == true)) {
            peakCount = 3;
        } else if ((peaktime1 == true) && (peaktime3 == true) && (peaktime6 == true)) { peakCount = 3; } else if ((peaktime1 == true) && (peaktime4 == true) && (peaktime5 == true)) { peakCount = 3; } else if ((peaktime1 == true) && (peaktime4 == true) && (peaktime6 == true)) { peakCount = 3; } else if ((peaktime1 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 3; } else if ((peaktime2 == true) && (peaktime3 == true) && (peaktime4 == true)) { peakCount = 3; } else if ((peaktime2 == true) && (peaktime3 == true) && (peaktime5 == true)) { peakCount = 3; } else if ((peaktime2 == true) && (peaktime3 == true) && (peaktime6 == true)) {
            peakCount = 3;
        } else if ((peaktime2 == true) && (peaktime4 == true) && (peaktime5 == true)) { peakCount = 3; } else if ((peaktime2 == true) && (peaktime4 == true) && (peaktime6 == true)) { peakCount = 3; } else if ((peaktime2 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 3; } else if ((peaktime3 == true) && (peaktime4 == true) && (peaktime5 == true)) { peakCount = 3; } else if ((peaktime3 == true) && (peaktime4 == true) && (peaktime6 == true)) { peakCount = 3; } else if ((peaktime3 == true) && (peaktime5 == true) && (peaktime6 == true)) { peakCount = 3; } else if ((peaktime4 == true) && (peaktime5 == true) && (peaktime6 == true)) {
            peakCount = 3;
        } else if ((peaktime1 == true) && (peaktime2 == true)) { peakCount = 2; } else if ((peaktime1 == true) && (peaktime3 == true)) { peakCount = 2; } else if ((peaktime1 == true) && (peaktime4 == true)) { peakCount = 2; } else if ((peaktime1 == true) && (peaktime5 == true)) { peakCount = 2; } else if ((peaktime1 == true) && (peaktime6 == true)) { peakCount = 2; } else if ((peaktime2 == true) && (peaktime3 == true)) { peakCount = 2; } else if ((peaktime2 == true) && (peaktime4 == true)) { peakCount = 2; } else if ((peaktime2 == true) && (peaktime5 == true)) { peakCount = 2; } else if ((peaktime2 == true) && (peaktime6 == true)) {
            peakCount = 2;
        } else if ((peaktime3 == true) && (peaktime4 == true)) { peakCount = 2; } else if ((peaktime3 == true) && (peaktime5 == true)) { peakCount = 2; } else if ((peaktime3 == true) && (peaktime6 == true)) { peakCount = 2; } else if ((peaktime4 == true) && (peaktime5 == true)) { peakCount = 2; } else if ((peaktime4 == true) && (peaktime6 == true)) { peakCount = 2; } else if ((peaktime5 == true) && (peaktime6 == true)) {
            peakCount = 2;
        } else if ((peaktime1 == true)) { peakCount = 1; } else if ((peaktime2 == true)) { peakCount = 1; } else if ((peaktime3 == true)) { peakCount = 1; } else if ((peaktime4 == true)) { peakCount = 1; } else if ((peaktime5 == true)) { peakCount = 1; } else if ((peaktime6 == true)) { peakCount = 1; }


        sessionStorage.setItem("store-peak", peakCount);

    }


    function totalhourscounting() {

        let hour = 0;

        let slotA = document.getElementById("select1");
        let slotB = document.getElementById("select2");
        let slotC = document.getElementById("select3");
        let slotD = document.getElementById("select4");
        let slotE = document.getElementById("select5");
        let slotF = document.getElementById("select6");
        let slotG = document.getElementById("select7");
        let slotH = document.getElementById("select8");
        let slotI = document.getElementById("select9");
        let slotJ = document.getElementById("select10");
        let slotK = document.getElementById("select11");

        if (slotA.checked == true) {
            hour++;

            if (slotB.checked == true) {
                hour++;

                if (slotC.checked == true) {
                    hour++;

                    if (slotD.checked == true) {
                        hour++;

                        if (slotE.checked == true) {
                            hour++;

                            if (slotF.checked == true) {
                                hour++;

                                if (slotG.checked == true) {
                                    hour++;

                                    if (slotH.checked == true) {
                                        hour++;

                                        if (slotI.checked == true) {
                                            hour++;

                                            if (slotJ.checked == true) {
                                                hour++;

                                                if (slotK.checked == true) {
                                                    hour++;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }

        else if (slotB.checked == true) {
            hour++;

            if (slotC.checked == true) {
                hour++;

                if (slotD.checked == true) {
                    hour++;

                    if (slotE.checked == true) {
                        hour++;

                        if (slotF.checked == true) {
                            hour++;

                            if (slotG.checked == true) {
                                hour++;

                                if (slotH.checked == true) {
                                    hour++;

                                    if (slotI.checked == true) {
                                        hour++;

                                        if (slotJ.checked == true) {
                                            hour++;

                                            if (slotK.checked == true) {
                                                hour++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }

        else if (slotC.checked == true) {
            hour++;

            if (slotD.checked == true) {
                hour++;

                if (slotE.checked == true) {
                    hour++;

                    if (slotF.checked == true) {
                        hour++;

                        if (slotG.checked == true) {
                            hour++;

                            if (slotH.checked == true) {
                                hour++;

                                if (slotI.checked == true) {
                                    hour++;

                                    if (slotJ.checked == true) {
                                        hour++;

                                        if (slotK.checked == true) {
                                            hour++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }

        else if (slotD.checked == true) {
            hour++;

            if (slotE.checked == true) {
                hour++;

                if (slotF.checked == true) {
                    hour++;

                    if (slotG.checked == true) {
                        hour++;

                        if (slotH.checked == true) {
                            hour++;

                            if (slotI.checked == true) {
                                hour++;

                                if (slotJ.checked == true) {
                                    hour++;

                                    if (slotK.checked == true) {
                                        hour++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        else if (slotE.checked == true) {
            hour++;

            if (slotF.checked == true) {
                hour++;

                if (slotG.checked == true) {
                    hour++;

                    if (slotH.checked == true) {
                        hour++;

                        if (slotI.checked == true) {
                            hour++;

                            if (slotJ.checked == true) {
                                hour++;

                                if (slotK.checked == true) {
                                    hour++;
                                }
                            }
                        }
                    }
                }
            }
        }

        else if (slotF.checked == true) {
            hour++;

            if (slotG.checked == true) {
                hour++;

                if (slotH.checked == true) {
                    hour++;

                    if (slotI.checked == true) {
                        hour++;

                        if (slotJ.checked == true) {
                            hour++;

                            if (slotK.checked == true) {
                                hour++;
                            }
                        }
                    }
                }
            }
        }

        else if (slotG.checked == true) {
            hour++;

            if (slotH.checked == true) {
                hour++;

                if (slotI.checked == true) {
                    hour++;

                    if (slotJ.checked == true) {
                        hour++;

                        if (slotK.checked == true) {
                            hour++;
                        }
                    }
                }
            }
        }

        else if (slotH.checked == true) {
            hour++;

            if (slotI.checked == true) {
                hour++;

                if (slotJ.checked == true) {
                    hour++;

                    if (slotK.checked == true) {
                        hour++;
                    }
                }
            }
        }

        else if (slotI.checked == true) {
            hour++;

            if (slotJ.checked == true) {
                hour++;

                if (slotK.checked == true) {
                    hour++;
                }
            }
        }


        else if (slotJ.checked == true) {
            hour++;

            if (slotK.checked == true) {
                hour++;
            }
        }

        else if (slotK.checked == true) {
            hour++;
        }

        sessionStorage.setItem("store-hour", hour);

    }


    function slotbook() {

        let slotA = document.getElementById("select1");
        let slotB = document.getElementById("select2");
        let slotC = document.getElementById("select3");
        let slotD = document.getElementById("select4");
        let slotE = document.getElementById("select5");
        let slotF = document.getElementById("select6");
        let slotG = document.getElementById("select7");
        let slotH = document.getElementById("select8");
        let slotI = document.getElementById("select9");
        let slotJ = document.getElementById("select10");
        let slotK = document.getElementById("select11");

        let s1 = slotA.checked;
        let s2 = slotB.checked;
        let s3 = slotC.checked;
        let s4 = slotD.checked;
        let s5 = slotE.checked;
        let s6 = slotF.checked;
        let s7 = slotG.checked;
        let s8 = slotH.checked;
        let s9 = slotI.checked;
        let s10 = slotJ.checked;
        let s11 = slotK.checked;

        let startT = 0;
        let endT = 0;

        if (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9 && s10 && s11) {
            startT = 7;
            endT = 18;
        }

        else if (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9 && s10) {
            startT = 7;
            endT = 17;
        }

        else if (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9) {
            startT = 7;
            endT = 16;
        }

        else if (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8) {
            startT = 7;
            endT = 15;
        }

        else if (s1 && s2 && s3 && s4 && s5 && s6 && s7) {
            startT = 7;
            endT = 14;
        }

        else if (s1 && s2 && s3 && s4 && s5 && s6) {
            startT = 7;
            endT = 13;
        }

        else if (s1 && s2 && s3 && s4 && s5) {
            startT = 7;
            endT = 12;
        }

        else if (s1 && s2 && s3 && s4) {
            startT = 7;
            endT = 11;
        }

        else if (s1 && s2 && s3) {
            startT = 7;
            endT = 10;
        }

        else if (s1 && s2) {
            startT = 7;
            endT = 9;
        }

        else if (s1) {
            startT = 7;
            endT = 8;
        }

        else if (s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9 && s10 && s11) {
            startT = 8;
            endT = 18;
        }

        else if (s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9 && s10) {
            startT = 8;
            endT = 17;
        }

        else if (s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9) {
            startT = 8;
            endT = 16;
        }

        else if (s2 && s3 && s4 && s5 && s6 && s7 && s8) {
            startT = 8;
            endT = 15;
        }

        else if (s2 && s3 && s4 && s5 && s6 && s7) {
            startT = 8;
            endT = 14;
        }

        else if (s2 && s3 && s4 && s5 && s6) {
            startT = 8;
            endT = 13;
        }

        else if (s2 && s3 && s4 && s5) {
            startT = 8;
            endT = 12;
        }

        else if (s2 && s3 && s4) {
            startT = 8;
            endT = 11;
        }

        else if (s2 && s3) {
            startT = 8;
            endT = 10;
        }

        else if (s2) {
            startT = 8;
            endT = 9;
        }

        else if (s3 && s4 && s5 && s6 && s7 && s8 && s9 && s10 && s11) {
            startT = 9;
            endT = 18;
        }

        else if (s3 && s4 && s5 && s6 && s7 && s8 && s9 && s10) {
            startT = 9;
            endT = 17;
        }

        else if (s3 && s4 && s5 && s6 && s7 && s8 && s9) {
            startT = 9;
            endT = 16;
        }

        else if (s3 && s4 && s5 && s6 && s7 && s8) {
            startT = 9;
            endT = 15;
        }

        else if (s3 && s4 && s5 && s6 && s7) {
            startT = 9;
            endT = 14;
        }

        else if (s3 && s4 && s5 && s6) {
            startT = 9;
            endT = 13;
        }

        else if (s3 && s4 && s5) {
            startT = 9;
            endT = 12;
        }

        else if (s3 && s4) {
            startT = 9;
            endT = 11;
        }

        else if (s3) {
            startT = 9;
            endT = 10;
        }

        else if (s4 && s5 && s6 && s7 && s8 && s9 && s10 && s11) {
            startT = 10;
            endT = 18;
        }

        else if (s4 && s5 && s6 && s7 && s8 && s9 && s10) {
            startT = 10;
            endT = 17;
        }

        else if (s4 && s5 && s6 && s7 && s8 && s9) {
            startT = 10;
            endT = 16;
        }

        else if (s4 && s5 && s6 && s7 && s8) {
            startT = 10;
            endT = 15;
        }

        else if (s4 && s5 && s6 && s7) {
            startT = 10;
            endT = 14;
        }

        else if (s4 && s5 && s6) {
            startT = 10;
            endT = 13;
        }

        else if (s4 && s5) {
            startT = 10;
            endT = 12;
        }

        else if (s4) {
            startT = 10;
            endT = 11;
        }

        else if (s5 && s6 && s7 && s8 && s9 && s10 && s11) {
            startT = 11;
            endT = 18;
        }

        else if (s5 && s6 && s7 && s8 && s9 && s10) {
            startT = 11;
            endT = 17;
        }

        else if (s5 && s6 && s7 && s8 && s9) {
            startT = 11;
            endT = 16;
        }

        else if (s5 && s6 && s7 && s8) {
            startT = 11;
            endT = 15;
        }

        else if (s5 && s6 && s7) {
            startT = 11;
            endT = 14;
        }

        else if (s5 && s6) {
            startT = 11;
            endT = 13;
        }

        else if (s5) {
            startT = 11;
            endT = 12;
        }

        else if (s6 && s7 && s8 && s9 && s10 && s11) {
            startT = 12;
            endT = 18;
        }

        else if (s6 && s7 && s8 && s9 && s10) {
            startT = 12;
            endT = 17;
        }

        else if (s6 && s7 && s8 && s9) {
            startT = 12;
            endT = 16;
        }

        else if (s6 && s7 && s8) {
            startT = 12;
            endT = 15;
        }

        else if (s6 && s7) {
            startT = 12;
            endT = 14;
        }

        else if (s6) {
            startT = 12;
            endT = 13;
        }

        else if (s7 && s8 && s9 && s10 && s11) {
            startT = 13;
            endT = 18;
        }

        else if (s7 && s8 && s9 && s10) {
            startT = 13;
            endT = 17;
        }

        else if (s7 && s8 && s9) {
            startT = 13;
            endT = 16;
        }

        else if (s7 && s8) {
            startT = 13;
            endT = 15;
        }

        else if (s7) {
            startT = 13;
            endT = 14;
        }

        else if (s8 && s9 && s10 && s11) {
            startT = 14;
            endT = 18;
        }

        else if (s8 && s9 && s10) {
            startT = 14;
            endT = 17;
        }

        else if (s8 && s9) {
            startT = 14;
            endT = 16;
        }

        else if (s8) {
            startT = 14;
            endT = 15;
        }

        else if (s9 && s10 && s11) {
            startT = 15;
            endT = 18;
        }

        else if (s9 && s10) {
            startT = 15;
            endT = 17;
        }

        else if (s9) {
            startT = 15;
            endT = 16;
        }

        else if (s10 && s11) {
            startT = 16;
            endT = 18;
        }

        else if (s10) {
            startT = 16;
            endT = 17;
        }

        else if (s11) {
            startT = 17;
            endT = 18;
        }



        // time slot string


        if (startT == 7) {
            startTString = "07:00 AM";
        }

        if (endT == 8) {
            endTString = "08:00 AM";
        }

        if (startT == 8) {
            startTString = "08:00 AM";
        }

        if (endT == 9) {
            endTString = "09:00 AM";
        }

        if (startT == 9) {
            startTString = "09:00 AM";
        }

        if (endT == 10) {
            endTString = "10:00 AM";
        }

        if (startT == 10) {
            startTString = "10:00 AM";
        }

        if (endT == 11) {
            endTString = "11:00 AM";
        }

        if (startT == 11) {
            startTString = "11:00 AM";
        }

        if (endT == 12) {
            endTString = "12:00 PM";
        }

        if (startT == 12) {
            startTString = "12:00 PM";
        }

        if (endT == 13) {
            endTString = "1:00 PM";
        }

        if (startT == 13) {
            startTString = "1:00 PM";
        }

        if (endT == 14) {
            endTString = "2:00 PM";
        }

        if (startT == 14) {
            startTString = "2:00 PM";
        }

        if (endT == 15) {
            endTString = "3:00 PM";
        }

        if (startT == 15) {
            startTString = "3:00 PM";
        }

        if (endT == 16) {
            endTString = "4:00 PM";
        }

        if (startT == 16) {
            startTString = "4:00 PM";
        }

        if (endT == 17) {
            endTString = "5:00 PM";
        }

        if (startT == 17) {
            startTString = "5:00 PM";
        }

        if (endT == 18) {
            endTString = "6:00 PM";
        }

        let timeslotString = `${startTString} to ${endTString}`;

        document.getElementById("tabletime").innerText = timeslotString;

        let hour = sessionStorage.getItem('store-hour');
        let peak = sessionStorage.getItem('store-peak');

        let normal = hour - peak;

        let durationString = `${hour} hrs ( ${normal} Normal : ${peak} Peak )`;

        document.getElementById('tableduration').innerText = durationString;

    }

    // Initialiting the table values to 0

    let local1 = 0;
    let local2 = 0;
    let local3 = 0;
    let local4 = 0;
    

    sessionStorage.setItem('store-sla', local1);
    sessionStorage.setItem('store-slc', local2);
    sessionStorage.setItem('store-fra', local3);
    sessionStorage.setItem('store-frc', local4);
    


    //GUESTS

    /*SL Adult*/

    let info1 = 0;
    info1 = document.getElementById("display1").innerText;



    function addition1() {

        info1++;
        document.getElementById("display1").innerText = info1;

        document.getElementById("slAdult").style.display = "";

        let message = `${info1} SL Adult`;
        document.getElementById("slaTicket").innerText = message;

        document.getElementById('summdefault').style.display = "none";
        ///////////////////////////////////////////////////////////////////////////////////////
        let SelectedHour = sessionStorage.getItem("store-hour");
        let SelectedPeak = sessionStorage.getItem("store-peak");

        let normalHour = parseInt(SelectedHour) - parseInt(SelectedPeak);

        SlAdultCharge = info1 * ((4 * normalHour) + (6 * SelectedPeak));
        document.getElementById("slaCharge").innerText = `$${SlAdultCharge}`;

        sessionStorage.setItem("store-sla", SlAdultCharge);

        let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));

        document.getElementById('totalAmount').innerText = `$${Total}`;

        ////////////////////////////////////////////////////////////////////////////////////

    }

    function substraction1() {

        if (info1 == 0) {
            info1 = 0;
            document.getElementById("display1").innerText = info1;
            document.getElementById("slAdult").style.display = "none";
        }


        else {

            if (info1 > 1) {
                info1--;
                document.getElementById("display1").innerText = info1;
                document.getElementById("slaTicket").innerText = `${info1} SL Adult`;
                document.getElementById("slAdult").style.display = "";

                //////////////////////////////////////////////////////////////////////////////
                let SelectedHour = sessionStorage.getItem("store-hour");
                let SelectedPeak = sessionStorage.getItem("store-peak");

                let normalHour = parseInt(SelectedHour) - parseInt(SelectedPeak);

                let SlAdultCharge = info1 * ((4 * normalHour) + (6 * SelectedPeak));
                document.getElementById("slaCharge").innerText = `$${SlAdultCharge}`;

                sessionStorage.setItem("store-sla", SlAdultCharge);

                let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));

                document.getElementById('totalAmount').innerText = `$${Total}`;

                //////////////////////////////////////////////////////////////////////////////
            }

            else {
                info1--;
                document.getElementById("slAdult").style.display = "none";
                document.getElementById("display1").innerText = info1;
                document.getElementById("slaTicket").innerText = `${info1} SL Adult`;

                let SlAdultCharge = 0;
                sessionStorage.setItem("store-sla", SlAdultCharge);
                let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));
                document.getElementById('totalAmount').innerText = `$${Total}`;

            }





        }



    }

    /*SL child*/

    let info2 = 0;
    info2 = document.getElementById("display2").innerText;

    function addition2() {


        info2++;
        document.getElementById("display2").innerText = info2;

        document.getElementById("slChild").style.display = "";

        let message = `${info2} SL Child`;
        document.getElementById("slcTicket").innerText = message;

        document.getElementById('summdefault').style.display = "none";

        //////////////////////////////////////////////////////////////////////////////
        let SelectedHour = sessionStorage.getItem("store-hour");
        let SelectedPeak = sessionStorage.getItem("store-peak");

        let normalHour = parseInt(SelectedHour) - parseInt(SelectedPeak);

        let SlChildCharge = info2 * ((2 * normalHour) + (3 * SelectedPeak));
        document.getElementById("slcCharge").innerText = `$${SlChildCharge}`;

        sessionStorage.setItem("store-slc", SlChildCharge);

        let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));

        document.getElementById('totalAmount').innerText = `$${Total}`;

        //////////////////////////////////////////////////////////////////////////////



        /*let SlChildCharge = info2 *((normal hours*normal price + peak hours * ));
        document.getElementById("slcCharge").innerText = `$${SlChildCharge}`;*/

    }

    function substraction2() {

        if (info2 == 0) {
            info2 = 0;
            document.getElementById("display2").innerText = info2;
            document.getElementById("slChild").style.display = "none";



        }


        else {

            if (info2 > 1) {
                info2--;
                document.getElementById("display2").innerText = info2;
                document.getElementById("slcTicket").innerText = `${info2} SL Child`;
                document.getElementById("slChild").style.display = "";

                //////////////////////////////////////////////////////////////////////////////
                let SelectedHour = sessionStorage.getItem("store-hour");
                let SelectedPeak = sessionStorage.getItem("store-peak");

                let normalHour = parseInt(SelectedHour) - parseInt(SelectedPeak);

                let SlChildCharge = info2 * ((2 * normalHour) + (3 * SelectedPeak));
                document.getElementById("slcCharge").innerText = `$${SlChildCharge}`;

                sessionStorage.setItem("store-slc", SlChildCharge);

                let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));

                document.getElementById('totalAmount').innerText = `$${Total}`;

                //////////////////////////////////////////////////////////////////////////////
            }

            else {
                info2--;
                document.getElementById("display2").innerText = info2;
                document.getElementById("slaTicket").innerText = `${info2} SL Child`;
                document.getElementById("slChild").style.display = "none";

                let SlChildCharge = 0;
                sessionStorage.setItem("store-slc", SlChildCharge);
                let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));
                document.getElementById('totalAmount').innerText = `$${Total}`;


            }





        }

    }


    /*Foreign Adult*/

    let info3 = 0;
    info3 = document.getElementById("display3").innerText;

    function addition3() {

        info3++;
        document.getElementById("display3").innerText = info3;

        document.getElementById("frAdult").style.display = "";

        let message = `${info3} Foreign Adult`;
        document.getElementById("fraTicket").innerText = message;

        document.getElementById('summdefault').style.display = "none";


        //////////////////////////////////////////////////////////////////////////////
        let SelectedHour = sessionStorage.getItem("store-hour");
        let SelectedPeak = sessionStorage.getItem("store-peak");

        let normalHour = parseInt(SelectedHour) - parseInt(SelectedPeak);

        let FrAdultCharge = info3 * ((10 * normalHour) + (13 * SelectedPeak));
        document.getElementById("fraCharge").innerText = `$${FrAdultCharge}`;

        sessionStorage.setItem("store-fra", FrAdultCharge);

        let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));

        document.getElementById('totalAmount').innerText = `$${Total}`;

        //////////////////////////////////////////////////////////////////////////////


        /*let FrAdultCharge = info3 *((normal hours*normal price + peak hours * ));
        document.getElementById("fraCharge").innerText = `$${FrAdultCharge}`;*/

    }

    function substraction3() {

        if (info3 == 0) {
            info3 = 0;
            document.getElementById("display3").innerText = info3;
            document.getElementById("frAdult").style.display = "none";



        }


        else {

            if (info3 > 1) {
                info3--;
                document.getElementById("display3").innerText = info3;
                document.getElementById("fraTicket").innerText = `${info3} Foreign Adult`;
                document.getElementById("frAdult").style.display = "";

                //////////////////////////////////////////////////////////////////////////////
                let SelectedHour = sessionStorage.getItem("store-hour");
                let SelectedPeak = sessionStorage.getItem("store-peak");

                let normalHour = parseInt(SelectedHour) - parseInt(SelectedPeak);

                let FrAdultCharge = info3 * ((10 * normalHour) + (13 * SelectedPeak));
                document.getElementById("fraCharge").innerText = `$${FrAdultCharge}`;

                sessionStorage.setItem("store-fra", FrAdultCharge);

                let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));

                document.getElementById('totalAmount').innerText = `$${Total}`;


                //////////////////////////////////////////////////////////////////////////////
            }

            else {
                info3--;
                document.getElementById("display3").innerText = info2;
                document.getElementById("fraTicket").innerText = `${info3} Foreign Adult`;
                document.getElementById("frAdult").style.display = "none";

                let FrAdultCharge = 0;
                sessionStorage.setItem("store-fra", FrAdultCharge);
                let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));
                document.getElementById('totalAmount').innerText = `$${Total}`;
            }

        }

    }

    /*Foreign Child*/

    let info4 = 0;
    info4 = document.getElementById("display4").innerText;

    function addition4() {

        info4++;
        document.getElementById("display4").innerText = info4;

        document.getElementById("frChild").style.display = "";

        let message = `${info4} Foreign Child`;
        document.getElementById("frcTicket").innerText = message;

        document.getElementById('summdefault').style.display = "none";

        //////////////////////////////////////////////////////////////////////////////
        let SelectedHour = sessionStorage.getItem("store-hour");
        let SelectedPeak = sessionStorage.getItem("store-peak");

        let normalHour = parseInt(SelectedHour) - parseInt(SelectedPeak);

        let FrChildCharge = info4 * ((5 * normalHour) + (8 * SelectedPeak));
        document.getElementById("frcCharge").innerText = `$${FrChildCharge}`;

        sessionStorage.setItem("store-frc", FrChildCharge);

        let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));

        document.getElementById('totalAmount').innerText = `$${Total}`;

        //////////////////////////////////////////////////////////////////////////////


        /*let FrChildCharge = info4 *((normal hours*normal price + peak hours * peak price));
        document.getElementById("frcCharge").innerText = `$${FrChildCharge}`;*/

    }

    function substraction4() {

        if (info4 == 0) {
            info4 = 0;
            document.getElementById("display4").innerText = info4;
            document.getElementById("frChild").style.display = "none";



        }


        else {

            if (info4 > 1) {
                info4--;
                document.getElementById("display4").innerText = info4;
                document.getElementById("frcTicket").innerText = `${info4} Foreign Child`;
                document.getElementById("frChild").style.display = "";

                //////////////////////////////////////////////////////////////////////////////
                let SelectedHour = sessionStorage.getItem("store-hour");
                let SelectedPeak = sessionStorage.getItem("store-peak");

                let normalHour = parseInt(SelectedHour) - parseInt(SelectedPeak);

                let FrChildCharge = info4 * ((5 * normalHour) + (8 * SelectedPeak));
                document.getElementById("frcCharge").innerText = `$${FrChildCharge}`;

                sessionStorage.setItem("store-frc", FrChildCharge);

                let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));

                document.getElementById('totalAmount').innerText = `$${Total}`;

                //////////////////////////////////////////////////////////////////////////////
            }

            else {
                info4--;
                document.getElementById("display4").innerText = info4;
                document.getElementById("frcTicket").innerText = `${info4} Foreign Child`;
                document.getElementById("frChild").style.display = "none";

                let FrAdultCharge = 0;
                sessionStorage.setItem("store-frc", FrAdultCharge);
                let Total = (parseInt(sessionStorage.getItem("store-sla")) + parseInt(sessionStorage.getItem("store-slc")) + parseInt(sessionStorage.getItem("store-fra")) + parseInt(sessionStorage.getItem("store-frc")));
                document.getElementById('totalAmount').innerText = `$${Total}`;
            }





        }

    }


    /*Infant*/

    let info5 = 0;
    info5 = document.getElementById("display5").innerText;

    function addition5() {

        info5++;
        document.getElementById("display5").innerText = info5;
        document.getElementById("islfrTicket").innerText = `${info5} Infants`;

        document.getElementById("infantSlFr").style.display = "";

        document.getElementById('summdefault').style.display = "none";

        document.getElementById("islfrCharge").innerText = "FREE";


    }

    function substraction5() {

        if (info5 == 0) {
            info5 = 0;

        }

        else {

            if (info5 > 1) {
                info5--;
                document.getElementById("display5").innerText = info5;
                document.getElementById("islfrTicket").innerText = `${info5} Infants`;
                document.getElementById("infantSlFr").style.display = "";
                document.getElementById("islfrCharge").innerText = "FREE";

            }

            else {
                info5--;
                document.getElementById("display5").innerText = info5;
                document.getElementById("islfrTicket").innerText = `${info5} Infants`;
                document.getElementById("infantSlFr").style.display = "none";


            }
        }

        document.getElementById("display5").innerText = info5;

    }


    function ticketsbtn() {

        sessionStorage.setItem("store-display1", document.getElementById("display1").innerText);
        sessionStorage.setItem("store-display2", document.getElementById("display2").innerText);
        sessionStorage.setItem("store-display3", document.getElementById("display3").innerText);
        sessionStorage.setItem("store-display4", document.getElementById("display4").innerText);
        sessionStorage.setItem("store-display5", document.getElementById("display5").innerText);


        sessionStorage.setItem("store-tabledate", document.getElementById("tabledate").innerText);
        sessionStorage.setItem("store-tabletime", document.getElementById("tabletime").innerText);
        sessionStorage.setItem("store-tableduration", document.getElementById("tableduration").innerText);

        sessionStorage.setItem("store-slaTicket", document.getElementById("slaTicket").innerText);
        sessionStorage.setItem("store-slaCharge", document.getElementById("slaCharge").innerText);

        sessionStorage.setItem("store-slcTicket", document.getElementById("slcTicket").innerText);
        sessionStorage.setItem("store-slcCharge", document.getElementById("slcCharge").innerText);

        sessionStorage.setItem("store-fraTicket", document.getElementById("fraTicket").innerText);
        sessionStorage.setItem("store-fraCharge", document.getElementById("fraCharge").innerText);

        sessionStorage.setItem("store-frcTicket", document.getElementById("frcTicket").innerText);
        sessionStorage.setItem("store-frcCharge", document.getElementById("frcCharge").innerText);

        sessionStorage.setItem("store-islfrTicket", document.getElementById("islfrTicket").innerText);
        sessionStorage.setItem("store-islfrCharge", document.getElementById("islfrCharge").innerText);

        sessionStorage.setItem("store-totalAmount", document.getElementById("totalAmount").innerText);

        window.location.href = "http://127.0.0.1:5500/TurtleBliss/details.html";

    }

}


if (window.location.href == "http://127.0.0.1:5500/TurtleBliss/details.html") {




    document.getElementById("tabledate").innerText = sessionStorage.getItem('store-tabledate');
    document.getElementById("tabletime").innerText = sessionStorage.getItem('store-tabletime');
    document.getElementById("tableduration").innerText = sessionStorage.getItem('store-tableduration');

    document.getElementById("slaTicket").innerText = sessionStorage.getItem('store-slaTicket');
    document.getElementById("slaCharge").innerText = sessionStorage.getItem('store-slaCharge');
    if (sessionStorage.getItem('store-display1') != "0") {
        document.getElementById("slAdult").style.display = "";
    }

    document.getElementById("slcTicket").innerText = sessionStorage.getItem('store-slcTicket');
    document.getElementById("slcCharge").innerText = sessionStorage.getItem('store-slcCharge');
    if (sessionStorage.getItem('store-display2') != "0") {
        document.getElementById("slChild").style.display = "";
    }

    document.getElementById("fraTicket").innerText = sessionStorage.getItem('store-fraTicket');
    document.getElementById("fraCharge").innerText = sessionStorage.getItem('store-fraCharge');
    if (sessionStorage.getItem('store-display3') != "0") {
        document.getElementById("frAdult").style.display = "";
    }

    document.getElementById("frcTicket").innerText = sessionStorage.getItem('store-frcTicket');
    document.getElementById("frcCharge").innerText = sessionStorage.getItem('store-frcCharge');
    if (sessionStorage.getItem('store-display4') != "0") {
        document.getElementById("frChild").style.display = "";
    }

    document.getElementById("islfrTicket").innerText = sessionStorage.getItem('store-islfrTicket');
    document.getElementById("islfrCharge").innerText = sessionStorage.getItem('store-islfrCharge');
    if (sessionStorage.getItem('store-display5') != "0") {
        document.getElementById("infantSlFr").style.display = "";
    }

    document.getElementById("totalAmount").innerText = sessionStorage.getItem('store-totalAmount');




    const form1 = document.getElementById("Form1")
    const fullname = document.getElementById("FullName");
    const mobilenumber = document.getElementById("MobileNumber");
    const email = document.getElementById("Email");
    const confirmemail = document.getElementById("ConfirmEmail");
    

    form1.addEventListener("submit", (e) => {
        e.preventDefault();

        checkInputValues();
    });

    

    function checkInputValues() {
        const fullnameValue = fullname.value.trim();
        const mobilenumberValue = mobilenumber.value.trim();
        const emailValue = email.value.trim();
        const confirmemailValue = confirmemail.value.trim();
      

        if (fullnameValue === "") {

            setErrorFor(fullname, "*This is a required field");


        }

        else {
            setSuccessFor(fullname);
        }

        if (mobilenumberValue === "") {

            setErrorFor(mobilenumber, "*This is a required field");
 
        }

        
        else {
            setSuccessFor(mobilenumber);
        }

        

        if (emailValue === "") {

            setErrorFor(email, "*This is a required field")
        }

        else if (emailValue != confirmemailValue) {
            setErrorFor(email, "*Emails don't match")
        }



        else {
            setSuccessFor(email);
        }


        if (confirmemailValue === "") {

            setErrorFor(confirmemail, "*This is a required field")
        }

        else if (confirmemailValue != emailValue) {
            setErrorFor(confirmemail, "*Emails don't match")
        }

        else {
            setSuccessFor(confirmemail);
        }



    }

    function setErrorFor(input, errormessage) {
        const Valid = input.parentElement;
        const Small = Valid.querySelector("small");

        Small.innerText = errormessage;
        Valid.className = "valid error";
    }


    function setSuccessFor(input) {
        const Valid = input.parentElement;
        Valid.className = "valid success";
    }




    function genderSelection(genderTag) {
        let genderSelection = genderTag.options[genderTag.selectedIndex].text;
        sessionStorage.setItem("store-gender", genderSelection);
        document.getElementById("tablegender").innerText = sessionStorage.getItem("store-gender");

    }


    function detailssubmitbtn() {

        let name = "";
        let mobile = "";
        let email = "";
        let gender = "";

        sessionStorage.setItem("store-fullname", name);
        sessionStorage.setItem("store-mobile", mobile);
        sessionStorage.setItem("store-email", email);
        sessionStorage.setItem("store-gender", gender);

        sessionStorage.setItem("store-fullname", document.getElementById("FullName").value);
        sessionStorage.setItem("store-mobile", document.getElementById("MobileNumber").value);
        sessionStorage.setItem("store-email", document.getElementById("Email").value);

        document.getElementById("tablename").innerText = sessionStorage.getItem("store-fullname");

        document.getElementById("tablemobile").innerText = sessionStorage.getItem("store-mobile");
        document.getElementById("tableemail").innerText = sessionStorage.getItem("store-email");

        sessionStorage.setItem("store-tablegender",document.getElementById("tablegender").innerText);


    }

    function detailsbtn() {
        window.location.href = "http://127.0.0.1:5500/TurtleBliss/payment.html";
    }


}

if (window.location.href == "http://127.0.0.1:5500/TurtleBliss/payment.html") {

    const form2 = document.getElementById("Form2")
    const cardnumber = document.getElementById("cardnum");
    const expirydate = document.getElementById("Expiry");
    const cvv = document.getElementById("cvc/cvv");
    const nameoncard = document.getElementById("nameonC");

    form2.addEventListener("submit", (e) => {
        e.preventDefault();

        displayInputValues();
    });

    function displayInputValues() {
        const cardnumberValue = cardnumber.value.trim();
        const expirydateValue = expirydate.value.trim();
        const cvvValue = cvv.value.trim();
        const nameoncardValue = nameoncard.value.trim();



        if (cardnumberValue === "") {

            setErrorFor(cardnumber, "*This is a required field")

        }

        else {
            setSuccessFor(cardnumber);
        }

        if (expirydateValue === "") {

            setErrorFor(expirydate, "*This is a required field")

        }

        else {
            setSuccessFor(expirydate);
        }

        if (cvvValue === "") {

            setErrorFor(cvv, "*This is a required field")

        }

        else {
            setSuccessFor(cvv);
        }


        if (nameoncardValue === "") {

            setErrorFor(nameoncard, "*This is a required field")

        }

        else {
            setSuccessFor(nameoncard);
        }



    }

    function setErrorFor(input, errormessage) {
        const LGroup = input.parentElement;
        const Small = LGroup.querySelector("small");

        Small.innerText = errormessage;
        LGroup.className = "lgroup error";
    }

    function setSuccessFor(input) {
        const LGroup = input.parentElement;
        LGroup.className = "lgroup success";
    }

    document.getElementById("tabledate").innerText = sessionStorage.getItem('store-tabledate');
    document.getElementById("tabletime").innerText = sessionStorage.getItem('store-tabletime');
    document.getElementById("tableduration").innerText = sessionStorage.getItem('store-tableduration');

    document.getElementById("tablegender").innerText = sessionStorage.getItem('store-tablegender');


    document.getElementById("tablename").innerText = sessionStorage.getItem("store-fullname");
    document.getElementById("tablemobile").innerText = sessionStorage.getItem("store-mobile");
    document.getElementById("tableemail").innerText = sessionStorage.getItem("store-email");


    document.getElementById("slaTicket").innerText = sessionStorage.getItem('store-slaTicket');
    document.getElementById("slaCharge").innerText = sessionStorage.getItem('store-slaCharge');
    if (sessionStorage.getItem('store-display1') != "0") {
        document.getElementById("slAdult").style.display = "";
    }

    document.getElementById("slcTicket").innerText = sessionStorage.getItem('store-slcTicket');
    document.getElementById("slcCharge").innerText = sessionStorage.getItem('store-slcCharge');
    if (sessionStorage.getItem('store-display2') != "0") {
        document.getElementById("slChild").style.display = "";
    }

    document.getElementById("fraTicket").innerText = sessionStorage.getItem('store-fraTicket');
    document.getElementById("fraCharge").innerText = sessionStorage.getItem('store-fraCharge');
    if (sessionStorage.getItem('store-display3') != "0") {
        document.getElementById("frAdult").style.display = "";
    }

    document.getElementById("frcTicket").innerText = sessionStorage.getItem('store-frcTicket');
    document.getElementById("frcCharge").innerText = sessionStorage.getItem('store-frcCharge');
    if (sessionStorage.getItem('store-display4') != "0") {
        document.getElementById("frChild").style.display = "";
    }

    document.getElementById("islfrTicket").innerText = sessionStorage.getItem('store-islfrTicket');
    document.getElementById("islfrCharge").innerText = sessionStorage.getItem('store-islfrCharge');
    if (sessionStorage.getItem('store-display5') != "0") {
        document.getElementById("infantSlFr").style.display = "";
    }

    document.getElementById("totalAmount").innerText = sessionStorage.getItem('store-totalAmount');

    let Total = document.getElementById("totalAmount").innerText;
    document.getElementById("fpsubmit").innerText = `Pay ${Total}`;

    function paybtn() {
        window.location.href = "http://127.0.0.1:5500/TurtleBliss/confirmation.html";
    }
}

if(window.location.href == "http://127.0.0.1:5500/TurtleBliss/confirmation.html"){

    document.getElementById("tabledate").innerText = sessionStorage.getItem('store-tabledate');
    document.getElementById("tabletime").innerText = sessionStorage.getItem('store-tabletime');
    document.getElementById("tableduration").innerText = sessionStorage.getItem('store-tableduration');

    document.getElementById("tablegender").innerText = sessionStorage.getItem('store-tablegender');


    document.getElementById("tablename").innerText = sessionStorage.getItem("store-fullname");
    document.getElementById("tablemobile").innerText = sessionStorage.getItem("store-mobile");
    document.getElementById("tableemail").innerText = sessionStorage.getItem("store-email");


    document.getElementById("slaTicket").innerText = sessionStorage.getItem('store-slaTicket');
    document.getElementById("slaCharge").innerText = sessionStorage.getItem('store-slaCharge');
    if (sessionStorage.getItem('store-display1') != "0") {
        document.getElementById("slAdult").style.display = "";
    }

    document.getElementById("slcTicket").innerText = sessionStorage.getItem('store-slcTicket');
    document.getElementById("slcCharge").innerText = sessionStorage.getItem('store-slcCharge');
    if (sessionStorage.getItem('store-display2') != "0") {
        document.getElementById("slChild").style.display = "";
    }

    document.getElementById("fraTicket").innerText = sessionStorage.getItem('store-fraTicket');
    document.getElementById("fraCharge").innerText = sessionStorage.getItem('store-fraCharge');
    if (sessionStorage.getItem('store-display3') != "0") {
        document.getElementById("frAdult").style.display = "";
    }

    document.getElementById("frcTicket").innerText = sessionStorage.getItem('store-frcTicket');
    document.getElementById("frcCharge").innerText = sessionStorage.getItem('store-frcCharge');
    if (sessionStorage.getItem('store-display4') != "0") {
        document.getElementById("frChild").style.display = "";
    }

    document.getElementById("islfrTicket").innerText = sessionStorage.getItem('store-islfrTicket');
    document.getElementById("islfrCharge").innerText = sessionStorage.getItem('store-islfrCharge');
    if (sessionStorage.getItem('store-display5') != "0") {
        document.getElementById("infantSlFr").style.display = "";
    }

    document.getElementById("totalAmount").innerText = sessionStorage.getItem('store-totalAmount');
    
}
