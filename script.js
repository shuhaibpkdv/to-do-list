$(document).ready(function () {
    $("#addTask").click(function () {

        let inpValue = $("#inpValue").val().trim();

        if (inpValue !== "") {
            taskItem = `
               <li class="list-group-item d-flex justify-content-between align-items-center">
                  ${inpValue}
                  <button class="btn btn-danger btn-sm deleteTask">Delete</button>
               </li>
            `;

            $(".tasklist").append(taskItem);

            $("#inpValue").val("");

        }else {
            alert("Enter a Task");
        }

    })

    $(document).on("click", ".deleteTask", function() {
        $(this).closest("li").remove(); // Remove the parent <li> of the clicked button
    });
    
})