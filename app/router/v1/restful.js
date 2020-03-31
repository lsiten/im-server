module.exports = app => {
  const { router, controller } = app;

  router.resources('userinfo', '/api/v1/userinfo', controller.v1.userInfo);
  router.resources('roles', '/api/v1/roles', controller.v1.roles);
  router.resources('rights', '/api/v1/rights', controller.v1.rights);
  router.resources('sessions', '/api/v1/sessions', controller.v1.sessions);
  router.resources('groups', '/api/v1/groups', controller.v1.groups);
};
