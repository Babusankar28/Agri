//HTML Input Initialize Start
let actualKM = document.getElementById('actual_km');
let job_cards_entry = document.getElementById('job_cards_entry');
let job_Card = document.getElementById('job_Card');
let diesel_cost = document.getElementById('diesel_cost');
let dispatch_create_count = document.getElementById('dispatch_create_count');
let return_create_count = document.getElementById('return_create_count');
let dispatch_cell_count = document.getElementById('dispatch_cell_count');
let return_cell_count = document.getElementById('return_cell_count');
let pp = document.getElementById('pp');
let rgp = document.getElementById('rgp');
let case_500 = document.getElementById('case_500');
let case_250 = document.getElementById('case_250');
let unloading = document.getElementById('unloading');
//HTML Input Initialize End
//Output Initialize Start
let job_points_km;
let job_entry_acceptable;
let deviation;
let transport_cost;
let phone_call;
let bottle_payment;
let cell_payment;
let total_loading_payment;
let total_unloading_payment;
let q,s,u,w;
//Output Initialize End

//output div
let output_div = document.getElementById('output-div');
let reset = document.getElementById('reset');
let submit = document.getElementById('submit');
let obj;
let con;

//Reset
reset.addEventListener('click', () => {
    actualKM.value = "";
    job_cards_entry.value = "";
    job_Card.value = "";
    diesel_cost.value = "";
    dispatch_create_count.value = "";
    return_create_count.value = "";
    dispatch_create_count.value = "";
    return_cell_count.value = "";
    dispatch_cell_count.value = "";
    pp.value = "";
    rgp.value = "";
    case_500.value = "";
    case_250.value = "";
    unloading.value = "";
    output_div.innerHTML = "";
    output_div.hidden = true;
})
//reset end

function init() {
    obj = ` <h1 class="display-5 p-3 h1">Output</h1>
            <div class="bg-white px-3 py-2"> 
                    <p>
                        job_points_km        : <span class="text-primary">${job_points_km}</span><br>
                        job_entry_acceptable :  <span class="text-primary">${job_entry_acceptable}</span><br>
                        deviation: <span class="text-primary">${deviation}</span><br>
                        <span class="text-primary">${con}</span><br>
                        <hr>
                        transport_cost :  <span class="text-primary">${transport_cost}</span><br>
                        phone_call :  <span class="text-primary">${phone_call}</span><br>
                        bottle_payment :  <span class="text-primary">${bottle_payment} </span><br>
                        total_loading_payment:  <span class="text-primary">${total_loading_payment} </span><br>
                        total_unloading_payment :  <span class="text-primary">${total_unloading_payment}</span>
                    </p>
            </div>`;
}
//Calculation
submit.addEventListener('click', () => {
    // calculation();
    calculation();
    //Output Initialize
    init();
    //Output 
    output_div.innerHTML = obj;
    output_div.hidden = false;
});


function calculation() {
    job_points_km=parseInt(job_Card.value)*6;
    job_entry_acceptable=parseInt(job_cards_entry.value)+job_points_km;
    deviation=parseInt(actualKM.value)-job_entry_acceptable;
    transport_cost=0.65*parseInt(diesel_cost.value)*job_entry_acceptable;
    phone_call = parseInt(job_Card.value)*1;
    bottle_payment = (parseInt(dispatch_create_count.value)-parseInt(return_create_count.value))*72;
    cell_payment=(parseInt(dispatch_cell_count)-parseInt(return_cell_count))*52;
    if(deviation>=0){
        con='Yes,actual km entry is excess or equal than jb entry & excess km';
    }
    else{
        con = 'No,actual km entry is excess or equal than jb entry & excess km';
    }
    q=parseInt(pp.value)*2.20;
    s=parseInt(rgp.value)*2.40;
    u=parseInt(case_500.value)*2.40;
    w=parseInt(case_250.value)*1.20;

    total_loading_payment=q+s+u+w;
    total_unloading_payment=parseInt(unloading.value)*2.4;

}

