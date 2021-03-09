function calculateTaxFn() {

    var monthlySalary = document.getElementById("monthSalary").value;

    var myAnnualSalary = monthlySalary * 12;

    var maritalStatus = document.querySelector("input[name='singleOrMarried']:checked").value;

    var annualTaxableAmount = 0;

    if (maritalStatus == "Married") {
        if (myAnnualSalary >= 2000000) {
            annualTaxableAmount = (myAnnualSalary - 2000000) * .36 + 4500 + (2000000 - 750000) * .30 + (750000 * 550000) * .20 + (550000 - 450000) * .10;
        }
        else if (myAnnualSalary > 750000) {
            annualTaxableAmount = (myAnnualSalary - 750000) * .30 + 4500 + (750000 - 550000) * .20 + (550000 - 450000) * .10;
        }
        else if (myAnnualSalary > 550000) {
            annualTaxableAmount = (myAnnualSalary - 550000) * .20 + 4500 + (550000 - 450000) * .10;
        }
        else if (myAnnualSalary > 450000) {
            annualTaxableAmount = (myAnnualSalary - 450000) * .10 + 4500;  //4500 is 1% of 4,50,000 yearly tax slab for married people
        }
        else {
            annualTaxableAmount = myAnnualSalary * .01;
        }
    }


    if (maritalStatus == "Single") {
        if (myAnnualSalary >= 2000000) {
            annualTaxableAmount = (myAnnualSalary - 2000000) * .36 + 4000 + (2000000 - 700000) * .30 + (700000 * 500000) * .20 + (500000 - 400000) * .10;
        }
        else if (myAnnualSalary > 700000) {
            annualTaxableAmount = (myAnnualSalary - 700000) * .30 + 4000 + (700000 - 500000) * .20 + (500000 - 400000) * .10;
        }
        else if (myAnnualSalary > 500000) {
            annualTaxableAmount = (myAnnualSalary - 500000) * .20 + 4000 + (500000 - 400000) * .10;
        }
        else if (myAnnualSalary > 400000) {
            annualTaxableAmount = (myAnnualSalary - 400000) * .10 + 4000;  //4000 is 1% of 4,00,000 yearly tax slab for single  
        }
        else
            annualTaxableAmount = myAnnualSalary * .01;
    }

    document.getElementById("annualTaxableAmount").innerHTML = annualTaxableAmount.toFixed(2);

    var monthlyTax = document.getElementById("monthlyTaxableAmount").innerHTML = annualTaxableAmount / 12;

    document.getElementById("monthlyTaxableAmount").innerHTML = (annualTaxableAmount / 12).toFixed(2);

}

