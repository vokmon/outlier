export const ACTION_ALL = {
  id: "0",
  name: "All",
  description: "Super Action can invoke any actions",
};

export const matchRoles = (actions: string[] = [], userActions: string[] = []): boolean => {
  if (userActions.includes(ACTION_ALL.name)) return true;
  return actions.some((action) => userActions.includes(action));
};
