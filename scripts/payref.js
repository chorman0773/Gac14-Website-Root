

const payref_control = {
		path: "/internal/payment_complete.jsp",
		query: {
			item_code: "${item}",
			transaction_id: "${transaction_id}",
			completion: "${completion_stamp}"
		}
};

