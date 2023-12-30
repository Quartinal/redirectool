var input = document.querySelector("input");
input.onkeydown = function (e) {
  if (e.key === "Enter") submit();
};
document.querySelector("a").onclick = submit;
function submit() {
  if (input.value.indexOf(".") < 0) {
    throw error();
  } else if (input.value.indexOf("://") < 0) {
    input.value = "https://" + input.value;
  }
  location.href = input.value;
  input.onkeydown = null;
  document.querySelector("a").onclick = null;
}
function error(reason) {
  document.querySelector("legend").textContent =
    "RedirecTool - Not a valid URL, please try again:";
}