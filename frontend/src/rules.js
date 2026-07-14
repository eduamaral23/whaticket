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
			"ticket-options:deleteTicket",
			"contacts-page:deleteContact",
		],
	},

	superadmin: {
		static: [
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"user-modal:editProfile",
			"user-modal:editQueues",
			"user-modal:editPassword",
			"user-modal:editSuperProfile",
			"ticket-options:deleteTicket",
			"contacts-page:deleteContact",
		],
	},
};

export default rules;
