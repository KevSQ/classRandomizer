$(document).ready(function() {
    
    var students = ["Isha", "Kevin", "Dad", "Jasmine", "Thamid"]
    var teachers = ["zdhzfhgd", "Chen", "Terrero", "Quint", "Cummings", "Ziegelstein"]
    var lastT = "";
    var lastS = "";
    
    $("#studentButton").click(function() {
        var x = Math.floor(Math.random() * students.length);
        console.log(x);
        while (students[x] == lastS) {
            console.log("reroll!");
            x = Math.floor(Math.random() * students.length);
        }
        lastS = students[x];
        $("#studentDisplay").html(students[x]);
        
    });
    $("#teacherButton").click(function() {
        var y = Math.floor(Math.random() * teachers.length);
        console.log(y);
        while (teachers[y] == lastT) {
            console.log("reroll!");
            y = Math.floor(Math.random() * teachers.length);
        }
        lastT = teachers[y];
        $("#teacherDisplay").html(teachers[y]);
    });
    
});
