$(document).ready(function(){   //make a function available after the document is loaded
    $("#buildStudentsList").click(function(){
        $.getJSON("data/students.json", function(data){
            $("#studentsTable").append("<thead>"+"<tr>"+"<th>"+"Name"+"</th>"+"<th>"+"math grades"+"</th>"+"<th>"+"english grades"+"</th>"+"<th>"+"chemistry grades"+"</th>"+"<th>"+"physics grades"+"</th>"+"</tr>"+"</thead>");
            console.log(data);
                $.each(data.result, function(i,students){
                    $("#studentsTable").append("<tbody>"+"<tr>"+"<td>"+students.name+"</td>"+"<td>"+students.marks.math+"</td>"+"<td>"+students.marks.english+"</td>"+"<td>"+students.marks.chemistry+"</td>"+"<td>"+students.marks.physics+"</td>"+"</tr>"+"</tbody>");
                });
    });

    });
});