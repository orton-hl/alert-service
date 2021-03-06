export const environment = {
  production: false,
  apiBaseURL : "http://52.23.182.228:3000/armed-response/v1/api",
  apiEndpoints: {
    login : '/login',
    clients_get_all_client: '/clients/get-all-client',
    users_get_user: '/users/get-user',
    users_update_user: '/users/update-user',
    users_register_user: '/users/register-user',
    users_delete_user: '/users/delete-user',
    clients_get_client: '/clients/get-client',
    clients_delete_client: '/clients/delete-client',
    clients_register_client: '/clients/register-client',
    clients_update_client: '/clients/update-client',
    clients_login: '/clients/login',
    emergency_contacts_get_all: '/emergency-contacts/get-all',
    emergency_contacts_get_contact: '/emergency-contacts/get-contact',
    emergency_contacts_add_contact: '/emergency-contacts/add-contact',
    emergency_contacts_get_all_conatcts_for_user:'/emergency-contacts/get-all-conatcts-for-user',
    emergency_contacts_delete_contact: '/emergency-contacts/delete-contact',
    emergency_contacts_update_contact: '/emergency-contacts/update-contact',
    alerts_get_alert: '/alerts/get-alert',
    alerts_get_alert_for: '/alerts/get-alerts-for',
    alerts_send_alert: '/alerts/send-alert',
    alerts_delete_alert: '/alerts/delete-alert',
    alerts_update_alert: '/alerts/update-alert',
    alerts_resolve_alert: '/alerts/resolve-alert',
  },
};