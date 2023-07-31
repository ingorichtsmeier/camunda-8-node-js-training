// Import the Zeebe Node.js client and the 'fs' module
const { ZBClient } = require('zeebe-node')

void (async () => {
	const zbc = new ZBClient({
    onConnectionError: () => console.log('Connection Error'),
    onReady: () => console.log('Ready to work'),
  })
	const topology = await zbc.topology()
	console.log(JSON.stringify(topology, null, 2))


  setTimeout(() => {
		console.log('Closing client...')
		zbc.close().then(() => console.log('All workers closed'))
	}, 10 * 60 * 1000) // after 10 minutes
})();


/*
Exercise 5:
// Paste the worker at line 12

	zbc.createWorker({
    // ToDo: replace XXXX with the Task Definition Type from your service task
		taskType: 'XXXX',
		taskHandler: (job, worker) => {
			worker.log(`Working on ${job.type} for process instance ${job.processInstanceKey}`)
      // implement your code here
			job.complete()
		},
	}) // handler)

*/

/*
Exercise 6:
Customer credit worker

// Add customer credit service at line 3:
const customerCreditService = require ('../service/customer-credit-service.')

// add this logic after the worker.log statement
			console.log("Deduct customer credit", job.variables);

			// ToDo: insert the variable names for XXXX
			var customerCredit = customerCreditService.getCustomerCredit(job.variables.XXXX);
			var openAmount = customerCreditService.deductCredit(customerCredit, job.variables.XXXX);

			console.log("Customer credit:", customerCredit, " open amount:", openAmount);

// replace the simple complete command and XXXX with the new process variables
			job.complete({
				XXXX: customerCredit,
				XXXX: openAmount
			});

Credit card worker:

// Add credit card service at line 4:
const creditCardService = require('../service/credit-card-service')

// add this logic after the worker.log() statement
    console.log("Charge credit card: ", job.variables);

		// ToDo: insert the variables names for XXXX
    creditCardService.chargeAmount(job.variables.XXXX, job.variables.XXXX, job.variables.XXXX, job.variables.XXXX);

*/