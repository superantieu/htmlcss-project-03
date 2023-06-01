const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const next = $(".control__btn.next");
const prev = $(".control__btn.previous");

next.onclick = function () {
    let members = $(".member__list");
    let lists = $$(".member-item");
    members.appendChild(lists[0]);
};
prev.onclick = function () {
    let members = $(".member__list");
    let lists = $$(".member-item");
    members.prepend(lists[lists.length - 1]);
};
