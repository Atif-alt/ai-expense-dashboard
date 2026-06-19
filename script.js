let total = 0;
let approved = 0;
let pending = 0;

function submitExpense() {

    const amount =
        parseFloat(document.getElementById("amount").value);

    const category =
        document.getElementById("category").value;

    const description =
        document.getElementById("description").value;

    if (!amount || !category || !description) {
        alert("Please fill all fields");
        return;
    }

    total++;

    let result = "";

    if (amount < 100) {

        approved++;

        result =
            `✅ Auto Approved

Category: ${category}
Amount: $${amount}

Reason:
Expense is below the $100 threshold.`;

    } else {

        pending++;

        result =
            `⚠️ Human Review Required

Category: ${category}
Amount: $${amount}

Reason:
Expense exceeds the $100 threshold and requires manual approval.`;
    }

    document.getElementById("result").innerText = result;

    document.getElementById("total").innerText = total;
    document.getElementById("approved").innerText = approved;
    document.getElementById("pending").innerText = pending;
}