<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Invoice Create
    </h1>
    <router-link :to="{ name: 'invoice.index' }" class="link-blue">
      List
    </router-link>
  </div>
  <form @submit.prevent="saveInvoice">
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
      <div class="bg-white border-b border-gray-200">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">





          <div class="container mx-auto">
            <!-- Invoice Title Start -->
            <!-- <div class="flex justify-between">
              <h2 class="text-2xl font-bold mb-6 pb-2 tracking-wider uppercase">Invoice</h2>
            </div> -->
            <!-- Invoice Title End -->
            <!-- Invoice Logo/Invoice Number/Date Start -->
            <div class="flex mb-8 justify-between">
              <div class="w-2/4">
                <div class="mb-2 md:mb-1 md:flex items-center">
                  <label class="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">Invoice No.</label>
                  <span class="mr-4 inline-block hidden md:block">:</span>
                  <div class="flex-1">
                    <input readonly v-model="form.invoice_number"
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      type="text" placeholder="eg. #SITS-100001">
                  </div>
                </div>

                <div class="mb-2 md:mb-1 md:flex items-center">
                  <label class="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">Invoice Date</label>
                  <span class="mr-4 inline-block hidden md:block">:</span>
                  <div class="flex-1">
                    <input
                      v-model="form.invoice_date"
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker"
                      type="date" placeholder="eg. 17 Feb, 2020" required>
                  </div>
                </div>
              </div>
              <div>
                <div class="w-60 h-24 mb-1 overflow-hidden relative">
                  <img id="image" class="object-cover w-full h-24" src="/images/logo.png" />
                </div>
              </div>
            </div>
            <!-- Invoice Logo/Invoice Number/Date End -->

            <!-- Invoice From/To Details Start -->
            <div class="flex flex-wrap justify-between mb-8">
              <div class="w-full md:w-1/3 mb-2 md:mb-0">
                <label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">From:</label>
                <div
                  class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight font-bold">
                  Scenic IT Solutions
                </div>
                <div
                  class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
                  Rajkot, Gujarat, India
                </div>
              </div>

              <div class="w-full md:w-1/3">
                <label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Bill To:</label>
                <select @change="getCustomer" v-model="form.customer_id" name="customer" id="customer_id"
                  class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  required>
                  <option value="" key="0"> - Select Customer - </option>
                  <option v-for="item in customers" :key="item.id" :value="item.id">
                    {{ item.first_name }} {{ item.last_name }}
                  </option>
                </select>
                <div
                  class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight">
                  <span v-if="customerDetails">
                    {{ customerDetails.country}}</span>
                  <span v-else>Customer Address</span>
                </div>
              </div>
            </div>
            <!-- Invoice From/To Details End -->

            <!-- Invoice Items Heading Start -->
            <div class="flex -mx-1 border-b py-2 items-start">
              <div class="flex-1 px-1">
                <p class="text-gray-800 uppercase tracking-wide text-sm font-bold">Description</p>
              </div>

              <div class="px-1 w-32 text-right">
                <p class="leading-none">
                  <span class="block uppercase tracking-wide text-sm font-bold text-gray-800">Amount</span>
                </p>
              </div>

              <div class="px-1 w-20 text-right">

              </div>
            </div>
            <!-- Invoice Items Heading End -->

            <!-- Invoice Items Fields Start -->
            <template v-for="(invoice, index) in invoice_items" :key="index">
              <div class="flex -mx-1 py-2 border-b">
                <div class="flex-1 px-1">
                  <input v-model="invoice.description"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker"
                    type="text" placeholder="Description" required>
                </div>

                <div class="px-1 w-32 text-right">
                  <input v-model="invoice.amount"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker"
                    type="number" @change="calculateTotal()" placeholder="Amount">
                </div>

                <div class="px-1 w-20 text-right flex justify-end items-center">
                  <a href="#" v-show="index" @click="deleteItem(index)"
                    class="text-red-500 hover:text-red-600 text-sm font-semibold">Delete</a>
                </div>
              </div>
            </template>
            <button @click="addInvoiceItem" type="button"
              class="mt-6 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-sm border border-gray-300 rounded shadow-sm">
              Add Invoice Items
            </button>
            <!-- Invoice Items Fields End -->

            <!-- Invoice Total Section Start -->
            <div class="flex mb-8 justify-between">
              <div class="py-2 mt-5 w-2/4">
                <p class="text-gray-800 uppercase tracking-wide text-sm font-bold mb-2">Notes</p>
                <textarea name="notes" v-model="form.notes" rows="4"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"></textarea>
                <div class="py-2 mt-5 flex">
                  <div class=" w-2/4 pr-2">
                    <p class="text-gray-800 uppercase tracking-wide text-sm font-bold mb-2">Payment Status</p>
                    <select v-model="form.payment" name="payment" id="payment"
                      class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      required>
                      <option v-for="item in ['Pending', 'Paid']" :key="item" :value="item">
                        {{ item }}
                      </option>
                    </select>
                  </div>
                  <div v-if="form.payment === 'Paid'" class="w-2/4 pl-2">
                    <p class="text-gray-800 uppercase tracking-wide text-sm font-bold mb-2">Payment Date</p>
                    <input
                      v-model="form.payment_date"
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      type="date" placeholder="Payment Date">
                  </div>
                </div>
              </div>
              <div class="py-2 pl-2 mt-5 w-2/4">
                <div class="flex justify-between mb-3">
                  <div class="text-gray-800 text-right flex-1">Total Excl. GST</div>
                  <div class="text-right w-40">
                    <div class="text-gray-800 font-medium">{{ form.subtotal.toFixed(2) }}</div>
                  </div>
                </div>
                <div class="flex justify-between mb-4">
                  <div class="text-sm text-gray-600 text-right flex-1 items-center mt-2">
                    <p>GST (%)</p>
                  </div>
                  <div class="text-right w-40">
                    <div class="text-sm text-gray-600">
                      <select @change="calculateTotal()" v-model="form.tax_rate" name="tax_rate" id="tax_rate"
                        class="mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-32 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        required>
                        <option value="" key="0"> - GST Rate - </option>
                        <option v-for="item in tax_rates" :key="item.value" :value="item.value">
                          {{ item.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between mb-3">
                  <div class="text-gray-800 text-right flex-1">GST Amount</div>
                  <div class="text-right w-40">
                    <div class="text-gray-800 font-medium">{{ form.tax_amount.toFixed(2) }}</div>
                  </div>
                </div>

                <div class="py-2 border-t border-b mb-4">
                  <div class="flex justify-between">
                    <div class="text-xl text-gray-600 text-right flex-1">Total Amount</div>
                    <div class="text-right w-40">
                      <div class="text-xl text-gray-800 font-bold">{{ form.total_amount.toFixed(2) }}</div>
                    </div>
                  </div>
                </div>
                <div class="py-3 bg-gray-50 text-right">
                  <button type="submit" class="btn-blue">
                    {{ submitting ? "Saving" : "Save Invoice" }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Invoice Total Section End -->


          </div>















        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { onMounted, ref } from 'vue';
import useInvoices from "../../composables/invoice";
export default {
  setup() {

    const submitting = ref(false);
    const customerDetails = ref(null);
    const tax_rates = [{ value: 5, label: "5 %" }, { value: 12, label: "12 %" }, { value: 18, label: "18 %" }, { value: 28, label: "28 %" }];
    const { errors, storeInvoice,getInvoiceNewInvoiceNumber, customers, getUsersDropdown, getCustomerDetails } = useInvoices();
    const invoice_items = ref([]);
    const form = ref({
      customer_id: '',
      invoice_date: '',
      invoice_number: '',
      tax_rate: 18,
      tax_amount: 0,
      total_amount: 0,
      notes: "",
      payment: "Pending",
      payment_date: "",
      subtotal: 0,
      invoiceItems: [],
      customers: [],
    });

    onMounted(async () => {
      invoice_items.value.push({ description: '', amount: 0.0 })
      await getUsersDropdown();
      form.value.invoice_number = await getInvoiceNewInvoiceNumber();
      
    });

    const saveInvoice = async () => {
      submitting.value = true;
      const formData = new FormData();
      for (const key in form.value) {
        if(key === 'invoiceItems') {
          formData.append(key, JSON.stringify(invoice_items.value));
        } else {
          formData.append(key, form.value[key]);
        }
      }
      await storeInvoice(formData);
      submitting.value = false;
    }

    const addInvoiceItem = () => {
      invoice_items.value.push({ description: '', amount: 0.0 })
      calculateTotal();
    }

    const deleteItem = (index) => {
      invoice_items.value.splice(index, 1);
      calculateTotal();
    }

    const getCustomer = async () => {
      customerDetails.value = await getCustomerDetails(form.value.customer_id);
    }

    const calculateTotal = () => {
      let calculateTotal = 0;
      invoice_items.value.forEach(item => {
        calculateTotal = calculateTotal + parseInt(item.amount);
      });
      form.value.subtotal = calculateTotal;
      form.value.tax_amount = ((calculateTotal * form.value.tax_rate) / 100);

      form.value.total_amount = calculateTotal + form.value.tax_amount;
    }

    return {
      form,
      errors,
      saveInvoice,
      submitting,
      tax_rates,
      customers,
      invoice_items,
      deleteItem,
      addInvoiceItem,
      calculateTotal,
      getCustomer,
      customerDetails
    }
  },
}
</script>