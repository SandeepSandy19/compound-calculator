let enterAmountInputElement = document.getElementById("enterAmountInput");
let interestRateInputElement = document.getElementById("interestRateInput");
let enterStartDateInputElement = document.getElementById("enterStartDateInput");
let enterEndDateInputElement = document.getElementById("enterEndDateInput");
let totalDaysElement = document.getElementById("totalDays");
let interesAmountElement = document.getElementById("interesAmount");
let totaAmountElement = document.getElementById("totaAmount")


function applyFunc() {

    function total_amount_value(duration_year, princ_amount, rate_in_rupee, duration_year_days, duration_month_and_day_days) {

        let princ_amount_and_interest = princ_amount;

        for (let i = 0; i < duration_year; i++) {
            let interest_year = (princ_amount_and_interest) * (360) * (1 / 30) * (rate_in_rupee / 100);
            princ_amount_and_interest = princ_amount_and_interest + interest_year;
        }

        let interest_mon_and_day = (princ_amount_and_interest) * (duration_month_and_day_days) * (1 / 30) * (rate_in_rupee / 100);

        let total_amount1 = princ_amount_and_interest + interest_mon_and_day;

        return total_amount1;

    }

    let enterAmountInputvalue = parseInt(enterAmountInputElement.value);
    let interestRateInputvalue = parseFloat(interestRateInputElement.value);
    let enterStartDateInputvalue = enterStartDateInputElement.value;
    let enterEndDateInputvalue = enterEndDateInputElement.value;

    let start_day = parseInt(enterStartDateInputvalue.slice(8, ));
    let start_month = parseInt(enterStartDateInputvalue.slice(5, 7));
    let start_year = parseInt(enterStartDateInputvalue.slice(0, 4));
    let end_day = parseInt(enterEndDateInputvalue.slice(8, ));
    let end_month = parseInt(enterEndDateInputvalue.slice(5, 7));
    let end_year = parseInt(enterEndDateInputvalue.slice(0, 4));

    let dur_year = end_year - start_year;
    let dur_month = end_month - start_month;
    let dur_day = end_day - start_day;

    let duration_year = dur_year;
    let duration_month = dur_month;
    let duration_day = dur_day;

    if (dur_year >= 0) {
        duration_year = dur_year;
    } else {
        duration_year = 0;
    }

    if (dur_month >= 0) {
        duration_month = dur_month;
    } else if (dur_month < 0) {
        duration_month = 12 + duration_month;
        duration_year = duration_year - 1;
    } else {
        duration_month = 0;
    }

    if (dur_day >= 0) {
        duration_day = dur_day;
    } else if (dur_day < 0) {
        duration_day = 30 + duration_day;
        duration_month = duration_month - 1;
    } else {
        duration_day = 0;
    }

    let duration_year_days = duration_year * 360;
    let duration_month_days = duration_month * 30;
    let duration_day_days = duration_day;
    let duration_month_and_day_days = duration_month_days + duration_day_days;

    let total_days = duration_year_days + duration_month_and_day_days;

    let total_amount = total_amount_value(duration_year, enterAmountInputvalue, interestRateInputvalue, duration_year_days, duration_month_and_day_days);

    let interestAmount = (total_amount - enterAmountInputvalue).toFixed(2);


    totalDaysElement.textContent = total_days;
    interesAmountElement.textContent = interestAmount;
    totaAmountElement.textContent = total_amount.toFixed(2);
}

let enterAmountInputElement1 = document.getElementById("enterAmountInput1");
let interestRateInputElement1 = document.getElementById("interestRateInput1");
let enterStartDateInputElement1 = document.getElementById("enterStartDateInput1");
let enterEndDateInputElement1 = document.getElementById("enterEndDateInput1");
let totalDaysElement1 = document.getElementById("totalDays1");
let interesAmountElement1 = document.getElementById("interesAmount1");
let totaAmountElement1 = document.getElementById("totaAmount1")


function applyFunc1() {

    let enterAmountInputvalue1 = parseInt(enterAmountInputElement1.value);
    let interestRateInputvalue1 = parseFloat(interestRateInputElement1.value);
    let enterStartDateInputvalue1 = enterStartDateInputElement1.value;
    let enterEndDateInputvalue1 = enterEndDateInputElement1.value;

    let start_day1 = parseInt(enterStartDateInputvalue1.slice(8, ));
    let start_month1 = parseInt(enterStartDateInputvalue1.slice(5, 7));
    let start_year1 = parseInt(enterStartDateInputvalue1.slice(0, 4));
    let end_day1 = parseInt(enterEndDateInputvalue1.slice(8, ));
    let end_month1 = parseInt(enterEndDateInputvalue1.slice(5, 7));
    let end_year1 = parseInt(enterEndDateInputvalue1.slice(0, 4));

    let dur_year1 = end_year1 - start_year1;
    let dur_month1 = end_month1 - start_month1;
    let dur_day1 = end_day1 - start_day1;

    let duration_year1 = dur_year1;
    let duration_month1 = dur_month1;
    let duration_day1 = dur_day1;

    if (dur_year1 >= 0) {
        duration_year1 = dur_year1;
    } else {
        duration_year1 = 0;
    }

    if (dur_month1 >= 0) {
        duration_month1 = dur_month1;
    } else if (dur_month1 < 0) {
        duration_month1 = 12 + duration_month1;
        duration_year1 = duration_year1 - 1;
    } else {
        duration_month1 = 0;
    }

    if (dur_day1 >= 0) {
        duration_day1 = dur_day1;
    } else if (dur_day1 < 0) {
        duration_day1 = 30 + duration_day1;
        duration_month1 = duration_month1 - 1;
    } else {
        duration_day1 = 0;
    }

    let duration_year_days1 = duration_year1 * 360;
    let duration_month_days1 = duration_month1 * 30;
    let duration_day_days1 = duration_day1;
    let duration_month_and_day_days1 = duration_month_days1 + duration_day_days1;

    let total_days1 = duration_year_days1 + duration_month_and_day_days1;


    let interes_amount1 = (enterAmountInputvalue1) * (total_days1) * (1 / 30) * (interestRateInputvalue1 / 100);
    let interest_amount1 = parseFloat(interes_amount1.toFixed(2));
    let total_amount1 = (enterAmountInputvalue1 + interest_amount1);


    totalDaysElement1.textContent = total_days1;
    interesAmountElement1.textContent = interest_amount1;
    totaAmountElement1.textContent = total_amount1;
}
