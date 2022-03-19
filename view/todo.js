$("#add").on("click", function () {
  const name = $("#name").val();
  const deadline = $("#deadline").val();
  const status = $("#status").val();

  $.ajax({
    type: "POST",
    url: "/todo",
    data: {
      status: status,
      name: name,
      deadline: deadline,
    },
  })
    .then(function (data) {
      console.log(data);
      render();
      $("#closeModal").trigger("click");
    })
    .catch(function (err) {
      console.log(err);
    });
});

$("#addd").on("click", function () {
  console.log("abc");
  const newname = $("#newname").val();
  const newdeadline = $("#newdeadline").val();
  const newstatus = $("#newstatus").val();
  console.log(newname, newdeadline, newstatus);
});

render();
function render() {
  $.ajax({
    url: "/todo",
    type: "GET",
  })
    .then(function (data) {
      $(".todo").html("");
      $(".doing").html("");
      $(".done").html("");

      for (let i = 0; i < data.length; i++) {
        let div = `
                  <tr>
                      <td>${data[i].name}</td>
                      <td>${data[i].deadline}</td>
                      <td>
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${data[i]._id}">
                        Change
                      </button>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="staticBackdrop${data[i]._id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <input type="text" id="newname${data[i]._id}"  placeholder="newname" />
                            <input type="date" id="newdeadline${data[i]._id}" placeholder="newdeadline" />
                            <select name="" id="newstatus${data[i]._id}">
                              <option value="todo">Todo</option>
                              <option value="doing">Doing</option>
                              <option value="done">Done</option>
                            </select>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeModall" >Close</button>
                              <button type="button" class="btn btn-primary" id="change${data[i]._id}" data-id="${data[i]._id}">Change</button>
                            </div>
                          </div>
                        </div>
                      </div>
                          <button id='delete${data[i]._id}' data-id="${data[i]._id}">Delete</button>

                      </td>
                  </tr>
         `;
        $(`.${data[i].status}`).append(div);
        $(`#change${data[i]._id}`).on("click", function () {
          const id = $(this).attr("data-id");
          const newname = $(`#newname${data[i]._id}`).val();
          const newdeadline = $(`#newdeadline${data[i]._id}`).val();
          const newstatus = $(`#newstatus${data[i]._id}`).val();
          $.ajax({
            type: "PUT",
            url: "/todo",
            data: {
              id: id,
              newstatus: newstatus,
              newname: newname,
              newdeadline: newdeadline,no
            },
          })
            .then(function (data) {
              render();
              $("#closeModall").trigger("click");
              location.reload();
            })
            .catch(function (err) {
              console.log(err);
            });
        });
        $(`#delete${data[i]._id}`).on("click", function () {
          const id = $(this).attr("data-id");
          $.ajax({
            type: "DELETE",
            url: "/todo",
            data: {
              id: id,
            },
          })
            .then(function (data) {
              console.log(data);
              render();
            })
            .catch(function (err) {
              console.log(err);
            });
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
