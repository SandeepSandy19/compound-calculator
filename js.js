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