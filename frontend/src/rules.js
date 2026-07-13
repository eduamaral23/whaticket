const rules = {
	user: {
		static: [],
	},

	admin: {
		static: [
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"user-modal:editProfile",
			"user-modal:editQueues",
			"user-modal:editPassword",
			"ticket-options:deleteTicket",
			"contacts-page:deleteContact",
		],
	},
};

export default rules;
