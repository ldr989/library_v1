import $ from "./lib/lib";

$("#first").on("click", () => {
    $("div").eq(1).fadeToggle(800);
});

$("[data-count='second']").on("click", () => {
    $("div").eq(2).fadeToggle(800);
});

$("button")
    .eq(2)
    .on("click", () => {
        $(".w-500").fadeToggle(800);
    });

$("#trigger").click(() =>
    $("#trigger").createModal({
        text: {
            title: "Modal title",
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam aliquid, assumenda expedita dignissimos consequatur voluptatibus tempora, corrupti esse nesciunt dolorum sint, consequuntur quisquam praesentium fuga. Neque corrupti harum numquam.",
        },
        btns: {
            count: 2,
            settings: [
                ["Close", ["btn-danger", "mr-10"], true],
                [
                    "Save changes",
                    ["btn-success"],
                    false,
                    () => {
                        alert("Данные сохранны");
                    },
                ],
            ],
        },
    })
);

$()
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(res));
