$(document).ready(function(){   //make a function available after the document is loaded
    $("#buildStudentsList").click(function(){
        $.getJSON("data/students.json", function(data){
            $("#studentsTable").append("<tr>"+"<td>"+"Name"+"</td>"+"<td>"+"math marks"+"</td>"+"<td>"+"english marks"+"</td>"+"<td>"+"chemistry marks"+"</td>"+"<td>"+"physics marks"+"</td>"+"</tr>");
            console.log(data);
                $.each(data.result, function(i,students){
                    $("#studentsTable").append("<tr>"+"<td>"+students.name+"</td>"+"<td>"+students.marks.math+"</td>"+"<td>"+students.marks.english+"</td>"+"<td>"+students.marks.chemistry+"</td>"+"<td>"+students.marks.physics+"</td>"+"</tr>");
                });
    });

    });
});