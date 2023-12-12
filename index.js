document.addEventListener("DOMContentLoaded", function () {
    function calculateSum(event) {
        event.preventDefault();
        var num1 = parseFloat(document.getElementById("num1").value) || 0;
        var num2 = parseFloat(document.getElementById("num2").value) || 0;
        var sum = num1 + num2;
        document.getElementById("sumresult").value = sum;
    }

  
    var sumButton = document.getElementById("submit");

    if (sumButton) {
        sumButton.addEventListener("click", calculateSum);
    }
});
