$(function() {

    $.ajax({
        url: "data/data.json",
        dataType: "json",
        success: function(res) {
            var str = "";
            res.list.forEach(function(item) {
                str += `<li>
                <div class="box">
                    <div class="top">
                        <div class="lef">
                            <input type="checkbox">
                            <h3>${item.title}</h3>
                        </div>
                        <b>${item.day}</b>
                    </div>
                    <div class="bot">
                        <p>
                            <span>${item.name}</span>
                            <span>${item.cont}</span>
                        </p>
                        <p>
                            <span>${item.name}</span>
                            <span>${item.cont}</span>
                        </p>
                    </div>
                </div>
            </li>`
                $("li").on("click", function() {
                    $(this).find(".box").addClass("active").parent("li").siblings().find(".box").removeClass("active");
                    $(this).find("input").attr("checked");
                });
                console.log($("li"))
            });
            $(".list").html(str)
        }
    })
})